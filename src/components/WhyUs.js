"use client";
import React from "react";

const whyUsItems = [
  { icon: "fas fa-shield-alt", title: "Full Goods Insurance", desc: "Every item is covered under comprehensive transit insurance. Zero risk, zero worry on every move we do." },
  { icon: "fas fa-map-marker-alt", title: "Live GPS Tracking", desc: "Track your shipment in real-time on our app. Know exactly where your belongings are at every moment." },
  { icon: "fas fa-rupee-sign", title: "Transparent Pricing", desc: "No hidden charges, no surprises. Get a detailed itemized quote upfront — what you see is what you pay." },
  { icon: "fas fa-users", title: "Experienced Team", desc: "500+ professionally trained packers, movers, and logistics specialists with an average 8 years of experience." },
  { icon: "fas fa-headset", title: "24/7 Customer Support", desc: "Round-the-clock support via phone, chat, and email. We're always here when you need us during your move." }
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-24 bg-gradient-to-br from-[#0f458b] to-blue-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#f27904]/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-star text-[#f27904] text-xs"></i> Why Choose Eklavya
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Eklavya <span className="text-[#f27904]">Difference</span>
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto text-lg">
            We don't just move boxes — we move lives. Here's why thousands trust us every year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {whyUsItems.map((item, idx) => (
            <div key={idx} className="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/15 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-[#f27904] rounded-xl flex items-center justify-center text-2xl text-white mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <i className={item.icon}></i>
              </div>
              <h4 className="font-display text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
          
          <div className="reveal bg-[#f27904] rounded-2xl p-7 hover:bg-orange-500 transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl text-white mb-5 group-hover:scale-110 transition-transform">
              <i className="fas fa-award"></i>
            </div>
            <h4 className="font-display text-lg font-bold text-white mb-2">Award-Winning Service</h4>
            <p className="text-orange-100 text-sm leading-relaxed">Recognized as India's Top Relocation Company for 5 consecutive years. Excellence you can count on every time.</p>
          </div>
        </div>

        <div className="reveal bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "15K+", label: "Moves Completed" },
              { num: "99%", label: "Customer Satisfaction" },
              { num: "50+", label: "Cities Served" },
              { num: "15+", label: "Years in Business" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="font-display text-4xl font-bold text-[#f27904]">{stat.num}</p>
                <p className="text-blue-200 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
