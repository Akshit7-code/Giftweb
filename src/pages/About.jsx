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
      <section className="relative min-h-screen flex items-center px-4 md:px-20 py-10 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">

          {/* Text */}
          <motion.div {...fadeIn}>

            <p className="flex items-center justify-center sm:justify-start text-[#B59461] text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] md:tracking-[0.5em] font-bold mb-3 gap-2 sm:gap-3">
  <span className="block w-4 sm:w-6 md:w-8 h-[1px] bg-[#B59461]"></span>
  Since 2024
</p>

            <h1 className="text-4xl md:text-7xl font-serif leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 text-center md:text-left">
              The <span className="italic">Soul of</span> <br /> Giving.
            </h1>
            <p className="text-lg md:text-xl font-light font-sans max-w-full md:max-w-md leading-relaxed text-gray-600 text-center md:text-left">
              We don’t just wrap boxes; we capture moments. Gift 4 U was built on the belief that a perfectly curated gift is a silent language of love and respect.
            </p>
          </motion.div>

          {/* Image */}
          <div className="relative w-full flex justify-center md:justify-end mt-8 md:mt-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="rounded-t-full overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl w-full max-w-md md:max-w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000"
                alt="Luxury Wrap"
                className="w-full h-[300px] sm:h-[400px] md:h-[530px] object-cover"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 left-1/2 md:-bottom-10 md:-left-10 transform -translate-x-1/2 md:translate-x-0 bg-[#1A1A1A] text-white p-6 md:p-8 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-center text-[10px] md:text-xs tracking-widest uppercase border border-yellow-500/30"
            >
              Curated with Intention
            </motion.div>
          </div>

        </div>
      </section>


      {/* 2. THE "CURATED WORLDS" STYLE GRID */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">
          <div className=" mb-10 sm:16 md:16">
            <p className="text-[#B59461] text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold mb-3 flex items-center gap-3">
              <span className="w-6 md:w-8 h-[1px] bg-[#B59461]"></span>
              Handpicked Excellence
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-[48px] font-serif text-[#33302E] leading-tight tracking-tight">Our Heritage</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-4">
              <div className="h-80 rounded-2xl overflow-hidden border border-[#B59461] p-2">
                <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800" className="rounded-2xl w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
              <h4 className="text-xl font-serif pl-2">Exceptional Sourcing</h4>
              <p className="font-light text-gray-500 font-sans pl-2">We travel globally to find artisans who define 'perfection'.</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="space-y-4 md:mt-20">
              <div className="h-80 rounded-2xl overflow-hidden border border-[#B59461] p-2">
                <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800" className="rounded-2xl w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
              <h4 className="text-xl font-serif pl-2">Hand-Wrapped</h4>
              <p className="font-light text-gray-500 font-sans pl-2">Every ribbon is tied by hand in our signature gold-leaf style.</p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="space-y-4">
              <div className="h-80 rounded-2xl overflow-hidden border border-[#B59461] p-2">
                <img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800" className="rounded-2xl w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
              <h4 className="text-xl font-serif pl-2">Global Delivery</h4>
              <p className="font-light text-gray-500 font-sans pl-2">Luxury knows no borders. We ship to over 120 countries.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE "GOLDEN RATIO" BANNER (Dark Theme) */}
      <section className="bg-[#1A1A1A] py-20 sm:py-28 md:py-32 relative overflow-hidden">

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 md:w-[600px] h-48 sm:h-96 md:h-[600px] bg-yellow-900/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-white font-serif leading-snug sm:leading-tight md:leading-tight mb-8 sm:mb-10">
              Gift-giving is a <span className="text-yellow-500">masterpiece</span> that begins with a thought and ends with an unforgettable memory.
            </h2>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 md:gap-12 border-t border-white/10 pt-8 sm:pt-12">
              {/* Gifts Delivered */}
              <div className="flex flex-col items-center mb-6 sm:mb-0">
                <p className="text-2xl sm:text-3xl md:text-3xl text-white font-serif">50k+</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2 font-sans text-center">Gifts Delivered</p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] bg-white/10 h-8 md:h-12"></div>

              {/* Handmade */}
              <div className="flex flex-col items-center">
                <p className="text-2xl sm:text-3xl md:text-3xl text-white font-serif">100%</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2 font-sans text-center">Handmade</p>
              </div>
            </div>
          </motion.div>
        </div>

      </section>



      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24 items-center">

          {/* Images */}
          <div className="relative order-2 md:order-1 w-full flex justify-center md:justify-start mt-8 md:mt-0">
            {/* Main Image */}
            <motion.div
              whileInView={{ y: -50 }}
              transition={{ duration: 2 }}
              className="w-full sm:w-3/4 md:w-2/3 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600"
                alt="Detail"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Top-right overlapping image: hidden on small devices */}
            <motion.div
              whileInView={{ y: 50 }}
              transition={{ duration: 2 }}
              className="hidden sm:block absolute top-1/4 right-0 w-1/2 sm:w-2/5 md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=600"
                alt="Gold"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Text & Stats */}
          <motion.div {...fadeIn} className="order-1 md:order-2 space-y-6 sm:space-y-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl italic text-center md:text-left">
              Uncompromising Quality
            </h3>
            <p className="font-sans text-gray-500 font-light text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
              Every ribbon is measured. Every box is inspected. We treat your
              sentiment as if it were our own, ensuring that when they open
              a Gift 4 U package, they feel the prestige of your choice.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-6 sm:gap-12 pt-6 items-center md:items-start">

              {/* Artisans */}
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-2xl sm:text-3xl md:text-3xl font-semibold text-[#B59461]">12k+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider font-sans text-gray-400 text-center sm:text-left mt-1">Artisans Partnered</p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] bg-gray-500 h-10"></div>

              {/* Concierge */}
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-2xl sm:text-3xl md:text-3xl font-semibold text-[#B59461]">24hr</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider font-sans text-gray-400 text-center sm:text-left mt-1">Concierge Support</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;




