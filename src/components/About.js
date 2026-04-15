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
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Team packing" className="ic" />
              </div>
              <div className="rounded-3xl overflow-hidden h-64 shadow-xl mt-8">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" alt="Warehouse" className="ic" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 shadow-xl -mt-4">
                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80" alt="Moving team" className="ic" />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 shadow-xl mt-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Happy customer" className="ic" />
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
              <i className="fas fa-info-circle text-xs"></i> About The Eklavya Relocation
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0f458b] leading-tight mb-6">
              We Make Your Move<br />Our <span className="gt">Responsibility</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Eklavya Relocation has been India's most trusted moving partner since 2009. With a team of 500+ trained professionals and a fleet of modern vehicles, we ensure every move is executed with the highest standards of safety, efficiency, and care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're moving your home across the street or relocating your business across continents, our end-to-end logistics solutions are designed to make your transition seamless and memorable.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Pan-India Network", "GPS Tracking", "Goods Insurance",
                "24/7 Support", "Trained Packers", "On-Time Delivery"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#fff4e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-[#f27904] text-xs"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#services" className="inline-flex items-center gap-2 bg-[#0f458b] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-900 transition-all shadow-lg hover:-translate-y-0.5">
              Explore Services <i className="fas fa-arrow-right text-sm"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
