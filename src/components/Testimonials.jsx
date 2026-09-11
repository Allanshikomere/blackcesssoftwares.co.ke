import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. A. Abdallah',
      role: 'Founder & Lead Surgeon',
      company: 'Abdallah & Associates Dental & Implant Centre',
      location: 'Nairobi, Kenya',
      avatarText: 'AA',
      rating: 5,
      text: 'Blackcess Softwares transformed our clinic booking experience. Patients can seamlessly schedule consultations online, receive SMS alerts, and we saw a 40% reduction in missed appointments.',
      highlight: 'Reliable healthcare engineering'
    },
    {
      name: 'Kelvin Mwangi',
      role: 'Managing Director',
      company: 'Urban Wheels Ltd',
      location: 'Nairobi, Kenya',
      avatarText: 'KM',
      rating: 5,
      text: 'Our car rental booking flow requires rock-solid M-Pesa integration. The automated STK push and instant reservation confirmation designed by Blackcess Softwares has handled millions in revenue with zero transaction loss.',
      highlight: 'Flawless M-Pesa Daraja flow'
    },
    {
      name: 'Sarah Wambui',
      role: 'Operations Lead',
      company: 'Pili Restaurant & Lounge',
      location: 'Nairobi, Kenya',
      avatarText: 'SW',
      rating: 5,
      text: 'From digital menus to kitchen order tickets and M-Pesa till reconciliation at checkout, Blackcess engineered our entire dining management flow. Our table turnaround speed improved drastically.',
      highlight: 'Turnkey POS & restaurant system'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Trusted by Leaders Across Kenya
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real feedback from Kenyan business owners whose operations run on systems architected by Blackcess Softwares.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#FAFAFC] border border-slate-200 hover:border-brand-500/40 hover:bg-white transition-all duration-300 flex flex-col justify-between hover:shadow-xl shadow-xs"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2">5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-rose-700 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-[11px] text-slate-600 font-medium">{t.role}, {t.company}</p>
                  <p className="text-[10px] text-slate-500">📍 {t.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}