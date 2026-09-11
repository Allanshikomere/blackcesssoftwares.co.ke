import React from 'react';
import { ArrowRight, ShieldCheck, Zap, ChevronRight, Layers } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid radial-glow bg-[#FAFAFC]">
      {/* Glow gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-xs mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              <span className="text-slate-700">Software Development Agency</span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-600 font-bold">Nairobi, Kenya 🇰🇪</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15] mb-6">
              Engineering Scalable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-rose-600 to-amber-600">
                Custom Software, POS
              </span>{' '}
              & M-Pesa Integrations.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Blackcess Softwares is Nairobi's dedicated technology partner. We turn complex business workflows into seamless web applications, retail POS platforms, bespoke CRMs, and bulletproof Safaricom Daraja 2.0 payment solutions.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-rose-600 to-brand-700 hover:from-brand-500 hover:to-rose-500 shadow-lg shadow-brand-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs transition-all duration-200"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Calculate Project Cost</span>
              </a>

              <a
                href="#mpesa-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Test Live M-Pesa Simulator</span>
              </a>
            </div>

            {/* Trust Signals & Verified Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-950">50+</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Systems Delivered</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-600">99.9%</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">M-Pesa API Uptime</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Kenyan Business Fit</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-tech Live Code / Architecture Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-rose-500 rounded-2xl blur-lg opacity-25"></div>

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#090E17] border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#060A10] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">daraja-stk-processor.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/80 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    PRODUCTION READY
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-4 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto bg-[#070B12]">
                  <p className="text-slate-500">// Blackcess Softwares M-Pesa Daraja 2.0 Engine</p>
                  <p>
                    <span className="text-rose-400 font-bold">const</span>{' '}
                    <span className="text-amber-300">blackcessClient</span> ={' '}
                    <span className="text-blue-400">new</span>{' '}
                    <span className="text-emerald-400">DarajaGateway</span>({'{'}
                  </p>
                  <p className="pl-4 text-slate-400">
                    businessShortCode: <span className="text-cyan-300">"174379"</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    callbackUrl: <span className="text-cyan-300">"https://api.blackcess.co.ke/v1/webhook"</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    instantReconciliation: <span className="text-rose-400">true</span>
                  </p>
                  <p>{'}'});</p>
                  
                  <div className="py-1">
                    <div className="h-[1px] bg-slate-800"></div>
                  </div>

                  <p className="text-slate-400">
                    <span className="text-rose-400">await</span> blackcessClient.<span className="text-blue-400">triggerStkPush</span>({'{'}
                  </p>
                  <p className="pl-4 text-slate-400">
                    phoneNumber: <span className="text-cyan-300">"254712***890"</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    amount: <span className="text-amber-300">14,500</span>, <span className="text-slate-500">// KES</span>
                  </p>
                  <p className="pl-4 text-slate-400">
                    accountRef: <span className="text-cyan-300">"URBAN-WHEELS-CAR-RENTAL"</span>
                  </p>
                  <p>{'}'});</p>

                  {/* Simulated Output Log */}
                  <div className="mt-3 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-[11px] text-emerald-300 font-mono">
                    <div className="flex items-center justify-between text-[10px] text-emerald-400/80 mb-1">
                      <span>✓ 200 OK — Callback Verified</span>
                      <span>Latency: 280ms</span>
                    </div>
                    <div>Receipt: <span className="text-white font-bold">RJG792KZ41</span> • Status: SUCCESS</div>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="p-4 bg-[#080C14] border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-400" />
                    <span className="text-slate-300 font-medium">PCI-DSS & CBK Compliant Architecture</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">v2.4.0</span>
                </div>

              </div>

              {/* Floating Feature Card Underneath */}
              <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Full-Cycle Delivery</h4>
                    <p className="text-[11px] text-slate-500">Architecture, UI/UX, Backend, Cloud Hosting & SLA</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}