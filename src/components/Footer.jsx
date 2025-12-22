import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Send, MessageCircle, Gift, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const whatsappLink = "https://wa.me/919999900000";

  return (
    <div className="w-full">
      {/* --- PREMIUM COLORED FOOTER --- */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-8 md:px-24 rounded-t-[3rem]">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif tracking-tight">
                GIFT <span className="text-[#B59461] italic">4 U.</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Sagar's premier destination for luxury corporate gifting and handcrafted personalized treasures.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#B59461] hover:text-black transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#B59461] hover:text-black transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#B59461] hover:text-black transition-all duration-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif text-[#B59461] mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Latest Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customized Gifts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Orders</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-serif text-[#B59461] mb-6">Reach Us</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#B59461] shrink-0" />
                  <span>Shop No. 4, Cyber Plaza, Civil Lines, Sagar, MP</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#B59461] shrink-0" />
                  <span>+91 99999 00000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#B59461] shrink-0" />
                  <span>hello@gift4u.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter/Action */}
            <div>
              <h4 className="text-lg font-serif text-[#B59461] mb-6">Special Offers</h4>
              <p className="text-gray-400 text-sm mb-4">Get updates on new arrivals and exclusive deals.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 py-3 px-4 rounded-xl outline-none focus:border-[#B59461] transition-all text-sm"
                />
                <button className="absolute right-2 top-1.5 p-1.5 bg-[#B59461] rounded-lg text-black hover:bg-white transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-gray-500 text-xs tracking-widest uppercase">
              © 2025 GIFT 4 U & Ankur Cyber Solution.
            </p>
            <div className="flex gap-8">
              <span className="text-gray-500 text-[10px] uppercase tracking-widest cursor-pointer hover:text-white" onClick={() => setShowCoupon(true)}>Member Privileges</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-widest">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
   <a 
  href={whatsappLink} 
  target="_blank" 
  rel="noreferrer" 
  className="fixed bottom-8 right-8 z-[100] group"
>
  {/* The Ping Animation for attention */}
  <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></span>
  
  <div className="relative bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center">
    {/* Authentic WhatsApp SVG Icon */}
    <svg 
      viewBox="0 0 24 24" 
      width="32" 
      height="32" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.078 11.969c0 2.112.551 4.173 1.597 5.987L0 24l6.152-1.614a11.816 11.816 0 005.892 1.586h.005c6.604 0 11.967-5.363 11.97-11.97a11.852 11.852 0 00-3.534-8.473" />
    </svg>
    
    {/* The Red Notification Dot */}
    <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></div>
  </div>
</a>

      {/* --- COUPON POPUP --- */}
      <AnimatePresence>
        {showCoupon && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#B59461]"></div>
              <button onClick={() => setShowCoupon(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                <X size={20} />
              </button>
              
              <div className="mb-4 inline-flex p-4 rounded-full bg-[#B59461]/10 text-[#B59461]">
                <Gift size={32} />
              </div>
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">Gift 4 U Club</h3>
              <p className="text-gray-500 text-sm mb-6">Enjoy 10% off your first luxury selection.</p>
              
              <input type="tel" placeholder="WhatsApp Number" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl mb-4 outline-none focus:ring-1 focus:ring-[#B59461]" />
              <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-[#B59461] transition-all">
                Get Discount
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Footer;