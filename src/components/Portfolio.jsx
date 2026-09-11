import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function Portfolio({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'urban-smiles',
      name: 'Urban Smiles Dental',
      category: 'healthcare',
      categoryLabel: 'Healthcare & Booking',
      clientLocation: 'Nairobi, Kenya',
      url: 'https://urbansmilesdental.co.ke',
      description: 'Engineered a modern dental clinic web platform with an automated online appointment scheduling system and patient intake records.',
      metrics: '3x Increase in Online Bookings',
      tags: ['React', 'Appointment Engine', 'SMS Alerts', 'SEO'],
      imageGradient: 'from-blue-600 via-indigo-600 to-sky-700',
      badge: 'Client Platform'
    },
    {
      id: 'urban-wheels',
      name: 'Urban Wheels Ltd',
      category: 'fintech',
      categoryLabel: 'Fleet & E-Commerce',
      clientLocation: 'Nairobi, Kenya',
      url: 'https://urbanwheelsltd.co.ke',
      description: 'Comprehensive car rental reservation portal and vehicle sales platform with instant M-Pesa STK push booking deposits and vehicle fleet tracker.',
      metrics: 'KES 25M+ Handled in Bookings',
      tags: ['M-Pesa Daraja 2.0', 'Fleet System', 'Web Portal', 'Fintech'],
      imageGradient: 'from-rose-600 via-red-600 to-amber-700',
      badge: 'Fintech & Fleet'
    },
    {
      id: 'pili-restaurant',
      name: 'Pili Restaurant',
      category: 'pos',
      categoryLabel: 'Hospitality & Ordering',
      clientLocation: 'Nairobi, Kenya',
      url: 'https://pilirestaurant.co.ke',
      description: 'Digital menu catalog, online food ordering engine, table reservation management, and direct kitchen point-of-sale receipt integration.',
      metrics: '45% Faster Table Turnover',
      tags: ['Online Ordering', 'POS Integration', 'Kitchen Display', 'M-Pesa Till'],
      imageGradient: 'from-amber-600 via-orange-600 to-red-700',
      badge: 'Hospitality Solution'
    },
    {
      id: 'east-end-dental',
      name: 'East End Dental Clinic',
      category: 'healthcare',
      categoryLabel: 'Healthcare Portal',
      clientLocation: 'Nairobi, Kenya',
      url: 'https://eastend-dentalclinic.co.ke',
      description: 'Specialized dental care presence with treatment cost calculators, interactive consultation calendars, and responsive mobile-first UI.',
      metrics: '99.9% Uptime & Top Google Rank',
      tags: ['Healthcare Web', 'SEO Nairobi', 'Patient Portal'],
      imageGradient: 'from-teal-600 via-emerald-600 to-cyan-700',
      badge: 'Healthcare Portal'
    },
    {
      id: 'apex-pos',
      name: 'Apex Retail & Pharmacy POS Suite',
      category: 'pos',
      categoryLabel: 'Enterprise POS & Inventory',
      clientLocation: 'Nairobi & Mombasa',
      url: '#',
      description: 'High-speed multi-terminal Point of Sale with barcode scanning, batch expiry tracking, thermal printing, and M-Pesa automated cash reconciliation.',
      metrics: 'Zero Inventory Discrepancy',
      tags: ['Offline-First POS', 'Thermal Printing', 'Barcode System', 'Daraja API'],
      imageGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      badge: 'Enterprise Product'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Featured Client Deployments
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              Discover how Blackcess Softwares empowers healthcare providers, rental operators, restaurants, and retail enterprises across Kenya.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'healthcare', label: 'Healthcare' },
              { id: 'fintech', label: 'Fintech & Rentals' },
              { id: 'pos', label: 'POS & Hospitality' },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                  activeFilter === filter.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-brand-500/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-xl shadow-xs"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className={`h-40 bg-gradient-to-br ${project.imageGradient} p-5 relative flex flex-col justify-between text-white shadow-inner`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/30 backdrop-blur-md text-white border border-white/20">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] text-white flex items-center gap-1 font-medium bg-black/30 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                      📍 {project.clientLocation}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-sm">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Impact Metric */}
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 mb-5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-emerald-800">{project.metrics}</span>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action Link */}
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Built by Blackcess</span>
                {project.url.startsWith('http') ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
                  >
                    <span>Request Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Client Collaboration Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Have a project in mind? Join the ranks of forward-thinking Kenyan companies scaling with Blackcess Softwares.
          </p>
          <button
            onClick={onOpenQuote}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-800 bg-white hover:bg-brand-600 hover:text-white border border-slate-200 hover:border-brand-600 transition-all duration-200 shadow-xs hover:shadow-md"
          >
            <span>Start Your Project With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}