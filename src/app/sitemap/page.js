import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blogs";
import Link from "next/link";

export const metadata = {
  title: "Sitemap | Eklavya Relocation",
  description: "Navigate all pages of the Eklavya Relocation website easily through our visual sitemap.",
};

export default function SitemapPage() {
  const mainPages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Blog / Insights", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Sitemap" 
          subtitle="A comprehensive map of our website's structure."
          bgImage="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1600&q=80"
        />
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Main Navigation */}
              <div className="reveal">
                <h2 className="text-2xl font-display font-bold text-[#0f458b] mb-8 flex items-center gap-3">
                    <i className="fas fa-compass text-[#f27904]"></i> Main Pages
                </h2>
                <ul className="space-y-4">
                    {mainPages.map((page, i) => (
                        <li key={i}>
                            <Link href={page.path} className="text-gray-600 hover:text-[#f27904] font-medium transition-colors flex items-center gap-2">
                                <i className="fas fa-chevron-right text-[10px] opacity-40"></i> {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
              </div>

              {/* Service Pages */}
              <div className="reveal">
                <h2 className="text-2xl font-display font-bold text-[#0f458b] mb-8 flex items-center gap-3">
                    <i className="fas fa-truck text-[#f27904]"></i> Services
                </h2>
                <ul className="space-y-4">
                    {services.map((svc, i) => (
                        <li key={i}>
                            <Link href={`/services/${svc.slug}`} className="text-gray-600 hover:text-[#f27904] font-medium transition-colors flex items-center gap-2">
                                <i className="fas fa-chevron-right text-[10px] opacity-40"></i> {svc.title}
                            </Link>
                        </li>
                    ))}
                </ul>
              </div>

              {/* Blog Posts */}
              <div className="reveal lg:col-span-2">
                <h2 className="text-2xl font-display font-bold text-[#0f458b] mb-8 flex items-center gap-3">
                    <i className="fas fa-newspaper text-[#f27904]"></i> Transport Insights
                </h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    {blogPosts.map((post, i) => (
                        <div key={i}>
                            <Link href={`/blog/${post.slug}`} className="text-gray-600 hover:text-[#f27904] font-medium transition-colors flex items-center gap-2">
                                <i className="fas fa-chevron-right text-[10px] opacity-40"></i> {post.title}
                            </Link>
                        </div>
                    ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
