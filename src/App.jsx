import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, Star, Clock, MapPin, Phone, 
  Instagram, Facebook, X, Gift, Send, Heart, 
  ChevronRight, ShoppingBag, Award, ShieldCheck
} from 'lucide-react';

const App = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setShowCoupon(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = "https://wa.me/919999999999?text=";

  const categories = [
    { name: "All", icon: "✨" },
    { name: "Teddies", icon: "🧸" },
    { name: "Keychains", icon: "🔑" },
    { name: "Wall Hanging", icon: "🖼️" },
    { name: "Customized", icon: "🎨" }
  ];

  const products = [
    { id: 1, cat: "Teddies", name: "Classic Blush Bear", price: "₹899", img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500" },
    { id: 2, cat: "Keychains", name: "Gold-Plated Initial", price: "₹249", img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500" },
    { id: 3, cat: "Wall Hanging", name: "Boho Macrame Large", price: "₹1,250", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2X5L5NwGFkOA04W7HTVmHSlINAwA6sA_U3Q&s" },
    { id: 4, cat: "Teddies", name: "Panda Joy Pillow", price: "₹599", img: "https://m.media-amazon.com/images/I/51wcRJ9TdOL._AC_UF1000,1000_QL80_.jpg" },
    { id: 5, cat: "Keychains", name: "Vintage Leather Tag", price: "₹199", img: "https://img.freepik.com/free-vector/realistic-leather-badges-labels-collection_1284-23448.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 6, cat: "Customized", name: "Photo Night Lamp", price: "₹1,499", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500" },
  ];

  const filteredProducts = activeTab === "All" ? products : products.filter(p => p.cat === activeTab);

  return (
    <div className="min-h-screen bg-[#FDFCFE] text-slate-900 selection:bg-pink-100">
      
      {/* --- FLOATING NAV --- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl shadow-purple-100/50 rounded-3xl px-6 py-3 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-black text-xl tracking-tighter bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">ANKUR GIFTS</span>
          <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 -mt-1 uppercase">Cyber Solution</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-slate-900 text-white p-2.5 rounded-2xl shadow-lg hover:scale-105 transition"><ShoppingBag size={18}/></button>
        </div>
      </nav>

      {/* --- MODERN HERO --- */}
      <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-200/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-pink-200/40 blur-[120px] rounded-full" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <Award size={14} /> Sagar's #1 Gift Boutique
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Gifts That <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Create Smiles.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed">
              Premium collection of Teddies, Custom Keychains, and Wall Decor curated for your special moments.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappLink} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl hover:bg-slate-800 transition transform hover:-translate-y-1">
                <MessageCircle fill="white" size={20}/> Order on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800" className="w-full h-full object-cover -rotate-3 scale-110" alt="Hero" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-green-100 p-3 rounded-2xl text-green-600"><Star fill="currentColor" /></div>
              <div>
                <p className="font-black text-slate-900">4.7/5.0</p>
                <p className="text-xs text-slate-500">Customer Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CATEGORY TABS --- */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Explore Collections</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === cat.name 
                  ? "bg-slate-900 text-white shadow-xl scale-105" 
                  : "bg-white text-slate-400 border border-slate-100 hover:border-pink-200"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <motion.div layout key={prod.id} className="group bg-white rounded-[2.5rem] p-4 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                <img src={prod.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={prod.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-pink-500 hover:bg-pink-500 hover:text-white transition shadow-xl"><Heart size={20}/></button>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{prod.cat}</span>
                  <div className="flex items-center text-yellow-500 font-bold text-sm"><Star size={14} fill="currentColor"/> 4.7</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{prod.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">{prod.price}</span>
                  <a href={whatsappLink} className="bg-slate-100 p-4 rounded-2xl group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                    <MessageCircle size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- REDESIGNED FOOTER HUB --- */}
      <footer className="mt-20 bg-slate-900 text-white pt-20 pb-10 rounded-t-[4rem] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black mb-6 tracking-tighter">ANKUR <span className="text-pink-500">GIFTS.</span></h2>
              <p className="text-slate-400 leading-relaxed mb-8">Elevating the gifting experience in Sagar with premium quality and personalized touch.</p>
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

      {/* --- WHATSAPP BEAT --- */}
      <a href={whatsappLink} className="fixed bottom-8 right-8 z-[100] group">
        <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></span>
        <div className="relative bg-[#25D366] text-white p-5 rounded-[2rem] shadow-2xl shadow-green-200 group-hover:scale-110 transition-transform">
          <MessageCircle size={30} fill="white" />
        </div>
      </a>

      {/* --- PREMIUM POPUP --- */}
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

export default App;