"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, Compass, Heart, Sparkles, Users } from "lucide-react";
import { useState } from "react";

const values = [
    { id: "christ-centered", title: "Christ-Centered", brief: "Jesus is the foundation of all we do.", full: "Jesus is the foundation and focus of all we do. We exist to glorify Him and make Him known." },
    { id: "love", title: "Love", brief: "We reflect God’s unconditional love.", full: "We demonstrate God’s unconditional love in how we serve, relate, and care for others." },
    { id: "excellence", title: "Excellence", brief: "We give our best in all things.", full: "We strive to honor God by giving our best in all things, reflecting His nature through quality and diligence." },
    { id: "spirit-driven", title: "Spirit-Driven", brief: "Led by the Holy Spirit.", full: "We are led by the Holy Spirit in worship, decision-making, ministry, and daily living." },
    { id: "word-based", title: "Word-Based", brief: "Guided by God’s Word.", full: "God’s Word is our ultimate authority, guiding our beliefs, practices, and growth." },
    { id: "integrity", title: "Biblical Integrity", brief: "Truth in character and conduct.", full: "We live with honesty and alignment to Scripture, upholding truth in both character and conduct." },
    { id: "brave", title: "Brave", brief: "Bold faith and courage.", full: "We step out in faith, take risks for the Gospel, and stand firm in spiritual boldness." },
    { id: "unashamed", title: "Unashamed", brief: "Boldly proclaim Jesus.", full: "We boldly proclaim the name of Jesus without compromise or fear." },
    { id: "generous", title: "Generous Giving", brief: "We give joyfully and sacrificially.", full: "We give joyfully, sacrificially, and faithfully, recognizing all we have belongs to God." },
];

const leadership = [
    { id: "lyka-arman", name: "PH Campus Pastor Lyka & Arman", role: "Pastor", image: "/events/pastor4-extended.jpeg", focus: "Church Leadership", bio: "PH Campus Pastor Lyka & Arman bring unity, wisdom, and steadfast commitment to leading our growing congregation with grace and purpose." },
    { id: "kesha", name: "Pastor Kesha", role: "Preacher & Bible Teacher", image: "/events/pastor6.jpg", focus: "God’s Word", bio: "Pastor Kesha is passionate about sharing God’s Word with depth and clarity through practical, faith-building teaching." },
    { id: "kate", name: "Youth Leader Kate", role: "Youth & Kids Ministry", image: "/events/pastor5-extended.jpeg", focus: "Youth & Kids Ministry", bio: "Youth Leader Kate creates authentic worship experiences and nurtures young believers as they grow in faith and discover their purpose in Christ." },
    { id: "janelle", name: "Assistant Leader Janelle", role: "Youth & Kids Ministry", image: "/events/pastor.jpg", focus: "Youth & Kids Ministry", bio: "Assistant Leader Janelle brings enthusiasm and care to Youth Connect and Kids Ministry, helping every young person feel valued and welcome." },
];

const beliefs = [
    "We believe in God eternal, triune, almighty creator, sustainer and ruler of all creation.",
    "We believe in God the Father, the author of creation and salvation.",
    "We believe in Jesus Christ, the only Son of God the Father, who became flesh, was crucified, rose from the dead, and ascended to heaven.",
    "We believe in the Holy Spirit, true God proceeding from the Father and the Son, who convicts the world and leads in all truth.",
    "We believe that the Bible is the Word of God, written by people as the Holy Spirit inspired them.",
    "We believe all human beings are created in the image of God, and salvation comes through faith in Jesus Christ.",
    "We believe in baptism in the Holy Spirit with the initial evidence of speaking in tongues.",
    "We believe that Jesus Christ is the Head of the Church, which consists of born-again believers.",
    "We believe in believer’s baptism by immersion and the Lord’s Supper.",
    "We believe that Jesus Christ will return for His Church.",
    "We believe in final judgement, resurrection of the body, and eternal life.",
];

