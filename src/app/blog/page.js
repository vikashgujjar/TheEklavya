import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogGridUnique from "@/components/BlogGridUnique";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Blog | Relocation Tips & Guides",
  description: "Read the latest tips, tricks, and guides on packing and moving from the experts at Eklavya Relocation.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Moving Tips & Insights"
          subtitle="Expert advice to make your next relocation smooth and stress-free."
          bgImage="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=1600&q=80"
        />
        <BlogGridUnique />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
