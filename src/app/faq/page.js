import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata = {
  title: "FAQ | Frequently Asked Questions | Eklavya Relocation",
  description: "Find answers to common questions about our relocation, transport, and warehousing services.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Common Questions" 
          subtitle="Everything you need to know about our transport and relocation services."
          bgImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80"
        />
        <FAQ />
        
        <section className="py-20 bg-slate-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-display font-bold text-[#0f458b] mb-6">Still have questions?</h2>
                <p className="text-gray-600 mb-8">If you couldn't find the answer you were looking for, feel free to reach out to our 24/7 support team.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="tel:+918683808955" className="bg-[#0f458b] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-all flex items-center gap-2">
                        <i className="fas fa-phone-alt"></i> Call Us
                    </a>
                    <a href="mailto:info@eklavyarelocation.com" className="bg-white text-[#0f458b] border border-gray-200 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                        <i className="fas fa-envelope"></i> Email Us
                    </a>
                </div>
            </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
