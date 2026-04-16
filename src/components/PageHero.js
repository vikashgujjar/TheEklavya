import React from "react";

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-[#0f458b]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <img
          src={bgImage || "https://images.unsplash.com/photo-1574123816934-2bc060bc0002?w=1600&q=80"}
          alt={title}
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f458b] via-[#0f458b]/80 to-transparent"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-[#f27904]/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-blue-400/10 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="w-12 h-[2px] bg-[#f27904]"></span>
            <span className="text-[#f27904] font-bold tracking-[0.2em] uppercase text-sm">Eklavya Relocation</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight reveal">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-[#f27904]" : ""}>{word} </span>
            ))}
          </h1>

          {subtitle && (
            <p className="text-blue-100/80 text-xl font-medium mb-10 leading-relaxed reveal">
              {subtitle}
            </p>
          )}

          <div className="flex items-center gap-6 reveal">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} className="w-12 h-12 rounded-full border-4 border-[#0f458b]" />
              ))}
            </div>
            <div>
              <p className="text-white font-bold text-lg">15k+ Happy Clients</p>
              <div className="flex text-[#f27904] text-sm">
                {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star"></i>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Floating Box */}
      <div className="absolute bottom-40 right-20 hidden lg:block reveal">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4 text-white text-sm font-semibold">
            <span className="opacity-60 hover:text-[#f27904] cursor-pointer transition-colors">Home</span>
            <i className="fas fa-chevron-right text-[10px] opacity-40"></i>
            <span className="text-[#f27904]">{title}</span>
          </div>
        </div>
      </div>

      {/* Wave SVG Decor */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120H1440V0C1440 0 1240 80 720 80C200 80 0 0 0 0V120Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
