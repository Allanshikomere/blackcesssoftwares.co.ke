import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  ShoppingBag, ArrowLeft, Search, X, Plus, Minus, Trash2, 
  CreditCard, ShieldCheck, Truck, Check, Star, Sparkles, Lock, 
  CheckCircle2, Info
} from 'lucide-react';
import Logo from './Logo';
import { PRODUCTS, IPHONE_MODELS } from '../data/products';

export default function StorePage({ onBackToCorporate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedModelFilter, setSelectedModelFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCardColor, setSelectedCardColor] = useState({});
  const [selectedCardModel, setSelectedCardModel] = useState({});

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('details');
  const [orderSummary, setOrderSummary] = useState(null);

  const [customerInfo, setCustomerInfo] = useState({
    fullName: '', phone: '', email: '', county: 'Nairobi', address: '',
    cardNumber: '', cardName: '', cardExpiry: '', cardCvv: ''
  });

  const categories = [
    { id: 'all', name: 'All iPhone Cases' },
    { id: 'magsafe', name: 'MagSafe Series' },
    { id: 'clear', name: 'Crystal Clear' },
    { id: 'silicone', name: 'Liquid Silicone' },
    { id: 'armor', name: 'Heavy Duty Armor' },
    { id: 'leather', name: 'Leather Lux' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesModel = selectedModelFilter === 'all' || item.supportedModels.includes(selectedModelFilter);
      return matchesSearch && matchesCategory && matchesModel;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedModelFilter, sortBy]);

  const getProductColor = (product) => selectedCardColor[product.id] || product.colors[0];
  const getProductModel = (product) => selectedCardModel[product.id] || product.supportedModels[0];

  const addToCart = (product, customModel, customColor) => {
    const model = customModel || getProductModel(product);
    const color = customColor || getProductColor(product);
    const cartItemId = `${product.id}-${model}-${color.name}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { cartItemId, product, model, color, price: 1280, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId, change) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          const newQty = item.quantity + change;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 0; // 100% Free Delivery on all orders
  const cartGrandTotal = cartSubtotal;
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const formatCardNumber = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiry = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  };

  const getCardType = (num) => {
    const cleaned = num.replace(/\s/g, '');
    if (cleaned.startsWith('4')) return 'Visa';
    if (/^5[1-5]/.test(cleaned) || /^2[2-7]/.test(cleaned)) return 'Mastercard';
    return 'Credit / Debit Card';
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setCheckoutStep('processing');
    setTimeout(() => {
      const orderId = 'BC-CASE-' + Math.floor(10000 + Math.random() * 90000);
      setOrderSummary({
        orderId, items: [...cart], subtotal: cartSubtotal, shipping: 0,
        grandTotal: cartGrandTotal, customer: { ...customerInfo },
        cardLast4: customerInfo.cardNumber.replace(/\s/g, '').slice(-4) || '4242',
        cardType: getCardType(customerInfo.cardNumber)
      });
      setCart([]);
      setCheckoutStep('success');
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 font-sans">
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2 shadow-xs">
        <Truck className="w-3.5 h-3.5" />
        <span>SPECIAL OFFER: All iPhone Cases KES 1,280 with 100% FREE Delivery Across Kenya!</span>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={onBackToCorporate}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Corporate</span>
              </button>

              <div className="flex items-center gap-2">
                <Logo size="sm" showText={false} />
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                    Blackcess <span className="text-brand-600">Gear</span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider -mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
                    Flat KES 1,280 • Free Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-md relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search MagSafe, Frosted, Leather, iPhone 16..."
                className="w-full bg-slate-100 border border-slate-200/80 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-sm group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                <span className="bg-brand-600 group-hover:bg-white group-hover:text-brand-600 text-white font-mono text-[10px] font-extrabold px-2 py-0.5 rounded-full transition-colors">
                  {totalCartCount}
                </span>
              </button>
            </div>
          </div>

          <div className="md:hidden mt-3 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cases for iPhone..."
              className="w-full bg-slate-100 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        <div className="border-t border-slate-100 bg-[#FAFAFC] px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === c.id
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedModelFilter}
                onChange={(e) => setSelectedModelFilter(e.target.value)}
                className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none focus:border-brand-500 shadow-xs cursor-pointer"
              >
                <option value="all">All iPhone Models</option>
                {IPHONE_MODELS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none focus:border-brand-500 shadow-xs cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> cases • 
            <span className="ml-1 text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              ALL CASES KES 1,280 • FREE DELIVERY
            </span>
          </span>
          <span className="hidden sm:inline font-mono font-semibold text-slate-600">Card Gateways Live • Instant Dispatch</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => {
            const activeColor = getProductColor(item);
            const activeModel = getProductModel(item);

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden hover:border-brand-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div className="relative p-6 bg-gradient-to-b from-slate-50 to-slate-100/60 border-b border-slate-100 flex flex-col items-center justify-center h-64 overflow-hidden">
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-brand-600 text-white shadow-xs">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-600 text-white shadow-xs">
                      FREE DELIVERY
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      In Stock
                    </span>
                  </div>

                  <div 
                    style={{ backgroundColor: activeColor.hex }}
                    className="relative w-28 h-48 rounded-[28px] border-4 border-slate-800 shadow-2xl p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-black/60 border-2 border-white/20 p-1 grid grid-cols-2 gap-0.5 shadow-md">
                      <div className="w-4 h-4 rounded-full bg-black border border-slate-400"></div>
                      <div className="w-4 h-4 rounded-full bg-black border border-slate-400"></div>
                      <div className="w-4 h-4 rounded-full bg-black border border-slate-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 self-center justify-self-center"></div>
                    </div>

                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-white/40 mx-auto flex items-center justify-center shadow-inner">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/60"></div>
                    </div>

                    <div className="text-[7px] font-mono text-center text-white/70 font-semibold tracking-wider">
                      BLACKCESS
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-medium text-slate-500">{item.categoryName}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{item.rating}</span>
                        <span className="text-[10px] text-slate-400">({item.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1 font-display">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>

                    <div className="mt-3">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Select iPhone Model:
                      </label>
                      <select
                        value={activeModel}
                        onChange={(e) => setSelectedCardModel({
                          ...selectedCardModel,
                          [item.id]: e.target.value
                        })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 font-semibold focus:outline-none focus:border-brand-500 cursor-pointer"
                      >
                        {item.supportedModels.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        Color: <span className="text-slate-800 font-semibold">{activeColor.name}</span>
                      </span>
                      <div className="flex items-center gap-1.5">
                        {item.colors.map((c) => (
                          <button
                            key={c.name}
                            onClick={() => setSelectedCardColor({
                              ...selectedCardColor,
                              [item.id]: c
                            })}
                            style={{ backgroundColor: c.hex }}
                            className={`w-5 h-5 rounded-full border-2 transition-all ${
                              activeColor.name === c.name 
                                ? 'border-brand-600 scale-110 shadow-xs' 
                                : 'border-white hover:scale-105'
                            }`}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-lg font-extrabold text-slate-950 font-display">
                        KES 1,280
                      </div>
                      <div className="text-[11px] text-emerald-700 font-bold">
                        FREE DELIVERY
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(item, activeModel, activeColor)}
                      className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-md active:scale-95 flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
              <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-brand-600" />
                  <h3 className="font-display font-extrabold text-base text-slate-900">
                    Your Shopping Cart ({totalCartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 bg-emerald-50 border-b border-emerald-100 px-5 text-xs text-emerald-800">
                <div className="flex items-center gap-2 font-bold">
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% FREE Delivery Included on All Orders!</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100">
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
                    <p className="text-sm font-bold text-slate-900 font-display">Your cart is empty</p>
                    <p className="text-xs text-slate-500">Pick any iPhone case at KES 1,280 with Free Delivery!</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.cartItemId} className="pt-4 first:pt-0 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div 
                          style={{ backgroundColor: item.color.hex }}
                          className="w-12 h-16 rounded-xl border-2 border-slate-700 shadow-sm shrink-0 flex items-center justify-center"
                        >
                          <div className="w-4 h-4 rounded-full border border-white/50"></div>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold text-slate-900 line-clamp-1 font-display">
                            {item.product.name}
                          </h4>
                          <p className="text-[11px] font-semibold text-brand-600">
                            {item.model}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            Color: {item.color.name}
                          </p>
                          <p className="text-xs font-bold text-slate-900 mt-1 font-display">
                            KES 1,280
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-between h-16">
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-lg px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            className="text-slate-600 hover:text-slate-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            className="text-slate-600 hover:text-slate-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal ({totalCartCount} {totalCartCount === 1 ? 'case' : 'cases'})</span>
                      <span className="font-bold text-slate-900">KES {cartSubtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Standard / Same-Day Delivery</span>
                      <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        FREE (KES 0)
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between text-sm">
                      <span className="font-extrabold text-slate-900 font-display">Total Amount</span>
                      <span className="font-extrabold text-slate-950 font-display text-base">
                        KES {cartGrandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCheckoutOpen(true);
                      setCheckoutStep('details');
                    }}
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 shadow-md shadow-brand-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Proceed to Card Checkout</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1 font-medium">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Debit & Credit Cards Accepted • 256-bit SSL</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Card Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-6">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-brand-600" />
                <h3 className="font-display font-extrabold text-base text-slate-900">
                  {checkoutStep === 'success' ? 'Order Confirmed!' : 'Card Checkout & Free Delivery'}
                </h3>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {checkoutStep === 'processing' && (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full border-4 border-brand-500 border-t-transparent animate-spin mx-auto"></div>
                  <h4 className="text-lg font-bold text-slate-900 font-display">Authorizing Card Transaction...</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Connecting to payment processor for 3D Secure verification. Please do not close or refresh this window.
                  </p>
                </div>
              )}

              {checkoutStep === 'success' && orderSummary && (
                <div className="space-y-6 animate-in zoom-in-95 duration-200">
                  <div className="text-center space-y-2">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-slate-950 font-display">Payment Successful!</h4>
                    <p className="text-xs text-slate-500">
                      Order Reference: <span className="font-mono font-bold text-slate-900">{orderSummary.orderId}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                    <div className="flex justify-between text-slate-600 pb-2 border-b border-slate-200">
                      <span>Delivery Recipient:</span>
                      <span className="font-bold text-slate-900">{orderSummary.customer.fullName} ({orderSummary.customer.phone})</span>
                    </div>
                    <div className="flex justify-between text-slate-600 pb-2 border-b border-slate-200">
                      <span>Delivery Address:</span>
                      <span className="font-bold text-slate-900">{orderSummary.customer.address}, {orderSummary.customer.county} (FREE DELIVERY)</span>
                    </div>
                    <div className="flex justify-between text-slate-600 pb-2 border-b border-slate-200">
                      <span>Payment Method:</span>
                      <span className="font-bold text-emerald-700">{orderSummary.cardType} ending in •••• {orderSummary.cardLast4} (PAID)</span>
                    </div>
                    <div className="flex justify-between text-slate-600 pt-1 text-sm font-bold text-slate-900">
                      <span>Total Amount Charged:</span>
                      <span className="font-display font-extrabold text-brand-600">KES {orderSummary.grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/254793544968?text=Hello%20Blackcess%20Softwares!%20I%20just%20completed%20Order%20${orderSummary.orderId}%20for%20iPhone%20cases.%20Please%20confirm%20dispatch.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-md shadow-emerald-600/20"
                    >
                      Receive WhatsApp Dispatch Updates
                    </a>

                    <button
                      onClick={() => setIsCheckoutOpen(false)}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep === 'details' && (
                <form onSubmit={handleProceedToPayment} className="space-y-5">
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Payment Gateway: Card Payments Only • FREE Delivery Included</span>
                      <span className="text-[11px] text-blue-700">
                        Currently processing debit and credit cards (Visa & Mastercard). Additional payment gateways like M-Pesa & Apple Pay will be enabled in our upcoming release.
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      1. Delivery Address & Recipient
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={customerInfo.fullName}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                          placeholder="Jane Wanjiku"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Kenyan Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          placeholder="0712 345 678"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">City / County *</label>
                        <select
                          value={customerInfo.county}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, county: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 cursor-pointer"
                        >
                          <option value="Nairobi">Nairobi (Same-day Free Delivery)</option>
                          <option value="Kiambu">Kiambu / Ruiru / Thika (Free Delivery)</option>
                          <option value="Mombasa">Mombasa (Free Delivery)</option>
                          <option value="Nakuru">Nakuru (Free Delivery)</option>
                          <option value="Kisumu">Kisumu (Free Delivery)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Delivery Location / Building *</label>
                        <input
                          type="text"
                          required
                          value={customerInfo.address}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                          placeholder="e.g. Westlands, Delta Corner, 4th Floor"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        2. Card Details (Visa & Mastercard)
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                        🔒 256-Bit Encrypted
                      </span>
                    </div>

                    <div className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-brand-900 text-white shadow-xl relative overflow-hidden">
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-9 h-7 rounded bg-amber-400/90 border border-amber-300"></div>
                        <span className="font-mono text-xs font-bold tracking-widest text-slate-300">
                          {getCardType(customerInfo.cardNumber)}
                        </span>
                      </div>

                      <div className="font-mono text-sm tracking-widest mb-4">
                        {customerInfo.cardNumber || '•••• •••• •••• ••••'}
                      </div>

                      <div className="flex justify-between items-end text-[10px] font-mono text-slate-300">
                        <div>
                          <div className="text-[8px] text-slate-400 uppercase">Cardholder</div>
                          <div className="font-bold text-white uppercase">{customerInfo.cardName || 'NAME ON CARD'}</div>
                        </div>
                        <div>
                          <div className="text-[8px] text-slate-400 uppercase">Expires</div>
                          <div className="font-bold text-white">{customerInfo.cardExpiry || 'MM/YY'}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Card Number *</label>
                        <input
                          type="text"
                          required
                          maxLength={19}
                          value={customerInfo.cardNumber}
                          onChange={(e) => setCustomerInfo({ 
                            ...customerInfo, 
                            cardNumber: formatCardNumber(e.target.value) 
                          })}
                          placeholder="4000 1234 5678 9010"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-brand-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Cardholder Name *</label>
                        <input
                          type="text"
                          required
                          value={customerInfo.cardName}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, cardName: e.target.value })}
                          placeholder="e.g. JANE WANJIKU"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 uppercase focus:bg-white focus:outline-none focus:border-brand-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-1">Expiry (MM/YY) *</label>
                          <input
                            type="text"
                            required
                            maxLength={5}
                            value={customerInfo.cardExpiry}
                            onChange={(e) => setCustomerInfo({ 
                              ...customerInfo, 
                              cardExpiry: formatExpiry(e.target.value) 
                            })}
                            placeholder="08/28"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-mono text-center focus:bg-white focus:outline-none focus:border-brand-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-1">CVV Security Code *</label>
                          <input
                            type="password"
                            required
                            maxLength={4}
                            value={customerInfo.cardCvv}
                            onChange={(e) => setCustomerInfo({ 
                              ...customerInfo, 
                              cardCvv: e.target.value.replace(/\D/g, '').slice(0, 4) 
                            })}
                            placeholder="•••"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-mono text-center focus:bg-white focus:outline-none focus:border-brand-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 via-rose-600 to-brand-700 hover:from-brand-500 hover:to-rose-500 shadow-md shadow-brand-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Pay KES {cartGrandTotal.toLocaleString()} via Card (Free Delivery)</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}