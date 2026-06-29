import React from 'react';

const FullDesignPreview: React.FC = () => {
  const designImages = [
    { id: '1721-92', name: '01_Home 01', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-92.svg' },
    { id: '1721-91', name: 'Mobile-Home_01', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-91.svg' },
    { id: '1721-90', name: '02_Home 02', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-90.svg' },
    { id: '1721-89', name: 'Mobile-Home_02', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-89.svg' },
    { id: '1721-88', name: '03_Home 03', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-88.svg' },
    { id: '1721-87', name: 'Mobile-Home_03', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-87.svg' },
    { id: '1721-86', name: '04_About', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-86.svg' },
    { id: '1721-85', name: '04_About_Mobile', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-85.svg' },
    { id: '1721-84', name: '05_Services', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-84.svg' },
    { id: '1721-83', name: '05_Services_Mobile', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-83.svg' },
    { id: '1721-82', name: '06_Services Details', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-82.svg' },
    { id: '1721-81', name: '06_Services-Details_Mobile', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-81.svg' },
    { id: '1721-80', name: '07_Blog', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-80.svg' },
    { id: '1721-79', name: '07_Blog_Mobile', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-79.svg' },
    { id: '1721-78', name: '08_Blog Detials', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-78.svg' },
    { id: '1721-77', name: '08_Blog-Details_Mobile', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-77.svg' },
    { id: '1721-76', name: '09_Contact', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-76.svg' },
    { id: '1721-75', name: '09_Contact_Mobile', path: '/assets/figma/2063d608-2df8-46f0-b299-95b22e9b9ef6/1721-75.svg' },
  ];

  return (
    <div className="w-[14100px] h-[6484.81px] bg-black">
      {/* Yellow Header Banner */}
      <div className="flex flex-row items-center justify-center bg-[#FDBA09] px-2.5 py-[200px] gap-2.5">
        <h1
          className="text-black font-semibold text-[300px] leading-[300px] tracking-[-0.4px]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          FULL DESIGN PREVIEW
        </h1>
      </div>

      {/* Design Images Grid */}
      <div className="flex flex-row items-start gap-0 px-0 py-0">
        {designImages.map((image) => (
          <div key={image.id} className="flex-shrink-0">
            <img
              src={image.path}
              alt={image.name}
              className="w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullDesignPreview;
