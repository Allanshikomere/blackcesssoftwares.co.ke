import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs relative">
      {/* Top Banner / Lead Catch */}
      <div className="border-b border-slate-200 bg-slate-50/90 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-brand-600 font-mono text-xs font-bold uppercase tracking-wider">Ready to elevate your business?</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Let’s engineer your software solution together.</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 shadow-md shadow-brand-600/25 transition-all"
            >
              Get Started Today
            </button>
            <a
              href="https://wa.me/254700000000?text=Hello%20Blackcess%20Softwares!"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-500 text-emerald-600 transition-colors shadow-xs"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm pt-2">
              Blackcess Softwares is a premier software development company in Nairobi, Kenya. We build custom software, web platforms, CRM, POS systems, and high-volume Safaricom M-Pesa integrations for enterprises across East Africa.
            </p>

            <div className="space-y-2 pt-2 text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <span>info@blackcesssoftwares.co.ke</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                <span>+254 700 000 000 / +254 712 345 678</span>
              </div>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Custom Software</a></li>
              <li><a href="#mpesa-demo" className="hover:text-emerald-600 transition-colors">M-Pesa Integrations</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">POS & Inventory Systems</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Enterprise CRM / ERP</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Corporate Websites</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Mobile Applications</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-600 transition-colors">Client Portfolio</a></li>
              <li><a href="#estimator" className="hover:text-brand-600 transition-colors">Cost Estimator</a></li>
              <li><a href="#tech" className="hover:text-brand-600 transition-colors">Technology Stack</a></li>
              <li><a href="#why-us" className="hover:text-brand-600 transition-colors">Why Choose Us</a></li>
              <li><button onClick={onOpenQuote} className="hover:text-brand-600 transition-colors text-left">Consultation Request</button></li>
            </ul>
          </div>

          {/* Col 5: Kenyan Standards */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4">Compliance & Trust</h4>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] font-mono text-emerald-700 font-bold block">✓ SAFARICOM DARAJA 2.0</span>
                <span className="text-[11px] text-slate-600">Certified API Architecture</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] font-mono text-brand-700 font-bold block">✓ KRA eTIMS COMPLIANT</span>
                <span className="text-[11px] text-slate-600">Electronic Tax Invoice Integration</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Blackcess Softwares. All Rights Reserved. Engineered in Nairobi, Kenya.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-950 transition-all ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}