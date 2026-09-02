"use client";

import Link from "next/link";
import { events } from "../../data/event";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function EventsPage() {
    useFadeIn();
    const upcomingEvents = events.filter(e => e.type === "upcoming");
    const pastEvents = events.filter(e => e.type === "past");
    const soonerUpcomingEvents = events.filter(e => e.type === "sooner-upcoming");

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
                        Events
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Join us and be part of what God is doing in our church and community.
                    </p>
                </div>
            </section>

            {/* Sooner Upcoming Events */}
            {/* Featured Upcoming Event (Poster Style) */}
            {/* <section className="fade-in py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-16">
                        Happening Soon
                    </h2>

                    {soonerUpcomingEvents.map((event) => {
                        const firstImage =
                            event.images?.[0] || event.image || "/events/placeholder.jpg";

                        return (
                            <div
                                key={event.id}
                                className="relative rounded-3xl overflow-hidden shadow-xl group"
                            >
                                <img
                                    src={firstImage}
                                    alt={event.title}
                                    className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-black/60" />

                                <div className="absolute inset-0 flex flex-col justify-center items-start p-10 md:p-16 text-white">

                                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm mb-4">
                                        Upcoming Event
                                    </span>

                                    <h3 className="text-3xl md:text-5xl font-bold mb-4 max-w-xl">
                                        {event.title}
                                    </h3>

                                    <p className="text-lg text-gray-200 mb-4">
                                        {event.date} • {event.time}
                                    </p>

                                    <p className="max-w-xl text-gray-200 mb-6">
                                        {event.description}
                                    </p>

                                    <a
                                        href="#contact"
                                        className="bg-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                                    >
                                        Ask About This Event
                                    </a>

                                </div>
                            </div>
                        );
                    })}

                </div>
            </section> */}
            {/* Featured Upcoming Event (Portrait Poster) */}
            {soonerUpcomingEvents.length > 0 && <section className="fade-in py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold mb-16">
                        Happening Soon
                    </h2>

                    {soonerUpcomingEvents.map((event) => {
                        const firstImage =
                            event.images?.[0] || event.image || "/events/placeholder.jpg";

                        return (
                            <div key={event.id} className="flex flex-col items-center">

                                {/* Poster Container */}
                                <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src={firstImage}
                                        alt={event.title}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* Event Info Below */}
                                <div className="mt-8 max-w-xl text-center">
                                    <h3 className="text-2xl font-semibold mb-2">
                                        {event.title}
                                    </h3>

                                    <p className="text-teal-600 font-medium mb-2">
                                        {event.date} • {event.time}
                                    </p>

                                    <p className="text-gray-600 mb-6">
                                        {event.description}
                                    </p>

                                    <a
                                        href="/contact"
                                        className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
                                    >
                                        Ask About This Event
                                    </a>
                                </div>

                            </div>
                        );
                    })}

                </div>
            </section>}

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

                                <span
                                    className={`mt-6 font-semibold ${event.featured
                                        ? "text-white underline"
                                        : "text-teal-600 hover:underline"
                                        }`}
                                >
                                    Learn More →
                                </span>
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

                                            <span className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                                                Learn More →
                                            </span>
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
