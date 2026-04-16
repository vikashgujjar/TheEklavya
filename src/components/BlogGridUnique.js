import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export default function BlogGridUnique() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-10 left-[-5%] text-[150px] font-bold text-gray-100/50 pointer-events-none select-none leading-none rotate-[-5deg] z-0">
         OUR BLOG
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content - Large Featured Post */}
            <div className="lg:w-2/3">
                <article className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 reveal h-full flex flex-col">
                    <div className="relative h-[450px] overflow-hidden">
                        <img src={blogPosts[0].img} alt={blogPosts[0].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-8 left-8">
                            <span className="bg-[#0f458b] text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">LATEST NEWS</span>
                        </div>
                    </div>
                    <div className="p-12 flex-grow">
                        <div className="flex items-center gap-6 mb-6 text-sm text-gray-400 font-medium">
                            <span className="flex items-center gap-2"><i className="fas fa-calendar-alt text-[#f27904]"></i> {blogPosts[0].date}</span>
                            <span className="flex items-center gap-2"><i className="fas fa-clock text-[#f27904]"></i> {blogPosts[0].readTime}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0f458b] mb-6 group-hover:text-[#f27904] transition-colors leading-tight">
                            {blogPosts[0].title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                            {blogPosts[0].desc}
                        </p>
                        <Link href={`/blog/${blogPosts[0].slug}`} className="inline-flex items-center gap-3 bg-[#f27904] text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-100">
                            Continue Reading <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </article>
            </div>

            {/* Right Content - Stacked Posts */}
            <div className="lg:w-1/3 flex flex-col gap-8">
                {blogPosts.slice(1).map((post, idx) => (
                    <article key={idx} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all group reveal">
                        <div className="flex items-center gap-4 mb-5">
                            <span className="w-2 h-2 rounded-full bg-[#f27904]"></span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{post.badge}</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-[#0f458b] mb-4 group-hover:text-[#f27904] transition-colors line-clamp-2">
                           {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.desc}</p>
                        <Link href={`/blog/${post.slug}`} className="text-[#f27904] text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                            READ ARTICLE <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                    </article>
                ))}

                {/* Subscription Box */}
                <div className="bg-[#0f458b] rounded-[2.5rem] p-10 text-white relative overflow-hidden reveal">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 leading-tight">Get Relocation Tips in Your Inbox</h3>
                        <p className="text-blue-200 text-sm mb-8">No spam, just expert advice to help you move.</p>
                        <div className="relative">
                            <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:bg-white/20 transition-all text-sm mb-4" />
                            <button className="w-full bg-[#f27904] text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all">SUBSCRIBE</button>
                        </div>
                    </div>
                    <i className="fas fa-envelope-open-text absolute -bottom-8 -right-8 text-7xl text-white/5 rotate-12"></i>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
