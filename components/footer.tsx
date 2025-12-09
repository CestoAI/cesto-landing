"use client";

import { Mail, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative">
                <img src="/logo.png" alt="Cesto AI" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Cesto AI</h3>
            </div>
            <p className="text-gray-400">{t("footer_brand_desc")}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer_links")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer_features")}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer_how")}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("footer_testimonials")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer_contact")}</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@cestoai.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                info@cestoai.com
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Globe className="h-5 w-5" />
                {t("footer_global")}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {year} Cesto AI. {t("footer_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
