"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { Play } from "lucide-react";

export function HeroSection() {
  const contact = useContactModal();
  return (
    <section className="bg-white pt-16">
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Revolutionize Your <br />
              <span className="text-[#10b981]">Food & Beverage Business</span>
              <br />
              with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Centralize, automate, and streamline your operations with an
              AI-driven platform that connects buyers and suppliers in one
              intelligent hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => contact.open()}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-[#10b981] text-gray-700 hover:text-[#10b981] px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
                onClick={() => contact.open()}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        }
      >
        <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full min-h-[400px] md:min-h-[500px]"
            src="https://streamable.com/e/dsa92z"
            title="Cesto Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </ContainerScroll>
    </section>
  );
}
