import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Smartphone, CheckCircle, RefreshCw, Lock, Terminal, Sparkles, Send } from 'lucide-react';

export default function DarajaDemo() {
  const [phone, setPhone] = useState('0712345678');
  const [amount, setAmount] = useState('1500');
  const [stage, setStage] = useState('idle'); // 'idle' | 'pushing' | 'prompt' | 'verifying' | 'success'
  const [pin, setPin] = useState('');
  const [receiptCode, setReceiptCode] = useState('');

  const handleStartPush = (e) => {
    e.preventDefault();
    if (!phone || !amount) return;
    setStage('pushing');
    
    // Simulate Daraja token generation & STK push initiation
    setTimeout(() => {
      setStage('prompt');
    }, 1200);
  };

  const handlePinSubmit = () => {
    setStage('verifying');
    
    // Simulate webhook response
    setTimeout(() => {
      const randomReceipt = 'RK' + Math.floor(10000000 + Math.random() * 90000000);
      setReceiptCode(randomReceipt);
      setStage('success');

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1500);
  };

  const handleReset = () => {
    setStage('idle');
    setPin('');
    setReceiptCode('');
  };

  return (
    <section id="mpesa-demo" className="py-24 bg-[#FAFAFC] relative overflow-hidden border-t border-slate-200/80">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Experience Our Safaricom M-Pesa Engine in Real Time
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            See how Blackcess Softwares engineers frictionless, zero-failure checkout flows with instant callback validation. Test our simulated STK push below:
          </p>
        </div>

        {/* Demo Grid: Config Form & Interactive Mobile Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Test Configuration Form & Live Logs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                Trigger Test Checkout
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Enter simulated details to test the STK Push pipeline. No actual money is debited.
              </p>

              <form onSubmit={handleStartPush} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Customer Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={stage !== 'idle'}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 disabled:opacity-60"
                      placeholder="0712345678"
                    />
                    <span className="absolute right-3 top-3 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                      Safaricom 254
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Amount (KES)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={stage !== 'idle'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 disabled:opacity-60"
                    placeholder="1500"
                  />
                </div>

                {stage === 'idle' ? (
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Trigger STK Push Prompt</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset Simulator</span>
                  </button>
                )}
              </form>
            </div>

            {/* Architecture specs card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-mono text-emerald-700 font-semibold">
                <Terminal className="w-4 h-4" />
                <span>Daraja 2.0 Webhook Lifecycle</span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Our custom M-Pesa microservice processes callbacks with automatic retry queues, SSL signature verification, and instant push notifications to your ERP or POS database in under 350ms.
              </p>
            </div>
          </div>

          {/* Right Column: Simulated Mobile Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-[300px] sm:w-[320px] rounded-[36px] bg-[#0A0E18] border-[8px] border-slate-300 shadow-2xl p-4 relative overflow-hidden flex flex-col justify-between min-h-[520px]">
              
              {/* Speaker / Camera Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900 inline-block mr-2"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700 inline-block"></div>
              </div>

              {/* Screen Content based on state */}
              <div className="flex-1 flex flex-col justify-center">
                
                {stage === 'idle' && (
                  <div className="text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center text-slate-400">
                      <Smartphone className="w-8 h-8" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Phone In Standby</h4>
                    <p className="text-xs text-slate-400">
                      Click "Trigger STK Push Prompt" on the left to test the live user experience.
                    </p>
                  </div>
                )}

                {stage === 'pushing' && (
                  <div className="text-center p-6 space-y-4">
                    <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
                    <h4 className="text-sm font-bold text-white">Connecting to Safaricom...</h4>
                    <p className="text-xs font-mono text-slate-400">Dispatching Lipa Na M-Pesa Online STK Push</p>
                  </div>
                )}

                {stage === 'prompt' && (
                  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-xl space-y-4 animate-in fade-in zoom-in-95">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">M-Pesa STK Prompt</span>
                    </div>

                    <div className="text-xs text-slate-200 leading-relaxed font-mono">
                      Do you want to pay <span className="font-bold text-emerald-400">KES {amount}</span> to <span className="font-bold text-white">BLACKCESS SOFTWARES</span> Acc: <span className="text-amber-300">DEMO-01</span>?
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">Enter M-Pesa PIN (Any 4 digits):</label>
                      <input
                        type="password"
                        maxLength={4}
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="••••"
                        className="w-full bg-dark-950 border border-slate-700 rounded-lg py-2 px-3 text-center text-lg font-mono tracking-widest text-white focus:outline-none focus:border-emerald-400"
                        autoFocus
                      />
                    </div>

                    <button
                      onClick={handlePinSubmit}
                      className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white uppercase tracking-wider"
                    >
                      Send PIN
                    </button>
                  </div>
                )}

                {stage === 'verifying' && (
                  <div className="text-center p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-brand-600/20 border border-brand-500/40 flex items-center justify-center mx-auto text-brand-400">
                      <Lock className="w-6 h-6 animate-pulse" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Validating PIN with Safaricom</h4>
                    <p className="text-[11px] font-mono text-slate-400">Awaiting encrypted webhook callback...</p>
                  </div>
                )}

                {stage === 'success' && (
                  <div className="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-5 text-center space-y-3 animate-in fade-in zoom-in-95">
                    <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Payment Confirmed!</h4>
                      <p className="text-[11px] font-mono text-emerald-300 mt-1">Receipt: {receiptCode}</p>
                    </div>

                    <div className="p-3 bg-dark-950/80 rounded-xl text-left font-mono text-[10px] text-slate-300 space-y-1 border border-slate-800">
                      <div>Amount: <span className="text-white">KES {amount}.00</span></div>
                      <div>Recipient: <span className="text-white">Blackcess Softwares</span></div>
                      <div>Callback Latency: <span className="text-emerald-400">240ms</span></div>
                      <div>Status: <span className="text-emerald-400">SUCCESS_0</span></div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white underline pt-1"
                    >
                      Run another simulation
                    </button>
                  </div>
                )}

              </div>

              {/* Bottom Home Indicator */}
              <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-4"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}