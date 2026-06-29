import React from 'react';

const Presentation: React.FC = () => {
  return (
    <div
      className="flex flex-row items-start rounded-[60px]"
      style={{
        backgroundColor: 'rgb(37, 47, 186)',
        width: '3388px',
        height: '1200px'
      }}
    >
      {/* Left Info Section */}
      <div className="flex flex-col justify-between" style={{ width: '1028px', height: '100%', padding: '208px 120px 208px 120px' }}>
        {/* Top Content */}
        <div className="flex flex-col gap-[177px]">
          {/* Thanks Message */}
          <div className="flex flex-col gap-0">
            <p
              className="font-medium"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '64px',
                lineHeight: '87.3px',
                color: 'rgb(255, 255, 255)',
                letterSpacing: '0px'
              }}
            >
              Thanks for duplicate! 🙌
            </p>
          </div>

          {/* View More Section */}
          <div className="flex flex-col gap-0 relative">
            <p
              className="font-bold"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '96px',
                lineHeight: '134.4px',
                color: 'rgb(255, 255, 255)',
                letterSpacing: '0.96px',
                textTransform: 'capitalize'
              }}
            >
              For{' '}
              <a
                href="https://www.figma.com/@designerzubaear"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{
                  color: 'rgb(247, 133, 133)',
                  textDecoration: 'underline'
                }}
              >
                view
              </a>
            </p>
            <p
              className="font-bold"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '96px',
                lineHeight: '134.4px',
                color: 'rgb(255, 255, 255)',
                letterSpacing: '0.96px',
                textTransform: 'capitalize'
              }}
            >
              More Design!
            </p>

            {/* Pointing hand emoji with background */}
            <div
              className="absolute rounded-[30px]"
              style={{
                top: '-26px',
                right: '-85px',
                width: '280px',
                height: '128px',
                backgroundColor: 'rgba(247, 133, 133, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span
                style={{
                  fontSize: '96px',
                  lineHeight: '115.2px',
                  transform: 'rotate(-90deg)',
                  color: 'rgb(247, 133, 133)'
                }}
              >
                👆
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Contact Section */}
        <div className="flex flex-col gap-[101px]">
          <p
            className="font-bold"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: '64px',
              lineHeight: '76.8px',
              color: 'rgb(26, 188, 254)',
              letterSpacing: '0px'
            }}
          >
            For custom project!
          </p>
          <a
            href="mailto:service.design71@gmail.com"
            className="underline"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: '56px',
              lineHeight: '76.38px',
              color: 'rgb(255, 255, 255)',
              textDecoration: 'underline',
              letterSpacing: '0px'
            }}
          >
            service.design71@gmail.com
          </a>
        </div>
      </div>

      {/* Right Thumbnail Section */}
      <div
        className="rounded-[0px]"
        style={{
          width: '2360px',
          height: '1200px',
          background: 'linear-gradient(135deg, rgb(168, 152, 224) 0%, rgb(234, 192, 255) 50%, rgb(255, 218, 218) 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Placeholder for thumbnail image - the actual Figma image was not exported */}
        <div className="flex items-center justify-center gap-8 px-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-64 h-80"></div>
          <div className="flex flex-col gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-80 h-48"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-80 h-48"></div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-64 h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
