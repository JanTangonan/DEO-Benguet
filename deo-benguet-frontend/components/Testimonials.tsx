"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { youthCampStories } from "@/data/youthCampStories";

export default function Testimonials() {
    const [activeStory, setActiveStory] = useState(0);
    const story = youthCampStories[activeStory];
    const previousStory = () => setActiveStory((current) => (current - 1 + youthCampStories.length) % youthCampStories.length);
    const nextStory = () => setActiveStory((current) => (current + 1) % youthCampStories.length);

    return (
        <section id="stories" className="overflow-hidden bg-slate-950 py-24 text-white sm:py-28" aria-labelledby="stories-title">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Testimonies</p>
                        <h2 id="stories-title" className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Known. Chosen. Never alone.</h2>
                        <p className="mt-5 max-w-md leading-relaxed text-slate-300">Stories of friendship, worship, courage, and the purpose God is growing in our young people.</p>
                        <Link href="/stories/youth-camp" className="mt-6 inline-flex font-bold text-teal-300 underline decoration-teal-300/50 underline-offset-4 transition hover:text-white">Read every Youth Camp story <span aria-hidden="true">-&gt;</span></Link>
                        <div className="mt-8 flex items-center gap-3">
                            <button type="button" onClick={previousStory} className="rounded-full border border-white/20 p-3 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Previous story"><ChevronLeft size={21} aria-hidden="true" /></button>
                            <div className="flex gap-2" aria-label="Story selection">
                                {youthCampStories.map((item, index) => <button key={item.name} type="button" onClick={() => setActiveStory(index)} className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${activeStory === index ? "w-8 bg-teal-300" : "w-2.5 bg-white/45 hover:bg-white"}`} aria-label={`Read ${item.name}'s story`} aria-current={activeStory === index ? "true" : undefined} />)}
                            </div>
                            <button type="button" onClick={nextStory} className="rounded-full border border-white/20 p-3 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Next story"><ChevronRight size={21} aria-hidden="true" /></button>
                        </div>
                    </div>
                    <article className="grid overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl shadow-black/30 sm:grid-cols-2" aria-live="polite">
                        <div className="relative min-h-72 sm:min-h-full"><Image src={story.image} alt={story.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" /><p className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 backdrop-blur-sm">Youth Camp</p></div>
                        <div className="flex min-h-72 flex-col justify-center p-7 sm:p-9"><Quote className="mb-5 text-teal-600" size={34} aria-hidden="true" /><blockquote className="text-xl font-medium leading-relaxed sm:text-2xl">&ldquo;{story.excerpt}&rdquo;</blockquote><footer className="mt-7 border-t border-slate-200 pt-5"><p className="font-bold text-teal-700">{story.name}</p><p className="mt-1 text-sm text-slate-500">Youth Camp participant</p></footer></div>
                    </article>
                </div>
                <div className="mt-16 border-t border-white/15 pt-8"><p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">The heart of the camp</p><div className="mt-5 grid gap-4 sm:grid-cols-3">{["Worship freely", "Grow in community", "Discover your purpose"].map((item, index) => <p key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-semibold text-slate-100"><span className="mr-3 text-teal-300">0{index + 1}</span>{item}</p>)}</div></div>
            </div>
        </section>
    );
}
