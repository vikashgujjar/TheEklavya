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
                <div className="mb-12 overflow-hidden rounded-[40px] shadow-2xl relative group h-[450px]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full text-white font-bold text-sm">
                      <i className="fas fa-camera mr-2"></i> Actual Service Deployment
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                  <h2 className="text-3xl font-display font-bold text-[#0f458b] mb-8 border-l-4 border-[#f27904] pl-6 italic">Professional Excellence</h2>
                  <div
                    className="prose prose-lg prose-blue max-w-none text-gray-700 service-content"
                    dangerouslySetInnerHTML={{ __html: service.longContent }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-blue-100 shadow-sm">
                    <div className="w-14 h-14 bg-[#0f458b] rounded-2xl flex items-center justify-center text-white mb-6">
                      <i className="fas fa-star text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f458b] mb-6">Key Statistics</h3>
                    <ul className="space-y-4">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-700 group">
                          <div className="mt-1 w-6 h-6 rounded-full bg-white border-2 border-[#f27904] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f27904] transition-colors">
                            <i className="fas fa-check text-[10px] text-[#f27904] group-hover:text-white"></i>
                          </div>
                          <span className="font-semibold">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl border border-orange-100 shadow-sm">
                    <div className="w-14 h-14 bg-[#f27904] rounded-2xl flex items-center justify-center text-white mb-6">
                      <i className="fas fa-shield-alt text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f458b] mb-4">Quality Assurance</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 italic">
                      "At Eklavya Relocation, we don't just move items; we handle your trust. Our specialized team ensures that your {service.title.toLowerCase()} experience is flawless from start to finish."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="font-bold text-[#0f458b]">Vikash Gujjar</div>
                        <div className="text-sm text-gray-500 font-medium">Operations Head</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-12 rounded-[40px] text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#f27904] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32 transition-opacity group-hover:opacity-30"></div>
                  <div className="relative z-10">
                    <span className="text-[#f27904] font-bold tracking-widest uppercase text-sm mb-4 block">Take the first step</span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Experience <br /><span className="text-[#f27904]">Premium Relocation?</span></h3>
                    <p className="text-gray-400 mb-10 max-w-lg text-lg leading-relaxed">Join 5000+ happy customers who trusted Eklavya for their {service.title.toLowerCase()}. Get a precise quote in minutes.</p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/contact" className="inline-flex items-center gap-3 bg-[#f27904] text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all hover:translate-y-[-2px] shadow-lg shadow-orange-500/20">
                        Get Free Quote <i className="fas fa-paper-plane"></i>
                      </Link>
                      <a href="tel:+918683808955" className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                        <i className="fas fa-phone-alt"></i> Call Now
                      </a>
                    </div>
                  </div>
                  <i className={`${service.icon} absolute -bottom-12 -right-12 text-[260px] text-white/5 transform -rotate-12 transition-transform duration-700 group-hover:rotate-0`}></i>
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
                      <a href="mailto:theeklavyarelocation007@gmail.com" className="flex items-center gap-3 bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-all font-bold">
                        <i className="fas fa-envelope"></i> theeklavyarelocation007@gmail.com
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
