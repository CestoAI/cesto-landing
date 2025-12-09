"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { useI18n } from "@/lib/i18n";



export function Hero() {
    const { t } = useI18n();
    const contact = useContactModal();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                >
                    <source src="https://videos.pexels.com/video-files/852388/852388-hd_1920_1080_24fps.mp4" type="video/mp4" />
                </video>
                {/* Blue Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-blue-900/70"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                    </span>
                    {t("hero_badge") || "New Generation Platform"}
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
                    <span className="block animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 drop-shadow-md">
                        {t("hero_title_1")}
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white block mt-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 drop-shadow-md">
                        {t("hero_title_2")}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 drop-shadow">
                    {t("hero_subtitle")}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
                    <Button
                        size="lg"
                        className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-bold"
                        onClick={() => contact.open()}
                    >
                        {t("hero_cta_primary")}
                    </Button>
                </div>

                {/* 3D Dashboard Image - removed placeholder comment as it wasn't being used */}
            </div>
        </section>
    );
}
