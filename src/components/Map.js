"use client";
import React from "react";

export default function Map() {
  return (
    <section className="w-full h-[450px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348821915647!3d30.73506264421255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed19890a9317%3A0xe51de9580cbfe152!2sChandigarh!5e0!3m2!1sen!2sin!4v1713586000000!5m2!1sen!2sin"
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 border-none"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute bottom-8 left-8 bg-white p-6 rounded-[2rem] shadow-2xl max-w-sm hidden md:block border border-gray-100">
        <h4 className="font-display font-bold text-[#0f458b] mb-2 text-lg">Visit Our Office</h4>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Shop No. 2212, First Floor, Pipli wala town, Manimajra Chandigarh 160101
        </p>
        <div className="flex gap-4">
          <a href="https://goo.gl/maps/..." target="_blank" className="text-[#f27904] font-bold text-sm hover:underline">
            Get Directions <i className="fas fa-external-link-alt ml-1 text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
