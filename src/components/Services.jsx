import React from 'react';
import { 
  Code2, 
  Smartphone, 
  CreditCard, 
  Store, 
  Users, 
  Globe2, 
  Check, 
  ArrowUpRight,
  Zap
} from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const services = [
    {
      id: 'mpesa',
      title: 'M-Pesa & Mobile Money Integrations',
      tag: 'FINTECH SPECIALTY',
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: CreditCard,
      description: 'Direct integration with Safaricom Daraja 2.0 APIs for seamless payments, real-time callbacks, and automatic bank reconciliation.',
      features: [
        'Lipa Na M-Pesa Online (STK Push)',
        'C2B (Customer to Business) Paybill & Till',
        'B2C Disbursals (Payroll, refunds, payouts)',
        'Automated M-Pesa Statement Reconciliation',
        'Fail-safe Webhook Queues & Webhook Security'
      ],
      highlight: true
    },
    {
      id: 'custom-software',
      title: 'Custom Software & Enterprise Web Apps',
      tag: 'CORE ENGINEERING',
      tagColor: 'text-brand-700 bg-brand-50 border-brand-200',
      icon: Code2,
      description: 'End-to-end engineered web platforms and enterprise business software tailored to automate your company’s unique operational flows.',
      features: [
        'Custom Business Process Automation',
        'Scalable Microservices & REST/GraphQL APIs',
        'Role-Based Access Control (RBAC)',
        'Cloud Database Design & Query Optimization',
        'High-Security Data Encryption'
      ],
      highlight: false
    },
    {
      id: 'pos',
      title: 'POS & Inventory Management Systems',
      tag: 'RETAIL & HOSPITALITY',
      tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
      icon: Store,
      description: 'Modern, fast Point of Sale systems built for Kenyan retail shops, supermarkets, pharmacies, liquor stores, and restaurants.',
      features: [
        'Barcode Scanning & Thermal Receipt Printing',
        'Multi-Store Inventory & Stock Depletion Tracking',
        'Integrated M-Pesa STK Push at Checkout',
        'Real-time Profit & Loss and VAT Reports',
        'Offline-First Capability with Cloud Sync'
      ],
      highlight: false
    },
    {
      id: 'crm-erp',
      title: 'Custom CRM & ERP Platforms',
      tag: 'ENTERPRISE OPS',
      tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
      icon: Users,
      description: 'Centralize your sales leads, customer inquiries, quotes, invoicing, and staff performance in a bespoke dashboard.',
      features: [
        'Lead Tracking & Sales Funnel Analytics',
        'Automated Invoicing & KRA eTIMS Integration Ready',
        'Customer Support Ticketing & WhatsApp Sync',
        'Staff Productivity & Audit Trails',
        'Custom KPI Reporting & Business Intelligence'
      ],
      highlight: false
    },
    {
      id: 'websites',
      title: 'High-Impact Corporate Websites & Portals',
      tag: 'SEO & BRANDING',
      tagColor: 'text-purple-700 bg-purple-50 border-purple-200',
      icon: Globe2,
      description: 'Conversion-focused, ultra-responsive corporate websites engineered for lightning-fast loading speeds and high Google search visibility in Kenya.',
      features: [
        'Local SEO Optimized for Nairobi & Kenyan Markets',
        'Mobile-First Responsive UI/UX Design',
        'Client Portals & Online Booking Systems',
        'High-Speed Core Web Vitals Performance',
        'Integrated Contact, WhatsApp & Lead Captures'
      ],
      highlight: false
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Development (iOS & Android)',
      tag: 'CROSS-PLATFORM',
      tagColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
      icon: Smartphone,
      description: 'Intuitive mobile applications for consumer engagement, on-demand services, fleet tracking, and field team management.',
      features: [
        'Cross-Platform Flutter & React Native Apps',
        'Push Notifications & Real-Time Tracking',
        'Offline Data Storage & Sync',
        'M-Pesa In-App Checkout SDK',
        'Google Play Store & Apple App Store Publishing'
      ],
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Tailored Engineering for Modern African Enterprises
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From single-tap M-Pesa checkouts to enterprise ERPs and bespoke platforms, we construct software that scales with your growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div 
                key={srv.id}
                className={`relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group ${
                  srv.highlight 
                    ? 'bg-white border-2 border-brand-500 shadow-xl shadow-brand-500/10 hover:shadow-2xl' 
                    : 'bg-[#FAFAFC] border border-slate-200/90 hover:border-brand-500/40 hover:bg-white hover:shadow-xl shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      srv.highlight ? 'bg-brand-50 text-brand-600 border border-brand-200' : 'bg-white text-slate-700 border border-slate-200 shadow-xs'
                    } group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${srv.tagColor}`}>
                      {srv.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-brand-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-8">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action */}
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-200 text-xs font-bold text-slate-700 group-hover:text-brand-600 transition-colors"
                >
                  <span>Inquire for this solution</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xs">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Have a proprietary workflow or custom integration?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">We specialize in solving bespoke software challenges with clean, documented code and dedicated SLA support.</p>
          </div>
          <button
            onClick={onOpenQuote}
            className="shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            Consult Our Lead Architect
          </button>
        </div>

      </div>
    </section>
  );
}