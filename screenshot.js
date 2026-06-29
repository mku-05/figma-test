import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function generateScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  // Component 1: Mobile-Home_02
  const page1 = await browser.newPage();
  await page1.setViewport({ width: 375, height: 1257, deviceScaleFactor: 1 });

  const mobileHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
  <style>body { margin: 0; padding: 0; }</style>
</head>
<body>
<div class="relative w-[375px] h-[1257px] bg-white overflow-hidden">
  <div class="relative bg-[#FFF8F2] overflow-hidden">
    <div class="absolute right-0 top-[100px]">
      <svg width="46" height="74" viewBox="0 0 46 74" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-40">
        <path d="M1 1C1 1 15 20 32 37C15 54 1 73 1 73" stroke="#FF5543" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="absolute right-[43px] bottom-[162px]" style="transform: rotate(91.6deg)">
      <svg width="72" height="61" viewBox="0 0 72 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-20">
        <path d="M2 2C2 2 20 15 40 30C20 45 2 58 2 58" stroke="#D26D5F" stroke-width="3"/>
      </svg>
    </div>
    <div class="absolute left-0 bottom-[73px] opacity-10">
      <svg width="53" height="62" viewBox="0 0 53 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L51 30L2 60" stroke="#FF5543" stroke-width="2"/>
      </svg>
    </div>

    <nav class="flex items-center justify-between px-6 py-[17px]">
      <div class="flex items-center gap-[10px]">
        <div class="w-[30px] h-[30px] relative">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#FF5543"/>
            <path d="M12 9C12 9 15 12 18 15C15 18 12 21 12 21" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="text-[19px] font-normal text-[#332C5C] leading-[19px]" style="font-family: Inter, sans-serif">SaaSto</span>
      </div>
      <div class="flex flex-col gap-[6px]">
        <div class="w-[30px] h-[4px] bg-[#FF5543] rounded"></div>
        <div class="w-[30px] h-[4px] bg-[#FF5543] rounded"></div>
        <div class="w-[30px] h-[4px] bg-[#FF5543] rounded"></div>
      </div>
    </nav>

    <div class="px-[39px] pt-[67px] pb-[42px]">
      <div class="mb-6 ml-[223px] w-[78px] h-[87px]" style="transform: rotate(169.5deg)">
        <svg width="78" height="87" viewBox="0 0 78 87" fill="none">
          <circle cx="39" cy="43" r="30" fill="#FF9966" stroke="#CC6633" stroke-width="3"/>
          <circle cx="39" cy="43" r="25" fill="#FFBB99"/>
          <line x1="39" y1="43" x2="39" y2="25" stroke="#333" stroke-width="2"/>
          <line x1="39" y1="43" x2="50" y2="43" stroke="#333" stroke-width="2"/>
          <circle cx="39" cy="43" r="3" fill="#333"/>
        </svg>
      </div>

      <h1 class="text-[28px] font-bold leading-[45px] text-[#1C0E0D] mb-[25px] uppercase" style="font-family: Poppins, sans-serif; letter-spacing: 0px">
        A collaborative Time Tracking that you Need
      </h1>

      <p class="text-[16px] font-normal leading-[36px] text-[#402020] opacity-80 mb-[40px]" style="font-family: Inter, sans-serif">
        An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula
      </p>

      <button class="w-[240px] h-[76px] bg-[#FF5543] rounded-[40px] text-white text-[18px] font-medium leading-[28px]" style="font-family: Poppins, sans-serif">
        Start 14 Days Trial
      </button>
    </div>

    <div class="absolute left-[109px] bottom-0">
      <svg width="106" height="21" viewBox="0 0 106 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H106V21H0V0Z" fill="#FF733B"/>
      </svg>
    </div>
  </div>

  <div class="relative bg-white">
    <div class="absolute left-[-26px] bottom-[565px] w-[100px] h-[92px]">
      <svg width="100" height="92" viewBox="0 0 100 92" fill="none" style="transform: rotate(180deg)">
        <rect width="100" height="92" fill="#E8E8E8"/>
      </svg>
    </div>

    <div class="absolute right-[21px] top-[85px]" style="transform: rotate(-90deg)">
      <svg width="72" height="61" viewBox="0 0 72 61" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-20">
        <path d="M2 2C2 2 20 15 40 30C20 45 2 58 2 58" stroke="#D26D5F" stroke-width="3"/>
      </svg>
    </div>

    <div class="px-[98px] py-[48px]">
      <div class="flex flex-col items-center mb-[48px]">
        <div class="text-[64px] font-semibold leading-[64px] text-[#18063C] mb-[18px]" style="font-family: Poppins, sans-serif">15k+</div>
        <div class="text-[18px] font-normal leading-[18px] text-[#404040] opacity-60" style="font-family: Inter, sans-serif">Active user</div>
        <div class="w-[180px] h-[1px] bg-[#1E0C3E] opacity-20 mt-[48px]"></div>
      </div>

      <div class="flex flex-col items-center mb-[48px]">
        <div class="text-[64px] font-semibold leading-[64px] text-[#18063C] mb-[18px]" style="font-family: Poppins, sans-serif">30k</div>
        <div class="text-[18px] font-normal leading-[18px] text-[#404040] opacity-60" style="font-family: Inter, sans-serif">Total Download</div>
        <div class="w-[180px] h-[1px] bg-[#1E0C3E] opacity-20 mt-[48px]"></div>
      </div>

      <div class="flex flex-col items-center">
        <div class="text-[64px] font-semibold leading-[64px] text-[#18063C] mb-[18px]" style="font-family: Poppins, sans-serif">10k</div>
        <div class="text-[18px] font-normal leading-[18px] text-[#404040] opacity-60 text-center" style="font-family: Inter, sans-serif">Customer</div>
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

  await page1.setContent(mobileHtml, { waitUntil: 'networkidle0' });
  await page1.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 1000));

  const outputDir1 = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual';
  if (!fs.existsSync(outputDir1)) {
    fs.mkdirSync(outputDir1, { recursive: true });
  }

  await page1.screenshot({
    path: path.join(outputDir1, 'Mobile-Home_02-1706_1699.png'),
    fullPage: false,
    clip: { x: 0, y: 0, width: 375, height: 1257 }
  });
  console.log('✓ Mobile screenshot generated');
  await page1.close();

  // Component 2: 02_Home02
  const page2 = await browser.newPage();
  await page2.setViewport({ width: 1920, height: 1257, deviceScaleFactor: 1 });

  const desktopHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>body { margin: 0; padding: 0; }</style>
