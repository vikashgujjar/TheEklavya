"use client";
import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    theme: "text-[#f27904]",
    bgTheme: "bg-[#f27904]",
    badge: "Packing Tips",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    date: "March 15, 2025",
    readTime: "5 min read",
    title: "10 Essential Packing Tips for a Stress-Free Move",
    desc: "Discover the professional packing techniques our experts use every day to keep your belongings safe during transit."
  },
  {
    theme: "text-[#f27904]",
    bgTheme: "bg-[#0f458b]",
    badge: "Relocation Guide",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    date: "February 28, 2025",
    readTime: "7 min read",
    title: "The Complete Guide to Corporate Office Relocation",
    desc: "Planning an office move? Here's everything you need to know to ensure zero downtime and a smooth transition."
  },
  {
    theme: "text-[#f27904]",
    bgTheme: "bg-[#f27904]",
    badge: "International",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    date: "January 10, 2025",
    readTime: "8 min read",
    title: "International Moving Checklist: Everything You Need to Know",
    desc: "From visa to customs — a detailed checklist to make your international relocation smooth and hassle-free."
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 bg-[#fff4e8] text-[#f27904] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-newspaper text-xs"></i> Moving Tips &amp; Insights
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0f458b] mb-4">
            From Our <span className="gt">Blog</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Expert advice, packing tips, and relocation guides from our experienced team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="reveal bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-52 overflow-hidden relative">
                <img src={post.img} alt={post.badge} className="ic group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-4 left-4 ${post.bgTheme} text-white text-xs font-bold px-3 py-1 rounded-full`}>{post.badge}</span>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><i className="fas fa-calendar"></i> {post.date}</span>
                  <span className="flex items-center gap-1"><i className="fas fa-clock"></i> {post.readTime}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f458b] mb-3 group-hover:text-[#f27904] transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{post.desc}</p>
                <Link href="#" className="text-[#f27904] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12 reveal">
          <Link href="#" className="inline-flex items-center gap-2 border-2 border-[#0f458b] text-[#0f458b] px-8 py-3.5 rounded-full font-semibold hover:bg-[#0f458b] hover:text-white transition-all">
            View All Articles <i className="fas fa-arrow-right text-sm"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
