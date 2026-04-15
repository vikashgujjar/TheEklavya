"use client";
import React, { useState } from "react";

const faqs = [
  { q: "How far in advance should I book my move?", a: "We recommend booking at least 2–4 weeks in advance for local moves and 4–6 weeks for long-distance or international moves. However, we also handle last-minute relocations based on availability." },
  { q: "Are my goods insured during the move?", a: "Yes! All goods are covered under comprehensive transit insurance. We offer basic transit cover as standard, with the option to upgrade to full coverage for high-value items. Our team will walk you through all options." },
  { q: "How is the cost of my move calculated?", a: "Our pricing depends on: volume and weight of goods, distance, type of service selected, and any special requirements like vehicle transport or storage. We provide a detailed itemized quote after a free pre-move survey — zero hidden charges." },
  { q: "Do you offer packing materials and services?", a: "Absolutely. We provide all packing materials including double-walled cartons, bubble wrap, stretch film, and foam padding. Our packers are trained to handle everything from kitchenware to antiques, artwork, and electronics." },
  { q: "Can I track my shipment in real-time?", a: "Yes! Every shipment is GPS-tracked. You'll receive a tracking link via SMS and email once your goods are loaded. You can monitor the exact location 24/7 via our app or our support team." },
  { q: "Do you handle international relocations?", a: "Yes, we offer complete international relocation services to 100+ countries. Our team handles all customs documentation, export formalities, and coordinates with global partners for last-mile delivery — via sea or air freight." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(prev => prev === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 bg-[#fff4e8] text-[#f27904] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-question-circle text-xs"></i> Got Questions?
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0f458b] mb-4">
            Frequently Asked <span className="gt">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">Everything you need to know about our relocation services.</p>
        </div>
        
        <div className="space-y-4 reveal">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item border border-gray-200 rounded-2xl overflow-hidden ${openIdx === idx ? 'open' : ''}`}>
              <button 
                onClick={() => toggleFaq(idx)} 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0f458b] pr-4">{faq.q}</span>
                <i className={`fas fa-plus faq-ico text-[#f27904] flex-shrink-0 text-sm ${openIdx === idx ? 'rotate-45' : ''} transition-transform`}></i>
              </button>
              <div className="faq-ans px-6" style={{ maxHeight: openIdx === idx ? '400px' : '0' }}>
                <p className="text-gray-600 text-sm leading-relaxed pb-6">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
