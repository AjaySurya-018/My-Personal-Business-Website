import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
}

const SlideControls: React.FC<SlideControlsProps> = ({
  onPrev,
  onNext,
  currentIndex,
  totalSlides,
}) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/30 hover:bg-gray-900/40 p-4 rounded-r-2xl transition-colors z-10"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/30 hover:bg-gray-900/40 p-4 rounded-l-2xl transition-colors z-10"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default SlideControls;