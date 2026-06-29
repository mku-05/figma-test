import puppeteer from 'puppeteer';
import fs from 'fs';

const actualDir = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual';
fs.mkdirSync(actualDir, { recursive: true });

const frames = [
  { url: 'http://localhost:5173?frame=mobile-03', path: `${actualDir}/Mobile-Home_03-1706_46.png`, width: 375, height: 1744 },
  { url: 'http://localhost:5173?frame=desktop-03', path: `${actualDir}/03_Home_03-1706_773.png`, width: 1920, height: 1290 }
];

async function capture() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  for (const frame of frames) {
    console.log(`Capturing ${frame.path}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: frame.width, height: frame.height });

    try {
      await page.goto(frame.url, { waitUntil: 'networkidle0', timeout: 10000 });
      await page.waitForTimeout(500);
      await page.screenshot({ path: frame.path, fullPage: false });
      console.log(`✓ ${frame.path}`);
    } catch (err) {
      console.error(`✗ Failed: ${err.message}`);
    }

    await page.close();
  }

  await browser.close();
  console.log('Done!');
}

capture().catch(console.error);
