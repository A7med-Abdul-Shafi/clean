"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/contexts/LanguageContext";

const navLinks = {
  en: [
    { name: "Contact", href: "#contact" },
    { name: "Services", href: "#services" },
    { name: "Home", href: "#about" },
  ],
  ar: [
    { name: "التواصل", href: "#contact" },
    { name: "الخدمات", href: "#services" },
    { name: "الرئيسية", href: "#about" },
  ],
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const parentDir = language === "ar" ? "ltr" : "rtl";

  return (
    <header
      dir={parentDir}
      className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-[999] overflow-x-clip"
    >
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className={`flex items-center ${
            language === "ar" ? "space-x-reverse space-x-2" : "space-x-2"
          }`}
        >
          <ClipboardList className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <span className="text-[1rem] md:text-xl font-bold text-gray-900">
            Company name
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center ${
            language === "ar" ? "space-x-reverse space-x-10" : "space-x-8"
          }`}
        >
          {navLinks[language].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[1rem] font-medium transition-colors ${
                pathname === link.href
                  ? "text-blue-600 underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" onClick={toggleLanguage} className="ml-10">
            {language === "en" ? "العربية" : "English"}
          </Button>
        </nav>

        {/* Mobile Toggle Button */}
        <Button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          variant="ghost"
        >
          {isOpen ? (
            <X style={{ width: "26px", height: "26px", color: "blue" }} />
          ) : (
            <span className="text-2xl text-blue-700">☰</span>
          )}
        </Button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="w-full h-screen bg-black/30 backdrop-blur-sm">
          <div
            dir={parentDir}
            className={`absolute top-0 ${
              language === "ar" ? "right-0" : "left-0"
            } w-64 h-full shadow-lg transform transition-transform duration-300 ${
              isOpen
                ? "translate-x-0"
                : language === "ar"
                ? "translate-x-full"
                : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex flex-col p-4 space-y-2 rounded-2xl bg-blue-200 h-screen py-5"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {navLinks[language].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium py-3 px-4 rounded transition-colors ${
                    pathname === link.href
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 bg-gray-100 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="outline"
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
              >
                {language === "en" ? "العربية" : "English"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
