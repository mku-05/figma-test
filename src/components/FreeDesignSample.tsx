import React from 'react';

const FreeDesignSample: React.FC = () => {
  return (
    <div
      className="flex flex-row items-center justify-center gap-2.5 px-2.5 py-[200px]"
      style={{
        backgroundColor: 'rgb(253, 186, 9)',
        width: '10285px',
        height: '700px'
      }}
    >
      <h1
        className="font-semibold"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '300px',
          lineHeight: '300px',
          letterSpacing: '-0.4px',
          color: 'rgb(0, 0, 0)'
        }}
      >
        FREE DESIGN SAMPLES
      </h1>
    </div>
  );
};

export default FreeDesignSample;
