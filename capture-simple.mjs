import puppeteer from 'puppeteer';
import fs from 'fs';

async function captureScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const serverUrl = 'http://localhost:5173';

  try {
    const frames = [
      {
        name: 'Color Pallate',
        param: 'color-pallate',
        width: 1000,
        height: 1723,
        outputPath: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/Color_Pallate-1707_7834.png'
      },
      {
        name: 'Typography',
        param: 'typography',
        width: 1000,
        height: 2728,
        outputPath: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/Typography-1707_7833.png'
      }
    ];

    const actualDir = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual';
    if (!fs.existsSync(actualDir)) {
      fs.mkdirSync(actualDir, { recursive: true });
    }

    for (const frame of frames) {
      console.log(`Capturing ${frame.name}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: frame.width, height: frame.height });

      try {
        await page.goto(`${serverUrl}?frame=${frame.param}`, {
          waitUntil: 'networkidle0',
          timeout: 30000
        });

        await page.waitForTimeout(2000);

        await page.screenshot({
          path: frame.outputPath,
          fullPage: false
        });
        console.log(`Saved screenshot to ${frame.outputPath}`);
      } catch (err) {
        console.error(`Error capturing ${frame.name}:`, err.message);
      }
      await page.close();
    }
  } finally {
    await browser.close();
    console.log('Done!');
  }
}

captureScreenshots().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
