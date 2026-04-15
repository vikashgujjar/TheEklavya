import "./globals.css";

export const metadata = {
  title: "The Eklavya Relocation | Trusted Moving & Shifting Services",
  description: "India's Trusted Relocation Partner",
};

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
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
