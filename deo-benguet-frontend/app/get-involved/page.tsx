"use client";

import Link from "next/link";
import { useFadeIn } from "@/hooks/useFadeIn";

const involvement = [
    {
        id: "go",
        icon: "🏃",
        title: "GO",
        subtitle: "Join Our Outreach",
        description:
            "Join one of our outreaches and become part of sharing God's love with our community.",
        button: "Contact Us",
        href: "/contact",
        bg: "bg-amber-50",
    },

    {
        id: "pray",
        icon: "🙏",
        title: "PRAY",
        subtitle: "Stand With Us",
        description:
            "Partner with us through prayer for missions, churches, leaders, and lives to be transformed.",
        button: "Send Prayer",
        href: "/contact",
        bg: "bg-teal-50",
    },

    {
        id: "sow",
        icon: "❤️",
        title: "SOW",
        subtitle: "Support The Ministry",
        description:
            "Help support church activities, outreach programs, and local ministry initiatives.",
        button: "Support Us",
        href: "/support/#support",
        bg: "bg-rose-50",
    },
];

export default function GetInvolvedPage() {
    useFadeIn();

    return (
        <main>

            {/* HERO */}
            <section className="relative h-[50vh] flex items-center justify-center text-white fade-in">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/events/deo-church-benguet-5.jpg')",
                    }}
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative text-center px-6">

                    <h1 className="text-5xl font-bold mb-6">
                        Get Involved
                    </h1>

                    <p className="text-lg text-gray-100 max-w-2xl">
                        Be part of what God is doing through prayer,
                        outreach, and generosity.
                    </p>

                </div>

            </section>

            {/* GO PRAY SOW */}
            <section className="py-24 fade-in">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-8">

                        {involvement.map((item) => (
                            <div
                                key={item.id}
                                className={`${item.bg}
                                rounded-3xl p-10
                                shadow-sm
                                hover:shadow-xl
                                hover:-translate-y-2
                                transition`}
                            >

                                <div className="text-6xl mb-8">
                                    {item.icon}
                                </div>

                                <h2 className="text-4xl font-bold mb-2">
                                    {item.title}
                                </h2>

                                <h3 className="text-xl mb-4 text-teal-700">
                                    {item.subtitle}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {item.description}
                                </p>

                                <Link
                                    href={item.href}
                                    className="
                                    inline-flex
                                    bg-teal-600
                                    text-white
                                    px-6
                                    py-3
                                    rounded-xl
                                    hover:bg-teal-700
                                    transition"
                                >
                                    {item.button}
                                </Link>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
}