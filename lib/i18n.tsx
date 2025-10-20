"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Locale = "es" | "en";

type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav_features: "Características",
    nav_how: "Cómo funciona",
    nav_testimonials: "Testimonios",
    nav_get_started: "Empezar",

    hero_title_1: "Revoluciona tu",
    hero_title_2: "negocio de Food & Beverage",
    hero_title_3: "con IA",
    hero_desc:
      "Centraliza, automatiza y optimiza tus operaciones con una plataforma impulsada por IA que conecta compradores y proveedores en un solo hub inteligente.",
    hero_cta_primary: "Empezar",
    hero_cta_secondary: "Ver demo",

    cta_title: "¿Listo para transformar tu negocio?",
    cta_sub:
      "Únete al futuro de las operaciones de food & beverage. Empieza a automatizar hoy y experimenta el poder de la eficiencia impulsada por IA.",
    cta_primary: "Empieza gratis",
    cta_secondary: "Agenda una demo",
    cta_note: "Sin tarjeta • Prueba gratis 14 días • Cancela cuando quieras",

    testimonials_title: "Lo que dicen nuestros clientes",
    testimonials_sub:
      "Únete a miles de negocios que transforman sus operaciones con Cesto",
  },
  en: {
    nav_features: "Features",
    nav_how: "How It Works",
    nav_testimonials: "Testimonials",
    nav_get_started: "Get Started",

    hero_title_1: "Revolutionize Your",
    hero_title_2: "Food & Beverage Business",
    hero_title_3: "with AI",
    hero_desc:
      "Centralize, automate, and streamline your operations with an AI-driven platform that connects buyers and suppliers in one intelligent hub.",
    hero_cta_primary: "Get Started",
    hero_cta_secondary: "Watch Demo",

    cta_title: "Ready to Transform Your Business?",
    cta_sub:
      "Join the future of food & beverage operations. Start automating today and experience the power of AI-driven efficiency.",
    cta_primary: "Get Started Free",
    cta_secondary: "Schedule a Demo",
    cta_note: "No credit card required • Free 14-day trial • Cancel anytime",

    testimonials_title: "What Our Clients Say",
    testimonials_sub:
      "Join thousands of satisfied businesses transforming their operations with Cesto",
  },
};

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
  toggle: () => void;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[locale];
      return dict[key] ?? key;
    },
    [locale]
  );

  const toggle = useCallback(() => {
    setLocale((l) => (l === "es" ? "en" : "es"));
  }, []);

  const value = useMemo(
    () => ({ locale, t, toggle, setLocale }),
    [locale, t, toggle]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
