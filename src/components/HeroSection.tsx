import React from 'react';
import ReactPlayer from 'react-player';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ReactPlayer
          url="/assets/videos/Main_2.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover'
          }}
          config={{
            file: {
              attributes: {
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;