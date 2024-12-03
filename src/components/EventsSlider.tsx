import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Event } from './types';
import SlideContent from './SlideContent';
import SlideControls from './SlideControls';
import './EventsSlider.css';

const EventsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const events: Event[] = [
    {
      type: 'youtube',
      url: 'https://youtu.be/rNv7GEdFL7s?si=FmQFfhy-5GrGN5CI',
      thumbnailUrl: `/assets/images/logo/thumbnail.jpg`,
      title: 'Interview with Suman TV'
    },
    {
      type: 'image',
      url: '/assets/images/events/ind.png',
      title: '78th Independence Day'
    },
    {
      type: 'image',
      url: '/assets/images/events/GC.jpg',
      title: 'Vinayaka Chavithi Pooja'
    },
    {
      type: 'image',
      url: '/assets/images/events/temple2.png',
      title: 'Swarnagiri Temple Visit'
    },
    {
      type: 'image',
      url: '/assets/images/events/bday.jpg',
      title: 'Swarajya Laxmi gari Birthday Celebrations'
    },
    {
      type: 'image',
      url: '/assets/images/events/VB.jpg',
      title: 'Karthika Maasam Vana Bhojanalu'
    },
    {
      type: 'image',
      url: '/assets/images/events/diwali.jpg',
      title: 'Diwali Celebrations'
    },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlay && events[currentIndex].type === 'image') {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, events.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const getPrevIndex = (index: number) => (index - 1 + events.length) % events.length;
  const getNextIndex = (index: number) => (index + 1) % events.length;

  const visibleSlides = [
    events[getPrevIndex(currentIndex)],
    events[currentIndex],
    events[getNextIndex(currentIndex)]
  ];

  return (
    <section className="events-slider py-20 bg-white relative overflow-hidden">
      <div className="max-w-[80vw] mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Events & Activities</h2>
          <button
            onClick={toggleAutoPlay}
            className="flex items-center justify-center w-10 h-10 text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            {autoPlay ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="relative">
          <div className="overflow-visible relative">
            <motion.div
              className="flex transition-all"
              initial={false}
              animate={{ x: '-100%' }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {visibleSlides.map((event, index) => (
                <div
                  key={index}
                  className={`slide-wrapper min-w-full px-4 transition-opacity duration-300 ${
                    index === 1 ? 'opacity-100' : 'opacity-40'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <SlideContent
                    event={event}
                    isActive={index === 1}
                    isHovered={hoveredIndex === index}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <SlideControls
            onPrev={handlePrev}
            onNext={handleNext}
            currentIndex={currentIndex}
            totalSlides={events.length}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSlider;