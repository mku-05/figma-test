import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import http from 'http';

async function checkPort(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
    req.setTimeout(500);
  });
}

async function findVitePort() {
  for (let port = 5173; port < 5180; port++) {
    if (await checkPort(port)) {
      return port;
    }
  }
  return null;
}

async function captureScreenshots() {
  console.log('Starting Vite dev server...');
  const viteProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true,
    detached: false
  });

  console.log('Waiting for server to start...');
  await new Promise(resolve => setTimeout(resolve, 5000));

  let port = null;
  for (let i = 0; i < 30; i++) {
    port = await findVitePort();
    if (port) break;
    console.log(`  Attempt ${i + 1}/30...`);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  if (!port) {
    viteProcess.kill();
    throw new Error('Could not find running Vite server');
  }

  const serverUrl = `http://localhost:${port}`;
  console.log(`Found server at ${serverUrl}`);

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const frames = [
      {
        name: 'Mobile-Home_01',
        param: 'mobile',
        width: 375,
        height: 1598,
        outputPath: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/Mobile-Home_01-1706_2790.png'
      },
      {
        name: '01_Home 01',
        param: 'desktop',
        width: 1920,
        height: 1288,
        outputPath: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/01_Home_01-1706_3389.png'
      }
    ];

    for (const frame of frames) {
      console.log(`Capturing ${frame.name} (${frame.width}x${frame.height})...`);
      const page = await browser.newPage();
      await page.setViewport({ width: frame.width, height: frame.height });
      await page.goto(`${serverUrl}?frame=${frame.param}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      await page.waitForTimeout(1000);

      await page.screenshot({
        path: frame.outputPath,
        fullPage: false
      });
      console.log(`✓ Saved to ${frame.outputPath}`);
      await page.close();
    }
  } finally {
    await browser.close();
    viteProcess.kill();
    console.log('Done!');
  }
}

captureScreenshots().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
