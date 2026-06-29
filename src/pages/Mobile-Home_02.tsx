import React from 'react';

const MobileHome02: React.FC = () => {
  return (
    <div className="relative w-[375px] h-[1257px] bg-white overflow-hidden">
      {/* Header Section with peach background */}
      <div className="relative bg-[#FFF8F2] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-[100px]">
          <svg width="46" height="74" viewBox="0 0 46 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
            <path d="M1 1C1 1 15 20 32 37C15 54 1 73 1 73" stroke="#FF5543" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="absolute right-[43px] bottom-[162px]" style={{transform: 'rotate(91.6deg)'}}>
          <svg width="72" height="61" viewBox="0 0 72 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
            <path d="M2 2C2 2 20 15 40 30C20 45 2 58 2 58" stroke="#D26D5F" strokeWidth="3"/>
          </svg>
        </div>
        <div className="absolute left-0 bottom-[73px] opacity-10">
          <svg width="53" height="62" viewBox="0 0 53 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L51 30L2 60" stroke="#FF5543" strokeWidth="2"/>
          </svg>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-[17px]">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <div className="w-[30px] h-[30px] relative">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#FF5543"/>
                <path d="M12 9C12 9 15 12 18 15C15 18 12 21 12 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-[19px] font-normal text-[#332C5C] leading-[19px]" style={{fontFamily: 'Inter, sans-serif'}}>
              SaaSto
            </span>
          </div>

          {/* Menu Icon */}
          <div className="flex flex-col gap-[6px]">
            <div className="w-[30px] h-[4px] bg-[#FF5543] rounded"></div>
            <div className="w-[30px] h-[4px] bg-[#FF5543] rounded"></div>
            <div className="w-[30px] h-[4px] bg-[#FF5543] rounded"></div>
          </div>
        </nav>

        {/* Content Section */}
        <div className="px-[39px] pt-[67px] pb-[42px]">
          {/* Alarm Clock Icon */}
          <div className="mb-6 ml-[223px]" style={{transform: 'rotate(169.5deg)'}}>
            <img
              src="/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1706-2167.svg"
              alt="Alarm Clock"
              className="w-[78px] h-[87px]"
            />
          </div>

          {/* Heading */}
          <h1 className="text-[28px] font-bold leading-[45px] text-[#1C0E0D] mb-[25px] uppercase" style={{fontFamily: 'Poppins, sans-serif', letterSpacing: '0px'}}>
            A collaborative Time Tracking that you Need
          </h1>

          {/* Description */}
          <p className="text-[16px] font-normal leading-[36px] text-[#402020] opacity-80 mb-[40px]" style={{fontFamily: 'Inter, sans-serif'}}>
            An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula
          </p>

          {/* CTA Button */}
          <button className="w-[240px] h-[76px] bg-[#FF5543] rounded-[40px] text-white text-[18px] font-medium leading-[28px] hover:shadow-lg transition-shadow" style={{fontFamily: 'Poppins, sans-serif'}}>
            Start 14 Days Trial
          </button>
        </div>

        {/* Decorative shape at bottom */}
        <div className="absolute left-[109px] bottom-0">
          <svg width="106" height="21" viewBox="0 0 106 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H106V21H0V0Z" fill="#FF733B"/>
          </svg>
        </div>
      </div>

      {/* Fun fact Section */}
      <div className="relative bg-white">
        {/* Background with image */}
        <div className="absolute left-[-26px] bottom-[565px] w-[100px] h-[92px]">
          <img
            src="/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1706-2147.svg"
            alt=""
            className="w-full h-full object-cover"
            style={{transform: 'rotate(180deg)', filter: 'brightness(1.08)'}}
          />
        </div>

        {/* Decorative element */}
        <div className="absolute right-[21px] top-[85px]" style={{transform: 'rotate(-90deg)'}}>
          <svg width="72" height="61" viewBox="0 0 72 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
            <path d="M2 2C2 2 20 15 40 30C20 45 2 58 2 58" stroke="#D26D5F" strokeWidth="3"/>
          </svg>
        </div>

        {/* Stats Container */}
        <div className="px-[98px] py-[48px]">
          {/* Active user */}
          <div className="flex flex-col items-center mb-[48px]">
            <div className="text-[64px] font-semibold leading-[64px] text-[#18063C] mb-[18px]" style={{fontFamily: 'Poppins, sans-serif'}}>
              15k+
            </div>
            <div className="text-[18px] font-normal leading-[18px] text-[#404040] opacity-60" style={{fontFamily: 'Inter, sans-serif'}}>
              Active user
            </div>
            <div className="w-[180px] h-[1px] bg-[#1E0C3E] opacity-20 mt-[48px]"></div>
          </div>

          {/* Total Download */}
          <div className="flex flex-col items-center mb-[48px]">
            <div className="text-[64px] font-semibold leading-[64px] text-[#18063C] mb-[18px]" style={{fontFamily: 'Poppins, sans-serif'}}>
              30k
            </div>
            <div className="text-[18px] font-normal leading-[18px] text-[#404040] opacity-60" style={{fontFamily: 'Inter, sans-serif'}}>
              Total Download
            </div>
            <div className="w-[180px] h-[1px] bg-[#1E0C3E] opacity-20 mt-[48px]"></div>
          </div>

          {/* Customer */}
          <div className="flex flex-col items-center">
            <div className="text-[64px] font-semibold leading-[64px] text-[#18063C] mb-[18px]" style={{fontFamily: 'Poppins, sans-serif'}}>
              10k
            </div>
            <div className="text-[18px] font-normal leading-[18px] text-[#404040] opacity-60 text-center" style={{fontFamily: 'Inter, sans-serif'}}>
              Customer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHome02;
