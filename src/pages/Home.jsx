// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MessageCircle,
//   Star,
//   Clock,
//   MapPin,
//   Phone,
//   Instagram,
//   Facebook,
//   X,
//   Gift,
//   Send,
//   Heart,
//   ChevronRight,
//   ShoppingBag,
//   Award,
//   ShieldCheck,
// } from "lucide-react";

// const Home = () => {
//   const [showCoupon, setShowCoupon] = useState(false);
//   const [activeTab, setActiveTab] = useState("All");

//   useEffect(() => {
//     const timer = setTimeout(() => setShowCoupon(true), 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const whatsappLink = "https://wa.me/919999999999?text=";

//   return (
//     <div className="min-h-screen bg-[#FDFCFE] text-slate-900 selection:bg-pink-100">
//       {/* --- FLOATING NAV --- */}

//       {/* --- MODERN HERO --- */}
//       <section className="relative pt-32 pb-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
//   {/* Background blobs */}
//   <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-200/40 blur-[120px] rounded-full" />
//   <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-pink-200/40 blur-[120px] rounded-full" />

//   {/* Grid wrapper with safe max width */}
//   <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
//     {/* Left content */}
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
//         <Award size={14} /> Sagar's #1 Gift Boutique
//       </div>
//       <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
//         Gifts That <br />
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
//           Create Smiles.
//         </span>
//       </h1>
//       <p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed">
//         Premium collection of Teddies, Custom Keychains, and Wall Decor curated for your special moments.
//       </p>
//       <div className="flex flex-wrap gap-4">
//         <a
//           href={whatsappLink}
//           className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl hover:bg-slate-800 transition transform hover:-translate-y-1"
//         >
//           <MessageCircle fill="white" size={20} /> Order on WhatsApp
//         </a>
//       </div>
//     </motion.div>

//     {/* Right image */}
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       className="relative"
//     >
//       <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
//         <img
//           src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800"
//           className="w-full h-full object-cover -rotate-3 scale-110"
//           alt="Hero"
//         />
//       </div>
//       {/* Floating Card */}
//       <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
//         <div className="bg-green-100 p-3 rounded-2xl text-green-600">
//           <Star fill="currentColor" />
//         </div>
//         <div>
//           <p className="font-black text-slate-900">4.7/5.0</p>
//           <p className="text-xs text-slate-500">Customer Rating</p>
//         </div>
//       </div>
//     </motion.div>
//   </div>
// </section>


//       {/* --- CATEGORY TABS ---


//         {/* --- GRID --- */}

//       {/* --- REDESIGNED FOOTER HUB --- */}

//       {/* --- WHATSAPP BEAT --- */}

//       {/* --- PREMIUM POPUP --- */}
//       {/* <AnimatePresence><AnimatePresence> */}
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { motion } from 'framer-motion'; // Assuming you use Framer Motion for the bounce
import { Star } from 'lucide-react';

const Home = () => {
  return (
    <section className="bg-white relative overflow-hidden ">
      <div className="pl-24 pr-24 relative w-full h-screen py-12 flex flex-col md:flex-row items-center justify-between">

        {/* Text Area */}
        <div className="max-w-xl animate-fade-in z-10">
          <h1 className="text-[82px] font-serif leading-[0.95] text-[#33302E] mb-6">
            THE ART OF <br />
            <span className="italic text-[#B59461] font-normal tracking-tight">
              GIVING.
            </span>
          </h1>
          <p className="text-[#7A746E] text-xl font-light mb-6 tracking-wide">
            Curated elegance for every occasion — thoughtful gifts, timeless charm, and moments that matter.
          </p>
          <p className="text-[#7A746E] text-lg font-light mb-10 tracking-wide">
            Explore a collection designed to make every celebration unforgettable and every gesture meaningful.
          </p>
          <button className="px-12 py-4 bg-[#C5A371] text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#B59461] transition-all transform hover:scale-105 shadow-xl shadow-[#C5A371]/30">
            Shop Now
          </button>
        </div>


        {/* The Curved Image Mask Area */}
        <div className="relative mt-8 md:mt-0 group">
          <div className="w-[700px] h-[550px] bg-[#EAE7DE] rounded-tl-[280px] overflow-hidden shadow-2xl shadow-black/5 relative">
            <img
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800"
              alt="Gift Box"
              className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-110"
            />
            {/* Subtle Sparkle/Light effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Rating Card - Positioned relative to the image */}
          <div className="absolute -bottom-8 -left-12 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-4 ">
            <div className="bg-green-100 p-3 rounded-2xl text-green-600">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <p className="font-black text-slate-900 text-lg">4.7/5.0</p>
              <p className="text-xs text-slate-500 font-medium tracking-wide">Customer Rating</p>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};

export default Home;