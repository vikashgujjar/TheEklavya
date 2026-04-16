import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Process />
        <WhyUs />
        <FAQ />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