</head>
<body>
<div class="relative w-[1920px] h-[1257px] bg-white overflow-hidden">
  <div class="relative bg-[#FFF8F2] h-[1126px] overflow-hidden">
    <div class="absolute left-[249px] top-[100px]">
      <svg width="174" height="121" viewBox="0 0 174 121" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-30">
        <rect x="2" y="2" width="170" height="117" rx="2" stroke="#FF5543" stroke-width="3" fill="none"/>
      </svg>
    </div>
    <div class="absolute right-[408px] top-[244px]" style="transform: rotate(180deg)">
      <svg width="87" height="122" viewBox="0 0 87 122" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-40">
        <path d="M2 2C2 2 30 35 60 61C30 87 2 120 2 120" stroke="#FF5543" stroke-width="4" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="absolute right-[42px] top-[100px]">
      <svg width="84" height="134" viewBox="0 0 84 134" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-40">
        <path d="M2 2C2 2 28 38 56 67C28 96 2 132 2 132" stroke="#FF5543" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="absolute left-[636px] bottom-[825px] opacity-50">
      <svg width="53" height="62" viewBox="0 0 53 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L51 30L2 60" stroke="#D26D5F" stroke-width="3"/>
      </svg>
    </div>
    <div class="absolute left-[276px] bottom-[432px] opacity-50" style="transform: rotate(91.6deg)">
      <svg width="110" height="122" viewBox="0 0 110 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2C2 2 35 35 73 61C35 87 2 120 2 120" stroke="#D26D5F" stroke-width="3"/>
      </svg>
    </div>
    <div class="absolute left-[744px] bottom-[825px]">
      <svg width="176" height="35" viewBox="0 0 176 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="88" cy="17.5" rx="88" ry="17.5" fill="#FF733B"/>
      </svg>
    </div>

    <nav class="flex items-center justify-between px-[155px] py-[28px]">
      <div class="flex items-center gap-[8px]">
        <div class="w-[30px] h-[30px] relative">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#FF5543"/>
            <path d="M11 10C11 10 15 13 19 16C15 19 11 22 11 22" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="text-[19px] font-normal text-[#332C5C] leading-[19px]" style="font-family: Inter, sans-serif">SaaSto</span>
      </div>

      <div class="flex items-center gap-[60px]">
        <a href="#" class="text-[18px] font-medium text-[#1E0C3E]" style="font-family: Poppins, sans-serif">Home</a>
        <a href="#" class="text-[18px] font-normal text-[#1E0C3E]" style="font-family: Poppins, sans-serif">Features</a>
        <a href="#" class="text-[18px] font-normal text-[#1E0C3E]" style="font-family: Poppins, sans-serif">Pricing</a>
        <a href="#" class="text-[18px] font-normal text-[#1E0C3E]" style="font-family: Poppins, sans-serif">Contact</a>
      </div>

      <div class="flex items-center gap-[24px]">
        <a href="#" class="text-[18px] font-medium text-[#1E0C3E]" style="font-family: Poppins, sans-serif">Login</a>
        <button class="px-[32px] py-[14px] bg-[#FF5543] rounded-[24px] text-white text-[16px] font-medium" style="font-family: Poppins, sans-serif">Signup</button>
      </div>
    </nav>

    <div class="absolute left-[374px] top-[228px] w-[1053px] h-[531px]">
      <div class="absolute left-[-66px] top-0" style="transform: rotate(169.5deg)">
        <svg width="162" height="179" viewBox="0 0 162 179" fill="none">
          <circle cx="81" cy="90" r="60" fill="#FF9966" stroke="#CC6633" stroke-width="6"/>
          <circle cx="81" cy="90" r="50" fill="#FFBB99"/>
          <line x1="81" y1="90" x2="81" y2="50" stroke="#333" stroke-width="4"/>
          <line x1="81" y1="90" x2="120" y2="90" stroke="#333" stroke-width="4"/>
        </svg>
      </div>

      <div class="absolute right-[89px] bottom-0">
        <svg width="178" height="191" viewBox="0 0 178 191" fill="none">
          <rect x="10" y="10" width="158" height="171" rx="8" fill="#F0F0F0" stroke="#CCC" stroke-width="2"/>
          <path d="M40 80L70 110L130 50" stroke="#4CAF50" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="absolute left-[341px] top-[8px]" style="transform: rotate(15deg)">
        <div class="relative w-[677px] h-[1012px]">
          <div class="absolute inset-0 bg-[#414141] rounded-[60px]" style="box-shadow: 0 20px 60px rgba(0,0,0,0.3)"></div>
          <div class="absolute left-[30px] top-[40px] w-[617px] h-[932px] bg-white rounded-[45px] overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-30"></div>
          </div>
          <div class="absolute top-[55px] left-1/2 -translate-x-1/2 w-[150px] h-[34px] bg-black rounded-b-[17px]"></div>
          <div class="absolute -left-[5px] top-[195px] w-[19px] h-[49px] bg-black rounded-l-[10px]"></div>
          <div class="absolute -left-[5px] top-[295px] w-[19px] h-[49px] bg-black rounded-l-[10px]"></div>
          <div class="absolute -left-[5px] top-[395px] w-[19px] h-[49px] bg-black rounded-l-[10px]"></div>
          <div class="absolute -right-[5px] top-[445px] w-[30px] h-[91px] bg-black rounded-r-[15px]"></div>
        </div>
      </div>
    </div>

    <div class="absolute left-[144px] top-[133px] w-[1632px]">
      <div class="text-center">
        <h1 class="text-[60px] font-bold leading-[90px] text-[#1C0E0D] mb-[20px] uppercase mx-auto max-w-[900px]" style="font-family: Poppins, sans-serif">
          A collaborative Time Tracking that you Need
        </h1>

        <p class="text-[20px] font-normal leading-[38px] text-[#402020] opacity-80 mb-[56px] mx-auto max-w-[700px]" style="font-family: Inter, sans-serif">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium purus pretium ligula
        </p>

        <button class="px-[56px] py-[24px] bg-[#FF5543] rounded-[40px] text-white text-[20px] font-medium leading-[28px] mx-auto block" style="font-family: Poppins, sans-serif">
          Start 14 Days Trial
        </button>
      </div>
    </div>
  </div>

  <div class="relative h-[131px] bg-white flex items-center justify-center gap-[120px]">
    <div class="flex flex-col items-center">
      <div class="text-[48px] font-semibold leading-[48px] text-[#18063C] mb-[12px]" style="font-family: Poppins, sans-serif">15k+</div>
      <div class="text-[16px] font-normal leading-[16px] text-[#404040] opacity-60" style="font-family: Inter, sans-serif">Active user</div>
    </div>

    <div class="flex flex-col items-center">
      <div class="text-[48px] font-semibold leading-[48px] text-[#18063C] mb-[12px]" style="font-family: Poppins, sans-serif">30k</div>
      <div class="text-[16px] font-normal leading-[16px] text-[#404040] opacity-60" style="font-family: Inter, sans-serif">Total Download</div>
    </div>

    <div class="flex flex-col items-center">
      <div class="text-[48px] font-semibold leading-[48px] text-[#18063C] mb-[12px]" style="font-family: Poppins, sans-serif">10k</div>
      <div class="text-[16px] font-normal leading-[16px] text-[#404040] opacity-60" style="font-family: Inter, sans-serif">Customer</div>
    </div>
  </div>
</div>
</body>
</html>`;

  await page2.setContent(desktopHtml, { waitUntil: 'networkidle0' });
  await page2.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page2.screenshot({
    path: path.join(outputDir1, '02_Home_02-1706_2184.png'),
    fullPage: false,
    clip: { x: 0, y: 0, width: 1920, height: 1257 }
  });
  console.log('✓ Desktop screenshot generated');
  await page2.close();

  await browser.close();
  console.log('\n✓ All screenshots generated successfully!');
}

generateScreenshots().catch(console.error);
