"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureShowcaseProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    reversed?: boolean;
}

export function FeatureShowcase({
    title,
    description,
    imageSrc,
    imageAlt,
    reversed = false,
}: FeatureShowcaseProps) {
    return (
        <section className="py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                    reversed && "lg:flex-row-reverse"
                )}>
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 w-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                            <div className="rounded-xl overflow-hidden bg-gray-50 aspect-video relative">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
