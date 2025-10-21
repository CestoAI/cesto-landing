"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useI18n } from "@/lib/i18n";

export function TestimonialsSection() {
  const { t } = useI18n();
  const testimonials = [
    {
      quote:
        "Cesto has transformed our multi-location procurement process. We've reduced ordering time by 70% across all our shops and improved supplier communication significantly. The AI-driven insights have helped us optimize our supply chain and maintain consistency.",
      name: "Pret A Manger",
      designation: "UK Leading Coffee & Food Chain",
      src: "https://coffeegeography.com/wp-content/uploads/2021/07/pret-a-manger-logo.jpeg",
    },
    {
      quote:
        "Managing supplies for over 2,000 bakery locations was a challenge until we implemented Cesto. The platform's automation features have streamlined our entire procurement workflow, allowing us to focus on what we do best - serving great food.",
      name: "Greggs",
      designation: "Britain's Leading Bakery Chain",
      src: "https://www.pastorfrigorgb.com/wp-content/uploads/2025/08/Greggs-logo.png",
    },
    {
      quote:
        "As a global foodservice company, we needed a solution that could scale. Cesto's centralized platform has revolutionized how we connect with suppliers worldwide. The efficiency gains have been remarkable across all our operations.",
      name: "Compass Group",
      designation: "World's Largest Foodservice Company",
      src: "https://cdn.worldvectorlogo.com/logos/compass-group.svg",
    },
  ];

  return (
    <section className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("testimonials_title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials_sub")}
          </p>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}
