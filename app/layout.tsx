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
  title: "افضل شركة تنظيف منازل في الإمارات | كلينرز",
  description:
    "خدمات تنظيف احترافية في جميع إمارات الإمارات العربية المتحدة. احصل على تنظيف منزلك أو مكتبك بسرعة وسهولة مع كلينرز.",
  keywords: [
    "تنظيف منازل الإمارات",
    "شركة تنظيف أبو ظبي",
    "شركة تنظيف دبي",
    "شركة تنظيف الشارقة",
    "شركة تنظيف عجمان",
    "شركة تنظيف رأس الخيمة",
    "شركة تنظيف أم القيوين",
    "شركة تنظيف الفجيرة",
    "خدمات التنظيف",
    "كلينرز",
    "تنظيف مكاتب",
    "مكافحة الحشرات",
  ],
  authors: [{ name: "Cleaners UAE", url: "https://cleaners.sbg-camps.com" }],
  creator: "Cleaners UAE",
  publisher: "Cleaners UAE",
  alternates: {
    canonical: "https://cleaners.sbg-camps.com",
    languages: {
      ar: "https://cleaners.sbg-camps.com/ar",
      en: "https://cleaners.sbg-camps.com/en",
    },
  },
  openGraph: {
    title: "افضل شركة تنظيف منازل في الإمارات | كلينرز",
    description:
      "نقدم خدمات تنظيف وتعقيم ومكافحة الحشرات في دبي، أبو ظبي، الشارقة، عجمان، رأس الخيمة، أم القيوين، والفجيرة. احجز الآن بسهولة عبر الإنترنت.",
    url: "https://cleaners.sbg-camps.com",
    siteName: "كلينرز الإمارات",
    locale: "ar_AE",
    type: "website",
    images: [
      {
        url: "https://cleaners.ae/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "شركة تنظيف منازل في الإمارات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "افضل شركة تنظيف منازل في الإمارات | كلينرز",
    description:
      "خدمات تنظيف احترافية في جميع إمارات الدولة. احجز الآن مع كلينرز.",
    images: ["https://cleaners.ae/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ServiceWorkerRegister />
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </LanguageProvider>
  );
}
