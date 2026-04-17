import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogGridUnique from "@/components/BlogGridUnique";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Insights | Transport & Logistics Blog",
  description: "Stay updated with the latest trends, technology, and insights from the world of Indian transport and nationwide logistics.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Transport Insights"
          subtitle="Expert analysis and updates from the frontline of Indian logistics and nationwide goods movement."
          bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80"
        />
        <BlogGridUnique />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
