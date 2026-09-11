import React from 'react';

export default function Logo({ size = "md", showText = true, className = "" }) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20"
  };

  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none ${className}`}>
      {/* Emblem Badge matching the original company logo */}
      <div className={`relative ${sizeMap[size] || sizeMap.md} flex-shrink-0 transition-transform duration-300 hover:scale-105`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_8px_rgba(225,29,72,0.35)]">
          <defs>
            <radialGradient id="logoBgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E11D48" stopOpacity="0.35"/>
              <stop offset="65%" stopColor="#1E1017" stopOpacity="0.95"/>
              <stop offset="100%" stopColor="#0F172A" stopOpacity="1"/>
            </radialGradient>
            <linearGradient id="logoMetalRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D6D"/>
              <stop offset="25%" stopColor="#E11D48"/>
              <stop offset="50%" stopColor="#300914"/>
              <stop offset="75%" stopColor="#E11D48"/>
              <stop offset="100%" stopColor="#FF758F"/>
            </linearGradient>
            <linearGradient id="logoTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF"/>
              <stop offset="30%" stopColor="#F8FAFC"/>
              <stop offset="70%" stopColor="#FF4D6D"/>
              <stop offset="100%" stopColor="#BE123C"/>
            </linearGradient>
            <filter id="logoGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Circular badge */}
          <circle cx="50" cy="50" r="47" fill="url(#logoBgGlow)"/>
          <circle cx="50" cy="50" r="45" stroke="url(#logoMetalRim)" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="39" stroke="#E11D48" strokeWidth="1" strokeDasharray="4 3" opacity="0.7"/>
          
          {/* Overlapping BS Initials */}
          <g fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="900" fontSize="35" fontStyle="italic">
            <text x="29" y="63" fill="#BE123C" opacity="0.9" textAnchor="middle" filter="url(#logoGlow)">B</text>
            <text x="67" y="65" fill="#E11D48" opacity="0.9" textAnchor="middle" filter="url(#logoGlow)">S</text>
            
            <text x="32" y="62" fill="url(#logoTextGrad)" textAnchor="middle">B</text>
            <text x="65" y="64" fill="url(#logoTextGrad)" textAnchor="middle">S</text>
          </g>

          {/* Precision Crosshair notches */}
          <line x1="50" y1="5" x2="50" y2="12" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="88" x2="50" y2="95" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="50" x2="12" y2="50" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round" />
          <line x1="88" y1="50" x2="95" y2="50" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Title and Location Sub-label */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
              Blackcess
            </span>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-brand-600">
              Softwares
            </span>
          </div>
          <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase -mt-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
            Nairobi, Kenya
          </span>
        </div>
      )}
    </div>
  );
}