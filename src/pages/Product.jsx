import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight, Crown } from "lucide-react";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const categories = [
        "All", "Ladies Purse", "Combo Gifts", "Photo Gifts", "Customized Pen",
        "Pen Stand", "Bottles& Tiffins", "Laser Marking", "Led Products",
        "Premium Gifts", "Non Customized", "Keychain", "Coffee Mug", "TShirt Print",
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category.toLowerCase().trim() === activeCategory.toLowerCase().trim());

    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateArrows = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    };

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(updateArrows, 400);
    };

    const contactWhatsApp = (productName) => {
        const message = `Hi! I'm interested in ${productName}`;
        window.open(`https://wa.me/919691111098?text=${encodeURIComponent(message)}`);
    };

    if (loading) return (
        <div className="h-screen flex flex-col items-center justify-center bg-[#FAF9F6]">
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-[#C5A059] mb-4"
            >
                <Crown size={40} />
            </motion.div>
            <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-gray-400">Loading Excellence</p>
        </div>
    );

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#1A1A1A]">

            {/* --- REFINED HERO SECTION --- */}
            <header className="pt-36 pb-16 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[1px] w-8 bg-[#C5A059]" />
                        <span className="text-[11px] tracking-[0.6em] uppercase text-[#C5A059] font-bold">Luxury Gifting Studio</span>
                        <div className="h-[1px] w-8 bg-[#C5A059]" />
                    </div>

                    {/* Balanced Desktop Heading */}
                    <h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tight leading-tight mb-4">
                        Gift <span className="italic font-light text-[#C5A059]">4</span> U
                    </h1>
                    <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto">
                        Curating bespoke memories with a touch of gold, Gift 4 U transforms every occasion into an unforgettable experience.
                    </p>
                </motion.div>
            </header>

            {/* --- HIGH-VISIBILITY CATEGORY BAR --- */}
            <div className="top-0 z-50 py-6 px-4">
                <div className="max-w-6xl mx-auto flex items-center gap-3">

                    {/* Left Arrow Button */}
                    <button
                        onClick={() => scroll("left")}
                        className={`hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
                            ${canScrollLeft ? "border-[#C5A059] bg-white text-[#C5A059] shadow-md hover:bg-[#C5A059] hover:text-white" : "border-gray-200 text-gray-200 cursor-not-allowed opacity-50"}`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Scrollable Container */}
                    <div className="flex-1 relative overflow-hidden bg-white/70 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-sm">
                        <div
                            ref={scrollRef}
                            onScroll={updateArrows}
                            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth p-2"
                        >
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`relative px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300
                                        ${activeCategory === cat ? "text-white" : "text-gray-500 hover:text-[#C5A059]"}`}
                                >
                                    <span className="relative z-10">{cat}</span>
                                    {activeCategory === cat && (
                                        <motion.div
                                            layoutId="activeGoldPill"
                                            className="absolute inset-0 bg-[#C5A059] rounded-xl shadow-lg shadow-[#C5A059]/30"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow Button */}
                    <button
                        onClick={() => scroll("right")}
                        className={`hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
                            ${canScrollRight ? "border-[#C5A059] bg-white text-[#C5A059] shadow-md hover:bg-[#C5A059] hover:text-white" : "border-gray-200 text-gray-200 cursor-not-allowed opacity-50"}`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* --- MODERN PRODUCT GRID --- */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, idx) => (
                            <motion.div
                                key={product.id || idx}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group"
                            >
                                {/* Card Body */}
                                <div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#C5A059]/30 transition-all duration-500">
                                    <img
                                        src={"https://eroloc.com/cdn/shop/files/PlayfulPanda_06.jpg?v=1726440263"}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Price Badge */}
                                    <div className="absolute top-4 right-4 bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                                        ₹{product.price}
                                    </div>

                                    {/* WhatsApp Hover Reveal */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <button
                                            onClick={() => contactWhatsApp(product.name)}
                                            className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl flex items-center justify-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                        >
                                            <MessageCircle size={18} className="text-green-400" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Enquire on WhatsApp</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Text Details */}
                                <div className="mt-5 space-y-1">
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">
                                        {product.category}
                                    </span>
                                    <h3 className="text-lg font-serif text-[#1A1A1A]">{product.name}</h3>
                                    <div className="h-[1px] w-8 bg-gray-200 group-hover:w-16 transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            {/* --- MINIMAL FOOTER --- */}
            <section className="relative py-20 sm:py-28 bg-white overflow-hidden text-center">
                {/* Subtle gold background accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {/* Brand Label */}
                    <p className="text-[10px] sm:text-xs tracking-[0.5em] text-gray-500 uppercase mb-1">Gift 4 U</p>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[#1A1A1A] leading-tight">
                        Handcrafted <span className="text-[#C5A059]">with Love</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-500 text-sm sm:text-base mt-2">
                        Every gift tells a story, curated with elegance and a touch of gold.
                    </p>

                    {/* Decorative Divider */}
                    <div className="flex justify-center items-center gap-3 mt-4">
                        <span className="w-8 h-[1px] bg-[#C5A059] rounded-full"></span>
                        <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
                        <span className="w-8 h-[1px] bg-[#C5A059] rounded-full"></span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex justify-center gap-4 mt-6 flex-wrap">
                        <button className="px-6 py-2 bg-[#C5A059] text-white rounded-full font-semibold hover:bg-[#d8aa55] transition-all">
                            Explore Gifts
                        </button>
                        <button className="px-6 py-2 border border-[#C5A059] text-[#C5A059] rounded-full font-semibold hover:bg-yellow-100 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProductPage;