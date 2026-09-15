import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function CostEstimator({ onOpenQuoteWithData }) {
  const [projectType, setProjectType] = useState('webapp');
  const [selectedAddons, setSelectedAddons] = useState(['mpesa', 'admin']);
  const [timelineSpeed, setTimelineSpeed] = useState('standard');

  const projectTypes = [
    { id: 'website', name: 'Corporate Website & SEO', basePrice: 45000, days: '2-3 weeks', desc: 'High-speed business site with lead forms & Google ranking.' },
    { id: 'webapp', name: 'Custom Web Platform / Portal', basePrice: 95000, days: '4-6 weeks', desc: 'Custom databases, client dashboard, bespoke workflows.' },
    { id: 'pos', name: 'POS & Inventory System', basePrice: 75000, days: '3-4 weeks', desc: 'Retail checkout, receipt printing, stock depletion, sales stats.' },
    { id: 'mobile', name: 'Mobile App (Flutter/React Native)', basePrice: 140000, days: '6-8 weeks', desc: 'Cross-platform iOS and Android store-ready app.' },
    { id: 'mpesa_standalone', name: 'Safaricom Daraja M-Pesa Engine', basePrice: 30000, days: '1-2 weeks', desc: 'Direct STK push, C2B/B2C, and callback queue setup.' }
  ];

  const addonsList = [
    { id: 'mpesa', name: 'Lipa Na M-Pesa STK Push', price: 20000, desc: 'Instant mobile checkout with webhook reconciliation.' },
    { id: 'etims', name: 'KRA eTIMS Integration', price: 30000, desc: 'Automated electronic tax invoice transmission to KRA.' },
    { id: 'sms', name: 'Automated SMS / WhatsApp Alerts', price: 15000, desc: 'Transactional SMS receipts & customer status messages.' },
    { id: 'admin', name: 'Admin Dashboard & Role Access', price: 25000, desc: 'Multi-branch permissions, audit logs, and exportable reports.' },
    { id: 'sla', name: '1-Year Dedicated Maintenance & SLA', price: 25000, desc: '24/7 priority bug fixes, security patches & cloud backups.' }
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const currentBase = projectTypes.find(p => p.id === projectType) || projectTypes[0];
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = addonsList.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const multiplier = timelineSpeed === 'express' ? 1.25 : 1.0;
  const estimatedTotal = Math.round((currentBase.basePrice + addonsTotal) * multiplier);

  const formattedTotal = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0
  }).format(estimatedTotal);

  const handleSendWhatsApp = () => {
    const selectedAddonNames = selectedAddons
      .map(id => addonsList.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Hello Blackcess Softwares! I used your Website Cost Estimator:%0A%0A` +
      `• *Project Type:* ${currentBase.name}%0A` +
      `• *Modules:* ${selectedAddonNames || 'None'}%0A` +
      `• *Timeline:* ${timelineSpeed === 'express' ? 'Express (Fast-track)' : 'Standard'}%0A` +
      `• *Estimated Total:* ${formattedTotal}%0A%0A` +
      `Can we discuss detailed specifications and scheduling?`;

    window.open(`https://wa.me/254793544968?text=${text}`, '_blank');
  };

  const handleProceedQuote = () => {
    if (onOpenQuoteWithData) {
      onOpenQuoteWithData({
        projectType: currentBase.name,
        addons: selectedAddons.map(id => addonsList.find(a => a.id === id)?.name),
        estimatedTotal: formattedTotal,
        timeline: timelineSpeed
      });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-[#FAFAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Interactive Project Cost Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Select your requirements to receive an instant, transparent ballpark estimate tailored for the Kenyan market.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left / Center: Option Selection */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Project Type */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                1. Select Core Solution Type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProjectType(p.id)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      projectType === p.id
                        ? 'bg-rose-50/70 border-brand-500 shadow-sm ring-1 ring-brand-500'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{p.name}</span>
                      {projectType === p.id && <Check className="w-4 h-4 text-brand-600" />}
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2">{p.desc}</p>
                    <div className="mt-2 text-[10px] font-mono text-slate-600 flex items-center justify-between font-semibold">
                      <span>Baseline: KES {p.basePrice.toLocaleString()}</span>
                      <span className="text-slate-500 font-normal">⏱ {p.days}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Key Modules & Add-ons */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                2. Key Modules & Integrations:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl cursor-pointer border transition-all flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-500 ring-1 ring-emerald-500 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">{addon.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{addon.desc}</p>
                        <span className="text-[10px] font-mono text-emerald-700 font-bold mt-1 inline-block">
                          + KES {addon.price.toLocaleString()}
                        </span>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-slate-50'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Delivery Speed */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                3. Delivery Sprint Pace:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTimelineSpeed('standard')}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    timelineSpeed === 'standard'
                      ? 'bg-rose-50/70 border-brand-500 ring-1 ring-brand-500'
                      : 'bg-white border-slate-200 text-slate-600 shadow-xs'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Standard Delivery</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Regular iterative bi-weekly sprints</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTimelineSpeed('express')}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    timelineSpeed === 'express'
                      ? 'bg-rose-50/70 border-brand-500 ring-1 ring-brand-500'
                      : 'bg-white border-slate-200 text-slate-600 shadow-xs'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>Accelerated Fast-Track</span>
                    <span className="text-[9px] bg-brand-600 text-white px-1.5 py-0.2 rounded font-mono">+25%</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Dedicated sprint engineers & rapid launch</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xl space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase tracking-wider font-mono text-slate-500 font-bold">Estimated Project Total</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 tracking-tight">
                  {formattedTotal}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Indicative quote. Subject to detailed technical requirements review.
                </p>
              </div>

              {/* Breakdown details */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Selected Solution:</span>
                  <span className="font-bold text-slate-900">{currentBase.name}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Included Modules:</span>
                  <span className="font-bold text-emerald-700">{selectedAddons.length} Selected</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Delivery:</span>
                  <span className="font-bold text-slate-900">
                    {timelineSpeed === 'express' ? 'Fast-track (~2-3 wks)' : currentBase.days}
                  </span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span>100% Kenyan Source Code Ownership</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>On-Time Launch Commitment</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </button>

                <button
                  onClick={handleProceedQuote}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 shadow-md shadow-brand-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lock In Formal Proposal</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}