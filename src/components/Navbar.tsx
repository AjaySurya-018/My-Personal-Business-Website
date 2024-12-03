import React from 'react';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
              <img
                src="/assets/images/logo/grandfather-image.png"
                alt="J.S.N Raju"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold leading-tight">J.S.N Raju Seniors' Space</h1>
              <p className="italic text-2xl" style={{ fontFamily: 'Dancing Script, cursive', color: '#682814' }}>golden age begins here</p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://wa.me/919652223888" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors" target="_blank">
              <Phone className="h-5 w-5 mr-1 text-emerald-500" />
              <span className="hidden md:block">Contact</span>
            </a>
            
            <a href="mailto:seniorsspace@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="h-5 w-5 mr-1 text-blue-500" />
              <span className="hidden md:block">Email</span>
            </a>
            
            <a 
              href="https://www.google.com/maps/place/JSN+Raju+Seniors+Space/@17.6371912,78.4883646,986m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb87003795e0c7:0x79445dae670873d6!8m2!3d17.6371861!4d78.4909395!16s%2Fg%2F11vwpflxgr?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <MapPin className="h-5 w-5 mr-1 text-red-500" />
              <span className="hidden md:block">Location</span>
            </a>

            <a href="#features" className="flex items-center text-gray-600 hover:text-amber-600 transition-colors">
              <Star className="h-5 w-5 mr-1 text-amber-500" />
              <span className="hidden md:block">Specialties</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;