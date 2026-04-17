"use client";

import React from 'react';

const WhatsAppIcon = () => {
  const phoneNumber = "8683808955";
  const message = "Hello! I'm interested in your relocation services. Can you please help?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Ping Animation for attention */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#0f458b] px-4 py-2 rounded-xl shadow-2xl border border-gray-100 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-2 pointer-events-none">
          Contact us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>

        {/* Floating Button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 duration-300">
          <i className="fab fa-whatsapp text-3xl"></i>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppIcon;
