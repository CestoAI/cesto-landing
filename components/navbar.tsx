"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { key: "nav_features", href: "#features" },
  { key: "nav_how", href: "#how-it-works" },
  { key: "nav_testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const contact = useContactModal();
  const { t, toggle, locale } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <img src="/logo.png" alt="Cesto AI" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Cesto AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
            <Button
              className="bg-white text-primary border border-primary hover:bg-blue-50 font-semibold"
              onClick={toggle}
            >
              {locale === "es" ? "EN" : "ES"}
            </Button>
            <Button
              className="bg-primary hover:bg-primary-hover text-white font-semibold"
              onClick={() => contact.open()}
            >
              {t("nav_get_started")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.key)}
                </a>
              ))}
              <Button
                className="bg-white text-primary border border-primary font-semibold"
                onClick={() => {
                  toggle();
                }}
              >
                {locale === "es" ? "EN" : "ES"}
              </Button>
              <Button
                className="bg-primary hover:bg-primary-hover text-white font-semibold w-full"
                onClick={() => {
                  contact.open();
                  setIsOpen(false);
                }}
              >
                {t("nav_get_started")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
