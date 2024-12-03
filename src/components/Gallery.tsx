import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const images = [
    {
      url: "/assets/images/gallery/hall.jpg",
      title: "Living Space"
    },
    {
      url: "/assets/images/gallery/bedroom.jpg",
      title: "Room"
    },
    {
      url: "/assets/images/gallery/Dining_Area.jpg",
      title: "Dining Hall"
    },
    {
      url: "/assets/images/gallery/Yoga_Meditation.jpg",
      title: "Meditation Hall"
    },
    {
      url: "/assets/images/gallery/Game.jpg",
      title: "Games Area"
    },
    {
      url: "/assets/images/gallery/Relax.jpg",
      title: "Outdoor Space"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-lg">
                <h3 className="text-xl font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;