"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { Play } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const contact = useContactModal();
  const { t } = useI18n();
  return (
    <section className="bg-white pt-16">
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {t("hero_title_1")} <br />
              <span className="text-[#10b981]">{t("hero_title_2")}</span>
              <br />
              {t("hero_title_3")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              {t("hero_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => contact.open()}
              >
                {t("hero_cta_primary")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-[#10b981] text-gray-700 hover:text-[#10b981] px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
                onClick={() => contact.open()}
              >
                <Play className="mr-2 h-5 w-5" />
                {t("hero_cta_secondary")}
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
