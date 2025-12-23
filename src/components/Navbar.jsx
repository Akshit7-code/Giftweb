


import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Link href="/" className="hover:text-[#B59461] transition">Home</Link>
            <Link href="/about" className="hover:text-[#B59461] transition">About</Link>
            <Link href="/product" className="hover:text-[#B59461] transition">Products</Link>
            <Link href="/contact" className="hover:text-[#B59461] transition">Contact</Link>
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
              <Link onClick={() => setMenuOpen(false)} href="/" className="hover:text-[#B59461]">Home</Link>
              <Link onClick={() => setMenuOpen(false)} href="/about" className="hover:text-[#B59461]">About</Link>
              <Link onClick={() => setMenuOpen(false)} href="/product" className="hover:text-[#B59461]">Products</Link>
              <Link onClick={() => setMenuOpen(false)} href="/contact" className="hover:text-[#B59461]">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;