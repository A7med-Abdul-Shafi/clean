"use client";
import Navbar from "@/components/navbar";
import Contact from "@/components/profile/Contact";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import Footer from "@/components/profile/Footer";
import Services from "@/components/profile/Services";
import AutoCarousel from "@/components/profile/Carousel";
export default function HomePage() {
  const { language } = useLanguage();

  const parentDir = language === "ar" ? "rtl" : "ltr";
  return (
    <div
      className="min-h-screen font-semibold bg-gradient-to-br from-blue-50 via-white to-purple-50"
      dir={parentDir}
      id="about"
    >
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 via-white to-purple-50 py-20 px-4">
        <AutoCarousel />
      </div>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
