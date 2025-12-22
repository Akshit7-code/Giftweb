import React, { useState, useEffect, useRef } from "react";

const products = [
  { name: "Leather Pen Set", description: "Premium handcrafted leather pen set with an elegant finish.", originalPrice: "₹1500", price: "₹1200", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800", whatsappLink: "https://wa.me/919999900000" },
  { name: "Executive Notebook", description: "Elegant leather notebook for professionals with extra durable stitching and premium paper quality.", originalPrice: "₹1000", price: "₹800", img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500", whatsappLink: "https://wa.me/919999900000" },
  { name: "Gift Hamper", description: "Polished & professional gift hamper containing a curated selection of luxury items.", originalPrice: "₹3000", price: "₹2500", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800", whatsappLink: "https://wa.me/919999900000" },
  { name: "Luxury Notebook", description: "Premium notebook with leather cover, perfect for journaling and sketching.", originalPrice: "₹1200", price: "₹950", img: "https://images.unsplash.com/photo-1619747932281-d1e3edc02032?w=800", whatsappLink: "https://wa.me/919999900000" },
  { name: "Planner Set", description: "Daily planner with premium finish for organized living and productivity tracking.", originalPrice: "₹1100", price: "₹900", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800", whatsappLink: "https://wa.me/919999900000" },
];

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.12.62 4.08 1.68 5.72L2 22l4.38-1.62c1.57 1.04 3.5 1.66 5.66 1.66 5.56 0 10.04-4.48 10.04-10.04S17.6 2 12.04 2zm5.53 14.72c-.24.67-1.4 1.3-1.98 1.38-.52.08-1.15.12-2.57-.55-2.09-1.03-3.45-3.61-3.56-3.77-.12-.16-1.07-1.41-1.07-2.7s.64-1.9.87-2.17c.23-.27.5-.33.67-.33.17 0 .33 0 .48.01.15.01.35-.06.55.41.2.47.67 1.63.73 1.75.06.12.1.25.02.41-.08.17-.12.28-.23.44-.12.16-.25.34-.36.46-.12.12-.24.25-.1.49.14.24.61 1.01 1.32 1.63.91.8 1.67 1.04 1.92 1.16.25.12.39.1.53-.06.14-.16.61-.7.77-.95.16-.25.33-.2.55-.12.22.08 1.38.65 1.61.77.22.12.36.18.41.28.06.1.06.58-.18 1.25z" />
  </svg>
);

const ProductCards = () => {
  const visibleCount = 4;
  const extendedProducts = [...products, ...products, ...products];
  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (currentIndex === 0 || currentIndex === extendedProducts.length - visibleCount) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(products.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, extendedProducts.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  return (
    <div className="max-w-[1530px] mx-auto bg-white py-16 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        <h2 className="text-[38px] font-serif text-[#1A1A1A] mb-14 px-14 text-center md:text-left tracking-tight">
          Trending Now
        </h2>

        <div className="relative px-10">
          <button onClick={prevSlide} className="absolute left-0 top-[40%] -translate-y-1/2 z-10 bg-white border border-gray-100 p-3 rounded-full shadow-sm hover:shadow-md transition-all text-[#333]">
            &#8592;
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-[40%] -translate-y-1/2 z-10 bg-white border border-gray-100 p-3 rounded-full shadow-sm hover:shadow-md transition-all text-[#333]">
            &#8594;
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex transition-transform ${isTransitioning ? "duration-500 ease-in-out" : "duration-0"}`}
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {extendedProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="px-3 flex-shrink-0" 
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="group bg-[#FCFCFA] rounded-xl border border-[#F0F0E8] flex flex-col h-full transition-all duration-300 overflow-hidden hover:shadow-lg">
                    
                    {/* Image Section */}
                    <div className="h-52 w-full overflow-hidden bg-gray-100">
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-110" 
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col flex-grow bg-white">
                      <h3 className="text-lg font-serif text-[#1A1A1A] font-bold mb-1 line-clamp-1 italic">
                        {product.name}
                      </h3>
                      
                      <p className="text-[#666] text-xs mb-4 line-clamp-2 min-h-[32px] italic leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="mt-auto flex items-end justify-between">
                        <div>
                          <div className="flex flex-col mb-1">
                            <span className="text-gray-400 line-through text-[10px]">{product.originalPrice}</span>
                            <span className="text-[#B59461] font-bold text-xl leading-none">{product.price}</span>
                          </div>
                        </div>
                        
                        {/* Circular WhatsApp Button */}
                        <a
                          href={product.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full transition-transform duration-300 hover:scale-110 shadow-md"
                        >
                          <WhatsAppIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;