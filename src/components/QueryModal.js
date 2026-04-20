"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Swal from 'sweetalert2';

const QueryModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);
    const [loader, setLoader] = useState(false);
    const pathname = usePathname();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        movingFrom: '',
        movingTo: '',
    });

    const [errors, setErrors] = useState({});

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.service || formData.service === 'Select Service Type') newErrors.service = 'Please select a service';
        if (!formData.movingFrom.trim()) newErrors.movingFrom = 'Origin city is required';
        if (!formData.movingTo.trim()) newErrors.movingTo = 'Destination city is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill in all required fields correctly.',
                confirmButtonColor: '#f27904',
            });
            return;
        }

        setLoader(true);

        const payload = {
            company: "Eklavya Relocation",
            company_name: "Eklavya Relocation",
            moveType: "Query Modal Form",
            mail_to: "theeklavyarelocation007@gmail.com",
            ...formData,
        };

        try {
            const response = await fetch(
                "https://mail.futuretouch.org/api/send-message",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            if (response.ok) {
                closeModal();
                Swal.fire({
                    icon: "success",
                    title: "Quote Requested!",
                    text: "Your request has been submitted successfully. We will contact you shortly.",
                    confirmButtonColor: '#f27904',
                });
                setFormData({
                    name: '',
                    phone: '',
                    service: '',
                    movingFrom: '',
                    movingTo: '',
                });
                setErrors({});
            } else {
                Swal.fire("Error", "Failed to submit request. Please try again.", "error");
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Something went wrong!", "error");
        } finally {
            setLoader(false);
        }
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

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-100'} rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all`}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91"
                                    className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-100'} rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all`}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Service Required</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`w-full bg-slate-50 border ${errors.service ? 'border-red-500' : 'border-slate-100'} rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all appearance-none cursor-pointer`}
                            >
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
                                    name="movingFrom"
                                    value={formData.movingFrom}
                                    onChange={handleChange}
                                    placeholder="Origin City"
                                    className={`w-full bg-slate-50 border ${errors.movingFrom ? 'border-red-500' : 'border-slate-100'} rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all`}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Moving To</label>
                                <input
                                    type="text"
                                    name="movingTo"
                                    value={formData.movingTo}
                                    onChange={handleChange}
                                    placeholder="Destination City"
                                    className={`w-full bg-slate-50 border ${errors.movingTo ? 'border-red-500' : 'border-slate-100'} rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-[#f27904] outline-none transition-all`}
                                />
                            </div>
                        </div>

                        <button
                            disabled={loader}
                            className="w-full bg-[#f27904] text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 mt-4 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loader ? (
                                <i className="fas fa-circle-notch animate-spin"></i>
                            ) : (
                                <i className="fas fa-paper-plane"></i>
                            )}
                            {loader ? 'Sending...' : 'Calculate My Quote'}
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
