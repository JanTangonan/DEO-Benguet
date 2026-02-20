"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Hero() {
    useFadeIn();

    return (
        <section className="relative h-[85vh] w-full fade-in">
            {/* Background Image */}
            <Image
                // src="https://images.unsplash.com/photo-1507692049790-de58290a4334"
                src="/events/deo-church-benguet-1.jpg"
                alt="Church worship"
                fill
                priority
                className="object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6 text-white">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
                    Welcome to <span className="text-teal-400">DEO Church-Benguet</span>
                </h1>

                <p className="mt-4 text-lg max-w-xl text-gray-200">
                    A welcoming church family in Benguet where faith grows,
                    hope is restored, and lives are transformed through Jesus Christ.
                </p>

                <div className="mt-6">
                    <a
                        href="#visit"
                        className="bg-teal-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition inline-block"
                    >
                        Plan a Visit
                    </a>
                </div>
            </div>
        </section>
    );
}