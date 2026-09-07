"use client";

import { Check, ChevronRight, MapPin, MessageCircle, Shirt, Users } from "lucide-react";
import { useState } from "react";

const steps = [
    {
        title: "Choose a service",
        summary: "Start with Sunday Worship at 10:30 AM.",
        detail: "Every Sunday we gather for worship, Bible-centered teaching, and time to connect. You are welcome exactly as you are.",
        icon: Users,
        action: { label: "View Sunday Worship", href: "/events/sunday-worship-service" },
    },
    {
        title: "Get directions",
        summary: "Find us in Camanggaan, Virac, Itogon.",
        detail: "DEO Church Benguet is at 1229 Camanggaan, Virac, Itogon, Benguet. Parking is available nearby.",
        icon: MapPin,
        action: { label: "Open Google Maps", href: "https://maps.app.goo.gl/DdSt7GaUAHBoQJFe7", external: true },
    },
    {
        title: "Know what to expect",
        summary: "Come as you are—there is no dress code.",
        detail: "Expect a warm welcome, uplifting worship, and practical teaching. Families are welcome, and we have a safe, engaging environment for children.",
        icon: Shirt,
    },
    {
        title: "Let us know you're coming",
        summary: "Have a question before your first visit?",
        detail: "Send us a quick note, ask for prayer, or let us know if you would like someone to welcome you when you arrive.",
        icon: MessageCircle,
        action: { label: "Email the church", href: "mailto:deochurchbenguetchosenmission@gmail.com?subject=I'm%20planning%20my%20first%20visit" },
    },
];

export default function PlanVisit() {
    const [activeStep, setActiveStep] = useState(0);
    const active = steps[activeStep];
    const ActiveIcon = active.icon;

    return (
        <section id="visit" className="scroll-mt-24 bg-teal-700 py-24 text-white sm:py-28" aria-labelledby="visit-title">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">Your first visit</p>
                        <h2 id="visit-title" className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">We’ll help you feel at home.</h2>
                        <p className="mt-5 max-w-md leading-relaxed text-teal-50">Visiting a church for the first time can feel unfamiliar. Here’s everything you need, one simple step at a time.</p>
                    </div>

                    <div className="rounded-3xl bg-white p-3 text-slate-900 shadow-2xl shadow-teal-950/30 sm:p-5">
                        <div className="grid gap-2 sm:grid-cols-2">
                            {steps.map((step, index) => {
                                const StepIcon = step.icon;
                                const isActive = index === activeStep;
                                return <button key={step.title} type="button" onClick={() => setActiveStep(index)} className={`flex items-center gap-3 rounded-2xl p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${isActive ? "bg-teal-600 text-white shadow-md" : "hover:bg-teal-50"}`} aria-pressed={isActive}>
                                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${isActive ? "bg-white/20" : "bg-teal-100 text-teal-700"}`}>{isActive ? <Check size={18} aria-hidden="true" /> : <StepIcon size={18} aria-hidden="true" />}</span>
                                    <span><span className="block font-bold">{step.title}</span><span className={`mt-0.5 block text-sm ${isActive ? "text-teal-50" : "text-slate-500"}`}>{step.summary}</span></span>
                                </button>;
                            })}
                        </div>

                        <div className="mt-4 rounded-2xl bg-slate-50 p-6 sm:p-8">
                            <div className="flex gap-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700"><ActiveIcon size={24} aria-hidden="true" /></span>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">Step {activeStep + 1} of {steps.length}</p>
                                    <h3 className="mt-1 text-2xl font-bold">{active.title}</h3>
                                    <p className="mt-3 max-w-xl leading-relaxed text-slate-600">{active.detail}</p>
                                    {active.action && <a href={active.action.href} target={active.action.external ? "_blank" : undefined} rel={active.action.external ? "noreferrer" : undefined} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700">{active.action.label} <ChevronRight size={17} aria-hidden="true" /></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
