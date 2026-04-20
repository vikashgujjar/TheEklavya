"use client";
import React from "react";

export default function SEOContent() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 reveal">
            <h2 className="font-display text-3xl font-bold text-[#0f458b] mb-6">
              Why Choose Eklavya Packers and Movers in Chandigarh?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When it comes to relocating your home or office, choosing the right partner is crucial. Eklavya Relocation stands out as one of the most reliable and affordable packers and movers in Chandigarh, offering a comprehensive range of shifting services tailored to your specific needs. 
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence is reflected in our professional approach. We use premium packing materials like bubble wrap, corrugated sheets, and customized crates to ensure the absolute safety of your fragile items. Whether you are searching for "packers and movers near me" or planning a long-distance move, our team ensures a seamless transition with 24/7 customer support and real-time transit tracking.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100">
                <div className="w-12 h-12 bg-[#0f458b] text-white rounded-2xl flex items-center justify-center mb-6 text-xl">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h4 className="font-display text-xl font-bold text-[#0f458b] mb-3">Our Mission</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To provide world-class relocation services by integrating advanced technology, professional expertise, and customer-centric values, making every move a pleasant experience.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100">
                <div className="w-12 h-12 bg-[#f27904] text-white rounded-2xl flex items-center justify-center mb-6 text-xl">
                  <i className="fas fa-eye"></i>
                </div>
                <h4 className="font-display text-xl font-bold text-[#0f458b] mb-3">Our Vision</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To become India's most trusted and innovative logistics partner, setting new benchmarks in safety, transparency, and efficiency in the global relocation industry.
                </p>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <div className="bg-[#0f458b] rounded-[3rem] p-8 text-white relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="font-display text-2xl font-bold mb-6 relative z-10">Premium Features</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  { t: "Verified Labor", d: "Background checked and trained workforce." },
                  { t: "Transit Insurance", d: "Full coverage for any unforeseen damages." },
                  { t: "GPS Tracking", d: "Live updates of your shipment's location." },
                  { t: "No Hidden Costs", d: "Transparent billing with zero surprise charges." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-6 h-6 bg-[#f27904] rounded-full flex-shrink-0 flex items-center justify-center text-[10px]">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">{item.t}</p>
                      <p className="text-blue-200 text-xs leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/10 text-center">
                <p className="text-xs uppercase tracking-widest font-bold mb-2">Member of</p>
                <div className="flex justify-center gap-4 text-xl">
                  <i className="fas fa-certificate text-yellow-400"></i>
                  <i className="fas fa-award text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
