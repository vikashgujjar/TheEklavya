import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "The Eklavya Relocation | Trusted Moving & Shifting Services",
  description: "India's Trusted Relocation Partner",
};

import WhatsAppIcon from "@/components/WhatsAppIcon";
import QueryModal from "@/components/QueryModal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="bg-white text-gray-800">
        <ScrollReveal />
        {children}
        <WhatsAppIcon />
        <QueryModal />
      </body>
    </html>
  );
}
