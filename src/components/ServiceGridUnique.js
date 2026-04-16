import React from "react";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceGridUnique() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Big Featured Item */}
          <div className="lg:col-span-7 reveal">
            <Link href={`/services/${services[0].slug}`} className="group relative block h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={services[0].img} alt={services[0].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <span className="bg-[#f27904] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block">MOST POPULAR</span>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 line-clamp-2">{services[0].title}</h3>
                <p className="text-gray-200 text-lg mb-8 max-w-lg line-clamp-2">{services[0].desc}</p>
                <div className="flex items-center gap-4 text-white font-bold group-hover:gap-6 transition-all">
                  LEARN MORE <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Stack */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {services.slice(1, 3).map((svc, i) => (
              <Link key={i} href={`/services/${svc.slug}`} className="group relative h-[284px] rounded-[2.5rem] overflow-hidden shadow-xl reveal">
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f458b]/90 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-display font-bold mb-2">{svc.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    EXPLORE <i className="fas fa-plus-circle"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Row */}
          {services.slice(3).map((svc, i) => (
            <div key={i} className="lg:col-span-4 reveal">
              <Link href={`/services/${svc.slug}`} className="group bg-slate-50 border border-gray-100 rounded-[2.5rem] p-10 block hover:bg-[#0f458b] transition-all duration-500 hover:-translate-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#f27904] text-3xl mb-8 group-hover:bg-[#f27904] group-hover:text-white transition-all shadow-lg">
                  <i className={svc.icon}></i>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0f458b] group-hover:text-white mb-4">{svc.title}</h3>
                <p className="text-gray-500 group-hover:text-blue-100 mb-8 line-clamp-3">{svc.desc}</p>
                <div className="text-[#f27904] font-bold text-sm flex items-center gap-2 group-hover:text-white">
                  VIEW SERVICE <i className="fas fa-arrow-right text-[10px]"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
