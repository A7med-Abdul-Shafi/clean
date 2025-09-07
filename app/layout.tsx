import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "افضل شركة تنظيف منازل في دبي | كلينرز",
  description:
    "أفضل خدمات التنظيف في دبي مع كلينرز. احصل على تنظيف منزلك أو مكتبك بسرعة وسهولة عبر الإنترنت.",
  keywords: [
    "تنظيف منازل دبي",
    "شركة تنظيف دبي",
    "خدمات التنظيف",
    "كلينرز",
    "تنظيف مكاتب",
    "مكافحة الحشرات",
  ],
  authors: [{ name: "Cleaners Dubai", url: "https://cleaners.ae" }],
  creator: "Cleaners Dubai",
  publisher: "Cleaners Dubai",
  alternates: {
    canonical: "https://cleaners.ae",
    languages: {
      ar: "https://cleaners.ae/ar",
      en: "https://cleaners.ae/en",
    },
  },
  openGraph: {
    title: "افضل شركة تنظيف منازل في دبي | كلينرز",
    description:
      "خدمات تنظيف احترافية في دبي للمنازل والمكاتب. احجز الآن بسهولة عبر الإنترنت.",
    url: "https://cleaners.ae",
    siteName: "كلينرز دبي",
    locale: "ar_AE",
    type: "website",
    images: [
      {
        url: "https://cleaners.ae/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "شركة تنظيف منازل في دبي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "افضل شركة تنظيف منازل في دبي | كلينرز",
    description: "احصل على خدمات تنظيف احترافية في دبي مع كلينرز.",
    images: ["https://cleaners.ae/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="ar">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </LanguageProvider>
  );
}
