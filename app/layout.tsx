import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ui/contact-modal";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cesto AI - Revolutionize Your Food & Beverage Business",
  description:
    "AI-driven digital platform designed to revolutionize the food & beverage industry by creating a centralized hub where buyers and suppliers can connect, order, and promote products. Automate your entire exchange process.",
  keywords: [
    "AI",
    "food & beverage",
    "automation",
    "suppliers",
    "buyers",
    "inventory management",
    "purchase orders",
  ],
  openGraph: {
    title: "Cesto AI - Revolutionize Your Food & Beverage Business",
    description:
      "Centralize, Automate, and Streamline your food & beverage operations with AI-powered intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
