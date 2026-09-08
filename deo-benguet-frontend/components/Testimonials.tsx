"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const stories = [
    {
        name: "Kate",
        connection: "Part of the DEO Church family",
        quote: "DEO Church became our family. We felt welcomed from the very first visit.",
        image: "/testimonials/testimonials-3.jpg",
        alt: "DEO Church family gathering",
    },
    {
        name: "Arvin T.",
        connection: "Sunday worship attendee",
        quote: "The messages are practical and inspiring. It has strengthened my faith.",
        image: "/testimonials/testimonials-2.jpg",
        alt: "Members worshipping together on Sunday",
    },
    {
        name: "Anti L.",
        connection: "Parent in the church community",
        quote: "Our children love coming here. It truly feels like home. The community is amazing.",
        image: "/testimonials/testimonials-1.jpg",
        alt: "Young people gathered at DEO Church",
    },
];

const communityPhotos = [
    { src: "/events/deo-church-benguet-2.jpg", alt: "DEO Church community gathering" },
    { src: "/events/acoustic-night-1.jpg", alt: "Acoustic worship night at DEO Church" },
    { src: "/events/youth-connect-1.jpg", alt: "Youth Connect gathering" },
    { src: "/events/taekwondo-ministry-1.jpg", alt: "Soldiers of God Taekwondo Ministry" },
    { src: "/events/christmas-party-1.jpg", alt: "DEO Church Christmas celebration" },
];

export default function Testimonials() {
    const [activeStory, setActiveStory] = useState(0);
    const story = stories[activeStory];

    const previousStory = () => setActiveStory((current) => (current - 1 + stories.length) % stories.length);
    const nextStory = () => setActiveStory((current) => (current + 1) % stories.length);

    return (
        <section className="overflow-hidden bg-slate-950 py-24 text-white sm:py-28" aria-labelledby="stories-title">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Stories from our church family</p>
                        <h2 id="stories-title" className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">There is a place for you here.</h2>
                        <p className="mt-5 max-w-md leading-relaxed text-slate-300">The best picture of DEO Church is the people who worship, grow, serve, and walk through life together.</p>

                        <div className="mt-8 flex items-center gap-3">
                            <button type="button" onClick={previousStory} className="rounded-full border border-white/20 p-3 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Previous story"><ChevronLeft size={21} aria-hidden="true" /></button>
                            <div className="flex gap-2" aria-label="Story selection">
                                {stories.map((item, index) => <button key={item.name} type="button" onClick={() => setActiveStory(index)} className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${activeStory === index ? "w-8 bg-teal-300" : "w-2.5 bg-white/45 hover:bg-white"}`} aria-label={`Read ${item.name}'s story`} aria-current={activeStory === index ? "true" : undefined} />)}
                            </div>
                            <button type="button" onClick={nextStory} className="rounded-full border border-white/20 p-3 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Next story"><ChevronRight size={21} aria-hidden="true" /></button>
                        </div>
                    </div>

                    <article className="grid overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl shadow-black/30 sm:grid-cols-2">
                        <div className="relative min-h-72 sm:min-h-full">
                            <Image src={story.image} alt={story.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                            <p className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 backdrop-blur-sm">DEO Church Benguet</p>
                        </div>
                        <div className="flex min-h-72 flex-col justify-center p-7 sm:p-9">
                            <Quote className="mb-5 text-teal-600" size={34} aria-hidden="true" />
                            <blockquote className="text-xl font-medium leading-relaxed sm:text-2xl">“{story.quote}”</blockquote>
                            <footer className="mt-7 border-t border-slate-200 pt-5">
                                <p className="font-bold text-teal-700">{story.name}</p>
                                <p className="mt-1 text-sm text-slate-500">{story.connection}</p>
                            </footer>
                        </div>
                    </article>
                </div>

                <div className="mt-16 border-t border-white/15 pt-8">
                    <div className="mb-5 flex items-end justify-between gap-5">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">Life at DEO</p>
                            <h3 className="mt-2 text-2xl font-bold">Moments we share together</h3>
                        </div>
                        <p className="hidden text-sm text-slate-400 sm:block">Scroll to explore →</p>
                    </div>
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
                        {communityPhotos.map((photo) => <div key={photo.src} className="relative h-48 w-64 shrink-0 snap-start overflow-hidden rounded-2xl sm:h-56 sm:w-72"><Image src={photo.src} alt={photo.alt} fill sizes="288px" className="object-cover transition duration-500 hover:scale-105" /></div>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
