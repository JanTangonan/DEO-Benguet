"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarPlus, ChevronLeft, ChevronRight, Clock3, MapPin, Share2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { events } from "@/data/event";

const recurringDays: Record<string, number> = {
    "sunday-worship-service": 0,
    "youth-connect": 5,
    "midweek-prayer": 3,
};

function formatIcsDate(date: Date) {
    return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function escapeIcsText(value: string) {
    return value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
}

function downloadCalendarEvent(event: (typeof events)[number]) {
    const dayOfWeek = recurringDays[event.slug];
    if (dayOfWeek === undefined) return;

    const [hour = 10, minute = 0] = (event.time?.match(/\d+/g) ?? []).map(Number);
    const startsAt = new Date();
    startsAt.setDate(startsAt.getDate() + ((dayOfWeek - startsAt.getDay() + 7) % 7));
    startsAt.setHours(hour, minute, 0, 0);
    if (startsAt.getTime() <= Date.now()) startsAt.setDate(startsAt.getDate() + 7);
    const endsAt = new Date(startsAt.getTime() + 90 * 60 * 1000);
    const calendar = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//DEO Church Benguet//Events//EN",
        "BEGIN:VEVENT",
        `UID:${event.slug}@deochurchbenguet`,
        `DTSTAMP:${formatIcsDate(new Date())}`,
        `DTSTART:${formatIcsDate(startsAt)}`,
        `DTEND:${formatIcsDate(endsAt)}`,
        "RRULE:FREQ=WEEKLY",
        `SUMMARY:${escapeIcsText(event.title)}`,
        `LOCATION:${escapeIcsText(event.location ?? "DEO Church Benguet")}`,
        `DESCRIPTION:${escapeIcsText(event.description)}`,
        "END:VEVENT",
        "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([calendar], { type: "text/calendar;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.slug}.ics`;
    link.click();
    URL.revokeObjectURL(url);
}

export function EventDetailClient({ event }: { event: (typeof events)[number] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [shareLabel, setShareLabel] = useState("Share");
    const images = event.images || (event.image ? [event.image] : ["/events/deo-church-benguet-1.jpg"]);
    const canAddToCalendar = event.slug in recurringDays;

    useEffect(() => {
        const closeOnEscape = (keyboardEvent: KeyboardEvent) => {
            if (keyboardEvent.key === "Escape") setLightboxOpen(false);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, []);

    const goToNext = () => setCurrentIndex((previous) => (previous + 1) % images.length);
    const goToPrevious = () => setCurrentIndex((previous) => (previous - 1 + images.length) % images.length);

    const shareEvent = async () => {
        const shareData = { title: event.title, text: `${event.title} — ${event.date}${event.time ? `, ${event.time}` : ""}`, url: window.location.href };
        if (navigator.share) {
            await navigator.share(shareData);
            return;
        }
        await navigator.clipboard.writeText(window.location.href);
        setShareLabel("Link copied");
        window.setTimeout(() => setShareLabel("Share"), 2000);
    };

    return (
        <main className="bg-slate-50 py-16 sm:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800">
                    <ChevronLeft size={18} aria-hidden="true" /> Back to events
                </Link>

                <div className="mt-7 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
                    <div>
                        <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-xl shadow-slate-950/10">
                            <button type="button" onClick={() => setLightboxOpen(true)} className="relative block aspect-[4/3] w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white" aria-label={`Open ${event.title} photo gallery`}>
                                <Image src={images[currentIndex]} alt={`${event.title}, image ${currentIndex + 1}`} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
                            </button>
                            {images.length > 1 && <>
                                <button type="button" onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/65 p-3 text-white transition hover:bg-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Previous image"><ChevronLeft size={22} aria-hidden="true" /></button>
                                <button type="button" onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/65 p-3 text-white transition hover:bg-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Next image"><ChevronRight size={22} aria-hidden="true" /></button>
                            </>}
                        </div>
                        {images.length > 1 && <div className="mt-4 flex gap-3 overflow-x-auto pb-1" aria-label="Event photo gallery">
                            {images.map((image, index) => <button key={image} type="button" onClick={() => setCurrentIndex(index)} className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-xl transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${index === currentIndex ? "ring-3 ring-teal-500" : "opacity-65 hover:opacity-100"}`} aria-label={`Show image ${index + 1}`} aria-current={index === currentIndex ? "true" : undefined}><Image src={image} alt="" fill sizes="96px" className="object-cover" /></button>)}
                        </div>}
                    </div>

                    <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-9">
                        <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-700">{event.type === "upcoming" ? "Weekly gathering" : "Event recap"}</p>
                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{event.title}</h1>
                        <div className="mt-6 space-y-3 text-slate-700">
                            <p className="flex gap-3"><Clock3 className="mt-0.5 shrink-0 text-teal-600" size={19} aria-hidden="true" /><span><strong className="block text-slate-900">{event.date}</strong>{event.time}</span></p>
                            {event.location && <p className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-teal-600" size={19} aria-hidden="true" /><span>{event.location}</span></p>}
                        </div>
                        <p className="mt-7 leading-relaxed text-slate-700">{event.fullDescription?.replace(/<[^>]*>/g, "") || event.description}</p>
                        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
                            {canAddToCalendar && <button type="button" onClick={() => downloadCalendarEvent(event)} className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700"><CalendarPlus size={17} aria-hidden="true" /> Add to calendar</button>}
                            <button type="button" onClick={shareEvent} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"><Share2 size={17} aria-hidden="true" /> {shareLabel}</button>
                        </div>
                    </article>
                </div>
            </div>

            {lightboxOpen && <div role="dialog" aria-modal="true" aria-label={`${event.title} photo gallery`} className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 p-4" onClick={() => setLightboxOpen(false)}>
                <div className="relative h-full w-full max-w-6xl" onClick={(mouseEvent) => mouseEvent.stopPropagation()}>
                    <Image src={images[currentIndex]} alt={`${event.title}, image ${currentIndex + 1}`} fill sizes="100vw" className="object-contain" />
                    <button type="button" onClick={() => setLightboxOpen(false)} className="absolute right-2 top-2 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Close photo gallery"><X size={24} aria-hidden="true" /></button>
                    {images.length > 1 && <><button type="button" onClick={goToPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Previous image"><ChevronLeft size={25} aria-hidden="true" /></button><button type="button" onClick={goToNext} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Next image"><ChevronRight size={25} aria-hidden="true" /></button></>}
                </div>
            </div>}
        </main>
    );
}
