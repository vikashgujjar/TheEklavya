"use client";
import React from "react";

const photos = [
  { url: "/images/gallery/PremiumPacking.jpg", title: "Premium Packing" },
  { url: "/images/gallery/OfficeRelocation.jpg", title: "Office Relocation" },
  { url: "/images/gallery/FurnitureAssembly.jpg", title: "Furniture Assembly" },
  { url: "/images/gallery/SafeTransportation.jpg", title: "Safe Transportation" },
  { url: "/images/gallery/warehouse-services.png", title: "Warehousing" },
  { url: "/images/gallery/VehicleTransport.jpg", title: "Vehicle Transport" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:items-end justify-between mb-12 reveal">
          <div className="text-center mx-auto mb-6">
            <span className="inline-flex items-center gap-2 bg-brand-lightOrange text-brand-orange text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <i className="fas fa-camera text-xs"></i> Visual Proof
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0f458b]">Our Recent <span className="text-[#f27904]">Shifting Projects</span></h2>
          </div>
          {/* <button className="bg-slate-100 text-[#0f458b] px-6 py-3 rounded-full font-bold hover:bg-[#0f458b] hover:text-white transition-all">
            View All Projects
          </button> */}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] reveal shadow-lg">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f458b]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-white font-display text-xl font-bold">{photo.title}</p>
                <p className="text-orange-200 text-sm font-medium">Successful Project • 0% Damage</p>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                <i className="fas fa-plus"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
