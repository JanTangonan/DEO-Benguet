"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Shield, Sparkles, UsersRound } from "lucide-react";
import { useState } from "react";

const ministries = [
    {
        name: "Youth Connect",
        description: "A lively Friday space for young people to worship, grow in faith, and build real friendships.",
        schedule: "Every Friday · 3:00 PM–6:00 PM",
        image: "/events/youth-connect-1.jpg",
        icon: UsersRound,
        href: "/events/youth-connect",
        action: "Explore Youth Connect",
    },
    {
        name: "Kids Ministry",
        description: "A safe, engaging place for children to learn about Jesus and experience the joy of church community.",
        schedule: "During Sunday Worship · 10:30 AM",
        image: "/events/vacation-bible-school-1.jpg",
        icon: HeartHandshake,
        href: "mailto:deochurchbenguetchosenmission@gmail.com?subject=Question%20about%20Kids%20Ministry",
        action: "Ask about Kids Ministry",
    },
    {
        name: "Bible Study & Prayer",
        description: "Grow deeper in Scripture and pray with others from wherever you are.",
        schedule: "Monday, Tuesday & Thursday · 9:00 PM",
        image: "/events/bible-study-1.jpg",
        icon: BookOpen,
        href: "/events/bible-study-prayer-meeting",
        action: "Join Bible Study",
    },
    {
        name: "Midweek Prayer",
        description: "A dedicated midweek pause for worship, prayer, and encouragement with the church family.",
        schedule: "Every Wednesday · 6:00 PM onwards",
        image: "/events/midweek-prayer-1.jpg",
        icon: Sparkles,
        href: "/events/midweek-prayer",
        action: "Explore Midweek Prayer",
    },
    {
        name: "Soldiers of God Taekwondo",
        description: "Training discipline, strength, respect, and Christian character through martial arts.",
        schedule: "Tuesday, Thursday & Saturday · 9:00 AM–3:00 PM",
        image: "/events/taekwondo-ministry-1.jpg",
        icon: Shield,
        href: "/events/soldiers-of-god-taekwondo",
        action: "Explore Taekwondo",
    },
];

export default function Ministries() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = ministries[activeIndex];
    const ActiveIcon = active.icon;
    const isExternal = active.href.startsWith("mailto:");

    return (
        <section className="bg-slate-50 py-24 sm:py-28" aria-labelledby="ministries-title">
            <div className="mx-auto max-w-6xl px-6">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Find your place</p>
                    <h2 id="ministries-title" className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">There’s a ministry for every season of life.</h2>
                    <p className="mt-5 leading-relaxed text-slate-600">Choose a ministry to see what it is like, when it meets, and how to take your next step.</p>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Church ministries">
                        {ministries.map((ministry, index) => {
                            const MinistryIcon = ministry.icon;
                            const isActive = index === activeIndex;
                            return <button key={ministry.name} type="button" role="tab" aria-selected={isActive} onClick={() => setActiveIndex(index)} className={`flex items-center gap-4 rounded-2xl p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${isActive ? "bg-teal-600 text-white shadow-lg shadow-teal-900/15" : "bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-teal-50"}`}>
                                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/20" : "bg-teal-100 text-teal-700"}`}><MinistryIcon size={21} aria-hidden="true" /></span>
                                <span className="font-bold">{ministry.name}</span>
                            </button>;
                        })}
                    </div>

                    <article className="grid overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 sm:grid-cols-2">
                        <div className="relative min-h-72"><Image src={active.image} alt={`${active.name} at DEO Church Benguet`} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div>
                        <div className="flex flex-col justify-center p-7 sm:p-9">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700"><ActiveIcon size={23} aria-hidden="true" /></span>
                            <h3 className="mt-5 text-3xl font-bold text-slate-900">{active.name}</h3>
                            <p className="mt-4 leading-relaxed text-slate-600">{active.description}</p>
                            <p className="mt-5 rounded-xl bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800">{active.schedule}</p>
                            {isExternal ? <a href={active.href} className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-800">{active.action} <ArrowRight size={17} aria-hidden="true" /></a> : <Link href={active.href} className="mt-6 inline-flex items-center gap-2 font-bold text-teal-700 hover:text-teal-800">{active.action} <ArrowRight size={17} aria-hidden="true" /></Link>}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
