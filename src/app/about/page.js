import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About Us | Eklavya Relocation",
  description: "Learn more about Eklavya Relocation, India's most trusted packing and moving service provider with over 15 years of excellence.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero 
          title="About Our Journey" 
          subtitle="Building trust through excellence in every move since 2008."
          bgImage="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?w=1600&q=80"
        />
        <About />
        
        {/* Unique Mission/Vision Section */}
        <section className="py-24 relative overflow-hidden bg-[#0f458b]">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="reveal">
                        <span className="text-[#f27904] font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Our Purpose</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">Driven by trust, <br/><span className="text-[#f27904]">Powered by care.</span></h2>
                        <div className="grid gap-6">
                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#f27904] transition-colors">Our Mission</h3>
                                <p className="text-blue-200">To simplify the relocation experience for every family and business in India, providing safety and peace of mind through professional expertise and innovative logistics.</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#f27904] transition-colors">Our Vision</h3>
                                <p className="text-blue-200">To become the global benchmark for excellence in the packing and moving industry, known for our integrity, punctuality, and customer-first approach.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 reveal">
                        <div className="space-y-6">
                            <div className="bg-[#f27904] p-10 rounded-[3rem] text-white shadow-2xl transform translate-y-12">
                                <p className="text-5xl font-bold mb-2">15k+</p>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Moves Done</p>
                            </div>
                            <div className="bg-white p-10 rounded-[3rem] text-[#0f458b] shadow-2xl">
                                <p className="text-5xl font-bold mb-2">500+</p>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-60">Experts</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-blue-400 p-10 rounded-[3rem] text-white shadow-2xl">
                                <p className="text-5xl font-bold mb-2">50+</p>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Cities</p>
                            </div>
                            <div className="bg-[#0f458b] border border-white/20 p-10 rounded-[3rem] text-white shadow-2xl transform translate-y-12">
                                <p className="text-5xl font-bold mb-2">99%</p>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
