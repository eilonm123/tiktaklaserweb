import React from 'react';

import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import Instructions from '../components/home/Instructions';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Instructions />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}