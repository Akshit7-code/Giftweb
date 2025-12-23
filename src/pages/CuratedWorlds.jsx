import React from "react";

const CuratedWorlds = () => {
  const categories = [
    {
      title: "PLATINUM SERIES",
      label: "Timeless Leather & Pens",
      img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800",
    },
    {
      title: "EXECUTIVE GIFTS",
      label: "Professional Excellence",
      img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500",
    },
    {
      title: "ELEGANT SERIES",
      label: "Polished & Professional",
      img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F9F8F6] overflow-hidden">

      {/* ================= SECTION HEADER ================= */}
      <div className="max-w-[1800px] mx-auto mb-14 md:mb-16 px-4 sm:px-8 lg:px-24 text-center md:text-left">
        <p className="text-[#B59461] text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold mb-3 flex items-center gap-3">
            <span className="w-6 md:w-8 h-[1px] bg-[#B59461]"></span>
             Handpicked Excellence
          </p>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-serif text-[#33302E] leading-tight tracking-tight">
          Curated Worlds
        </h2>

      </div>

      {/* ================= CARDS ================= */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col transition-all duration-700 ease-in-out
                ${index === 1 ? "md:-translate-y-10" : ""}
              `}
            >
              {/* IMAGE */}
              <div
                className={`relative overflow-hidden rounded-[28px] md:rounded-[35px]
                shadow-sm group-hover:shadow-2xl transition-all duration-500
                ${index === 1 ? "aspect-[4/4.5] md:aspect-[4/4.9]" : "aspect-[4/4.6] md:aspect-[4/5]"}
              `}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-y-3"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* TITLE */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <h3 className="text-white font-serif text-xl sm:text-2xl md:text-3xl tracking-widest text-center drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="w-0 group-hover:w-16 h-[1px] bg-[#B59461] mt-4 transition-all duration-500"></div>
                </div>
              </div>

              {/* LABEL */}
              <div className="mt-6 md:mt-8 text-center md:text-left px-2 md:px-4 group-hover:translate-x-2 transition-transform duration-500">
                <p className="text-[#33302E] font-serif italic text-base md:text-lg leading-tight">
                  {item.label}
                </p>

                <div className="mt-2 flex items-center justify-center md:justify-start gap-2 group/btn cursor-pointer">
                  <span className="text-[#B59461] text-[10px] uppercase tracking-[0.2em] font-bold">
                    Discover More
                  </span>
                  <div className="w-6 h-[1px] bg-[#B59461] transition-all group-hover/btn:w-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CuratedWorlds;
