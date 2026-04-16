import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { blogPosts } from "@/data/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title={post.title} 
          subtitle={`${post.date} • ${post.readTime}`}
          bgImage={post.img}
        />
        
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 reveal">
            <div className="mb-10 overflow-hidden rounded-3xl shadow-2xl">
                <img src={post.img} alt={post.title} className="w-full h-[500px] object-cover" />
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none">
                <div className="flex items-center gap-4 mb-8">
                    <span className={`${post.bgTheme} text-white px-4 py-1.5 rounded-full text-sm font-bold`}>
                        {post.badge}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-2">
                        <i className="fas fa-calendar"></i> {post.date}
                    </span>
                </div>
                
                <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
                    {post.content.split('\n').map((para, i) => para.trim() && (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </div>
            
            <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0f458b] rounded-full flex items-center justify-center text-white">
                        <i className="fas fa-user"></i>
                    </div>
                    <div>
                        <p className="font-bold text-[#0f458b]">Team Eklavya</p>
                        <p className="text-sm text-gray-500">Relocation Experts</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0f458b] hover:text-white transition-all">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0f458b] hover:text-white transition-all">
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0f458b] hover:text-white transition-all">
                        <i className="fab fa-linkedin-in"></i>
                    </button>
                </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-display font-bold text-[#0f458b] mb-10">You Might Also Like</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.filter(p => p.slug !== params.slug).slice(0, 3).map((related, idx) => (
                        <Link key={idx} href={`/blog/${related.slug}`} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="h-48 overflow-hidden relative">
                                <img src={related.img} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-[#0f458b] group-hover:text-[#f27904] transition-colors line-clamp-2">{related.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </>
  );
}
