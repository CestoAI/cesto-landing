import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ContactModalProvider } from "@/components/ui/contact-modal";
import { I18nProvider } from "@/lib/i18n";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "US";

  // List of Spanish speaking countries (ISO 3166-1 alpha-2)
  const spanishCountries = ["ES", "MX", "AR", "CO", "PE", "CL", "VE", "EC", "GT", "CU", "BO", "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ"];
  const initialLocale = spanishCountries.includes(country) ? "es" : "en";

  return (
    <html lang={initialLocale}>
      <body className={`${manrope.variable} antialiased`}>
        <I18nProvider initialLocale={initialLocale}>
          <ContactModalProvider>{children}</ContactModalProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
