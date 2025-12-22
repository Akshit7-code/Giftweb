import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const categories = [
        "All",
        "Ladies Purse",
        "Combo Gifts",
        "Photo Gifts",
        "Customized Pen",
        "Pen Stand",
        "Bottles& Tiffins",
        "Laser Marking",
        "Led Products",
        "Premium Gifts",
        "Non Customized",
        "Keychain",
        "Coffee Mug",
        "TShirt Print",
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter(
                (p) => p.category.toLowerCase().trim() === activeCategory.toLowerCase().trim()
            );


    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateArrows = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    useEffect(() => {
        updateArrows();
        const handleResize = () => updateArrows();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const { clientWidth } = scrollRef.current;
        const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(updateArrows, 300);
    };

    const contactWhatsApp = (productName) => {
        const message = `Hi! I'm interested in ${productName}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
    };

    if (loading)
        return (
            <div className="h-screen flex items-center justify-center font-sans tracking-[0.5em] text-[10px] uppercase">
                Refining Curation...
            </div>
        );

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-serif text-[#1A1A1A]">
            {/* HERO */}
            <section className="pt-32 pb-16 px-6 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] tracking-[0.8em] uppercase text-[#C5A059] font-sans font-bold block mb-4"
                >
                    India's Luxury Studio
                </motion.span>
                <h1 className="text-7xl md:text-[10rem] leading-none tracking-tighter">
                    Gift <span className="italic font-light text-gray-300">4</span> U
                </h1>
            </section>

            {/* CATEGORY BAR */}
            <div className="relative w-full max-w-6xl mx-auto px-4 md:px-20 py-4 flex items-center">
                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white shadow-md rounded-full hover:shadow-lg transition"
                    >
                        <span className="text-xl">&#8592;</span>
                    </button>
                )}

                {/* Scrollable Categories */}
                <div
                    ref={scrollRef}
                    className="flex items-center overflow-x-auto scroll-smooth no-scrollbar space-x-3 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-md"
                >
                    {categories.map((cat, index) => {
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative px-6 py-2 text-[11px] uppercase tracking-[0.15em] font-sans rounded-full transition-all ${isActive
                                    ? "text-white bg-[#1A1A1A] shadow-lg"
                                    : "text-gray-600 hover:text-black bg-white/30 hover:bg-white/50"
                                    }`}
                            >
                                <span className="relative z-10">{cat}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute inset-0 rounded-full bg-[#1A1A1A]"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white shadow-md rounded-full hover:shadow-lg transition"
                    >
                        <span className="text-xl">&#8594;</span>
                    </button>
                )}
            </div>


            {/* PRODUCT GRID */}
            <section className="max-w-[1400px] mx-auto px-8 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group"
                            >
                                <div className="relative aspect-[4/5] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-5">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIzF_l8BbYszxnIRIEgi4qC8CmAjGu-F5CA&s"
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full shadow-xl">
                                            <p className="text-xs font-sans font-bold tracking-wider">₹{product.price}</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                                        <motion.button
                                            onClick={() => contactWhatsApp(product.name)}
                                            className="bg-white text-black h-14 min-w-[56px] rounded-full shadow-2xl flex items-center justify-center gap-3 px-4 group/wa overflow-hidden transition-all duration-300 hover:w-auto"
                                        >
                                            <MessageCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                            <span className="text-[10px] font-sans font-bold uppercase tracking-widest whitespace-nowrap opacity-0 max-w-0 group-hover/wa:opacity-100 group-hover/wa:max-w-[200px] transition-all duration-500">
                                                Chat with us
                                            </span>
                                        </motion.button>
                                    </div>
                                </div>
                                <div className="space-y-1 px-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-light tracking-tight truncate leading-tight">{product.name}</h3>
                                    </div>
                                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">{product.category}</p>
                                    <p className="text-[11px] text-gray-400 font-sans italic line-clamp-2 pt-1">{product.shortDescription}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* FOOTER */}
            {/* <footer className="py-20 border-t border-gray-100 text-center bg-white">
                <h2 className="text-3xl italic text-gray-200">The Art of Giving</h2>
            </footer> */}
        </div>
    );
};

export default ProductPage;
