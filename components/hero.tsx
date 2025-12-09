"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function Hero() {
    const { t } = useI18n();
    const contact = useContactModal();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-[20%] left-[20%] w-[800px] h-[800px] bg-gradient-to-br from-blue-50/30 to-white rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {t("hero_badge") || "New Generation Platform"}
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
                    <span className="block animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        {t("hero_title_1")}
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 block mt-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        {t("hero_title_2")}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                    {t("hero_subtitle")}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary-hover text-white px-8 py-7 text-lg rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                        onClick={() => contact.open()}
                    >
                        {t("hero_cta_primary")}
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-8 py-7 text-lg rounded-full transition-all"
                        onClick={() =>
                            document
                                .getElementById("features")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        {t("hero_cta_secondary")}
                    </Button>
                </div>

                {/* 3D Dashboard Image */}
            </div>
        </section>
    );
}