const journey = [
    { title: "Early Years", label: "Founded in Benguet", image: "/events/deo-church-benguet-2.jpg", text: "DEO Church Benguet was established as a local church community rooted in the faith and vision of early believers who sought to build a Christ-centered congregation in the region." },
    { title: "Partnership", label: "Joined DEO Church", image: "/events/deo-interns-visit-1.jpg", text: "We partnered with DEO Church, aligning our mission and values with a growing global movement and strengthening our commitment to make disciples across nations." },
    { title: "Present", label: "Growing as a Church Plant", image: "/events/sunday-worship-1.jpg", text: "Through weekend services, intentional discipleship, and missional outreach, we are building a vibrant community that reflects Christ’s love in Benguet." },
    { title: "Future", label: "Expanding God’s Kingdom", image: "/events/amanda-street-evangelism-1.jpg", text: "We look forward to seeing God reach more people locally and globally through the love of Jesus and our partnership with DEO Church." },
];

const mission = [
    ["Evangelize", "Matthew 28:19–20", "Share the transforming message of Jesus Christ."],
    ["Encourage", "Hebrews 10:24–25", "Build authentic community and compassionate care."],
    ["Equip", "Ephesians 4:11–13", "Grow disciples in biblical truth and spiritual disciplines."],
    ["Establish", "Mark 16:15", "Build strong foundations of faith and character."],
    ["Excellence", "Colossians 3:23", "Pursue excellence for the glory of God."],
];

const focusAreas = [
    { title: "Worship", description: "Worship the Lord with reverence and Spirit-led praise.", verse: "Luke 4:8" },
    { title: "Word-Based", description: "Grounded in Scripture and biblical teaching.", verse: "2 Timothy 3:16–17" },
    { title: "Prayer", description: "A church built on consistent and powerful prayer.", verse: "Romans 12:12" },
    { title: "People", description: "Building authentic relationships and community.", verse: "Ephesians 4:11–15" },
    { title: "Missions", description: "Reaching the local community and nations.", verse: "Matthew 28:19–20" },
    { title: "Growth", description: "Spiritual maturity and discipleship development.", verse: "2 Peter 3:18" },
];

