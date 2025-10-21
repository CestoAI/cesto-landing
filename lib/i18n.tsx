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
    nav_testimonials: "Clientes",
    nav_get_started: "Empezar",

    hero_title_1: "Revoluciona tu",
    hero_title_2: "negocio de Food & Beverage",
    hero_title_3: "con IA",
    hero_desc:
      "Centraliza, automatiza y optimiza tus operaciones con una plataforma impulsada por IA que conecta compradores y proveedores en un solo hub inteligente.",
    hero_cta_primary: "Empezar",
    hero_cta_secondary: "Ver demo",

    features_title: "Características",
    features_subtitle:
      "Únete al futuro de las operaciones de food & beverage. Empieza a automatizar hoy y experimenta el poder de la eficiencia impulsada por IA.",
    feature_1_title: "Automatización con IA",
    feature_1_desc:
      "Aprovecha la inteligencia artificial para automatizar el cumplimiento de pedidos, órdenes de compra y documentación. Elimina los procesos manuales y reduce los errores humanos.",
    feature_2_title: "Plataforma Centralizada",
    feature_2_desc:
      "Conecta todos tus proveedores y compradores en un solo hub unificado. Optimiza la comunicación y construye relaciones comerciales más sólidas.",
    feature_3_title: "Gestión Inteligente de Inventario",
    feature_3_desc:
      "Seguimiento de inventario en tiempo real con insights impulsados por IA. Optimiza los niveles de stock y previene situaciones de falta o exceso de inventario.",
    feature_4_title: "Creación Automática de O.C.",
    feature_4_desc:
      "Genera órdenes de compra automáticamente basándote en niveles de inventario, previsiones de demanda y disponibilidad de proveedores. Ahorra horas cada semana.",
    feature_5_title: "Optimización de Costos",
    feature_5_desc:
      "Análisis inteligente de precios y recomendaciones para ahorrar costos. Identifica oportunidades para reducir gastos y mejorar los márgenes.",
    feature_6_title: "Intercambio Transfronterizo",
    feature_6_desc:
      "Gestiona sin problemas proveedores internacionales y maneja transacciones multi-moneda con soporte de cumplimiento integrado.",

    how_title: "Cómo",
    how_title_highlight: "Funciona",
    how_subtitle:
      "Tres simples pasos para transformar las operaciones de tu negocio",
    how_step1_title: "Conectar",
    how_step1_desc:
      "Reúne a todos tus proveedores y compradores en una plataforma unificada. No más comunicaciones dispersas o pedidos perdidos.",
    how_step2_title: "Automatizar",
    how_step2_desc:
      "Deja que la IA gestione pedidos, seguimiento de inventario, creación de órdenes de compra y documentación. Enfócate en hacer crecer tu negocio, no en el papeleo.",
    how_step3_title: "Optimizar",
    how_step3_desc:
      "Ahorra tiempo y dinero con insights inteligentes. Reduce costos hasta un 30% y recupera más de 10 horas por semana.",

    stats_title: "Resultados Reales,",
    stats_title_highlight: "Impacto Real",
    stats_subtitle: "Mira cómo Cesto AI transforma negocios como el tuyo",
    stats_1_value: "10+",
    stats_1_label: "Horas Ahorradas",
    stats_1_desc: "Por semana en promedio",
    stats_2_value: "30%",
    stats_2_label: "Reducción de Costos",
    stats_2_desc: "En gastos operativos",
    stats_3_value: "100%",
    stats_3_label: "Automatización de Procesos",
    stats_3_desc: "Automatización de punta a punta",

    cta_title: "¿Listo para transformar tu negocio?",
    cta_sub:
      "Únete al futuro de las operaciones de food & beverage. Empieza a automatizar hoy y experimenta el poder de la eficiencia impulsada por IA.",
    cta_primary: "Empieza gratis",
    cta_secondary: "Agenda una demo",
    cta_note: "Sin tarjeta • Prueba gratis 14 días • Cancela cuando quieras",

    testimonials_title: "Nuestros Clientes",
    testimonials_sub:
      "Únete a las empresas líderes que transforman sus operaciones con Cesto",

    footer_brand_desc:
      "Revolucionando la industria de alimentos y bebidas con automatización impulsada por IA",
    footer_links: "Enlaces",
    footer_features: "Características",
    footer_how: "Cómo Funciona",
    footer_testimonials: "Clientes",
    footer_contact: "Contacto",
    footer_global: "Global",
    footer_rights: "Todos los derechos reservados.",
  },
  en: {
    nav_features: "Features",
    nav_how: "How It Works",
    nav_testimonials: "Clients",
    nav_get_started: "Get Started",

    hero_title_1: "Revolutionize Your",
    hero_title_2: "Food & Beverage Business",
    hero_title_3: "with AI",
    hero_desc:
      "Centralize, automate, and streamline your operations with an AI-driven platform that connects buyers and suppliers in one intelligent hub.",
    hero_cta_primary: "Get Started",
    hero_cta_secondary: "Watch Demo",

    features_title: "Features",
    features_subtitle:
      "Join the future of food & beverage operations. Start automating today and experience the power of AI-driven efficiency.",
    feature_1_title: "AI-Powered Automation",
    feature_1_desc:
      "Leverage artificial intelligence to automate order fulfillment, purchase orders, and documentation. Eliminate manual processes and reduce human error.",
    feature_2_title: "Centralized Platform",
    feature_2_desc:
      "Connect all your suppliers and buyers in one unified hub. Streamline communication and build stronger business relationships.",
    feature_3_title: "Smart Inventory Management",
    feature_3_desc:
      "Real-time inventory tracking with AI-driven insights. Optimize stock levels and prevent shortages or overstock situations.",
    feature_4_title: "Automated P.O. Creation",
    feature_4_desc:
      "Generate purchase orders automatically based on inventory levels, demand forecasts, and supplier availability. Save hours every week.",
    feature_5_title: "Cost Optimization",
    feature_5_desc:
      "Intelligent pricing analysis and cost-saving recommendations. Identify opportunities to reduce expenses and improve margins.",
    feature_6_title: "Cross-Border Exchange",
    feature_6_desc:
      "Seamlessly manage international suppliers and handle multi-currency transactions with built-in compliance support.",

    how_title: "How It",
    how_title_highlight: "Works",
    how_subtitle: "Three simple steps to transform your business operations",
    how_step1_title: "Connect",
    how_step1_desc:
      "Bring all your suppliers and buyers together on one unified platform. No more scattered communications or lost orders.",
    how_step2_title: "Automate",
    how_step2_desc:
      "Let AI handle orders, inventory tracking, purchase order creation, and documentation. Focus on growing your business, not paperwork.",
    how_step3_title: "Optimize",
    how_step3_desc:
      "Save time and money with intelligent insights. Reduce costs by up to 30% and reclaim 10+ hours per week.",

    stats_title: "Real Results,",
    stats_title_highlight: "Real Impact",
    stats_subtitle: "See how Cesto AI transforms businesses like yours",
    stats_1_value: "10+",
    stats_1_label: "Hours Saved",
    stats_1_desc: "Per week on average",
    stats_2_value: "30%",
    stats_2_label: "Cost Reduction",
    stats_2_desc: "In operational expenses",
    stats_3_value: "100%",
    stats_3_label: "Process Automation",
    stats_3_desc: "End-to-end automation",

    cta_title: "Ready to Transform Your Business?",
    cta_sub:
      "Join the future of food & beverage operations. Start automating today and experience the power of AI-driven efficiency.",
    cta_primary: "Get Started Free",
    cta_secondary: "Schedule a Demo",
    cta_note: "No credit card required • Free 14-day trial • Cancel anytime",

    testimonials_title: "Our Clients",
    testimonials_sub:
      "Join leading companies transforming their operations with Cesto",

    footer_brand_desc:
      "Revolutionizing the food & beverage industry with AI-driven automation",
    footer_links: "Links",
    footer_features: "Features",
    footer_how: "How It Works",
    footer_testimonials: "Clients",
    footer_contact: "Contact",
    footer_global: "Worldwide",
    footer_rights: "All rights reserved.",
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
