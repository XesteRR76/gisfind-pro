import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveParser from './components/InteractiveParser';
import ComparisonPricing from './components/ComparisonPricing';
import RoiCalculator from './components/RoiCalculator';
import Footer from './components/Footer';

export default function App() {
  const handleScrollToParser = () => {
    document.getElementById('parser')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="top" className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Navbar */}
      <Navbar onStartSearch={handleScrollToParser} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero onStartSearch={handleScrollToParser} />
        <InteractiveParser />
        <ComparisonPricing />
        <RoiCalculator />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
