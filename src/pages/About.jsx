import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] overflow-hidden">
      {/* 1. HERO SECTION: Split Screen with Floating Elements */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-gold-600 font-sans tracking-[0.4em] uppercase text-sm mb-4">Since 2024</h2>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
              The <span className="italic">Soul</span> <br /> of Giving.
            </h1>
            <p className="text-xl font-light font-sans max-w-md leading-relaxed text-gray-600">
              We don’t just wrap boxes; we capture moments. Gift 4 U was built on the belief that a perfectly curated gift is a silent language of love and respect.
            </p>
          </motion.div>

          <div className="relative">
            {/* The Main Arched Image (Matches your UI) */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="rounded-t-full overflow-hidden border-[12px] border-white shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000" 
                alt="Luxury Wrap" 
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
            
            {/* Floating "Badge" Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-[#1A1A1A] text-white p-8 rounded-full w-40 h-40 flex items-center text-center text-xs tracking-widest uppercase border border-yellow-500/30"
            >
              Curated with Intention
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE "CURATED WORLDS" STYLE GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h3 className="text-4xl font-serif italic">Our Heritage</h3>
            <div className="h-[1px] flex-grow mx-10 bg-gray-200 hidden md:block"></div>
            <p className="font-sans uppercase text-xs tracking-widest text-gray-400">01 / 03</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-4">
              <div className="h-80 bg-gray-100 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
              <h4 className="text-xl font-serif">Exceptional Sourcing</h4>
              <p className="font-light text-gray-500 font-sans">We travel globally to find artisans who define 'perfection'.</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="space-y-4 md:mt-20">
              <div className="h-80 bg-gray-100 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
              <h4 className="text-xl font-serif">Hand-Wrapped</h4>
              <p className="font-light text-gray-500 font-sans">Every ribbon is tied by hand in our signature gold-leaf style.</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="space-y-4">
              <div className="h-80 bg-gray-100 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
              <h4 className="text-xl font-serif">Global Delivery</h4>
              <p className="font-light text-gray-500 font-sans">Luxury knows no borders. We ship to over 120 countries.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE "GOLDEN RATIO" BANNER (Dark Theme) */}
      <section className="bg-[#1A1A1A] py-32 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-900/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl text-white font-serif leading-tight mb-10">
              Gift-giving is a <span className="text-yellow-500">masterpiece</span> that begins with a thought and ends with an unforgettable memory.
            </h2>
            <div className="flex justify-center gap-12 border-t border-white/10 pt-12">
              <div>
                <p className="text-white text-3xl font-serif">50k+</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2 font-sans">Gifts Delivered</p>
              </div>
              <div className="w-[1px] bg-white/10 h-12"></div>
              <div>
                <p className="text-white text-3xl font-serif">100%</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2 font-sans">Handmade</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
         <div className="relative order-2 md:order-1">
           <motion.div 
              whileInView={{ y: -50 }} 
              transition={{ duration: 2 }}
              className="w-2/3 rounded-2xl overflow-hidden shadow-xl"
            >
              <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600" alt="Detail" />
            </motion.div>
            <motion.div 
              whileInView={{ y: 50 }} 
              transition={{ duration: 2 }}
              className="absolute top-1/4 right-0 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=600" alt="Gold" />
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="order-1 md:order-2 space-y-8">
            <h3 className="text-5xl italic">Uncompromising Quality</h3>
            <p className="font-sans text-gray-500 font-light text-xl leading-relaxed">
              Every ribbon is measured. Every box is inspected. We treat your 
              sentiment as if it were our own, ensuring that when they open 
              a Gift 4 U package, they feel the prestige of your choice.
            </p>
            <div className="flex gap-8 pt-6">
                <div>
                    <p className="text-3xl font-light">12k+</p>
                    <p className="text-[10px] uppercase tracking-tighter font-sans">Artisans Partnered</p>
                </div>
                <div className="w-[1px] bg-gray-200"></div>
                <div>
                    <p className="text-3xl font-light">24hr</p>
                    <p className="text-[10px] uppercase tracking-tighter font-sans">Concierge Support</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;




