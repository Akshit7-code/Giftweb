import React, { useState } from 'react';
import { Instagram, Facebook, ChevronRight, MapPin, Phone, ShieldCheck, MessageCircle, Gift } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const whatsappLink = "https://wa.me/919999900000"; // replace with your number

  return (
    <div>
      {/* --- REDESIGNED FOOTER HUB --- */}
      <footer className=" bg-slate-900 text-white pt-20 pb-10 rounded-t-[4rem] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black mb-6 tracking-tighter">
                ANKUR <span className="text-pink-500">GIFTS.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Elevating the gifting experience in Sagar with premium quality and personalized touch.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition"><Instagram size={20}/></a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition"><Facebook size={20}/></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Quick Hub</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#" className="hover:text-white transition flex items-center gap-2"><ChevronRight size={14}/> Shop All Gifts</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center gap-2"><ChevronRight size={14}/> Customized Items</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center gap-2"><ChevronRight size={14}/> Festival Offers</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center gap-2"><ChevronRight size={14}/> Corporate Gifting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Find Us</h4>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-500"><MapPin size={20}/></div>
                  <p className="text-slate-400 text-sm leading-relaxed">Cyber Plaza, Shop No. 4, <br/>Civil Lines, Sagar, MP 470001</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500"><Phone size={20}/></div>
                  <p className="text-slate-400 text-sm leading-relaxed">+91 99999 00000 <br/>+91 88888 11111</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Store Hours</h4>
              <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                  <span className="text-slate-400">Mon - Sat</span>
                  <span className="font-bold">10AM - 9PM</span>
                </div>
                <div className="flex justify-between items-center text-pink-500">
                  <span className="font-bold">Sunday</span>
                  <span className="font-bold uppercase text-[10px] bg-pink-500/10 px-2 py-1 rounded-md tracking-widest">Special Hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">© 2025 Ankur Cyber Solution & Gift 4 U. All rights reserved.</p>
            <div className="flex items-center gap-6 opacity-40 grayscale grayscale-100">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-black tracking-widest">SECURE PAYMENT UI</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP BUTTON --- */}
      <a href={whatsappLink} className="fixed bottom-8 right-8 z-[100] group">
        <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></span>
        <div className="relative bg-[#25D366] text-white p-5 rounded-[2rem] shadow-2xl shadow-green-200 group-hover:scale-110 transition-transform">
          <MessageCircle size={30} fill="white" />
        </div>
      </a>

      {/* --- COUPON POPUP --- */}
      <AnimatePresence>
        {showCoupon && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-xl flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-[3rem] p-10 max-w-sm w-full shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
              <div className="mb-6 inline-flex p-5 rounded-[2rem] bg-pink-50 text-pink-500"><Gift size={40} /></div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Claim 10% Off</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">Join our WhatsApp squad and get an instant discount on your first order.</p>
              <input type="tel" placeholder="WhatsApp Number" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-pink-200 transition" />
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-slate-800 shadow-xl transition active:scale-95">SEND ME COUPON</button>
              <button onClick={() => setShowCoupon(false)} className="mt-6 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-600 transition">Maybe Later</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Footer;
