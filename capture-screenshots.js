import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function captureScreenshot(url, outputPath, width, height) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: width + 100, height: height + 100 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait a bit for animations/rendering
    await page.waitForTimeout(1000);

    // Find the component and screenshot it
    const element = await page.$('body > div');
    if (element) {
      await element.screenshot({ path: outputPath });
      console.log(`✓ Captured: ${outputPath}`);
    } else {
      console.error(`✗ Could not find component for ${url}`);
    }
  } finally {
    await browser.close();
  }
}

async function main() {
  const baseUrl = 'http://localhost:5173';
  const actualDir = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual';

  // Ensure output directory exists
  fs.mkdirSync(actualDir, { recursive: true });

  console.log('Starting screenshot capture...\n');

  // Capture mobile-03
  await captureScreenshot(
    `${baseUrl}?frame=mobile-03`,
    join(actualDir, 'Mobile-Home_03-1706_46.png'),
    375,
    1744
  );

  // Capture desktop-03
  await captureScreenshot(
    `${baseUrl}?frame=desktop-03`,
    join(actualDir, '03_Home_03-1706_773.png'),
    1920,
    1290
  );

  console.log('\n✓ All screenshots captured!');
}

main().catch(console.error);
