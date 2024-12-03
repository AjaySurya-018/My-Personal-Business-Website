import React from 'react';
import ReactPlayer from 'react-player';
import { Event } from './types';

interface SlideContentProps {
  event: Event;
  isActive: boolean;
  isHovered: boolean;
}

const SlideContent: React.FC<SlideContentProps> = ({ event, isActive, isHovered }) => {
  const renderContent = () => {
    switch (event.type) {
      case 'youtube':
        return (
          <div className="w-full aspect-[16/9] max-h-[600px] object-cover rounded-2xl">
            <img
              src={event.thumbnailUrl}
              alt={event.title}
              className="w-full h-full object-cover rounded-2xl"
            />
            {isHovered && (
              <button
                onClick={() => window.open(event.url, '_blank')}
                className="absolute inset-0 w-full max-h-[600px] flex items-center justify-center bg-black/50 rounded-2xl"
              >
                <span className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition">
                  Watch on YouTube
                </span>
              </button>
            )}
          </div>
        );
      case 'video':
        return (
          <div className="aspect-[16/9] max-h-[600px] rounded-2xl overflow-hidden">
            <ReactPlayer
              url={event.url}
              width="100%"
              height="100%"
              controls
              playing={isActive && !isHovered}
              muted={!isHovered}
            />
          </div>
        );
      case 'image':
        return (
          <img
            src={event.url}
            alt={event.title}
            className="w-full aspect-[16/9] max-h-[600px] object-cover rounded-2xl"
          />
        );
    }
  };

  return (
    <div className="slide-content">
      {renderContent()}
      <div className="mt-4 text-gray-900">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        {event.description && (
          <p className="text-gray-600 mt-2 text-sm">{event.description}</p>
        )}
      </div>
    </div>
  );
};

export default SlideContent;