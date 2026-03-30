"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Wrench, Menu, X } from "lucide-react";

const navLinks = [
  { name: "ホーム", href: "#home" },
  { name: "サービス", href: "#services" },
  { name: "施工事例", href: "#works" },
  { name: "料金", href: "#price" },
  { name: "お客様の声", href: "#reviews" },
  { name: "会社概要", href: "#company" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#home"
            className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-2 text-blue-800"
          >
            <div className="bg-yellow-400 p-1.5 rounded-lg transform rotate-3 shadow-sm">
              <Wrench className="w-5 h-5 md:w-6 md:h-6 text-blue-900" />
            </div>
            佐々木電工
          </a>
        </div>

        {/* Right Side: Contact & Nav */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Contact Icons */}
          <div className="flex items-center gap-2 md:gap-3 mr-1 md:mr-0">
            <a
              href="mailto:sasaki0777@gmail.com?subject=【HPからお問い合わせ】"
              className="group flex flex-col md:flex-row items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 md:px-4 md:py-2 rounded-full transition-all"
              title="メールで問い合わせる"
            >
              <Mail size={20} className="md:mr-2" />
              <span className="hidden md:inline text-sm font-bold">メール</span>
            </a>

            <a
              href="tel:0778620815"
              className="group flex flex-col md:flex-row items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 p-2 md:px-4 md:py-2 rounded-full shadow-sm hover:shadow-md transition-all transform hover:scale-105"
              title="電話をかける"
            >
              <Phone size={20} className="md:mr-2 fill-current" />
              <span className="hidden md:inline text-lg font-bold">
                0778-62-0815
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-gray-700"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-700 py-3 px-4 rounded-lg hover:bg-orange-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
