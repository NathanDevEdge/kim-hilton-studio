import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/shop/CartProvider";
import { CartDrawer } from "@/components/shop/CartDrawer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kimhiltonstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kim Hilton Studio",
    template: "%s | Kim Hilton Studio",
  },
  description:
    "Photography, marketing and design for brands and small businesses. Based in the studio, working everywhere.",
  keywords: [
    "photography",
    "brand photography",
    "marketing",
    "graphic design",
    "brand design",
    "small business",
    "Kim Hilton",
    "studio",
    "fine art prints",
  ],
  authors: [{ name: "Kim Hilton" }],
  creator: "Kim Hilton Studio",
  openGraph: {
    type: "website",
    siteName: "Kim Hilton Studio",
    title: "Kim Hilton Studio",
    description:
      "Photography, marketing and design for brands and small businesses.",
    url: BASE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim Hilton Studio",
    description:
      "Photography, marketing and design for brands and small businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cornsilk text-black-forest">
        {/* Skip to main content — visible on keyboard focus */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-copperwood focus:text-cornsilk focus:px-5 focus:py-3 focus:font-body focus:text-xs focus:uppercase focus:tracking-widest"
        >
          Skip to content
        </a>

        <CartProvider>
          <Header />
          <CartDrawer />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
