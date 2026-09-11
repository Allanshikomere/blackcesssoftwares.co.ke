import React from 'react';
import { ShieldCheck, MapPin, Zap, Code, Clock, Headphones } from 'lucide-react';

export default function WhyUs({ onOpenQuote }) {
  const pillars = [
    {
      icon: MapPin,
      title: 'Rooted in Nairobi, Kenya',
      desc: 'No time-zone disconnects or offshore delays. Our engineering team is based in Nairobi, available for on-site kickoffs and real-time support.',
      badge: 'Local Presence'
    },
    {
      icon: Zap,
      title: 'Native M-Pesa Specialists',
      desc: 'We do not rely on clumsy third-party plugins. We write direct, optimized Daraja 2.0 connectors for lightning-fast STK pushes and payment webhooks.',
      badge: 'Fintech Precision'
    },
    {
      icon: ShieldCheck,
      title: 'Complete IP & Code Ownership',
      desc: 'You retain 100% ownership of your source code, GitHub repositories, and server infrastructure with zero hidden licensing lock-ins.',
      badge: 'No Vendor Lock-in'
    },
    {
      icon: Code,
      title: 'Production-Grade Architecture',
      desc: 'Every system is built with automated tests, structured relational schemas, clean API documentation, and scalable cloud microservices.',
      badge: 'Clean Code'
    },
    {
      icon: Clock,
      title: 'Rapid Sprints & Weekly Demos',
      desc: 'See working features every single week. We follow disciplined Agile sprints so you test your software continuously as it is being built.',
      badge: 'Agile Delivery'
    },
    {
      icon: Headphones,
      title: 'Dedicated SLA & Monitoring',
      desc: 'Post-launch 24/7 uptime monitoring, automated database backups, security patches, and direct phone/WhatsApp engineer access.',
      badge: 'Peace of Mind'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#FAFAFC] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Blackcess Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Why High-Growth Kenyan Businesses Partner With Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We bridge the gap between complex software engineering and pragmatic commercial execution in the East African market.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-500/40 hover:shadow-xl transition-all duration-200 group shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 via-rose-600 to-brand-700 hover:from-brand-500 hover:to-rose-500 shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let's Discuss Your Project Scope</span>
          </button>
        </div>

      </div>
    </section>
  );
}