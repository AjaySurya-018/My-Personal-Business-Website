import React from 'react';
import { 
  Library, 
  Heart, 
  Sun, 
  Utensils, 
  Bath, 
  Tv, 
  Sparkles, 
  Shirt, 
  Droplet, 
  Building2, 
  Gamepad2, 
  Camera 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    { icon: Library, text: 'Library and meditation zone' },
    { icon: Heart, text: 'Monitor blood pressure, sugar levels, temperature, and pulse readings' },
    { icon: Sun, text: 'Brightly, air ventilated rooms with adequate privacy' },
    { icon: Utensils, text: 'Delightful dining with organic food' },
    { icon: Bath, text: 'Western commodes' },
    { icon: Tv, text: 'LED TVs' },
    { icon: Sparkles, text: 'Regular housekeeping and maintenance' },
    { icon: Shirt, text: 'Laundry service' },
    { icon: Droplet, text: 'Geysers, Water purifiers' },
    { icon: Building2, text: 'Tie up with the nearby leading hospitals' },
    { icon: Gamepad2, text: 'Indoor play area' },
    { icon: Camera, text: 'CCTV cameras' }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Specialties</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 rounded-xl transition-all duration-200 ease-in-out hover:bg-[#68281410] hover:shadow-md"
            >
              <feature.icon 
                className="w-6 h-6 flex-shrink-0 mt-1 text-[#682814] transition-transform duration-200 ease-in-out hover:scale-110" 
              />
              <p className="text-gray-700 transition-colors duration-200 ease-in-out hover:text-gray-900">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;