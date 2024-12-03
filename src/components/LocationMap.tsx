import React from 'react';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4292.41066835729!2d78.4909395!3d17.637186099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb87003795e0c7%3A0x79445dae670873d6!2sJSN%20Raju%20Seniors%20Space!5e1!3m2!1sen!2sin!4v1733146784631!5m2!1sen!2sin";
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Location</h2>
       
        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JSN Raju Seniors' Space Location"
          />
         
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[#682814]"  />
              <h3 className="font-semibold">J S N Raju Seniors' Space</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">Click map to get directions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;