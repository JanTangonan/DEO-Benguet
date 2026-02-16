"use client";
import { useEffect } from "react";

export default function AboutPage() {
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
                            src="/pastor.jpg"
                            alt="Senior Pastor"
                            className="rounded-3xl shadow-xl"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Meet Our Pastor
                        </h2>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Pastor John has faithfully served the DEO Church community for over
                            a decade, passionately teaching the Word of God and shepherding
                            families with wisdom and compassion.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            His heart is to see lives transformed through the Gospel and to raise
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
                            <h4 className="font-semibold text-teal-700">2015 — The Beginning</h4>
                            <p className="text-gray-600">
                                DEO Church started as a small gathering of families with a big vision.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-teal-700">2018 — Growing Community</h4>
                            <p className="text-gray-600">
                                Expanded ministries and launched midweek small groups.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-teal-700">2023 — A New Chapter</h4>
                            <p className="text-gray-600">
                                Continued outreach and strengthened discipleship programs.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="fade-in py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-16">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 text-left">

                        <div className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition">
                            <div className="text-3xl mb-4">✝️</div>
                            <h4 className="font-semibold mb-2">Christ-Centered</h4>
                            <p className="text-gray-600">
                                Everything we do flows from our faith in Jesus Christ.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition">
                            <div className="text-3xl mb-4">🤝</div>
                            <h4 className="font-semibold mb-2">Community</h4>
                            <p className="text-gray-600">
                                We grow stronger together through fellowship and unity.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition">
                            <div className="text-3xl mb-4">🔥</div>
                            <h4 className="font-semibold mb-2">Spirit-Led</h4>
                            <p className="text-gray-600">
                                We depend on the Holy Spirit in all we do.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition">
                            <div className="text-3xl mb-4">❤️</div>
                            <h4 className="font-semibold mb-2">Servant-Hearted</h4>
                            <p className="text-gray-600">
                                We serve others with compassion and humility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}