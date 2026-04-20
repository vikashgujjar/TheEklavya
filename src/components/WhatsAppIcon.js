"use client";

import React, { useState, useEffect } from 'react';

const WhatsAppIcon = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "8683808955";
  const message = "Hello! I'm interested in your relocation services. Can you please help?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`fixed ${isScrolled ? 'bottom-22' : 'bottom-6'} right-6 z-[9999] flex flex-col gap-4 transition-all duration-300`}>
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative"
        aria-label="Call Us"
      >
        <div className="absolute inset-0 bg-[#0f458b] rounded-full animate-ping opacity-20"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#0f458b] px-3 py-1.5 rounded-lg shadow-xl border border-gray-100 font-bold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-2 pointer-events-none">
          Click to Call
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>

        {/* Floating Button */}
        <div className="relative bg-[#0f458b] hover:bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 duration-300">
          <i className="fas fa-phone-volume text-xl"></i>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#0f458b] px-3 py-1.5 rounded-lg shadow-xl border border-gray-100 font-bold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-2 pointer-events-none">
          WhatsApp Us
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>

        {/* Floating Button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 duration-300">
          <i className="fab fa-whatsapp text-2xl"></i>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppIcon;
