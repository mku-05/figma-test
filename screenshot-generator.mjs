import puppeteer from 'puppeteer';
import { readFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const components = [
  {
    name: 'Mobile-Home_02',
    componentPath: './src/pages/Mobile-Home_02.tsx',
    outputPath: './.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/Mobile-Home_02-1706_1699.png',
    width: 375,
    height: 1257
  },
  {
    name: '02_Home02',
    componentPath: './src/pages/02_Home02.tsx',
    outputPath: './.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/02_Home_02-1706_2184.png',
    width: 1920,
    height: 1257
  }
];

async function generateScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const component of components) {
    console.log(`Generating screenshot for ${component.name}...`);

    const page = await browser.newPage();
    await page.setViewport({
      width: component.width,
      height: component.height,
      deviceScaleFactor: 1
    });

    // Create a simple HTML page that renders the component
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module">
    import React from 'https://esm.sh/react@18.2.0';
    import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';
    import Component from 'data:text/javascript;base64,' + btoa(\`
      ${readFileSync(component.componentPath, 'utf-8')
        .replace(/import.*from.*['"];?/g, '')
        .replace('export default', 'window.Component =')}
    \`);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(window.Component));
  </script>
</body>
</html>
    `;

    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');

    // Wait a bit more for any animations
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Ensure output directory exists
    mkdirSync(dirname(component.outputPath), { recursive: true });

    // Take screenshot
    await page.screenshot({
      path: component.outputPath,
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: component.width,
        height: component.height
      }
    });

    console.log(`✓ Screenshot saved to ${component.outputPath}`);
    await page.close();
  }

  await browser.close();
  console.log('All screenshots generated successfully!');
}

generateScreenshots().catch(console.error);
