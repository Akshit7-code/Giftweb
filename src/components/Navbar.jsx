


import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer */}
      <div className="" />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* MAIN BAR */}
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-28 py-5">
          {/* Logo */}
          <div className="text-3xl font-serif tracking-tight text-[#33302E]">
            <a href="/">
              Gift <span className="text-[#B59461]">4</span> U
            </a>
          </div>

          {/* Desktop Menu (UNCHANGED DESIGN) */}
          <div className="hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-[0.15em] text-[#5A544E] font-medium">
            <a href="/" className="hover:text-[#B59461] transition">Home</a>
            <a href="/about" className="hover:text-[#B59461] transition">About</a>
            <a href="/product" className="hover:text-[#B59461] transition">Products</a>
            <a href="/contact" className="hover:text-[#B59461] transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#33302E]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-white/90 backdrop-blur-md border-t border-gray-100">
            <div className="flex flex-col items-center py-6 space-y-6 text-[12px] uppercase tracking-[0.2em] font-medium text-[#5A544E]">
              <a onClick={() => setMenuOpen(false)} href="/" className="hover:text-[#B59461]">Home</a>
              <a onClick={() => setMenuOpen(false)} href="/About" className="hover:text-[#B59461]">About</a>
              <a onClick={() => setMenuOpen(false)} href="/Product" className="hover:text-[#B59461]">Products</a>
              <a onClick={() => setMenuOpen(false)} href="/Contact" className="hover:text-[#B59461]">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;