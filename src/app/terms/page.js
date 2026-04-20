import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Service | Eklavya Relocation",
  description: "Read our terms and conditions for using our relocation and transport services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Terms of Service"
          subtitle="The legal agreement between you and Eklavya Relocation."
          bgImage="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80"
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate text-gray-700">
            <h2 className="text-3xl font-display font-bold text-[#0f458b] mb-8">1. Acceptance of Terms</h2>
            <p className="mb-6">By accessing and using the services of Eklavya Relocation, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">2. Services Provided</h3>
            <p className="mb-6">Eklavya Relocation provides packing, moving, transportation, and warehousing services. The specific scope of work for each move will be outlined in a separate quotation or service agreement.</p>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">3. Quotations and Payments</h3>
            <p className="mb-4">Quotations provided are based on the information provided by the customer at the time of survey. Any change in inventory or circumstances may result in a price adjustment.</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Payment terms are 50% advance at the time of booking and 50% at the time of loading, unless specified otherwise.</li>
              <li>Delayed payments may incur late fees or holding charges for the goods.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">4. Customer Responsibilities</h3>
            <p className="mb-4">The customer is responsible for:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Declaring all items to be moved, especially high-value or fragile items.</li>
              <li>Ensuring proper access for our vehicles and staff at both origin and destination.</li>
              <li>Providing all necessary identity and property documents for customs or law enforcement purposes.</li>
              <li>Ensuring all electronics/appliances are disconnected and ready for packing.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">5. Insurance and Liability</h3>
            <p className="mb-4">While we take extreme care, Eklavya Relocation is not liable for loss or damage beyond the terms of the insurance policy selected by the customer.</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Transit insurance is mandatory for all long-distance moves.</li>
              <li>We are not liable for mechanical or electrical derangement of appliances unless there is evidence of external impact.</li>
              <li>Liability for loss or damage is capped at the declared value of the item in the insurance policy.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">6. Cancellations</h3>
            <p className="mb-6">Cancellations made less than 48 hours before the scheduled pickup may incur a cancellation fee to cover administrative and logistical readiness costs.</p>

            <h3 className="text-2xl font-bold text-[#0f458b] mb-4">7. Governing Law</h3>
            <p className="mb-6">These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Rewari/Delhi.</p>

            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 mt-12">
              <p className="font-bold text-[#0f458b] mb-2 text-sm uppercase tracking-widest">Questions?</p>
              <p className="text-gray-600">If you have any questions regarding these terms, please contact us at theeklavyarelocation007@gmail.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
