import puppeteer from 'puppeteer';

const port = process.argv[2] || '5177';
const serverUrl = `http://localhost:${port}`;

async function captureScreenshots() {
  console.log(`Connecting to ${serverUrl}...`);

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

      await page.waitForTimeout(2000);

      await page.screenshot({
        path: frame.outputPath,
        fullPage: false
      });
      console.log(`✓ Saved to ${frame.outputPath}`);
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
