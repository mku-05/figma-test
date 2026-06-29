import puppeteer from 'puppeteer';
import fs from 'fs';

async function captureScreenshot() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const serverUrl = 'http://localhost:5173';

  try {
    const frame = {
      name: 'Free Design Sample',
      param: 'free-design-sample',
      width: 10285,
      height: 700,
      outputPath: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/Free_Design_Sample-1721_72.png'
    };

    const actualDir = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual';
    if (!fs.existsSync(actualDir)) {
      fs.mkdirSync(actualDir, { recursive: true });
    }

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
  } finally {
    await browser.close();
    console.log('Done!');
  }
}

captureScreenshot().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
