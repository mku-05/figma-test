import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';

async function waitForServer(url, timeout = 30000) {
  const startTime = Date.now();
  const http = await import('http');

  while (Date.now() - startTime < timeout) {
    try {
      await new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const req = http.default.get({
          hostname: urlObj.hostname,
          port: urlObj.port,
          path: urlObj.pathname,
          timeout: 1000
        }, (res) => {
          if (res.statusCode === 200) {
            resolve();
          } else {
            reject(new Error('Not ready'));
          }
        });
        req.on('error', reject);
        req.on('timeout', () => {
          req.destroy();
          reject(new Error('Timeout'));
        });
      });
      return true;
    } catch (e) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }
  throw new Error('Server did not start in time');
}

async function captureFullDesignPreview() {
  console.log('Starting Vite dev server...');
  const viteProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'pipe',
    shell: true
  });

  let serverUrl = null;

  const waitForUrl = new Promise((resolve) => {
    viteProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);
      // Remove ANSI escape codes
      const cleanOutput = output.replace(/\x1b\[[0-9;]*m/g, '');
      const match = cleanOutput.match(/Local:\s+(http:\/\/localhost:(\d+))/);
      if (match) {
        serverUrl = match[1];
        resolve();
      }
    });

    viteProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });
  });

  await Promise.race([
    waitForUrl,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout waiting for URL')), 15000))
  ]);

  console.log(`Waiting for server at ${serverUrl}...`);
  await waitForServer(serverUrl);
  console.log('Server is ready!');

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const outputDir = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Capturing Full Design Preview...');
    const page = await browser.newPage();
    await page.setViewport({ width: 14100, height: 6485 });
    await page.goto(`${serverUrl}?frame=full-design-preview`, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    await page.waitForTimeout(2000);

    const outputPath = `${outputDir}/Full_Design_Preview-1721_95.png`;
    await page.screenshot({
      path: outputPath,
      fullPage: false
    });
    console.log(`Saved screenshot to ${outputPath}`);
    await page.close();
  } finally {
    await browser.close();
    viteProcess.kill();
    console.log('Done!');
  }
}

captureFullDesignPreview().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
