import React from 'react';
import { ArrowRight } from 'lucide-react';

const SignatureCollection = ({ products }) => {
  const editorialProducts = [
    { name: "Versailles Pen", price: "₹2,400", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800" },
    { name: "Noir Notebook", price: "₹1,800", img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800" },
    { name: "Heritage Box", price: "₹5,200", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800" },
    { name: "Gold Leaf Set", price: "₹3,100", img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800" },
    { name: "Crystal Inkwell", price: "₹1,200", img: "https://images.unsplash.com/photo-1610444583737-9717fc397514?w=800" },
    { name: "Silk Wrap Hamper", price: "₹7,800", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800" },
    { name: "Leather Portfolio", price: "₹4,200", img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800" },
    { name: "Signature Wax Seal", price: "₹950", img: "https://images.unsplash.com/photo-1586075010644-875fbf869264?w=800" },
  ];

  const items = products && products.length >= 8 ? products.slice(0, 8) : editorialProducts;

  return (
    <section className="min-h-screen md:h-screen w-full bg-[#FAFAFA] overflow-hidden flex flex-col py-10 md:py-16 px-4 md:px-14">
      <div className="max-w-[1560px] mx-auto w-full h-full flex flex-col px-2 md:px-14">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8 md:mb-10 flex-shrink-0">
          <div>
            <p className="text-[#B59461] text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold mb-3 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B59461]"></span>
              Editorial Series
            </p>
            <h2 className="text-[32px] md:text-[48px] font-serif text-[#33302E] leading-none tracking-tighter">
              Signature <span className="italic font-normal">Collection</span>
            </h2>
          </div>

          <button className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-2 hover:border-[#B59461] transition-all self-start md:self-auto">
            Explore anthology
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </header>

        {/* GRID */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 md:gap-6 min-h-0">

          {/* Featured Vertical */}
          <div className="md:col-span-3 md:row-span-6 relative overflow-hidden group shadow-sm rounded-sm h-[420px] md:h-auto">
            <img src={items[2].img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt="" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-lg md:text-xl font-serif italic mb-1 drop-shadow-md">{items[2].name}</h3>
              <p className="text-[9px] tracking-[0.4em] uppercase font-medium text-white/90">Heritage Edition</p>
            </div>
          </div>

          {/* Hero */}
          <div className="md:col-span-6 md:row-span-3 relative overflow-hidden group shadow-sm rounded-sm h-[260px] md:h-auto">
            <img src={items[6].img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5"></div>
          </div>

          {/* Top Right */}
          <div className="md:col-span-3 md:row-span-2 relative overflow-hidden bg-white flex items-center justify-center p-6 md:p-8 rounded-sm shadow-sm h-[240px] md:h-auto">
            <img src={items[0].img} className="w-full h-full object-contain mix-blend-multiply" alt="" />
            <p className="absolute bottom-4 text-[10px] font-serif italic text-[#33302E] opacity-60">
              {items[0].name}
            </p>
          </div>

          {/* Text Card */}
          <div className="md:col-span-3 md:row-span-2 bg-[#1A1A1A] p-6 md:p-8 flex flex-col justify-center items-center text-center rounded-sm h-[220px] md:h-auto">
            <span className="text-[#B59461] text-[9px] uppercase tracking-[0.5em] mb-4">
              Craftsmanship
            </span>
            <h4 className="text-white font-serif text-xl md:text-2xl italic leading-tight">
              Objects of <br /> Desire
            </h4>
            <div className="w-10 h-[1px] bg-[#B59461]/40 mt-6"></div>
          </div>

          {/* Bottom Mosaic */}
          <div className="md:col-span-3 md:row-span-3 relative overflow-hidden group rounded-sm h-[220px] md:h-auto">
            <img src={items[5].img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
          </div>

          <div className="md:col-span-3 md:row-span-3 relative overflow-hidden group rounded-sm h-[220px] md:h-auto">
            <img src={items[1].img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
          </div>

          <div className="md:col-span-3 md:row-span-2 relative overflow-hidden shadow-sm rounded-sm h-[220px] md:h-auto">
            <img src={items[5].img} className="w-full h-full object-cover" alt="" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
