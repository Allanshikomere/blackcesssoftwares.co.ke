import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const technologies = [
    { name: 'Safaricom Daraja 2.0', category: 'fintech', level: 'Core Specialty', desc: 'STK Push, C2B, B2C & automated statement reconciliation.' },
    { name: 'React.js & Next.js', category: 'frontend', level: 'Production Standard', desc: 'Interactive SPAs, server-rendered portals & client UI.' },
    { name: 'TypeScript', category: 'frontend', level: 'Type-Safe', desc: 'Reliable, self-documenting enterprise codebases.' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Modern Design', desc: 'Utility-first bespoke UI responsive across all devices.' },
    { name: 'Node.js & Express', category: 'backend', level: 'High-Concurrency', desc: 'Microservices, high-throughput REST APIs and socket feeds.' },
    { name: 'Python & FastAPI', category: 'backend', level: 'Data & AI', desc: 'Algorithmic workflows, data automation, and machine learning.' },
    { name: 'PHP & Laravel', category: 'backend', level: 'Enterprise Standard', desc: 'Robust web backends, CRM modules & e-commerce platforms.' },
    { name: 'PostgreSQL & MySQL', category: 'database', level: 'ACID Compliant', desc: 'Relational data modeling, indexing, and transactional integrity.' },
    { name: 'Redis Cache', category: 'database', level: 'Sub-Millisecond', desc: 'Session storage, queue brokers, and lightning-fast caching.' },
    { name: 'Flutter & Dart', category: 'mobile', level: 'Cross-Platform', desc: 'High-performance native apps for Android and iOS.' },
    { name: 'Docker & Microservices', category: 'devops', level: 'Containerized', desc: 'Consistent staging/production environments and isolation.' },
    { name: 'AWS & DigitalOcean', category: 'devops', level: 'Cloud Ready', desc: 'Elastic compute, automated backups, and low-latency servers.' }
  ];

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'fintech', label: 'M-Pesa & Fintech' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'devops', label: 'Cloud & Infrastructure' },
  ];

  const filtered = activeCategory === 'all'
    ? technologies
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section id="tech" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-brand-600" />
            <span>Modern Engineering Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Built on Battle-Tested Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We avoid fragile templates and abandoned plugins. Every system is built using modern, open, and scalable enterprise frameworks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                activeCategory === c.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#FAFAFC] border border-slate-200/90 hover:border-brand-500/40 hover:bg-white hover:shadow-lg transition-all duration-200 group shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-50 border border-brand-200 text-brand-700 font-bold">
                  {item.level}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}