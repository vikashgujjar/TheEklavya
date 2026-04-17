"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const QueryModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);
    const pathname = usePathname();

    // Trigger on Scroll
    useEffect(() => {
        const handleScroll = () => {
            if (hasBeenShown || isOpen) return;

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;

            if (scrollPercent > 40) { // Show after 40% scroll
                setIsOpen(true);
                setHasBeenShown(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasBeenShown, isOpen]);

    // Reset for new pages if desired, but keep it scroll-only
    useEffect(() => {
        setHasBeenShown(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-start h-screen overflow-y-auto justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed h-screen inset-0 bg-[#0f458b]/60 backdrop-blur-md transition-opacity duration-500"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
                {/* Branding Strip */}
                <div className="h-2 bg-gradient-to-r from-[#f27904] to-[#0f458b]"></div>
                <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#f27904] hover:text-white transition-all z-20"
                >
                    <i className="fas fa-times"></i>
                </button>

                <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                        <span className="bg-[#fff4e8] text-[#f27904] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                            Limited Time Offer
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0f458b] mb-4 leading-tight">
                            Get Your <span className="text-[#f27904]">Free</span> Relocation Quote
                        </h2>
                        <p className="text-gray-500 font-medium">Save up to 15% on your first move with Eklavya.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Service Required</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all appearance-none cursor-pointer">
                                <option>Select Service Type</option>
                                <option>Local Shifting</option>
                                <option>Domestic Relocation</option>
                                <option>Corporate Moving</option>
                                <option>Car/Bike Transport</option>
                                <option>International Move</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Moving From</label>
                                <input
                                    type="text"
                                    placeholder="Origin City"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Moving To</label>
                                <input
                                    type="text"
                                    placeholder="Destination City"
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-[#f27904] text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 mt-4 flex items-center justify-center gap-3">
                            <i className="fas fa-paper-plane"></i> Calculate My Quote
                        </button>
                    </form>

                    <p className="text-center text-gray-400 text-xs mt-8">
                        <i className="fas fa-shield-alt mr-1"></i> Your data 100% secure • Responds within 2 hours
                    </p>
                </div>

                {/* Decorative Bottom */}
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#0f458b]/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default QueryModal;
