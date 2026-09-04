"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { events } from "@/data/event";

type EventFilter = "all" | "weekly" | "past";

const filters: { id: EventFilter; label: string; description: string }[] = [
    { id: "all", label: "All events", description: "Everything happening at DEO" },
    { id: "weekly", label: "Weekly gatherings", description: "Worship, youth, and prayer" },
    { id: "past", label: "Past moments", description: "Celebrations from our church family" },
];

export default function EventsPage() {
    const [activeFilter, setActiveFilter] = useState<EventFilter>("all");

    const visibleEvents = useMemo(() => {
        if (activeFilter === "weekly") return events.filter((event) => event.type === "upcoming");
        if (activeFilter === "past") return events.filter((event) => event.type === "past");
        return events;
    }, [activeFilter]);

    return (
        <main>
            <section className="relative isolate overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
                <Image src="/events/deo-church-benguet-4.jpg" alt="DEO Church Benguet community event" fill priority sizes="100vw" className="-z-20 object-cover opacity-45" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
                <div className="mx-auto max-w-6xl px-6">
                    <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal-300"><Sparkles size={16} aria-hidden="true" /> Gather with us</p>
                    <h1 className="max-w-2xl text-5xl font-bold tracking-tight sm:text-6xl">Life is better in community.</h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">Explore weekly gatherings, ministries, and the moments that shape DEO Church Benguet.</p>
                </div>
            </section>

            <section className="bg-slate-50 py-12 sm:py-16" aria-labelledby="event-browser-title">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-700">Explore</p>
                            <h2 id="event-browser-title" className="mt-2 text-3xl font-bold text-slate-900">Find your next gathering</h2>
                        </div>
                        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Event categories">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeFilter === filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${activeFilter === filter.id ? "bg-teal-600 text-white shadow-sm" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-teal-50"}`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="mt-5 text-sm text-slate-600">{filters.find((filter) => filter.id === activeFilter)?.description} · {visibleEvents.length} {visibleEvents.length === 1 ? "event" : "events"}</p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleEvents.map((event) => {
                            const image = event.images?.[0] ?? event.image ?? "/events/deo-church-benguet-1.jpg";
                            const isWeekly = event.type === "upcoming";

                            return (
                                <Link key={event.id} href={`/events/${event.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image src={image} alt={event.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                                        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${isWeekly ? "bg-teal-500 text-white" : "bg-white/95 text-slate-800"}`}>{isWeekly ? "Weekly gathering" : "Event recap"}</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-teal-700">{event.title}</h3>
                                        <div className="mt-4 space-y-2 text-sm text-slate-600">
                                            <p className="flex items-center gap-2"><CalendarDays size={16} className="text-teal-600" aria-hidden="true" /> {event.date}</p>
                                            {event.time && <p className="flex items-center gap-2"><Clock3 size={16} className="text-teal-600" aria-hidden="true" /> {event.time}</p>}
                                            {event.location && <p className="flex items-center gap-2 truncate"><MapPin size={16} className="shrink-0 text-teal-600" aria-hidden="true" /> {event.location}</p>}
                                        </div>
                                        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-slate-600">{event.description}</p>
                                        <p className="mt-5 text-sm font-bold text-teal-700">View event and photos →</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
