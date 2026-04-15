"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: `"The Eklavya Relocation made our move from Delhi to Bangalore absolutely stress-free. The team was professional, punctual, and handled all our belongings with extreme care. Not a single item was damaged!"`,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Amit Verma",
    desc: "Moved Delhi → Bangalore"
  },
  {
    text: `"Our office relocation was handled with incredible professionalism. Zero downtime, everything was set up exactly as we needed it. The dedicated project manager was available throughout."`,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Menon",
    desc: "Corporate Move, Mumbai"
  },
  {
    text: `"They transported my car from Pune to Chennai — 1,500 km — and it arrived in pristine condition. The GPS tracking was brilliant. I watched my car's journey in real time. Excellent service!"`,
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Rajesh Kumar",
    desc: "Car Transport, Pune → Chennai"
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (step) => {
    setCurrentSlide((prev) => (prev + step + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 bg-[#e8f0fb] text-[#0f458b] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-heart text-xs"></i> Customer Stories
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0f458b] mb-4">
            What Our Clients <span className="gt">Say</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Real experiences from real customers who trusted us with their most important moves.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div id="testiBox">
            {testimonials.map((testi, idx) => (
              <div key={idx} className={`tslide ${currentSlide === idx ? 'active' : 'hidden'}`}>
                <div className="bg-white rounded-3xl shadow-xl shadow-blue-100 p-10 border border-gray-100 text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star text-yellow-400"></i>)}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed italic mb-8 max-w-2xl mx-auto">{testi.text}</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img src={testi.img} alt={testi.name} className="ic" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[#0f458b] font-display">{testi.name}</p>
                      <p className="text-gray-500 text-sm">{testi.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => changeSlide(-1)} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#0f458b] hover:bg-[#0f458b] hover:text-white transition-all shadow-md">
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="w-3 h-3 rounded-full transition-all"
                  style={{ background: currentSlide === idx ? "#f27904" : "#d1d5db" }}
                ></button>
              ))}
            </div>
            <button onClick={() => changeSlide(1)} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#0f458b] hover:bg-[#0f458b] hover:text-white transition-all shadow-md">
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-14 reveal">
          {[
            { icon: "fa-star text-yellow-400", title: "4.9/5 Rating", desc: "on Google Reviews" },
            { icon: "fa-thumbs-up text-[#f27904]", title: "99% Recommend", desc: "by Customers" },
            { icon: "fa-shield-alt text-[#0f458b]", title: "ISO 9001:2015", desc: "Certified Company" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-100">
              <i className={`fas ${item.icon} text-xl`}></i>
              <div>
                <p className="font-bold text-[#0f458b] text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
