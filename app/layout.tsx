import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";
import { Toaster } from "sonner";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "افضل شركة نظافة في الإمارات | كلينرز",
  description: "خدمات نظافة احترافية في جميع إمارات الإمارات العربية المتحدة.",
  keywords: [
    "نظافة منازل الإمارات",
    "شركة نظافة أبو ظبي",
    "شركة نظافة دبي",
    "شركة نظافة الشارقة",
    "شركة نظافة عجمان",
    "شركة نظافة رأس الخيمة",
    "شركة نظافة أم القيوين",
    "شركة نظافة الفجيرة",
    "خدمات النظافة",
    "كلينرز",
    "نظافة مكاتب",
    "مكافحة الحشرات",
  ],
  authors: [{ name: "Cleaners UAE", url: "https://cleaners.sbg-camps.com" }],
  creator: "Cleaners UAE",
  publisher: "Cleaners UAE",
  alternates: {
    canonical: "https://cleaners.sbg-camps.com",
    languages: {
      ar: "https://cleaners.sbg-camps.com",
      en: "https://cleaners.sbg-camps.com",
    },
  },
  openGraph: {
    title: "افضل شركة تنظيف منازل في الإمارات | كلينرز",
    description: "نقدم خدمات تنظيف وتعقيم.",
    url: "https://cleaners.sbg-camps.com",
    siteName: "كلينرز الإمارات",
    // locale: "ar_AE",
    type: "website",
    images: [
      {
        url: "https://cleaners.sbg-camps.com/favicon.png", 
        width: 1200,
        height: 630,
        alt: "افضل شركة تنظيف منازل في الإمارات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "افضل شركة تنظيف منازل في الإمارات | كلينرز",
    description: "خدمات تنظيف احترافية.",
    images: ["https://cleaners.sbg-camps.com/favicon.png"], 
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="ar">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="google-site-verification" content="B7CuGPH17sk5qYLHty3FPNjD4Wm1e18lCsbo3XuDLik" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="description" content="خدمات نظافة احترافية في جميع إمارات الإمارات العربية المتحدة." />
          <meta name="keywords" content="نظافة, تنظيف, خدمات, كلينرز" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ServiceWorkerRegister />
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </LanguageProvider>
  );
}
