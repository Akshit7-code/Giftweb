import React from 'react';
import { Send, Mail, Phone, Globe } from 'lucide-react';

const ContactPage = () => {
  return (
    // mt-20 accounts for your 80px sticky header
    <main className="mt-20 min-h-[calc(100vh-80px)] bg-white text-[#1A1A1A] font-sans">

      {/* Subtle Top Divider */}
      <div className="w-full h-[1px] bg-[#E5E1D3]" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Section 1: Branding & Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <p className="text-[#B59461] text-[10px] uppercase tracking-[0.5em] font-bold mb-3 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#B59461]"></span>
                Connect with us
              </p>
              {/* <h2 className="text-[#C5A358] uppercase tracking-[0.3em] text-xs font-bold">Connect with us</h2> */}
              <h1 className="text-5xl md:text-6xl font-serif leading-tight text-black">
                Personalized <br />
                <span className="text-[#C5A358]">Service.</span>
              </h1>
              <p className="text-gray-500 font-light leading-relaxed max-w-sm text-lg">
                Experience the art of giving with our dedicated concierge team. We are here to assist with every detail.
              </p>
            </div>

            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F1EFE7] flex items-center justify-center group-hover:bg-[#C5A358] transition-all duration-300">
                  <Mail className="text-[#C5A358] group-hover:text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email</p>
                  <p className="text-sm font-medium">concierge@gift4u.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#F1EFE7] flex items-center justify-center group-hover:bg-[#C5A358] transition-all duration-300">
                  <Phone className="text-[#C5A358] group-hover:text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Phone</p>
                  <p className="text-sm font-medium">+1 (800) 443-8482</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Streamlined Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F9F9F9] border border-[#E5E1D3] p-8 md:p-12 rounded-3xl shadow-sm">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2 group">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-700 font-bold group-focus-within:text-[#C5A358] transition-colors">First Name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="bg-transparent border-b border-[#ababab] pb-3 outline-none focus:border-[#C5A358] transition-all font-light placeholder:text-gray-400 text-lg"
                    />
                  </div>

                  <div className="flex flex-col gap-2 group">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-700 font-bold group-focus-within:text-[#C5A358] transition-colors">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="bg-transparent border-b border-[#ababab] pb-3 outline-none focus:border-[#C5A358] transition-all font-light placeholder:text-gray-400 text-lg"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-700 font-bold group-focus-within:text-[#C5A358] transition-colors">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="bg-transparent border-b border-[#ababab] pb-3 outline-none focus:border-[#C5A358] transition-all font-light placeholder:text-gray-400 text-lg"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-700 font-bold group-focus-within:text-[#C5A358] transition-colors">Your Message</label>
                  <textarea
                    rows="4"
                    placeholder="How can our concierge assist you today?"
                    className="bg-transparent border-b border-[#ababab] pb-3 outline-none focus:border-[#C5A358] transition-all font-light resize-none placeholder:text-gray-400 text-lg"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button className="w-full md:w-auto bg-[#1A1A1A] hover:bg-[#C5A358] text-white px-12 py-5 rounded-full flex items-center justify-center gap-4 transition-all duration-500 group shadow-xl hover:shadow-[#C5A358]/20">
                    <span className="uppercase tracking-[0.2em] text-xs font-bold">Submit Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Break Line */}
      <div className="w-full h-[1px] bg-[#E5E1D3]" />
    </main>
  );
};

export default ContactPage;