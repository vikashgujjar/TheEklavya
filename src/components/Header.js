"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id="siteHdr"
      className="relative top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="bg-[#0f458b] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-1">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <i className="fas fa-phone text-[#f27904]"></i>+91 8683808955
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <i className="fas fa-envelope text-[#f27904]"></i>
              info@eklavyarelocation.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5">
              <i className="fas fa-clock text-[#f27904]"></i>Mon–Sat 8AM–8PM
            </span>
            <div className="flex gap-3">
              <Link href="#" className="hover:text-[#f27904] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="hover:text-[#f27904] transition-colors">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="hover:text-[#f27904] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link href="#" className="hover:text-[#f27904] transition-colors">
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" className="h-12" />
        </Link>
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
          <li>
            <Link href="#about" className="nl hover:text-[#f27904] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="nl hover:text-[#f27904] transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="#process" className="nl hover:text-[#f27904] transition-colors">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#whyus" className="nl hover:text-[#f27904] transition-colors">
              Why Us
            </Link>
          </li>
          <li>
            <Link href="#faq" className="nl hover:text-[#f27904] transition-colors">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#blog" className="nl hover:text-[#f27904] transition-colors">
              Blog
            </Link>
          </li>
        </ul>
        <Link
          href="#qform"
          className="hidden lg:inline-flex items-center gap-2 bg-[#f27904] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 hover:-translate-y-0.5"
        >
          Get Free Quote <i className="fas fa-arrow-right text-xs"></i>
        </Link>
        <button onClick={toggleMenu} className="lg:hidden p-2 flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-gray-800 block"></span>
          <span className="w-6 h-0.5 bg-gray-800 block"></span>
          <span className="w-4 h-0.5 bg-gray-800 block"></span>
        </button>
      </nav>
      {menuOpen && (
        <div id="mobileMenu" className="lg:hidden bg-white border-t border-gray-100 px-4 pb-5">
          <ul className="flex flex-col gap-1 text-sm font-medium text-gray-700 pt-4">
            <li>
              <Link href="#about" onClick={toggleMenu} className="block py-2 hover:text-[#f27904]">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={toggleMenu} className="block py-2 hover:text-[#f27904]">
                Services
              </Link>
            </li>
            <li>
              <Link href="#process" onClick={toggleMenu} className="block py-2 hover:text-[#f27904]">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#whyus" onClick={toggleMenu} className="block py-2 hover:text-[#f27904]">
                Why Us
              </Link>
            </li>
            <li>
              <Link href="#faq" onClick={toggleMenu} className="block py-2 hover:text-[#f27904]">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#blog" onClick={toggleMenu} className="block py-2 hover:text-[#f27904]">
                Blog
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="#qform"
                onClick={toggleMenu}
                className="inline-flex items-center gap-2 bg-[#f27904] text-white px-5 py-2.5 rounded-full font-semibold text-sm"
              >
                Get Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
