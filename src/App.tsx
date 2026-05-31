/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import InteractiveQuote from './components/InteractiveQuote';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    // We update state, which gets passed as a prop to InteractiveQuote
    setSelectedServiceForQuote(serviceTitle);
    
    // Clear selection after triggering standard handler logic
    setTimeout(() => {
      setSelectedServiceForQuote('');
    }, 1500);
  };

  return (
    <div id="jk-corporate-portal" className="font-sans antialiased bg-[#fafafa] selection:bg-blue-900 selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Section Services (with category filter and custom Details Modal) */}
      <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

      {/* 4. Section Pourquoi J&K Services (Advantages panels) */}
      <WhyChooseUs />

      {/* 5. Section À propos (Story & Counter badges) */}
      <About />

      {/* 6. Section Interactive Quote Simulator (LocalStorage persistence + feedback timeline) */}
      <InteractiveQuote selectedServiceFromParent={selectedServiceForQuote} />

      {/* 7. Section Contact & Location Map */}
      <Contact />

      {/* 8. Footer section */}
      <Footer />
    </div>
  );
}
