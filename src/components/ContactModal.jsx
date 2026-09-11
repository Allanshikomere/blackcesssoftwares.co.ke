import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Send, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Custom Software & Web Application',
    budget: 'KES 50,000 - 150,000',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        projectType: initialData.projectType || prev.projectType,
        description: initialData.addons 
          ? `Estimated Total: ${initialData.estimatedTotal}\nSelected Modules: ${initialData.addons.join(', ')}\nTimeline: ${initialData.timeline}`
          : prev.description
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Blackcess Softwares! My name is ${formData.name || 'a prospective client'}.%0A` +
      `• *Company:* ${formData.company || 'N/A'}%0A` +
      `• *Project Type:* ${formData.projectType}%0A` +
      `• *Phone:* ${formData.phone || 'N/A'}%0A` +
      `• *Details:* ${encodeURIComponent(formData.description || 'I would like to discuss a project.')}`;

    window.open(`https://wa.me/254700000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Top Header Bar */}
        <div className="px-6 py-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Request a Consultation & Proposal</h3>
              <p className="text-[11px] text-slate-500">Blackcess Softwares • Engineering Team Nairobi</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Inquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. A Blackcess lead architect will review your project requirements and get in touch within 2 to 4 business hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Us Instantly on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Pre-fill banner if coming from estimator */}
              {initialData && (
                <div className="p-3.5 rounded-xl bg-brand-50 border border-brand-200 text-xs text-brand-800 flex items-center justify-between font-semibold">
                  <span>Pre-filled with your Cost Estimator selections</span>
                  <span className="font-bold text-brand-600">{initialData.estimatedTotal}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Kamau"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Logistics Ltd"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.co.ke"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 712 345 678"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                  >
                    <option value="Custom Software & Web Application">Custom Software & Web App</option>
                    <option value="Safaricom Daraja M-Pesa Integration">M-Pesa / Mobile Money Integration</option>
                    <option value="POS & Retail Inventory System">POS & Inventory System</option>
                    <option value="Custom CRM / ERP Platform">Enterprise CRM / ERP</option>
                    <option value="Corporate Website & SEO">Corporate Website & SEO</option>
                    <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                  >
                    <option value="Under KES 50,000">Under KES 50,000</option>
                    <option value="KES 50,000 - 150,000">KES 50,000 - 150,000</option>
                    <option value="KES 150,000 - 350,000">KES 150,000 - 350,000</option>
                    <option value="KES 350,000+">KES 350,000+ (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Description & Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about the key workflows, features, or deadlines for your system..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 via-rose-600 to-brand-700 hover:from-brand-500 hover:to-rose-500 shadow-md shadow-brand-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quick WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-500 pt-1">
                🔒 We treat your business workflows and proprietary data with strict NDA confidentiality.
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}