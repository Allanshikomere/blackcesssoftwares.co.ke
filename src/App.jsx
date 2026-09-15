import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DarajaDemo from './components/DarajaDemo';
import Portfolio from './components/Portfolio';
import StoreTeaser from './components/StoreTeaser';
import StorePage from './components/StorePage';
import CostEstimator from './components/CostEstimator';
import TechStack from './components/TechStack';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home' | 'store'
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  // Sync route with URL hash / state for clean browser back-button navigation
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#store') {
        setCurrentRoute('store');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToStore = () => {
    window.location.hash = 'store';
    setCurrentRoute('store');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => {
    setQuoteInitialData(null);
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithData = (data) => {
    setQuoteInitialData(data);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteInitialData(null);
  };

  // If user is on the store route, render dedicated StorePage view
  if (currentRoute === 'store') {
    return <StorePage onBackToCorporate={navigateToHome} />;
  }

  // Otherwise render Corporate Landing Page with StoreTeaser section
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 relative selection:bg-brand-600 selection:text-white font-sans">
      {/* Top sticky navigation */}
      <Navbar onOpenQuote={handleOpenQuote} onNavigateToStore={navigateToStore} />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. Core Services */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* 3. Interactive M-Pesa Daraja 2.0 Simulator */}
        <DarajaDemo />

        {/* 4. Client Showcase / Real Nairobi Portfolios */}
        <Portfolio onOpenQuote={handleOpenQuote} />

        {/* 5. Official Store Teaser (Selling iPhone cases from KES 1,280) */}
        <StoreTeaser onNavigateToStore={navigateToStore} />

        {/* 6. Interactive Cost & Timeline Estimator */}
        <CostEstimator onOpenQuoteWithData={handleOpenQuoteWithData} />

        {/* 7. Technology Stack */}
        <TechStack />

        {/* 8. Why Partner With Blackcess */}
        <WhyUs onOpenQuote={handleOpenQuote} />

        {/* 9. Client Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating WhatsApp Action Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/254793544968?text=Hello%20Blackcess%20Softwares,%20I'm%20interested%20in%20discussing%20a%20project!"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 border border-emerald-400/40 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Chat"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full"></span>
          </div>
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Contact & Consultation Booking Modal */}
      <ContactModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialData={quoteInitialData}
      />
    </div>
  );
}