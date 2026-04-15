"use client";
import React from "react";

const marqueeItemsA = [
  { icon: "fas fa-star", text: "Trusted by 15,000+ Families" },
  { icon: "fas fa-map-marked-alt", text: "50+ Cities Across India" },
  { icon: "fas fa-shield-alt", text: "100% Insured Moves" },
  { icon: "fas fa-clock", text: "On-Time Delivery Guarantee" },
  { icon: "fas fa-headset", text: "24/7 Customer Support" },
  { icon: "fas fa-award", text: "ISO Certified Company" },
  { icon: "fas fa-truck", text: "200+ Modern Vehicles" },
  { icon: "fas fa-globe", text: "International Relocations" },
];

const marqueeItemsB = [
  { icon: "fas fa-home", text: "Local Household Shifting" },
  { icon: "fas fa-building", text: "Corporate Relocation Services" },
  { icon: "fas fa-car", text: "Car & Bike Transportation" },
  { icon: "fas fa-warehouse", text: "Warehouse & Storage" },
  { icon: "fas fa-truck-moving", text: "Domestic Shifting Services" },
  { icon: "fas fa-plane", text: "International Transportation" },
  { icon: "fas fa-box-open", text: "Professional Packing Services" },
  { icon: "fas fa-thumbs-up", text: "99% Customer Satisfaction" },
];

export default function Marquee() {
  return (
    <div className="bg-[#f27904] overflow-hidden select-none">
      <div className="mq-wrap border-b border-orange-500/30 py-2.5">
        <div className="mq-inner mq-ltr">
          {[...marqueeItemsA, ...marqueeItemsA].map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="inline-flex items-center gap-2.5 text-white font-semibold text-sm px-8 whitespace-nowrap">
                <i className={`${item.icon} text-yellow-200`}></i>{item.text}
              </span>
              <span className="text-orange-300 px-2">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mq-wrap py-2.5">
        <div className="mq-inner mq-rtl">
          {[...marqueeItemsB, ...marqueeItemsB].map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="inline-flex items-center gap-2.5 text-white font-semibold text-sm px-8 whitespace-nowrap">
                <i className={`${item.icon} text-yellow-200`}></i>{item.text}
              </span>
              <span className="text-orange-300 px-2">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
