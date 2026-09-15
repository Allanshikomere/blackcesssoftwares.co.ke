import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Sparkles, MessageCircle, ArrowRight, ShoppingBag } from 'lucide-react';

export default function Navbar({ onOpenQuote, onNavigateToStore }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'M-Pesa Integration', href: '#mpesa-demo' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Store', isStore: true, badge: 'KES 1,280' },
    { name: 'Cost Estimator', href: '#estimator' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo link */}
          <a href="#" className="group flex items-center">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/90 border border-slate-200/80 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md">
            {navLinks.map((link) => {
              if (link.isStore) {
                return (
                  <button
                    key={link.name}
                    onClick={onNavigateToStore}
                    className="flex items-center gap-1.5 text-xs xl:text-sm font-bold text-slate-700 hover:text-brand-600 px-3.5 py-1.5 rounded-full hover:bg-rose-50 transition-all duration-200"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-brand-600" />
                    <span>Store</span>
                    <span className="text-[10px] font-mono font-extrabold bg-brand-600 text-white px-1.5 py-0.2 rounded-full">
                      {link.badge}
                    </span>
                  </button>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-950 px-3.5 py-1.5 rounded-full hover:bg-slate-100/80 transition-all duration-200"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onNavigateToStore}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-600 bg-white border border-slate-200 hover:border-brand-500 px-3.5 py-2 rounded-xl shadow-xs transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-brand-600" />
              <span>Shop Cases</span>
            </button>

            <a
              href="https://wa.me/254793544968?text=Hello%20Blackcess%20Softwares,%20I%20would%20like%20to%20inquire%20about%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 bg-white border border-slate-200 hover:border-emerald-500/40 px-3.5 py-2 rounded-xl shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 via-rose-600 to-brand-700 hover:from-brand-500 hover:to-rose-500 px-5 py-2.5 rounded-xl shadow-md shadow-brand-600/20 transition-all duration-200 hover:shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-rose-200 animate-spin-slow" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onNavigateToStore}
              className="text-xs font-bold text-white bg-slate-900 px-2.5 py-1.5 rounded-lg flex items-center gap-1"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Store</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-3 mb-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToStore();
              }}
              className="text-base font-bold text-brand-600 py-2 border-b border-slate-100 flex items-center justify-between text-left"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-brand-600" />
                <span>iPhone Cases Store (from KES 1,280)</span>
              </span>
              <ArrowRight className="w-4 h-4 text-brand-600" />
            </button>

            {navLinks.filter(l => !l.isStore).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-brand-600 py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl font-bold text-sm text-center bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-lg shadow-brand-600/25 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Quotation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}