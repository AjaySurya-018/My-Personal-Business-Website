import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import EventsSlider from './components/EventsSlider';
import DocumentsSection from './components/DocumentsSection';
import LocationMap from './components/LocationMap';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Gallery />
      <EventsSlider />
      <DocumentsSection />
      <LocationMap />
      <Features />
    </div>
  );
}

export default App;