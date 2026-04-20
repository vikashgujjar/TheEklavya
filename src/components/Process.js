"use client";
import React from "react";

const processSteps = [
  { step: "01", title: "Contact Us", desc: "Reach out via phone, email, or our online form. Tell us about your move and get an instant response from our team.", icon: "fas fa-phone-alt", bg: "bg-brand-orange", shadow: "shadow-orange-200", numBg: "bg-brand-blue" },
  { step: "02", title: "Get a Survey", desc: "Our expert surveys your items at home or online. We assess volumes, distances, and special requirements for an accurate quote.", icon: "fas fa-clipboard-list", bg: "bg-brand-blue", shadow: "shadow-blue-200", numBg: "bg-brand-orange" },
  { step: "03", title: "Pack & Load", desc: "Our trained packers wrap, pack, and load your belongings using quality materials, ensuring everything is safe and secure.", icon: "fas fa-box-open", bg: "bg-brand-orange", shadow: "shadow-orange-200", numBg: "bg-brand-blue" },
  { step: "04", title: "Deliver & Setup", desc: "We deliver on the promised date and help unpack, assemble furniture, and set up your new space — just the way you want it.", icon: "fas fa-flag-checkered", bg: "bg-brand-blue", shadow: "shadow-blue-200", numBg: "bg-brand-orange" }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 bg-[#e8f0fb] text-[#0f458b] text-sm font-semibold px-4 py-1.5 rounded-full mb-4"><i className="fas fa-tasks text-xs"></i> How It Works</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            Our Simple <span className="gt">Work Process</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            From your first call to final delivery — a smooth, transparent process every step of the way.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:flex absolute top-16 left-0 right-0 items-center px-32 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 h-0.5 bg-gradient-to-r from-brand-orange to-brand-blue opacity-20"></div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, idx) => (
              <div key={idx} className="reveal text-center relative">
                <div className={`w-16 h-16 ${item.bg} text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-lg ${item.shadow} relative z-10`}>
                  <i className={item.icon}></i>
                </div>
                <div className={`absolute top-0 right-0 w-8 h-8 ${item.numBg} text-white rounded-full flex items-center justify-center text-xs font-bold`}>
                  {item.step}
                </div>
                <h4 className="font-display text-lg font-bold text-brand-blue mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
