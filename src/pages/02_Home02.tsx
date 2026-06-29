import React from 'react';

const Home02: React.FC = () => {
  return (
    <div className="relative w-[1920px] h-[1257px] bg-white overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-[#FFF8F2] h-[1126px] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-[249px] top-[100px]">
          <svg width="174" height="121" viewBox="0 0 174 121" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
            <rect x="2" y="2" width="170" height="117" rx="2" stroke="#FF5543" strokeWidth="3" fill="none"/>
          </svg>
        </div>
        <div className="absolute right-[408px] top-[244px]">
          <svg width="87" height="122" viewBox="0 0 87 122" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40" style={{transform: 'rotate(180deg)'}}>
            <path d="M2 2C2 2 30 35 60 61C30 87 2 120 2 120" stroke="#FF5543" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="absolute right-[42px] top-[100px]">
          <svg width="84" height="134" viewBox="0 0 84 134" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
            <path d="M2 2C2 2 28 38 56 67C28 96 2 132 2 132" stroke="#FF5543" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="absolute left-[636px] bottom-[825px] opacity-50">
          <svg width="53" height="62" viewBox="0 0 53 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L51 30L2 60" stroke="#D26D5F" strokeWidth="3"/>
          </svg>
        </div>
        <div className="absolute left-[276px] bottom-[432px] opacity-50" style={{transform: 'rotate(91.6deg)'}}>
          <svg width="110" height="122" viewBox="0 0 110 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2C2 2 35 35 73 61C35 87 2 120 2 120" stroke="#D26D5F" strokeWidth="3"/>
          </svg>
        </div>
        <div className="absolute left-[744px] bottom-[825px]">
          <svg width="176" height="35" viewBox="0 0 176 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="88" cy="17.5" rx="88" ry="17.5" fill="#FF733B"/>
          </svg>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between px-[155px] py-[28px]">
          {/* Logo */}
          <div className="flex items-center gap-[8px]">
            <div className="w-[30px] h-[30px] relative">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#FF5543"/>
                <path d="M11 10C11 10 15 13 19 16C15 19 11 22 11 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-[19px] font-normal text-[#332C5C] leading-[19px]" style={{fontFamily: 'Inter, sans-serif'}}>
              SaaSto
            </span>
          </div>

          {/* Menu Items */}
          <div className="flex items-center gap-[60px]">
            <a href="#" className="text-[18px] font-medium text-[#1E0C3E]" style={{fontFamily: 'Poppins, sans-serif'}}>
              Home
            </a>
            <a href="#" className="text-[18px] font-normal text-[#1E0C3E]" style={{fontFamily: 'Poppins, sans-serif'}}>
              Features
            </a>
            <a href="#" className="text-[18px] font-normal text-[#1E0C3E]" style={{fontFamily: 'Poppins, sans-serif'}}>
              Pricing
            </a>
            <a href="#" className="text-[18px] font-normal text-[#1E0C3E]" style={{fontFamily: 'Poppins, sans-serif'}}>
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-[24px]">
            <a href="#" className="text-[18px] font-medium text-[#1E0C3E]" style={{fontFamily: 'Poppins, sans-serif'}}>
              Login
            </a>
            <button className="px-[32px] py-[14px] bg-[#FF5543] rounded-[24px] text-white text-[16px] font-medium hover:shadow-lg transition-shadow" style={{fontFamily: 'Poppins, sans-serif'}}>
              Signup
            </button>
          </div>
        </nav>

        {/* Images Section */}
        <div className="absolute left-[374px] top-[228px] w-[1053px] h-[531px]">
          {/* Alarm Clock */}
          <div className="absolute left-[-66px] top-0" style={{transform: 'rotate(169.5deg)'}}>
            <img
              src="/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1706-2167.svg"
              alt="Alarm Clock"
              className="w-[162px] h-[179px]"
            />
          </div>

          {/* Clipboard Verified */}
          <div className="absolute right-[89px] bottom-0">
            <img
              src="/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1706-2566.svg"
              alt="Clipboard"
              className="w-[178px] h-[191px]"
            />
          </div>

          {/* Mobile Phone Mockup */}
          <div className="absolute left-[341px] top-[8px]" style={{transform: 'rotate(15deg)'}}>
            <div className="relative w-[677px] h-[1012px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-[#414141] rounded-[60px]" style={{boxShadow: '0 20px 60px rgba(0,0,0,0.3)'}}></div>

              {/* Screen Content */}
              <div className="absolute left-[30px] top-[40px] w-[617px] h-[932px] bg-white rounded-[45px] overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-30"></div>
              </div>

              {/* Top Notch */}
              <div className="absolute top-[55px] left-1/2 -translate-x-1/2 w-[150px] h-[34px] bg-black rounded-b-[17px]"></div>

              {/* Volume Buttons */}
              <div className="absolute -left-[5px] top-[195px] w-[19px] h-[49px] bg-black rounded-l-[10px]"></div>
              <div className="absolute -left-[5px] top-[295px] w-[19px] h-[49px] bg-black rounded-l-[10px]"></div>
              <div className="absolute -left-[5px] top-[395px] w-[19px] h-[49px] bg-black rounded-l-[10px]"></div>

              {/* Power Button */}
              <div className="absolute -right-[5px] top-[445px] w-[30px] h-[91px] bg-black rounded-r-[15px]"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="absolute left-[144px] top-[133px] w-[1632px]">
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-[60px] font-bold leading-[90px] text-[#1C0E0D] mb-[20px] uppercase mx-auto max-w-[900px]" style={{fontFamily: 'Poppins, sans-serif'}}>
              A collaborative Time Tracking that you Need
            </h1>

            {/* Description */}
            <p className="text-[20px] font-normal leading-[38px] text-[#402020] opacity-80 mb-[56px] mx-auto max-w-[700px]" style={{fontFamily: 'Inter, sans-serif'}}>
              An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium purus pretium ligula
            </p>

            {/* CTA Button */}
            <button className="px-[56px] py-[24px] bg-[#FF5543] rounded-[40px] text-white text-[20px] font-medium leading-[28px] hover:shadow-lg transition-shadow mx-auto block" style={{fontFamily: 'Poppins, sans-serif'}}>
              Start 14 Days Trial
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative h-[131px] bg-white flex items-center justify-center gap-[120px]">
        {/* Active User */}
        <div className="flex flex-col items-center">
          <div className="text-[48px] font-semibold leading-[48px] text-[#18063C] mb-[12px]" style={{fontFamily: 'Poppins, sans-serif'}}>
            15k+
          </div>
          <div className="text-[16px] font-normal leading-[16px] text-[#404040] opacity-60" style={{fontFamily: 'Inter, sans-serif'}}>
            Active user
          </div>
        </div>

        {/* Total Download */}
        <div className="flex flex-col items-center">
          <div className="text-[48px] font-semibold leading-[48px] text-[#18063C] mb-[12px]" style={{fontFamily: 'Poppins, sans-serif'}}>
            30k
          </div>
          <div className="text-[16px] font-normal leading-[16px] text-[#404040] opacity-60" style={{fontFamily: 'Inter, sans-serif'}}>
            Total Download
          </div>
        </div>

        {/* Customer */}
        <div className="flex flex-col items-center">
          <div className="text-[48px] font-semibold leading-[48px] text-[#18063C] mb-[12px]" style={{fontFamily: 'Poppins, sans-serif'}}>
            10k
          </div>
          <div className="text-[16px] font-normal leading-[16px] text-[#404040] opacity-60" style={{fontFamily: 'Inter, sans-serif'}}>
            Customer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home02;
