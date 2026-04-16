import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((svc) => ({
    slug: svc.slug,
  }));
}

export default async function SingleServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageHero 
          title={service.title} 
          subtitle={service.desc}
          bgImage={service.img}
        />
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 reveal">
                <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
                    <img src={service.img} alt={service.title} className="w-full h-[400px] object-cover" />
                </div>
                
                <h2 className="text-3xl font-display font-bold text-[#0f458b] mb-6">Detailed Overview</h2>
                <div className="prose prose-lg text-gray-600 mb-10 max-w-none">
                  <p className="mb-4">{service.fullDesc}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                    <h3 className="text-xl font-bold text-[#0f458b] mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <i className="fas fa-check-circle text-[#f27904]"></i>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                    <h3 className="text-xl font-bold text-[#0f458b] mb-4">Why Choose This?</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Eklavya Relocation offers specialized expertise in {service.title.toLowerCase()}. Our team is trained specifically for these requirements, ensuring a flawless experience tailored to your needs.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0f458b] p-10 rounded-3xl text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                        <p className="text-blue-200 mb-8 max-w-lg">Contact us today for a personalized quote for your {service.title.toLowerCase()} needs. Our experts are ready to help.</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f27904] text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-600 transition-all">
                            Get A Quote <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    <i className={`${service.icon} absolute -bottom-10 -right-10 text-[200px] text-white/5`}></i>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 reveal">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
                    <h3 className="text-xl font-bold text-[#0f458b] mb-6">All Services</h3>
                    <div className="flex flex-col gap-3">
                      {services.map((svc) => (
                        <Link 
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          className={`flex items-center justify-between p-4 rounded-xl font-semibold transition-all ${svc.slug === params.slug ? 'bg-[#f27904] text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-[#f27904]'}`}
                        >
                          {svc.title}
                          <i className="fas fa-chevron-right text-xs opacity-50"></i>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#f27904] p-8 rounded-3xl text-white relative overflow-hidden group">
                    <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                    <p className="text-white/90 mb-6 text-sm">Speak with our relocation experts for immediate assistance.</p>
                    <div className="flex flex-col gap-4">
                        <a href="tel:+918683808955" className="flex items-center gap-3 bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-all font-bold">
                            <i className="fas fa-phone-alt"></i> +91 8683808955
                        </a>
                        <a href="mailto:info@eklavyarelocation.com" className="flex items-center gap-3 bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-all font-bold">
                            <i className="fas fa-envelope"></i> info@eklavyarelocation.com
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </>
  );
}