export default function AboutPage() {
    const [activeValue, setActiveValue] = useState(values[0].id);
    const [activeLeader, setActiveLeader] = useState(0);
    const [openBelief, setOpenBelief] = useState<number | null>(null);
    const selectedValue = values.find((value) => value.id === activeValue) ?? values[0];
    const selectedLeader = leadership[activeLeader];

    return (
        <main>
            <section className="relative isolate overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
                <Image src="/events/deo-church-benguet-2.jpg" alt="DEO Church Benguet community" fill priority sizes="100vw" className="-z-20 object-cover opacity-45" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30" />
                <div className="mx-auto max-w-6xl px-6"><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-300"><Sparkles size={16} aria-hidden="true" /> About DEO Church Benguet</p><h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">A place to belong, grow, and encounter God.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">We are a Christ-centered church family in Benguet, called to love God, love people, and make disciples.</p><div className="mt-9 flex flex-wrap gap-3">{[["#our-story", "Our story"], ["#values", "Our values"], ["#leadership", "Leadership"]].map(([href, label]) => <a key={href} href={href} className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20">{label}</a>)}</div></div>
            </section>

            <section id="our-story" className="scroll-mt-24 bg-white py-24 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Our story</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Rooted in Jesus. Here for Benguet.</h2><div className="mt-6 space-y-5 leading-relaxed text-slate-600"><p>DEO Church Benguet is a family of Bible-believing Christians who love God, love our neighbors, and extend Christ’s love to all.</p><p>Our heart is to see people saved, healed, set free, transformed into devoted disciples, and empowered to serve Jesus Christ.</p><p>As a partner plant of DEO Church, we share a mission to establish Christ-like communities around the world.</p></div></div><div className="rounded-3xl bg-teal-50 p-8 sm:p-10"><Compass className="text-teal-700" size={34} aria-hidden="true" /><h3 className="mt-5 text-2xl font-bold text-slate-900">DEO = God</h3><p className="mt-4 text-lg leading-relaxed text-slate-600">This is God’s Church. DEO Victoria means “God Gives Victory.”</p><Image src="/10.svg" alt="DEO Church logo" width={400} height={400} className="mx-auto mt-6 max-h-52 w-auto" /></div></div></section>

            <section className="bg-teal-700 py-20 text-white sm:py-24"><div className="mx-auto max-w-4xl px-6 text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">Our vision</p><h2 className="mt-4 text-4xl font-bold tracking-tight">One church impacting nations.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-teal-50">Establishing Christ-like communities around the world.</p><p className="mt-8 text-sm font-bold tracking-wide text-teal-100">ACTS 1:8 · NEWCASTLE, KZN, SOUTH AFRICA, BENGUET, AND THE WORLD</p></div></section>

            <section className="bg-slate-50 py-24 sm:py-28"><div className="mx-auto max-w-6xl px-6"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Our mission</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">One church impacting nations.</h2><p className="mt-5 leading-relaxed text-slate-600">Our mission is expressed in every part of church life.</p></div><div className="mt-12 grid gap-3 md:grid-cols-5">{mission.map(([title, verse, text], index) => <article key={title} className="relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><span className="text-sm font-bold text-teal-700">0{index + 1}</span><h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p><p className="mt-5 text-xs font-bold text-teal-700">{verse}</p></article>)}</div></div></section>

            <section className="bg-slate-950 py-20 text-white sm:py-24"><div className="mx-auto max-w-3xl px-6 text-center"><p className="text-2xl font-semibold leading-relaxed sm:text-3xl">“For where two or three gather in my name, there am I with them.”</p><p className="mt-5 font-bold text-teal-300">Matthew 18:20</p></div></section>

            <section className="bg-slate-50 py-24 sm:py-28"><div className="mx-auto max-w-6xl px-6"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Our focus areas</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">How we worship, grow, and serve.</h2><p className="mt-5 leading-relaxed text-slate-600">These foundations shape daily life in our church community.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{focusAreas.map((area, index) => <article key={area.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"><span className="text-sm font-bold text-teal-700">0{index + 1}</span><h3 className="mt-4 text-xl font-bold text-slate-900">{area.title}</h3><p className="mt-3 leading-relaxed text-slate-600">{area.description}</p><p className="mt-5 text-sm font-bold text-teal-700">{area.verse}</p></article>)}</div></div></section>

            <section id="values" className="scroll-mt-24 bg-white py-24 sm:py-28"><div className="mx-auto max-w-6xl px-6"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Our core values</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">The convictions that shape us.</h2><p className="mt-5 leading-relaxed text-slate-600">Select a value to see how it guides our church family.</p></div><div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Core values">{values.map((value) => <button key={value.id} type="button" role="tab" aria-selected={value.id === activeValue} onClick={() => setActiveValue(value.id)} className={`rounded-2xl p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${value.id === activeValue ? "bg-teal-600 text-white shadow-lg" : "bg-slate-50 text-slate-800 hover:bg-teal-50"}`}><span className="font-bold">{value.title}</span><span className={`mt-1 block text-sm ${value.id === activeValue ? "text-teal-50" : "text-slate-500"}`}>{value.brief}</span></button>)}</div><article className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-12"><Heart className="text-teal-300" size={36} aria-hidden="true" /><p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-teal-300">DEO Church value</p><h3 className="mt-3 text-4xl font-bold">{selectedValue.title}</h3><p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">{selectedValue.full}</p></article></div></div></section>

            <section id="leadership" className="scroll-mt-24 bg-slate-50 py-24 sm:py-28"><div className="mx-auto max-w-6xl px-6"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Our people</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Meet our leadership team.</h2></div><div className="mt-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]"><div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Leadership team">{leadership.map((leader, index) => <button key={leader.id} type="button" role="tab" aria-selected={activeLeader === index} onClick={() => setActiveLeader(index)} className={`rounded-2xl p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${activeLeader === index ? "bg-teal-600 text-white shadow-lg" : "bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-teal-50"}`}><span className="block font-bold">{leader.name}</span><span className={`mt-1 block text-sm ${activeLeader === index ? "text-teal-50" : "text-teal-700"}`}>{leader.role}</span></button>)}</div><article className="grid overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 sm:grid-cols-2"><div className="relative min-h-80"><Image src={selectedLeader.image} alt={selectedLeader.name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div><div className="flex flex-col justify-center p-8 sm:p-10"><Users className="text-teal-700" size={33} aria-hidden="true" /><p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-teal-700">{selectedLeader.focus}</p><h3 className="mt-3 text-3xl font-bold text-slate-900">{selectedLeader.name}</h3><p className="mt-2 font-semibold text-teal-700">{selectedLeader.role}</p><p className="mt-6 leading-relaxed text-slate-600">{selectedLeader.bio}</p></div></article></div></div></section>

            <section className="bg-white py-24 sm:py-28"><div className="mx-auto max-w-6xl px-6"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Our journey</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">A story still being written.</h2><p className="mt-5 leading-relaxed text-slate-600">Explore the chapters that brought us here and the hope that moves us forward.</p></div><div className="relative mt-12 border-l-2 border-teal-200 pl-7 sm:pl-10">{journey.map((chapter, index) => <article key={chapter.title} className="relative mb-12 last:mb-0"><span className="absolute -left-[2.02rem] top-1 h-5 w-5 rounded-full border-4 border-white bg-teal-600 sm:-left-[3.02rem]" aria-hidden="true" /><div className="grid overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-200 md:grid-cols-[0.7fr_1.3fr]"><div className="relative min-h-56"><Image src={chapter.image} alt={chapter.label} fill sizes="(min-width: 768px) 35vw, 100vw" className="object-cover" /></div><div className="p-7"><p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">Chapter 0{index + 1}</p><h3 className="mt-2 text-2xl font-bold text-slate-900">{chapter.title}: {chapter.label}</h3><p className="mt-4 leading-relaxed text-slate-600">{chapter.text}</p></div></div></article>)}</div></div></section>

            <section className="bg-teal-700 py-20 text-white sm:py-24"><div className="mx-auto max-w-3xl px-6 text-center"><p className="text-2xl font-semibold leading-relaxed sm:text-3xl">“Let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, but encouraging one another.”</p><p className="mt-5 font-bold text-teal-100">Hebrews 10:24–25</p></div></section>

            <section className="bg-white py-24 sm:py-28"><div className="mx-auto max-w-3xl px-6 text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-600">Confession of faith</p><h2 className="mt-4 text-4xl font-bold tracking-tight">What we believe.</h2><p className="mt-5 text-teal-600">The foundation of our church stands firmly on these biblical truths.</p><div className="mt-10 text-left">{beliefs.map((belief, index) => { const isOpen = openBelief === index; return <div key={belief} className="border-b border-white/20"><button type="button" onClick={() => setOpenBelief(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal" aria-expanded={isOpen}><span>We believe {index + 1}</span><ChevronDown size={20} className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" /></button>{isOpen && <p className="pb-5 leading-relaxed text-teal-600">{belief}</p>}</div>; })}</div></div></section>

            <section className="bg-slate-950 py-20 text-white"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">Be part of the story</p><h2 className="mt-2 text-3xl font-bold">We would love to welcome you.</h2></div><div className="flex flex-wrap justify-center gap-3"><Link href="/events" className="rounded-xl bg-teal-500 px-5 py-3 font-bold transition hover:bg-teal-400">Explore events</Link><Link href="/#visit" className="rounded-xl border border-white/30 px-5 py-3 font-bold transition hover:bg-white/10">Plan a visit</Link></div></div></section>
        </main>
    );
}
