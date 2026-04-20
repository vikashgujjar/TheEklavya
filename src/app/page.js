import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Rates from "@/components/Rates";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import SEOContent from "@/components/SEOContent";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <About />
        <Marquee />
        <Services />
        <Rates />
        <Process />
        <Gallery />
        <SEOContent />
        <WhyUs />
        <FAQ />
        <Testimonials />
        <Blog />
        <CTA />
        <Map />
      </main>
      <Footer />
    </>
  );
}

