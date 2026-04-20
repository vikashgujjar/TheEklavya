"use client";
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-64 shadow-xl">
                <img src="/images/aboutUs/MovingTeam.webp" alt="Team packing" className="ic" />
              </div>
              <div className="rounded-3xl overflow-hidden h-64 shadow-xl mt-8">
                <img src="/images/aboutUs/whereHouse.webp" alt="Warehouse" className="ic" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 shadow-xl -mt-4">
                <img src="/images/aboutUs/MovingTeam.webp" alt="Moving team" className="ic" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 shadow-xl mt-4">
                <img src="/images/aboutUs/HappyCustomer.webp" alt="Happy customer" className="ic" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100 z-10">
              <div className="w-11 h-11 bg-[#fff4e8] rounded-xl flex items-center justify-center">
                <i className="fas fa-award text-[#f27904] text-lg"></i>
              </div>
              <div>
                <p className="font-bold text-[#0f458b] font-display text-base">ISO Certified</p>
                <p className="text-gray-500 text-xs">Quality Assured</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-[#f27904] rounded-2xl shadow-xl p-4 text-white text-center z-10">
              <p className="font-display text-3xl font-bold">15+</p>
              <p className="text-xs font-medium text-orange-100">Years of<br />Excellence</p>
            </div>
          </div>
          <div className="reveal">
            <span className="inline-flex items-center gap-2 bg-[#fff4e8] text-[#f27904] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <i className="fas fa-info-circle text-xs"></i> Expert Packers and Movers
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0f458b] leading-tight mb-6">
              A Certified Moving Company in <span className="gt">Chandigarh</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-medium">
              Eklavya Relocation is a leading name in the packers and movers industry, providing top-notch relocation services for households, offices, and vehicles since 2009.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that relocating your home or office is not just about moving boxes; it's about moving your life and memories. Our mission is to provide a stress-free, safe, and efficient moving experience using high-quality packing materials, modern transportation, and a team of highly trained professionals who treat your belongings as their own.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: "99% Success Rate", icon: "fa-chart-line" },
                { title: "Transparent Pricing", icon: "fa-search-dollar" },
                { title: "24/7 Live Tracking", icon: "fa-map-marker-alt" },
                { title: "Verified Professionals", icon: "fa-user-check" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#f27904]">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="text-sm font-bold text-[#0f458b]">{item.title}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="#services" className="inline-flex items-center gap-2 bg-[#0f458b] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-900 transition-all shadow-lg hover:-translate-y-0.5">
                Our Services <i className="fas fa-plus text-xs"></i>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-[#f27904] text-[#f27904] px-7 py-3.5 rounded-full font-semibold hover:bg-[#f27904] hover:text-white transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
