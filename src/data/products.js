export const IPHONE_MODELS = [
  'iPhone 16 Pro Max',
  'iPhone 16 Pro',
  'iPhone 16 Plus',
  'iPhone 16',
  'iPhone 15 Pro Max',
  'iPhone 15 Pro',
  'iPhone 15 Plus',
  'iPhone 15',
  'iPhone 14 Pro Max',
  'iPhone 14 Pro',
  'iPhone 14',
  'iPhone 13 Pro Max',
  'iPhone 13 Pro',
  'iPhone 13',
  'iPhone 12 Pro Max',
  'iPhone 12',
  'iPhone 11'
];

export const PRODUCTS = [
  {
    id: 'case-frosted-magsafe',
    name: 'Frosted Matte MagSafe Slim Case',
    tagline: 'Ultra-thin anti-fingerprint matte with military N52 magnetic ring',
    price: 1280,
    originalPrice: 1800,
    category: 'magsafe',
    categoryName: 'MagSafe Series',
    rating: 4.9,
    reviewsCount: 142,
    badge: 'BESTSELLER',
    isNew: false,
    inStock: true,
    colors: [
      { name: 'Midnight Matte', hex: '#1E293B', bgClass: 'bg-slate-800' },
      { name: 'Titanium Gray', hex: '#64748B', bgClass: 'bg-slate-500' },
      { name: 'Sierra Blue', hex: '#38BDF8', bgClass: 'bg-sky-400' },
      { name: 'Deep Crimson', hex: '#E11D48', bgClass: 'bg-rose-600' }
    ],
    features: [
      'Strong N52 Neodymium MagSafe Magnets',
      'Anti-Fingerprint Oleophobic Coating',
      '0.8mm Raised Camera Bezel Protection',
      'Independent Metal Responsive Buttons'
    ],
    supportedModels: IPHONE_MODELS,
    previewGradient: 'from-slate-800 via-slate-700 to-slate-900',
    accentColor: '#38BDF8'
  },
  {
    id: 'case-crystal-clear',
    name: 'Air-Cushion Crystal Clear Shockproof Case',
    tagline: 'German Bayer non-yellowing clear TPU with 3m drop absorption',
    price: 1280,
    originalPrice: 1600,
    category: 'clear',
    categoryName: 'Clear Series',
    rating: 4.8,
    reviewsCount: 98,
    badge: 'POPULAR',
    isNew: false,
    inStock: true,
    colors: [
      { name: 'Pure Diamond Clear', hex: '#E2E8F0', bgClass: 'bg-slate-200' },
      { name: 'Smoked Graphite', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Glitter Twilight', hex: '#CBD5E1', bgClass: 'bg-slate-300' }
    ],
    features: [
      'Anti-Yellowing German Bayer Polymer',
      'Hexagon Corner Airbags for 3m Drop Absorption',
      'Wireless & MagSafe Compatible',
      'Micro-Dot Matrix to Prevent Watermarks'
    ],
    supportedModels: IPHONE_MODELS,
    previewGradient: 'from-slate-200 via-slate-300 to-slate-400',
    accentColor: '#0EA5E9'
  },
  {
    id: 'case-liquid-silicone',
    name: 'Silky Liquid Silicone MagSafe Case',
    tagline: 'Premium baby-skin soft touch with interior microfiber velvet lining',
    price: 1280,
    originalPrice: 1850,
    category: 'silicone',
    categoryName: 'Liquid Silicone',
    rating: 4.9,
    reviewsCount: 176,
    badge: 'TOP RATED',
    isNew: false,
    inStock: true,
    colors: [
      { name: 'Black Obsidian', hex: '#0F172A', bgClass: 'bg-slate-900' },
      { name: 'Pine Forest Green', hex: '#14532D', bgClass: 'bg-emerald-900' },
      { name: 'Chalk Rose', hex: '#FDA4AF', bgClass: 'bg-rose-300' },
      { name: 'Product Crimson', hex: '#BE123C', bgClass: 'bg-rose-700' },
      { name: 'Stone Mist Gray', hex: '#94A3B8', bgClass: 'bg-slate-400' }
    ],
    features: [
      'Food-Grade Liquid Silicone Exterior',
      'Scratch-Preventing Microfiber Fleece Interior',
      'Built-in 38-Magnet MagSafe Alignment Ring',
      'Dust-Repelling Nano Surface Coating'
    ],
    supportedModels: IPHONE_MODELS,
    previewGradient: 'from-rose-900 via-slate-900 to-emerald-950',
    accentColor: '#F43F5E'
  },
  {
    id: 'case-carbon-fiber',
    name: 'Aerospace Carbon Fiber Kevlar Armor',
    tagline: 'Military standard 600D aramid fiber with scratchproof textured weave',
    price: 1280,
    originalPrice: 2400,
    category: 'armor',
    categoryName: 'Heavy Duty Armor',
    rating: 5.0,
    reviewsCount: 88,
    badge: 'FLAGSHIP',
    isNew: true,
    inStock: true,
    colors: [
      { name: 'Twill Stealth Carbon', hex: '#171717', bgClass: 'bg-neutral-900' },
      { name: 'Crimson Forged Carbon', hex: '#450A0A', bgClass: 'bg-red-950' }
    ],
    features: [
      'Genuine 600D Aramid Fiber Weave',
      'Military Grade MIL-STD-810H Certified',
      'Ultra Lightweight (Only 18 Grams)',
      'Zero Signal Loss for 5G, Wi-Fi & GPS'
    ],
    supportedModels: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 16',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 15',
      'iPhone 14 Pro Max'
    ],
    previewGradient: 'from-neutral-900 via-stone-900 to-black',
    accentColor: '#EF4444'
  },
  {
    id: 'case-leather-wallet',
    name: 'Vintage Saddle Leather MagSafe Wallet Case',
    tagline: 'Hand-crafted vegan textured grain with integrated card sleeve',
    price: 1280,
    originalPrice: 2600,
    category: 'leather',
    categoryName: 'Leather Lux',
    rating: 4.8,
    reviewsCount: 64,
    badge: 'LUXURY',
    isNew: false,
    inStock: true,
    colors: [
      { name: 'Saddle Tan Brown', hex: '#78350F', bgClass: 'bg-amber-900' },
      { name: 'Espresso Dark Chocolate', hex: '#3E2723', bgClass: 'bg-stone-900' },
      { name: 'Midnight Onyx', hex: '#0F172A', bgClass: 'bg-slate-900' }
    ],
    features: [
      'Premium Top-Grain Vegan Leather Texture',
      'Holds Up to 2 Bank/ID Cards with RFID Shield',
      'Aged Patina Look Over Time',
      'Machined Aluminum Anodized Buttons'
    ],
    supportedModels: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 14 Pro Max',
      'iPhone 14 Pro',
      'iPhone 13 Pro Max'
    ],
    previewGradient: 'from-amber-950 via-stone-900 to-amber-900',
    accentColor: '#D97706'
  },
  {
    id: 'case-ring-kickstand',
    name: 'Dual-Layer 360° Ring Kickstand Armor',
    tagline: 'Heavy-duty rugged PC + TPU with embedded rotating magnetic ring holder',
    price: 1280,
    originalPrice: 2000,
    category: 'armor',
    categoryName: 'Heavy Duty Armor',
    rating: 4.7,
    reviewsCount: 112,
    badge: 'UTILITY',
    isNew: false,
    inStock: true,
    colors: [
      { name: 'Gunmetal Titanium', hex: '#334155', bgClass: 'bg-slate-700' },
      { name: 'Deep Navy Blue', hex: '#1E3A8A', bgClass: 'bg-blue-900' },
      { name: 'Combat Crimson', hex: '#991B1B', bgClass: 'bg-red-800' }
    ],
    features: [
      '360° Rotating Zinc Alloy Stand for FaceTime & Videos',
      'Magnetic Car Mount Compatible Metal Center',
      'Dual-Layer Impact Dispersal Shell',
      'Non-Slip Textured Grip Sides'
    ],
    supportedModels: IPHONE_MODELS,
    previewGradient: 'from-slate-800 via-blue-950 to-slate-900',
    accentColor: '#2563EB'
  },
  {
    id: 'case-iridescent-prism',
    name: 'Holographic Iridescent Prism Case',
    tagline: 'Color-shifting optical prism finish with high-gloss mirror protection',
    price: 1280,
    originalPrice: 1750,
    category: 'clear',
    categoryName: 'Clear Series',
    rating: 4.8,
    reviewsCount: 83,
    badge: 'TRENDING',
    isNew: true,
    inStock: true,
    colors: [
      { name: 'Aurora Opal Prism', hex: '#F0ABFC', bgClass: 'bg-fuchsia-300' },
      { name: 'Cyber Neon Sunset', hex: '#FB923C', bgClass: 'bg-orange-400' }
    ],
    features: [
      'Dynamic Holographic Color Shift in Light',
      'Scratch-Resistant Electroplated Edge Rim',
      'Lightweight Flexible TPU Frame',
      'Precision Cutouts for Camera and Speakers'
    ],
    supportedModels: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 16',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 15',
      'iPhone 14'
    ],
    previewGradient: 'from-fuchsia-600 via-rose-500 to-amber-400',
    accentColor: '#EC4899'
  },
  {
    id: 'case-titanium-bumper',
    name: 'Titanium Hybrid 9H Tempered Glass Case',
    tagline: 'Brushed aviation alloy bumper with 9H sapphire scratchproof backplate',
    price: 1280,
    originalPrice: 3200,
    category: 'magsafe',
    categoryName: 'MagSafe Series',
    rating: 5.0,
    reviewsCount: 51,
    badge: 'PREMIUM',
    isNew: true,
    inStock: true,
    colors: [
      { name: 'Natural Titanium', hex: '#94A3B8', bgClass: 'bg-slate-400' },
      { name: 'Black Titanium', hex: '#0F172A', bgClass: 'bg-slate-900' },
      { name: 'Desert Gold Titanium', hex: '#D97706', bgClass: 'bg-amber-600' }
    ],
    features: [
      'Genuine Brushed Aerospace Alloy Frame',
      '9H Hardness Tempered Glass Backplate',
      'Strong Hidden Magnetic MagSafe Array',
      'Zero Discoloration Guaranteed'
    ],
    supportedModels: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro'
    ],
    previewGradient: 'from-slate-400 via-amber-200 to-slate-600',
    accentColor: '#F59E0B'
  }
];