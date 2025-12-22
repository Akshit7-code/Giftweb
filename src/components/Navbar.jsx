import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content jump */}
      <div className="h-[80px]" />

      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-28 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="text-3xl font-serif tracking-tight text-[#33302E]">
          <a href="/">
            Gift <span className="text-[#B59461]">4</span> U
          </a>
        </div>
        <div className="flex items-center space-x-10 text-[13px] uppercase tracking-[0.15em] text-[#5A544E] font-medium">
          <a href="/" className="hover:text-[#B59461] transition">
            Home
          </a>
          <a href="/About" className="hover:text-[#B59461] transition">
            About
          </a>
          <a href="/Product" className="hover:text-[#B59461] transition">
            Products
          </a>
          <a href="/Contact" className="hover:text-[#B59461] transition">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
