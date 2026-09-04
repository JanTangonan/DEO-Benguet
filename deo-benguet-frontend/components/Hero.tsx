"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroSlides = [
    { src: "/events/deo-church-benguet-1.jpg", alt: "DEO Church Benguet gathered in worship" },
    { src: "/events/deo-church-benguet-4.jpg", alt: "DEO Church Benguet community gathering" },
    { src: "/events/sunday-worship-1.jpg", alt: "Sunday worship at DEO Church Benguet" },
];

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % heroSlides.length);
        }, 7000);

        return () => window.clearInterval(timer);
    }, []);

    const showPreviousSlide = () => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
    const showNextSlide = () => setActiveSlide((current) => (current + 1) % heroSlides.length);

    return (
        <section className="relative isolate min-h-[720px] w-full overflow-hidden text-white sm:min-h-[760px]" aria-labelledby="hero-title">
            <div className="absolute inset-0" aria-hidden="true">
                {heroSlides.map((slide, index) => (
                    <Image
                        key={slide.src}
                        src={slide.src}
                        alt=""
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className={`object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${index === activeSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/20" />
            </div>

            <div className="relative mx-auto flex min-h-[720px] max-w-6xl items-center px-6 py-28 sm:min-h-[760px]">
                <div className="max-w-2xl">
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                        <CalendarDays size={16} aria-hidden="true" /> Sundays at 10:30 AM
                    </p>
                    <h1 id="hero-title" className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
                        Welcome to <span className="text-teal-300">DEO Church</span> Benguet.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-100 sm:text-xl">
                        A welcoming church family where faith grows, hope is restored, and lives are transformed through Jesus Christ.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a href="#visit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-teal-950/30 transition hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Plan a visit <ArrowRight size={18} aria-hidden="true" />
                        </a>
                        <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Explore our community
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-6">
                <div className="flex gap-2" aria-label="Hero image selection">
                    {heroSlides.map((slide, index) => (
                        <button
                            key={slide.src}
                            type="button"
                            onClick={() => setActiveSlide(index)}
                            className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${index === activeSlide ? "w-8 bg-teal-300" : "w-2.5 bg-white/50 hover:bg-white"}`}
                            aria-label={`Show image ${index + 1}: ${slide.alt}`}
                            aria-current={index === activeSlide ? "true" : undefined}
                        />
                    ))}
                </div>
                <div className="flex gap-2">
                    <button type="button" onClick={showPreviousSlide} className="rounded-full border border-white/30 bg-black/20 p-2.5 backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Previous hero image">
                        <ChevronLeft size={10} aria-hidden="true" />
                    </button>
                    <button type="button" onClick={showNextSlide} className="rounded-full border border-white/30 bg-black/20 p-2.5 backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Next hero image">
                        <ChevronRight size={10} aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
}
