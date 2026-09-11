import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles, Star } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function StoreTeaser({ onNavigateToStore }) {
  const featuredCases = PRODUCTS.slice(0, 3);

  return (
    <section id="store-teaser" className="py-20 bg-gradient-to-b from-[#FAFAFC] via-white to-[#FAFAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and "Enter Store" CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-brand-700 uppercase tracking-wider mb-3 shadow-xs">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Blackcess Gear • Official Store</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
              Engineered Protection for iPhone
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Precision MagSafe cases, military Kevlar fiber, and ultra-slim matte shields. 
              <span className="font-extrabold text-slate-950 ml-1">Flat rate KES 1,280</span> with 
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 ml-1">
                FREE Delivery included
              </span> across Nairobi and Kenya!
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onNavigateToStore}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 via-rose-600 to-brand-700 hover:from-brand-500 hover:to-rose-500 shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Shop All Cases (KES 1,280)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Preview Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCases.map((item) => (
            <div
              key={item.id}
              onClick={onNavigateToStore}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200/90 p-5 hover:border-brand-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              {/* Product Visual Mockup Container */}
              <div className="relative h-56 rounded-xl bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/80 p-4 flex items-center justify-center overflow-hidden border border-slate-100">
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-600 text-white">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-600 text-white shadow-xs">
                    FREE DELIVERY
                  </span>
                </div>

                {/* Simulated iPhone Case Mockup */}
                <div className="relative w-28 h-44 rounded-[26px] bg-slate-900 border-4 border-slate-700 shadow-2xl p-2 flex flex-col justify-between group-hover:scale-105 transition-transform duration-300">
                  {/* Camera bump */}
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border-2 border-slate-600 p-1 grid grid-cols-2 gap-0.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-500"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-500"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400 self-center justify-self-center"></div>
                  </div>

                  {/* MagSafe magnetic ring simulation */}
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-white/30 mx-auto flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>

                  <div className="text-[7px] font-mono text-center text-slate-400">
                    BLACKCESS
                  </div>
                </div>
              </div>

              {/* Product Meta */}
              <div className="pt-4">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>{item.categoryName}</span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1 font-display">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  {item.tagline}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-extrabold text-slate-950 font-display">
                      KES 1,280
                    </span>
                    <span className="text-xs text-slate-400 line-through ml-2">
                      KES {item.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 inline-flex items-center gap-1">
                    Free Delivery <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 text-xs shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900">100% FREE Delivery Across Kenya</p>
              <p className="text-slate-500 text-[11px]">Nairobi Same-Day + Free Countrywide Shipping</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Flat KES 1,280 Any Model</p>
              <p className="text-slate-500 text-[11px]">iPhone 11 through iPhone 16 Pro Max</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Card Payments Only</p>
              <p className="text-slate-500 text-[11px]">Secure instant checkout with Visa & Mastercard</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}