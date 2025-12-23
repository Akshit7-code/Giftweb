import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { name: "Leather Pen Set", description: "Premium handcrafted leather pen set with an elegant finish.", originalPrice: "₹1500", price: "₹1200", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800" },
  { name: "Executive Notebook", description: "Elegant leather notebook for professionals with extra durable stitching and premium paper quality.", originalPrice: "₹1000", price: "₹800", img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500" },
  { name: "Gift Hamper", description: "Polished & professional gift hamper containing a curated selection of luxury items.", originalPrice: "₹3000", price: "₹2500", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800" },
  { name: "Luxury Notebook", description: "Premium notebook with leather cover, perfect for journaling and sketching.", originalPrice: "₹1200", price: "₹950", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800" },
  { name: "Planner Set", description: "Daily planner with premium finish for organized living and productivity tracking.", originalPrice: "₹1100", price: "₹900", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800" },
];

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.12.62 4.08 1.68 5.72L2 22l4.38-1.62c1.57 1.04 3.5 1.66 5.66 1.66 5.56 0 10.04-4.48 10.04-10.04S17.6 2 12.04 2zm5.53 14.72c-.24.67-1.4 1.3-1.98 1.38-.52.08-1.15.12-2.57-.55-2.09-1.03-3.45-3.61-3.56-3.77-.12-.16-1.07-1.41-1.07-2.7s.64-1.9.87-2.17c.23-.27.5-.33.67-.33.17 0 .33 0 .48.01.15.01.35-.06.55.41.2.47.67 1.63.73 1.75.06.12.1.25.02.41-.08.17-.12.28-.23.44-.12.16-.25.34-.36.46-.12.12-.24.25-.1.49.14.24.61 1.01 1.32 1.63.91.8 1.67 1.04 1.92 1.16.25.12.39.1.53-.06.14-.16.61-.7.77-.95.16-.25.33-.2.55-.12.22.08 1.38.65 1.61.77.22.12.36.18.41.28.06.1.06.58-.18 1.25z" />
  </svg>
);

const ProductCards = () => {
  // 🔹 ONLY CHANGE: visibleCount logic
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [productname, setproductname] = useState("");
  const message = `Hello, i want to purchases this product ${productname}`;
  const whatsappLink = `https://wa.me/${919691111098}?text=${encodeURIComponent(message)}`;

  const extendedProducts = [...products, ...products, ...products];

  // Start at the beginning of the second set
  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Handle the instant "jump" when hitting the boundaries
  const handleTransitionEnd = () => {
    if (currentIndex >= products.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - products.length);
    } else if (currentIndex < products.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + products.length);
    }
  };

  // Re-enable transitions after the instant jump
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 10);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // 🔹 NEW: update visibleCount on resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="max-w-[1630px] mx-auto bg-white overflow-hidden
  py-16 md:py-22
  px-4 sm:px-6 md:px-8
">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6">

        {/* --- HEADER --- */}
        <div className="
      mb-12 md:mb-16
      px-0 sm:px-6 md:px-14
      flex flex-col items-center md:items-start
    ">
          <p className="text-[#B59461] text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold mb-3 flex items-center gap-3">
            <span className="w-6 md:w-8 h-[1px] bg-[#B59461]"></span>
            Most Coveted Pieces
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-serif text-[#1A1A1A] tracking-tighter leading-none">
            Trending <span className="italic font-normal">Now</span>
          </h2>
        </div>

        {/* --- SLIDER --- */}
        <div className="relative px-2 sm:px-6 md:px-10">

          <div className="overflow-x-auto md:overflow-hidden">

            <div
              className={`flex ${isTransitioning
                ? "md:transition-transform md:duration-500 md:ease-in-out"
                : "transition-none"
                }`}
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="px-2 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="group bg-[#FCFCFA] rounded-xl border border-[#F0F0E8]
                flex flex-col h-full overflow-hidden
                transition-all duration-300 hover:shadow-xl
              ">

                    {/* Image */}
                    <div className="
                  w-full overflow-hidden bg-gray-100 relative
                  h-48 sm:h-56 md:h-64
                ">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow bg-white">
                      <h3 className="text-lg md:text-xl font-serif text-[#1A1A1A] mb-2 line-clamp-1 italic font-bold">
                        {product.name}
                      </h3>

                      <p className="text-[#666] text-[12px] md:text-[13px] mb-6 line-clamp-2 min-h-[40px] italic leading-relaxed opacity-80">
                        {product.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex flex-col">
                          {/* <span className="text-gray-400 line-through text-[10px] md:text-[11px] mb-1">
                            {product.originalPrice}
                          </span> */}
                          <span className="text-[#B59461] font-bold text-xl md:text-2xl leading-none">
                            {product.price}
                          </span>
                        </div>

                        <a
                          onClick={() => setproductname(product.name)}
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                        w-10 h-10 md:w-12 md:h-12
                        flex items-center justify-center
                        bg-[#25D366] hover:bg-[#1ebe57]
                        text-white rounded-full
                        transition-all duration-300
                        hover:scale-110 shadow-lg
                      "
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
          <div className="hidden md:flex justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="
      w-12 h-12
      flex items-center justify-center
      border border-[#B59461]
      bg-white
      text-[#B59461]
      shadow-sm
      transition-all duration-300
      hover:bg-[#B59461]
      hover:text-white
      hover:shadow-md
      hover:scale-105
      active:scale-95
    "
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="
      w-12 h-12
      flex items-center justify-center
      border border-[#B59461]
      bg-white
      text-[#B59461]
      shadow-sm
      transition-all duration-300
      hover:bg-[#B59461]
      hover:text-white
      hover:shadow-md
      hover:scale-105
      active:scale-95
    "
            >
              <ChevronRight size={22} />
            </button>
          </div>


        </div>
      </div>
    </div>

  );
};

export default ProductCards;