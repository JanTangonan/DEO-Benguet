"use client";

import Link from "next/link";
import { events } from "../../data/event";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function EventsPage() {
    useFadeIn();
    const upcomingEvents = events.filter(e => e.type === "upcoming");
    const pastEvents = events.filter(e => e.type === "past");
    
    return (
        <main>

            {/* Page Hero */}
            <section className="relative h-[50vh] flex items-center justify-center text-white fade-in py-24 scroll-mt-24">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/events/deo-church-benguet-4.jpg')" }}
                ></div>

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative text-center px-6">
                    <h1 className="text-5xl md:text-5xl font-bold mb-6">
                        Upcoming Events
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Join us and be part of what God is doing in our church and community.
                    </p>
                </div>
            </section>

            {/* Upcoming Events List */}
            <section className="fade-in py-24">
                <div className="max-w-4xl mx-auto px-6 space-y-12">

                    {upcomingEvents.map((event) => (
                        <Link key={event.id} href={`/events/${event.slug}`} className="block">
                            <div
                                className={`p-8 rounded-3xl border transition duration-300 ${event.featured
                                    ? "bg-teal-600 text-white border-teal-600 shadow-xl"
                                    : "bg-white border-gray-100 hover:shadow-lg"
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">

                                    <h2 className="text-2xl font-semibold">
                                        {event.title}
                                    </h2>

                                    <div className={`text-sm font-medium ${event.featured ? "text-teal-100" : "text-teal-600"
                                        }`}>
                                        {event.date} • {event.time}
                                    </div>

                                </div>

                                <p className={`mb-4 ${event.featured ? "text-teal-100" : "text-gray-600"
                                    }`}>
                                    📍 {event.location}
                                </p>

                                <p className={`leading-relaxed ${event.featured ? "text-teal-50" : "text-gray-600"
                                    }`}>
                                    {event.description}
                                </p>

                                <button
                                    className={`mt-6 font-semibold ${event.featured
                                        ? "text-white underline"
                                        : "text-teal-600 hover:underline"
                                        }`}
                                >
                                    Learn More →
                                </button>
                            </div>
                        </Link>
                    ))}

                </div>
            </section>

            {/* Past Events */}
            <section className="fade-in py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-16">
                        Successful Past Events
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pastEvents.map((event) => {
                            const firstImage = event.images?.[0] || event.image || "/events/placeholder.jpg";
                            return (
                            <Link key={event.id} href={`/events/${event.slug}`} className="block group">
                                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden bg-gray-200">
                                        <img
                                            src={firstImage}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-600 transition">
                                            {event.title}
                                        </h3>

                                        <p className="text-sm text-teal-600 font-medium mb-3">
                                            {event.date}
                                        </p>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {event.description}
                                        </p>

                                        <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                                            Learn More →
                                        </button>
                                    </div>
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
