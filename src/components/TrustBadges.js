"use client";
import React from "react";

const badges = [
  { icon: "fas fa-shield-alt", text: "100% Safe & Secure", sub: "Fully Insured Moves" },
  { icon: "fas fa-truck", text: "Fastest Delivery", sub: "On-time Every Time" },
  { icon: "fas fa-headset", text: "24/7 Support", sub: "Dedicated Move Manager" },
  { icon: "fas fa-tags", text: "Transparent Pricing", sub: "No Hidden Charges" }
];

export default function TrustBadges() {
  return (
    <div className="bg-[#0f458b] py-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-4 text-white reveal">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl text-[#f27904]">
                <i className={badge.icon}></i>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">{badge.text}</p>
                <p className="text-blue-200 text-[10px] uppercase font-bold tracking-widest">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
