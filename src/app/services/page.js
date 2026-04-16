import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceGridUnique from "@/components/ServiceGridUnique";
import CTA from "@/components/CTA";
import Process from "@/components/Process";

export const metadata = {
  title: "Our Services | Eklavya Relocation",
  description: "Explore our wide range of relocation services including local shifting, domestic moving, corporate relocation, and international transportation.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Our Professional Services" 
          subtitle="Tailored relocation solutions to meet all your moving and storage needs."
          bgImage="https://images.unsplash.com/photo-1512418490979-92798ccc13b0?w=1600&q=80"
        />
        <ServiceGridUnique />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
