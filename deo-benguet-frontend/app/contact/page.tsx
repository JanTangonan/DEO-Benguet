"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { Facebook, Mail, MapPin, Phone, Send } from "lucide-react";

const contactCards = [
    { title: "Visit us", detail: "1229 Camanggaan, Virac, Itogon, Benguet", action: "Get directions", href: "https://maps.app.goo.gl/DdSt7GaUAHBoQJFe7", icon: MapPin, external: true },
    { title: "Call us", detail: "+63 938 646 7217\n+63 999 343 3940", action: "Call the church", href: "tel:+639386467217", icon: Phone },
    { title: "Follow us", detail: "Stay up to date on Facebook for latest updates and events.", action: "Visit Facebook", href: "https://www.facebook.com/profile.php?id=61587087962445", icon: Facebook, external: true },
    { title: "Email us", detail: "deochurchbenguet\nchosenmission@gmail.com", action: "Write an email", href: "mailto:deochurchbenguetchosenmission@gmail.com", icon: Mail },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("sending");
        try {
            const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
            if (!response.ok) throw new Error("Message was not sent");
            setForm({ name: "", email: "", message: "" });
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return <main>
        <section className="relative isolate overflow-hidden bg-slate-950 py-24 text-white sm:py-32"><Image src="/events/deo-church-benguet-3.jpg" alt="DEO Church Benguet gathering" fill priority sizes="100vw" className="-z-20 object-cover opacity-45" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30" /><div className="mx-auto max-w-6xl px-6"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Get in touch</p><h1 className="mt-4 max-w-2xl text-5xl font-bold tracking-tight sm:text-6xl">We would love to connect.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">Whether you have a question, need prayer, or are planning a visit, there is a place for you at DEO Church Benguet.</p></div></section>

        <section className="bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-6xl px-6"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{contactCards.map((card) => { const Icon = card.icon; return <a key={card.title} href={card.href} target={card.external ? "_blank" : undefined} rel={card.external ? "noreferrer" : undefined} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700"><Icon size={22} aria-hidden="true" /></span><h2 className="mt-5 text-xl font-bold text-slate-900">{card.title}</h2><p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600">{card.detail}</p><p className="mt-5 text-sm font-bold text-teal-700 transition group-hover:translate-x-1">{card.action} →</p></a>; })}</div></div></section>

        <section id="message" className="scroll-mt-24 bg-white py-24 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Send a message</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">How can we help?</h2><p className="mt-5 max-w-md leading-relaxed text-slate-600">Tell us what is on your heart. You can ask a question, request prayer, or let us know that you are planning your first visit.</p><div className="mt-8 rounded-2xl bg-teal-50 p-6"><p className="font-bold text-teal-900">Sunday Worship</p><p className="mt-2 text-sm text-teal-800">Every Sunday · 10:30 AM–12:00 PM</p></div></div><form onSubmit={handleSubmit} className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold text-slate-700">Name<input name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100" /></label><label className="text-sm font-bold text-slate-700">Email<input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100" /></label></div><label className="mt-5 block text-sm font-bold text-slate-700">Message<textarea name="message" rows={6} value={form.message} onChange={handleChange} required className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100" placeholder="How can we help?" /></label>{status === "success" && <p className="mt-5 rounded-xl bg-green-100 px-4 py-3 text-sm font-semibold text-green-800">Thank you—your message has been sent.</p>}{status === "error" && <p className="mt-5 rounded-xl bg-red-100 px-4 py-3 text-sm font-semibold text-red-800">We could not send your message. Please try again or email the church directly.</p>}<button type="submit" disabled={status === "sending"} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"><Send size={17} aria-hidden="true" />{status === "sending" ? "Sending…" : "Send message"}</button></form></div></section>
    </main>;
}
