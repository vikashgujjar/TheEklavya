import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy | Eklavya Relocation",
  description: "Our privacy policy outlines how we handle your personal data and ensure your security during the relocation process.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Privacy Policy"
          subtitle="How we protect and manage your personal data."
          bgImage="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80"
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate text-gray-700">
            <h2 className="text-3xl font-display font-bold text-[#0f458b] mb-8">Introduction</h2>
            <p className="mb-6">At Eklavya Relocation, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.</p>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">Information We Collect</h3>
            <p className="mb-4">We collect information that you provide directly to us, such as when you request a quote, schedule a move, or contact us for support. This may include:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Name, email address, and phone number.</li>
              <li>Pickup and delivery addresses.</li>
              <li>Inventories of goods to be moved.</li>
              <li>Payment information.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">How We Use Your Information</h3>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Provide and improve our relocation services.</li>
              <li>Communicate with you regarding your move.</li>
              <li>Process payments and prevent fraud.</li>
              <li>Analyze website usage to enhance user experience.</li>
              <li>Comply with legal obligations and customs regulations.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">Data Security</h3>
            <p className="mb-6">We implement robust technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Our systems are regularly updated and monitored to ensure the highest level of security.</p>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">Sharing Your Information</h3>
            <p className="mb-6">We do not sell your personal information. We may share your data with trusted third-party partners who assist us in providing our services (e.g., insurance providers, international shipping partners), provided they agree to maintain the confidentiality of your data.</p>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">Your Rights</h3>
            <p className="mb-6">You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at theeklavyarelocation007@gmail.com.</p>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">Changes to This Policy</h3>
            <p className="mb-6">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 mt-12">
              <p className="font-bold text-[#0f458b] mb-2 text-sm uppercase tracking-widest">Contact Us</p>
              <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us at theeklavyarelocation007@gmail.com or call us at +91 8683808955.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
