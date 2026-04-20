"use client";
import React from "react";

const chargesData = [
  { distance: "0 - 50 km", studio: "₹3,500 - 6,000", bhk1: "₹6,000 - 10,000", bhk2: "₹10,000 - 15,000", bhk3: "₹15,000 - 22,000" },
  { distance: "50 - 200 km", studio: "₹6,000 - 9,000", bhk1: "₹8,000 - 15,000", bhk2: "₹15,000 - 22,000", bhk3: "₹22,000 - 35,000" },
  { distance: "200 - 500 km", studio: "₹9,000 - 14,000", bhk1: "₹12,000 - 22,000", bhk2: "₹22,000 - 32,000", bhk3: "₹32,000 - 45,000" },
  { distance: "500 - 1000 km", studio: "₹12,000 - 18,000", bhk1: "₹18,000 - 30,000", bhk2: "₹30,000 - 45,000", bhk3: "₹45,000 - 65,000" },
];

export default function Rates() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 bg-brand-lightOrange text-brand-orange text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <i className="fas fa-tag text-xs"></i> Fair Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0f458b] mb-4">Estimated Moving <span className="text-[#f27904]">Charges</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Transparent estimates to help you plan your budget. Final quotes depend on item volume and specific requirements.</p>
        </div>

        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-100 reveal">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f458b] text-white">
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Distance</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">1 RK / Studio</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">1 BHK Home</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">2 BHK Home</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">3 BHK Home</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {chargesData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-8 py-6 font-bold text-[#0f458b]">{row.distance}</td>
                    <td className="px-8 py-6 text-gray-600 group-hover:text-[#f27904] transition-colors">{row.studio}</td>
                    <td className="px-8 py-6 text-gray-600 group-hover:text-[#f27904] transition-colors">{row.bhk1}</td>
                    <td className="px-8 py-6 text-gray-600 group-hover:text-[#f27904] transition-colors">{row.bhk2}</td>
                    <td className="px-8 py-6 text-gray-600 group-hover:text-[#f27904] transition-colors">{row.bhk3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 bg-blue-50 text-center">
            <p className="text-[#0f458b] text-sm font-medium">
              <i className="fas fa-info-circle mr-2"></i>
              Note: Above rates are indicative. Total cost includes packing material, labor, and GST.
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="ml-4 font-bold text-[#f27904] hover:underline"
              >
                Get Exact Quote &rarr;
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
