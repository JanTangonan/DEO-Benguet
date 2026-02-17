"use client";
import { useEffect, useState } from "react";

export default function AboutPage() {
    const [expandedValue, setExpandedValue] = useState<string | null>(null);

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
    }, []);

    const coreValues = [
        {
            id: "missions",
            title: "Missions",
            icon: "🌍",
            brief: "Being the hands and feet of Jesus in our community and the world.",
            full: "Being the hands and feet of Jesus is a core value at DEO Church. We are passionate about spreading the light of Jesus in a dark world by actively engaging in missions, locally and globally. Our commitment is to serve others generously by creating a platform for all to minister from. We believe that the light which shines the furthest, shines the brightest at home. Through our actions and outreach efforts, we desire to make disciples of All Nations."
        },
        {
            id: "growth",
            title: "Growth",
            icon: "📈",
            brief: "Healthy development of spirit, soul and body for all believers.",
            full: "Healthy growth in spirit, soul and body is a paramount value at DEO Church. By acknowledging that everything in God's creation is created with the ultimate potential and purpose to grow in a healthy manner, we prioritize the full development of our partners. We encourage individual and community growth through various spiritual disciplines, building healthy friendships and serving faithfully."
        },
        {
            id: "people",
            title: "People",
            icon: "👥",
            brief: "Authentic relationships and meaningful connections in smaller circles.",
            full: "Authentic relationships between real people are a fundamental value at DEO Church. We believe circles are always better than rows. True transformation always happens in smaller settings, rather than big groups. In a world often marked by superficial interactions, we prioritize authenticity, vulnerability and meaningful connections. We aim to create an environment where people can truly be themselves, build lasting friendships and support each other on their faith journeys."
        },
        {
            id: "worship",
            title: "Worship",
            icon: "🙏",
            brief: "Authentic, heartfelt worship in spirit and truth that pleases God.",
            full: "At DEO Church, we hold the core value of Worship in spirit and truth. This value emphasizes our commitment to authentic and heartfelt worship in a manner that pleases God, not man. We believe that true worship involves not only the outward expression of praise but also a genuine, sincere connection with Holy Spirit and an unwavering commitment to obeying."
        },
        {
            id: "truth",
            title: "Truth",
            icon: "📖",
            brief: "Living according to God's truth as revealed in His Word.",
            full: "Learning and living according to God's truth in the Word is a foundational value at DEO Church. We are committed to studying and understanding the teachings of the Bible, which we believe to be the ultimate source of divine truth. Through continuous learning, reflection and prayer, we seek to align our lives with God's Word, allowing it to guide our beliefs, values and actions. This value underscores our dedication to living a life that reflects the principles and wisdom found in Scripture."
        }
    ];

    return (
        <main>

            {/* Page Hero */}
            <section className="relative h-[60vh] flex items-center justify-center text-white fade-in py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/events/deo-church-benguet-2.jpg')" }}
                ></div>

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About DEO Church
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        A place to belong. A place to grow. A place to encounter God.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="fade-in py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Our Story
                    </h2>

                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            DEO Church was founded with a simple vision — to build a Christ-centered
                            community where people can experience authentic faith and meaningful
                            relationships.
                        </p>

                        <p>
                            From humble beginnings to a growing church family, we continue to
                            pursue God’s calling to reach our community with hope, love,
                            and truth.
                        </p>

                        <p>
                            We believe church is more than a building. It’s a people united in
                            worship, service, and transformation through Jesus Christ.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="bg-gray-50 fade-in py-24">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img
                            src="/events/pastor.jpg"
                            alt="Senior Pastor"
                            className="rounded-3xl shadow-xl"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Meet Our Pastor
                        </h2>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Pastor Jane has faithfully served the DEO Church community for over
                            a decade, passionately teaching the Word of God and shepherding
                            families with wisdom and compassion.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Her heart is to see lives transformed through the Gospel and to raise
                            up the next generation of leaders.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-50 fade-in py-24">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-teal-700">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To make disciples who love God, love people, and impact the world
                            through the power of the Holy Spirit.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-teal-700">
                            Our Vision
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To see lives transformed and communities renewed through a
                            thriving, Spirit-led church.
                        </p>
                    </div>

                </div>
            </section>

            {/* Scripture Highlight */}
            <section className="bg-teal-600 text-white py-20 text-center fade-in py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                        “For where two or three gather in my name, there am I with them.”
                    </p>
                    <span className="text-teal-100">Matthew 18:20</span>
                </div>
            </section>

            {/* Timeline */}
            <section className="fade-in py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Our Journey
                    </h2>

                    <div className="space-y-12 border-l-2 border-teal-200 pl-8">

                        <div>
                            <h4 className="font-semibold text-teal-700">1976 — The Beginning</h4>
                            <p className="text-gray-600">
                                Deo Church was originally an Afrikaans Church, that was established in Newcastle
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-teal-700">2015 — Growing Community</h4>
                            <p className="text-gray-600">
                                Started an English Sunday meeting for the first time, and we are excited about making the English-speaking people of our city, part of this great family of believers.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-teal-700">2026 — Expanded Globally</h4>
                            <p className="text-gray-600">
                                Launched new church plants in South Africa, various countries, such as the Philippines, Russia, embracing a diverse and multicultural community.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-teal-700">Present — A New Chapter</h4>
                            <p className="text-gray-600">
                                With a new church plant in the Philippines, we are excited to see how God will continue to use us to reach more people with the love of Jesus.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="fade-in py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {coreValues.map((value) => (
                            <div
                                key={value.id}
                                onClick={() =>
                                    setExpandedValue(expandedValue === value.id ? null : value.id)
                                }
                                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300
                                    ${expandedValue === value.id
                                        ? "bg-teal-50 border-teal-300 shadow-md"
                                        : "border-gray-100 hover:shadow-lg hover:border-teal-200"
                                    }
                                `}
                            >
                                <div className="text-3xl mb-3">{value.icon}</div>

                                <h4 className="font-semibold text-lg text-gray-800">
                                    {value.title}
                                </h4>

                                <p className="text-gray-600 mt-2 text-sm">
                                    {value.brief}
                                </p>
                            </div>
                        ))}
                    </div>
                    {expandedValue && (
                        <div className="mt-16 bg-teal-50 border border-teal-200 rounded-3xl p-10 shadow-lg animate-fadeIn">
                            {coreValues
                                .filter((value) => value.id === expandedValue)
                                .map((value) => (
                                    <div key={value.id}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="text-4xl">{value.icon}</div>
                                            <h3 className="text-2xl font-bold text-gray-800">
                                                {value.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {value.full}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}