"use client";

import Link from "next/link";
import { CalendarDays, ChevronRight, Clock3, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { events } from "@/data/event";

type WeeklyEvent = (typeof events)[number] & {
  day: string;
  dayOfWeek: number;
  startHour: number;
  startMinute: number;
};

const weeklyEvents: WeeklyEvent[] = [
  { ...events[0], day: "Sunday", dayOfWeek: 0, startHour: 10, startMinute: 30 },
  { ...events[1], day: "Friday", dayOfWeek: 5, startHour: 15, startMinute: 0 },
  { ...events[3], day: "Wednesday", dayOfWeek: 3, startHour: 18, startMinute: 0 },
];

function getNextOccurrence(event: WeeklyEvent, from: Date) {
  const next = new Date(from);
  const daysUntil = (event.dayOfWeek - from.getDay() + 7) % 7;
  next.setDate(from.getDate() + daysUntil);
  next.setHours(event.startHour, event.startMinute, 0, 0);

  if (next <= from) next.setDate(next.getDate() + 7);
  return next;
}

function formatCountdown(target: Date, now: Date) {
  const remaining = Math.max(0, target.getTime() - now.getTime());
  const totalMinutes = Math.floor(remaining / 60_000);
  const days = Math.floor(totalMinutes / 1_440);
  const hours = Math.floor((totalMinutes % 1_440) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) return `in ${days}d ${hours}h`;
  if (hours > 0) return `in ${hours}h ${minutes}m`;
  return `in ${minutes}m`;
}

export default function ThisWeek() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateNow = () => setNow(new Date());
    updateNow();
    const interval = window.setInterval(updateNow, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const schedule = weeklyEvents
    .map((event) => ({ event, next: getNextOccurrence(event, now ?? new Date()) }))
    .sort((a, b) => a.next.getTime() - b.next.getTime());
  const nextEvent = schedule[0];

  return (
    <section aria-labelledby="this-week-title" className="relative z-20 -mt-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              <CalendarDays size={16} aria-hidden="true" /> This week at DEO
            </p>
            <h2 id="this-week-title" className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Find a place to connect.
            </h2>
          </div>
          {nextEvent && (
            <p className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
              Next gathering: {nextEvent.event.title} {now && formatCountdown(nextEvent.next, now)}
            </p>
          )}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {schedule.map(({ event, next }) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-slate-900">{event.title}</p>
                  <p className="mt-1 text-sm text-teal-700">Every {event.day}</p>
                </div>
                <ChevronRight className="mt-1 text-teal-600 transition group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <p className="flex items-center gap-2 text-sm text-slate-600">
                <Clock3 size={15} aria-hidden="true" /> {event.time}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={15} aria-hidden="true" /> {event.location?.startsWith("Virtual") ? "Online" : "DEO Church, Benguet"}
              </p>
              <p className="mt-4 text-sm font-semibold text-teal-700">
                {now ? formatCountdown(next, now) : "View details"}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">New here? We would love to welcome you this Sunday.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#visit" className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700">
              Plan a visit
            </a>
            <a href="https://maps.app.goo.gl/DdSt7GaUAHBoQJFe7" target="_blank" rel="noreferrer" className="rounded-xl border border-teal-600 px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50">
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
