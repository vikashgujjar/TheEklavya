"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import Swal from 'sweetalert2';

export default function ContactPage() {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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
    if (!formData.phone.trim()) newErrors.phone = 'Mobile number is required';
    if (!formData.service || formData.service === 'Relocation Service Type') newErrors.service = 'Please select a service';

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
      moveType: "Contact Page Form",
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
        await Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully. We will get back to you soon.",
          confirmButtonColor: '#f27904',
        });
        setFormData({
          name: '',
          phone: '',
          service: '',
          message: '',
        });
        setErrors({});
      } else {
        Swal.fire("Error", "Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          title="Contact Our Team"
          subtitle="We're here to help you plan your next move with ease and confidence."
          bgImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&q=80"
        />

        <section className="py-24 relative overflow-hidden">
          {/* Abstract Decorations */}
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-orange-50 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20 items-stretch">
              {/* Left Column - Contact Details */}
              <div className="lg:w-2/5 flex flex-col justify-center">
                <div className="reveal">
                  <span className="text-[#f27904] font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Connect</span>
                  <h2 className="text-5xl md:text-6xl font-display font-bold text-[#0f458b] mb-10 leading-tight">
                    Let's Talk About <br />Your <span className="gt">Next Move</span>
                  </h2>

                  <div className="space-y-10">
                    {[
                      { icon: "fa-map-marker-alt", title: "Corporate Base", detail: "Plot No. 45, Sector 18, Gurugram, HR", color: "bg-blue-600" },
                      { icon: "fa-phone-alt", title: "Instant Query", detail: "+91 8683808955", color: "bg-[#f27904]" },
                      { icon: "fa-envelope", title: "General Inquiries", detail: "theeklavyarelocation007@gmail.com", color: "bg-purple-600" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className={`w-16 h-16 ${item.color} rounded-3xl flex items-center justify-center text-white text-xl shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform`}>
                          <i className={`fas ${item.icon}`}></i>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">{item.title}</p>
                          <p className="text-xl font-bold text-[#0f458b]">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-gray-100 reveal">
                    <p className="font-bold text-[#0f458b] mb-6 uppercase text-xs tracking-widest">Global Support</p>
                    <div className="flex flex-wrap gap-4">
                      {["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"].map((city, i) => (
                        <div key={i} className="bg-slate-50 px-5 py-2 rounded-full text-sm font-semibold text-gray-600 border border-gray-100">{city}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Unique Combined Form Box */}
              <div className="lg:w-3/5">
                <div className="reveal h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f458b] to-blue-900 rounded-[4rem] rotate-3 translate-x-2 translate-y-2 opacity-10"></div>
                  <div className="relative bg-white border border-gray-100 p-10 md:p-16 rounded-[4rem] shadow-2xl h-full flex flex-col">
                    <div className="mb-10 text-center">
                      <h3 className="text-3xl font-display font-bold text-[#0f458b] mb-4">Request a Consultation</h3>
                      <p className="text-gray-500">Fast tracking your move starts with a simple conversation.</p>
                    </div>

                    <form className="space-y-6 flex-grow flex flex-col" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative group">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-slate-50 border-2 ${errors.name ? 'border-red-400' : 'border-transparent'} px-8 py-5 rounded-[2rem] outline-none focus:ring-4 focus:ring-orange-50 font-medium transition-all peer`}
                            placeholder="Full Name"
                          />
                          <div className="absolute inset-0 border-2 border-[#f27904] rounded-[2rem] opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                        <div className="relative group">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-slate-50 border-2 ${errors.phone ? 'border-red-400' : 'border-transparent'} px-8 py-5 rounded-[2rem] outline-none focus:ring-4 focus:ring-orange-50 font-medium transition-all peer`}
                            placeholder="Mobile Number"
                          />
                          <div className="absolute inset-0 border-2 border-[#f27904] rounded-[2rem] opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="relative group">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full bg-slate-50 border-2 ${errors.service ? 'border-red-400' : 'border-transparent'} px-8 py-5 rounded-[2rem] outline-none focus:ring-4 focus:ring-orange-50 font-medium appearance-none transition-all`}
                        >
                          <option>Relocation Service Type</option>
                          <option>Household Shifting</option>
                          <option>Office Shifting</option>
                          <option>Vehicle Trans</option>
                        </select>
                        <i className="fas fa-chevron-down absolute right-8 top-1/2 -translate-y-1/2 text-gray-300"></i>
                      </div>

                      <div className="relative group flex-grow">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full bg-slate-50 border-none px-8 py-5 rounded-[2rem] outline-none focus:ring-4 focus:ring-orange-50 font-medium transition-all resize-none"
                          placeholder="Share your moving requirements..."
                        ></textarea>
                        <div className="absolute inset-0 border-2 border-[#f27904] rounded-[2rem] opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>

                      <button type="submit" disabled={loader} className="group relative overflow-hidden bg-[#f27904] text-white px-10 py-6 rounded-[2rem] font-bold text-lg shadow-2xl shadow-orange-100 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {loader ? (
                            <><i className="fas fa-circle-notch animate-spin"></i> SENDING...</>
                          ) : (
                            <>SEND MESSAGE <i className="fas fa-arrow-right"></i></>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-[#f27904] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
