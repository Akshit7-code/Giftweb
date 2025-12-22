import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Spacer to prevent content jump */}
      {/* <div className="h-[10px]" /> */}

      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-20 py-5 bg-white
   shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]
 backdrop-blur-md">
        
        <div className="text-3xl font-serif tracking-tight text-[#33302E]">
          Gift <span className="text-[#B59461]">4</span> U
        </div>

        <div className="flex items-center space-x-10 text-[13px] uppercase tracking-[0.15em] text-[#5A544E] font-medium">
          <a href="#" className="hover:text-[#B59461] transition">Collections</a>
          <a href="#" className="hover:text-[#B59461] transition">Personalized</a>
          <a href="#" className="hover:text-[#B59461] transition">Concierge</a>

          <div className="flex items-center space-x-3 cursor-pointer group">
            <span>Cart</span>
            <span className="flex items-center justify-center w-7 h-7 border border-[#33302E] rounded-full text-[11px]
              group-hover:bg-[#33302E] group-hover:text-white transition">
              0
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
