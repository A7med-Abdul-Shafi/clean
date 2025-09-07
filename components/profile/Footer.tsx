"use client";
import {
  ClipboardList,
} from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "./utiles";

export default function HomePage() {
  const { language } = useLanguage();

  

  const t = translations[language];
  const parentDir = language === "ar" ? "rtl" : "ltr";
  return (
    <footer className="bg-gray-900 text-white py-12" dir={parentDir}
      id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ClipboardList className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Company name</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>{t.footerNote}</span>
              <span>{t.footerTech}</span>
            </div>
          </div>
        </div>
      </footer>
  );
}
