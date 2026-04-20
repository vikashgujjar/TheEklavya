"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Swal from 'sweetalert2';

const slides = [
  {
    bg: "/images/home/banner1.webp",
    badgeIcon: "fas fa-shield-alt",
    badgeText: "Best Packers and Movers in Chandigarh",
    title: (
      <>
        Reliable Shifting,<br />
        <span className="text-[#f27904]">Expert Packers</span><br />
        In Chandigarh
      </>
    ),
    description: "Eklavya Relocation provides premium household and office shifting services with 100% safety and insurance. Your most trusted relocation partner in Chandigarh.",
    stats: [
      { num: "15K+", label: "Happy Families" },
      { num: "50+", label: "Cities Covered" },
      { num: "15+", label: "Years Experience" }
    ]
  },
  {
    bg: "/images/home/banner2.webp",
    badgeIcon: "fas fa-globe",
    badgeText: "Supply Chain & Global Moving",
    title: (
      <>
        Global Scale,<br />
        <span className="text-[#f27904]">Local Delivery</span><br />
        Network
      </>
    ),
    description: "From international sea freight to last-mile local delivery, our transport infrastructure is built for reliability and speed in every corner of the globe.",
    stats: [
      { icon: "fas fa-globe", label: "100+ Countries" },
      { icon: "fas fa-building", label: "500+ Corporate Clients" },
      { icon: "fas fa-clock", label: "Zero Downtime Moves" }
    ]
  },
  {
    bg: "/images/home/banner3.webp",
    badgeIcon: "fas fa-truck",
    badgeText: "Specialized Transport Fleet",
    title: (
      <>
        Modern Fleet,<br />
        <span className="text-[#f27904]">Seamless Transit</span><br />
        Solutions
      </>
    ),
    description: "Equipped with GPS tracking, hydraulic lifts, and climate control, our specialized transport vehicles ensure your high-value assets travel in safety.",
    stats: [
      { icon: "fas fa-shield-alt", label: "Fully Insured" },
      { icon: "fas fa-map-marker-alt", label: "GPS Tracked" },
      { icon: "fas fa-star", label: "Zero-Scratch Guarantee" }
    ]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    movingFrom: '',
    movingTo: '',
    service: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.movingFrom.trim()) newErrors.movingFrom = 'Origin is required';
    if (!formData.movingTo.trim()) newErrors.movingTo = 'Destination is required';
    if (!formData.service || formData.service.includes('Select')) newErrors.service = 'Select service';

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
      moveType: "Hero Section Form",
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
          title: "Quote Requested!",
          text: "Your request has been submitted successfully.",
          confirmButtonColor: '#f27904',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          movingFrom: '',
          movingTo: '',
          service: '',
        });
        setErrors({});
      } else {
        Swal.fire("Error", "Failed to submit request.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section id="heroSection" className="relative min-h-auto overflow-hidden py-[30px] md:py-[30px]">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`bg-slide ${currentSlide === idx ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide.bg}')` }}
        ></div>
      ))}

      <div
        className="hero-overlay absolute inset-0 z-10"
        style={{
          background: "linear-gradient(120deg,rgba(15,69,139,0.82) 0%,rgba(15,69,139,0.55) 55%,rgba(0,0,0,0.35) 100%)"
        }}
      ></div>

      <div className="hero-content-wrap relative z-20 min-h-[100vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full py-16 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-14 items-center min-h-[calc(100vh-80px)]">

            <div className="text-white relative">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-900 ${currentSlide === idx ? 'block animate-[stFade_.9s_ease]' : 'hidden'}`}
                >
                  <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/20">
                    <i className={`${slide.badgeIcon} text-[#f27904] text-xs`}></i> {slide.badgeText}
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-5">
                    {slide.title}
                  </h1>
                  <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    <Link href="#services" className="inline-flex items-center gap-2 bg-[#f27904] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-500 transition-all shadow-xl hover:-translate-y-0.5">
                      Explore Services <i className="fas fa-arrow-right text-xs"></i>
                    </Link>
                    <Link href="#about" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/25 transition-all">
                      Learn More
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-3">
                    {slide.stats.map((stat, sIdx) => {
                      if (stat.num) {
                        return (
                          <React.Fragment key={sIdx}>
                            <div>
                              <p className="font-display text-3xl font-bold text-[#f27904]">{stat.num}</p>
                              <p className="text-white/75 text-sm">{stat.label}</p>
                            </div>
                            {sIdx < slide.stats.length - 1 && <div className="w-px bg-white/20 hidden sm:block"></div>}
                          </React.Fragment>
                        );
                      } else {
                        return (
                          <div key={sIdx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/15">
                            <i className={`${stat.icon} text-[#f27904]`}></i>
                            <span className="text-white text-sm font-medium">{stat.label}</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              ))}

              <button
                onClick={() => setMobileFormOpen(!mobileFormOpen)}
                className="lg:hidden mt-8 inline-flex items-center gap-2 bg-[#f27904] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg"
              >
                <i className="fas fa-file-alt"></i> Get Free Quote
              </button>

              {mobileFormOpen && (
                <div id="heroFormPanel" className="lg:hidden mt-4">
                  <div className="bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 text-gray-800">
                    <h3 className="font-display text-xl font-bold text-[#0f458b] mb-1">Get a Free Quote</h3>
                    <p className="text-gray-500 text-xs mb-4">We'll call you back within 2 hours!</p>
                    <form className="space-y-3" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl px-3 py-2.5 text-sm transition-all`}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl px-3 py-2.5 text-sm transition-all`}
                        />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl px-3 py-2.5 text-sm transition-all`}
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          name="movingFrom"
                          value={formData.movingFrom}
                          onChange={handleChange}
                          placeholder="Moving From"
                          className={`w-full border ${errors.movingFrom ? 'border-red-500' : 'border-gray-200'} rounded-xl px-3 py-2.5 text-sm transition-all`}
                        />
                        <input
                          type="text"
                          name="movingTo"
                          value={formData.movingTo}
                          onChange={handleChange}
                          placeholder="Moving To"
                          className={`w-full border ${errors.movingTo ? 'border-red-500' : 'border-gray-200'} rounded-xl px-3 py-2.5 text-sm transition-all`}
                        />
                      </div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full border ${errors.service ? 'border-red-500' : 'border-gray-200'} rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-all`}
                      >
                        <option>Select a service...</option>
                        <option>Local Household Shifting</option>
                        <option>Domestic Shifting</option>
                        <option>Corporate Relocation</option>
                        <option>International Transportation</option>
                        <option>Car &amp; Bike Transportation</option>
                        <option>Warehouse Services</option>
                      </select>
                      <button
                        disabled={loader}
                        className="w-full bg-[#f27904] text-white py-3 rounded-xl font-semibold text-sm hover:bg-orange-600 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {loader ? <i className="fas fa-circle-notch animate-spin"></i> : <i className="fas fa-paper-plane"></i>}
                        {loader ? 'Sending...' : 'Request Free Quote'}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            <div id="qform" className="hidden lg:block z-30">
              <div className="bg-white rounded-3xl shadow-2xl p-7 xl:p-8 border border-gray-100 text-gray-800">
                <h3 className="font-display text-2xl font-bold text-[#0f458b] mb-1">Get a Free Quote</h3>
                <p className="text-gray-500 text-sm mb-5">Fill in details — we'll call you within 2 hours!</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Rahul"
                        className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm transition-all`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm transition-all`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 8683808955"
                      className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm transition-all`}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Moving From</label>
                      <input
                        type="text"
                        name="movingFrom"
                        value={formData.movingFrom}
                        onChange={handleChange}
                        placeholder="Delhi"
                        className={`w-full border ${errors.movingFrom ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm transition-all`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Moving To</label>
                      <input
                        type="text"
                        name="movingTo"
                        value={formData.movingTo}
                        onChange={handleChange}
                        placeholder="Mumbai"
                        className={`w-full border ${errors.movingTo ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm transition-all`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full border ${errors.service ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm text-gray-700 transition-all`}
                    >
                      <option>Select a service...</option>
                      <option>Local Household Shifting</option>
                      <option>Domestic Shifting Services</option>
                      <option>Corporate Relocation</option>
                      <option>International Transportation</option>
                      <option>Car &amp; Bike Transportation</option>
                      <option>Warehouse Services</option>
                    </select>
                  </div>
                  <button
                    disabled={loader}
                    className="w-full bg-[#f27904] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loader ? <i className="fas fa-circle-notch animate-spin"></i> : <i className="fas fa-paper-plane"></i>}
                    {loader ? 'Sending...' : 'Request Free Quote'}
                  </button>
                  <p className="text-center text-xs text-gray-400">No hidden charges • 100% Secure • Quick Response</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full flex items-center justify-center hover:bg-[#f27904] hover:border-[#f27904] transition-all z-30">
        <i className="fas fa-chevron-left text-sm"></i>
      </button>
      <button onClick={nextSlide} className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full flex items-center justify-center hover:bg-[#f27904] hover:border-[#f27904] transition-all z-30">
        <i className="fas fa-chevron-right text-sm"></i>
      </button>

      <div className="absolute bottom-6 left-1/2 lg:left-1/4 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-[10px] h-[10px] rounded-full transition-all cursor-pointer ${currentSlide === idx ? 'w-[24px] bg-[#f27904]' : 'bg-[#d1d5db]'}`}
            onClick={() => setCurrentSlide(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
}
