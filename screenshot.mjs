import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

async function captureScreenshots() {
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
      const match = output.match(/Local:\s+(http:\/\/localhost:(\d+))/);
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
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout waiting for URL')), 10000))
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
      console.log(`Capturing ${frame.name}...`);
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
      console.log(`Saved screenshot to ${frame.outputPath}`);
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
