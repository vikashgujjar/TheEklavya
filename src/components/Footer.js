"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#0f458b] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src="/logo.png" className="h-12" style={{ filter: 'brightness(100)' }} />
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">India's most trusted relocation partner since 2009. We make every move smooth, safe, and stress-free.</p>
              <div className="flex gap-3">
                <Link href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-sm hover:bg-[#f27904] transition-all"><i className="fab fa-facebook-f"></i></Link>
                <Link href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-sm hover:bg-[#f27904] transition-all"><i className="fab fa-instagram"></i></Link>
                <Link href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-sm hover:bg-[#f27904] transition-all"><i className="fab fa-linkedin-in"></i></Link>
                <Link href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-sm hover:bg-[#f27904] transition-all"><i className="fab fa-youtube"></i></Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-5">Our Services</h4>
              <ul className="space-y-3">
                {["Local Household Shifting", "Domestic Shifting", "Corporate Relocation", "International Transportation", "Car & Bike Transport", "Warehouse Services"].map((svc, idx) => (
                  <li key={idx}>
                    <Link href="#" className="text-blue-200 text-sm hover:text-[#f27904] transition-colors flex items-center gap-2">
                      <i className="fas fa-chevron-right text-xs text-[#f27904]"></i>{svc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#about" }, { name: "How It Works", href: "#process" },
                  { name: "Why Choose Us", href: "#whyus" }, { name: "Testimonials", href: "#testimonials" },
                  { name: "Blog", href: "#blog" }, { name: "FAQ", href: "#faq" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-blue-200 text-sm hover:text-[#f27904] transition-colors flex items-center gap-2">
                      <i className="fas fa-chevron-right text-xs text-[#f27904]"></i>{link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-200 text-sm">
                  <i className="fas fa-map-marker-alt text-[#f27904] mt-0.5 flex-shrink-0"></i>
                  <span>Shop No. 2212, First Floor,<br /> Pipli wala town, Manimajra Chandigarh 160101</span>
                </li>
                <li className="flex items-center gap-3 text-blue-200 text-sm">
                  <i className="fas fa-phone text-[#f27904] flex-shrink-0"></i>
                  <a href="tel:+919876543210" className="hover:text-[#f27904]">+91 8683808955</a>
                </li>
                <li className="flex items-center gap-3 text-blue-200 text-sm">
                  <i className="fas fa-envelope text-[#f27904] flex-shrink-0"></i>
                  <a href="mailto:info@eklavyarelocation.com" className="hover:text-[#f27904] break-all">info@eklavyarelocation.com</a>
                </li>
                <li className="flex items-center gap-3 text-blue-200 text-sm">
                  <i className="fas fa-clock text-[#f27904] flex-shrink-0"></i>
                  <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap justify-between items-center gap-4 text-sm text-blue-300">
            <p>© 2025 The Eklavya Relocation. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#f27904] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#f27904] transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-[#f27904] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>

      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-[#f27904] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-600 transition-all z-50 hover:-translate-y-1">
        <i className="fas fa-chevron-up text-sm"></i>
      </button>
    </>
  );
}
