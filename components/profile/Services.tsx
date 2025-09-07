"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "./utiles";
import { FlipWords } from "../ui/flip-words";
export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  const parentDir = language === "ar" ? "rtl" : "ltr";

  const words = ["Reliable", "Affordable", "Professional", "Trusted"];
  const whatsappNumber = "9665XXXXXXX"; // Replace with actual number
  const mobileNumber = "+966-5X-XXX-XXXX"; // Replace with actual number

  return (
    <div
      className="min-h-screen font-semibold bg-gradient-to-b from-blue-100 via-white to-purple-50"
      dir={parentDir}
      id="about"
    >
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight rounded-lg p-4">
            {t.heroTitle}
          </h1>
          <div dir="ltr" className="mb-4 flex justify-center items-center gap-2">

          <FlipWords
            words={words.map(word => word.toUpperCase())}
            className="text-blue-600 text-2xl md:text-3xl font-semibold"
            duration={2000}
            />
            </div>
        </div>
        <p
          dir={parentDir}
          className="text-md text-gray-700 mb-10 leading-relaxed w-full lg:max-w-7xl mx-auto rounded-md px-6 py-4"
        >
          {t.heroDesc}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          {/* Start Free Button */}

          {/* WhatsApp Contact Button */}
          <a
            href={`https://wa.me/9665XXXXXXX?text=${encodeURIComponent(
              t.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg text-lg"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            {t.whatsappUs}
          </a>

          {/* Mobile Call Button */}
          <a
            href="tel:+9665XXXXXXX"
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg text-lg"
          >
            <Phone className="h-5 w-5 mr-2" />
            {t.callUs}
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.featuresTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.featuresDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription
                  className={language === "ar" ? "text-right" : "text-left"}
                >
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 rounded-tl-[4rem] rounded-tr-[4rem]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        className="container mx-auto px-4 py-16 text-center"
        id="contact"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {t.contactUs}
        </h2>
        <p className="text-lg text-gray-700 mb-4 flex items-center justify-center gap-2">
          <Phone className="h-5 w-5 text-blue-600" />
          {t.callUs}{" "}
          <span className="font-semibold text-blue-600">{mobileNumber}</span>
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            t.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg text-lg"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          {t.whatsappUs}
        </a>
      </section>
    </div>
  );
}
