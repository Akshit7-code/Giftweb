import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-brandSand aspect-[3/4]">
        <img 
          src={product.img} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="bg-white text-brandCharcoal px-4 py-2 text-xs font-bold rounded-sm uppercase tracking-tighter">
            View Details
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-start px-1">
        <div>
          <h3 className="text-xs font-serif font-bold uppercase">{product.name}</h3>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">{product.price}</p>
        </div>
        <div className="w-2 h-2 rounded-full border border-brandGold" />
      </div>
    </div>
  );
};

export default ProductCard;