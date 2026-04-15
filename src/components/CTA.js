"use client";
import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-[#f27904] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 border border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative reveal">
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Start Your Move?</h2>
        <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
          Get a free, no-obligation quote today. Our team will plan your perfect move tailored to your schedule and budget.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#qform" className="inline-flex items-center gap-2 bg-white text-[#f27904] px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-xl hover:-translate-y-1">
            <i className="fas fa-paper-plane"></i> Get Free Quote
          </Link>
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1">
            <i className="fas fa-phone-alt"></i> Call Us Now
          </a>
        </div>
        <p className="text-orange-200 mt-6 text-sm">
          <i className="fas fa-check-circle mr-1"></i>No hidden charges &nbsp;•&nbsp; <i className="fas fa-check-circle mr-1"></i>Response within 2 hours &nbsp;•&nbsp; <i className="fas fa-check-circle mr-1"></i>100% Satisfaction Guarantee
        </p>
      </div>
    </section>
  );
}
