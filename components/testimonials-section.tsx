"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Cesto transformed our procurement process completely. We've reduced ordering time by 70% and improved supplier communication significantly. The AI-driven insights have helped us make better purchasing decisions.",
      name: "Sarah Martinez",
      designation: "Procurement Manager at Restaurant Group",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "As a supplier, Cesto has opened up new opportunities for us. The platform makes it incredibly easy to connect with potential buyers and manage orders efficiently. Our sales have increased by 45% since joining.",
      name: "Michael Chen",
      designation: "CEO at Food Distribution Co.",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "The automation features are a game-changer. We can now focus on growing our business instead of drowning in paperwork. The centralized platform has streamlined everything from orders to invoicing.",
      name: "Emily Johnson",
      designation: "Operations Director at Hotel Chain",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Cesto's AI recommendations have helped us discover better suppliers and negotiate better prices. The platform pays for itself with the savings we've generated. Highly recommend it to any F&B business.",
      name: "David Rodriguez",
      designation: "Owner at Fine Dining Restaurant",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Managing multiple locations was always a challenge until we found Cesto. Now we have complete visibility across all our operations, and the reporting features provide invaluable insights for decision-making.",
      name: "Lisa Thompson",
      designation: "CFO at Café Chain",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied businesses transforming their food &
            beverage operations with Cesto
          </p>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}
