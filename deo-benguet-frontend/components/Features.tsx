"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import Link from "next/link";

interface NextStepProps {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    href: string;
}

const steps = [
    {
        icon: "⛪",
        title: "Discover Our Story",
        description: "Learn who we are, what we believe, and the heart behind our mission.",
        buttonText: "Learn More",
        href: "/about",
    },
    {
        icon: "📅",
        title: "Join an Upcoming Event",
        description: "Be part of our gatherings, ministries, and special church events.",
        buttonText: "View Events",
        href: "/events",
    },
    {
        icon: "📰",
        title: "Read Our Latest News",
        description: "Stay updated with church announcements and community highlights.",
        buttonText: "Read Newsletter",
        href: "/newsletter",
    },
];

function NextStepCard({ icon, title, description, buttonText, href }: NextStepProps) {
    return (
        <div className="group bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 flex flex-col justify-between">

            <div>
                <div className="text-4xl mb-6">{icon}</div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-600 transition">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>
            </div>

            <Link
                href={href}
                className="inline-block mt-auto bg-teal-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-teal-700 transition"
            >
                {buttonText}
            </Link>
        </div>
    );
}

export default function Features() {
    useFadeIn();
    return (
        <section className="bg-gradient-to-b from-teal-600 to-white py-28 fade-in">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Your Next Steps
                </h2>

                <p className="text-white max-w-2xl mx-auto mb-16">
                    Ready to take the next step? Here's how you can connect, grow, and stay involved.
                </p>

                <div className="grid md:grid-cols-3 gap-10 text-left">
                    {steps.map((step, index) => (
                        <NextStepCard
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            buttonText={step.buttonText}
                            href={step.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}