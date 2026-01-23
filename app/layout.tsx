import type { Metadata } from "next";
import "./globals.css";
import FooterSection from "@/components/homepage/footer-section";
import NavbarSection from "@/components/homepage/navbar-section";
import NewsletterSection from "@/components/homepage/newsletter-section";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SHOP.CO - Find Clothes That Matches Your Style",
  description:
    "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavbarSection />
        {children}
        <NewsletterSection />
        <FooterSection />
      </body>
    </html>
  );
}
