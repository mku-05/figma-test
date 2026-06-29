import puppeteer from 'puppeteer';
import fs from 'fs';

async function createScreenshot() {
  console.log('Creating screenshot...');

  const outputDir = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 14100, height: 6485 });

  // Navigate to a static file URL
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 14100px; height: 6485px; background: black; font-family: 'Poppins', sans-serif; }
    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FDBA09;
      padding: 200px 10px;
      height: 700px;
    }
    h1 {
      color: black;
      font-weight: 600;
      font-size: 300px;
      line-height: 300px;
      letter-spacing: -0.4px;
    }
    .images { display: flex; flex-direction: row; }
  </style>
</head>
<body>
  <div class="header">
    <h1>FULL DESIGN PREVIEW</h1>
  </div>
  <div class="images"></div>
</body>
</html>
  `;

  await page.setContent(htmlContent);
  await page.waitForTimeout(1000);

  const outputPath = `${outputDir}/Full_Design_Preview-1721_95.png`;
  await page.screenshot({
    path: outputPath,
    fullPage: false
  });

  console.log(`Screenshot saved to ${outputPath}`);
  await browser.close();
}

createScreenshot().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
