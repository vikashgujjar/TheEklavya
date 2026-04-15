"use client";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Local Household Shifting",
    desc: "Moving within the city? Our expert packers handle every item with utmost care — from fragile crockery to heavy furniture.",
    icon: "fas fa-home",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    theme: "text-[#f27904]",
    bg: "bg-white text-[#0f458b]",
    iconBg: "bg-white",
  },
  {
    title: "Domestic Shifting Services",
    desc: "Relocating across states? Our nationwide network ensures safe, timely delivery to any corner of India with real-time GPS tracking.",
    icon: "fas fa-truck-moving",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    theme: "text-[#0f458b]",
    bg: "bg-white text-[#0f458b]",
    iconBg: "bg-white",
  },
  {
    title: "Corporate Relocation Services",
    desc: "We understand business continuity. Our corporate team minimizes downtime and ensures smooth office transitions with a dedicated project manager.",
    icon: "fas fa-building",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    theme: "text-white",
    bg: "bg-[#0f458b] text-white border-transparent",
    iconBg: "bg-white/20",
    overlay: "from-[#0f458b]/85",
    descColor: "text-blue-200"
  },
  {
    title: "International Transportation",
    desc: "Moving abroad? Our team handles customs clearance, documentation, and door-to-door delivery to 100+ countries worldwide.",
    icon: "fas fa-globe-asia",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    theme: "text-[#f27904]",
    bg: "bg-white text-[#0f458b]",
    iconBg: "bg-white",
  },
  {
    title: "Car & Bike Transportation",
    desc: "We treat your vehicle like our own. Enclosed carriers, GPS tracking, and full insurance coverage for cars and two-wheelers across India.",
    icon: "fas fa-car",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
    theme: "text-[#0f458b]",
    bg: "bg-white text-[#0f458b]",
    iconBg: "bg-white",
  },
  {
    title: "Warehouse Services",
    desc: "Climate-controlled, secure warehouses with flexible short or long-term storage solutions and 24/7 CCTV surveillance.",
    icon: "fas fa-warehouse",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    theme: "text-white",
    bg: "bg-[#f27904] text-white border-transparent",
    iconBg: "bg-white/20",
    overlay: "from-[#f27904]/90",
    descColor: "text-orange-100"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 bg-[#e8f0fb] text-[#0f458b] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-cogs text-xs"></i> What We Offer
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0f458b] mb-4">
            Our <span className="gt">Services</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Comprehensive relocation solutions tailored to your unique needs — from local moves to global logistics.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, idx) => (
            <div key={idx} className={`svc-card reveal ${svc.bg} rounded-3xl overflow-hidden border ${svc.bg.includes('border-transparent') ? '' : 'border-gray-100'} shadow-sm cursor-pointer group`}>
              <div className="h-48 overflow-hidden relative">
                <img src={svc.img} alt={svc.title} className="ic group-hover:scale-105 transition-transform duration-500 opacity-90" />
                <div className={`absolute inset-0 bg-gradient-to-t ${svc.overlay || 'from-black/45'} to-transparent`}></div>
                <div className={`svc-icon absolute top-4 left-4 w-12 h-12 ${svc.iconBg} rounded-xl flex items-center justify-center ${svc.theme} shadow-lg text-xl`}>
                  <i className={svc.icon}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`font-display text-xl font-bold mb-2`}>{svc.title}</h3>
                <p className={`${svc.descColor || 'text-gray-600'} text-sm leading-relaxed mb-4`}>{svc.desc}</p>
                <Link href="#" className={`${svc.bg.includes('text-white') ? 'text-white' : 'text-[#f27904]'} text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all`}>
                  Learn More <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
