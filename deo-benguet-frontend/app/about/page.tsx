"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
    //#region State & Data
    const [expandedValue, setExpandedValue] = useState<string | null>(null);

    const leadership = [
        {
            id: "pastor-lyka",
            name: "Pastor Lyka",
            role: "Senior Pastor",
            image: "/events/pastor3.jpg",
            focus: "Church Leadership",
            icon: "🙋‍♀️",
            bio: "Pastor Lyka is the heart that holds DEO Church together. As the visionary who started the partnership with DEO Church, she brings unity, wisdom, and steadfast commitment to leading our growing congregation with grace and purpose."
        },
        {
            id: "pastor-kesha",
            name: "Pastor Kesha",
            role: "Preacher & Bible Teacher",
            image: "/events/pastor2.jpg",
            focus: "God's Word",
            icon: "📖",
            bio: "Pastor Kesha is passionate about sharing God's Word with depth and clarity. As our Sunday service preacher, he delivers powerful messages that help our congregation understand and apply Scripture in their daily lives."
        },
        {
            id: "youth-leader-kate",
            name: "Youth Leader Kate",
            role: "Youth & Worship Director",
            image: "/events/pastor1.jpg",
            focus: "Youth & Worship",
            icon: "🎤",
            bio: "Youth Leader Kate brings passion and energy to our young people through the Youth Connect ministry. As our worship team leader, she creates authentic worship experiences that draw our community closer to God."
        }
    ];

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

    const beliefs = [
        "We believe in God eternal, triune, almighty creator, sustainer and ruler of all creation.",
        "We believe in God the Father, the author of creation and salvation.",
        "We believe in Jesus Christ the only Son of God the Father, true God who for the sake of humanity and its salvation descended from heaven and became flesh; who was conceived by the Holy Spirit and was born of the virgin Mary; who lived on earth and was crucified, died and was buried, who rose from the dead and ascended to heaven where He is seated at the right hand of the Father.",
        "We believe in the Holy Spirit, true God proceeding from the Father and the Son, who convicts the world of sin, righteousness and judgement and leads in all truth.",
        "We believe that the Bible is the Word of God, written by men as the Holy Spirit inspired them.",
        "We believe that all human beings are created in the image of God; due to sin this image is marred, and salvation comes through faith in Jesus Christ.",
        "We believe in the baptism in the Holy Spirit with the initial evidence of speaking in tongues.",
        "We believe that Jesus Christ is the Head of the Church which consists of born again believers.",
        "We believe in believer’s baptism by immersion and the Lord’s Supper.",
        "We believe that Jesus Christ will return for His Church.",
        "We believe in final judgement, resurrection of the body and eternal life."
    ];

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    //#endregion
    return (
        <main>
            
            {/* Page Hero */}
            <section className="relative h-[60vh] flex items-center justify-center text-white fade-in py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/events/deo-church-benguet-2.jpg')" }}
                ></div>

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative text-center px-6">
                    <h1 className="text-5xl md:text-5xl font-bold mb-6">
                        About DEO Church - Benguet
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        A place to belong. A place to grow. A place to encounter God.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="fade-in py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8 text-center">
                        Our Story
                    </h2>

                    <div className="space-y-6 text-gray-600 leading-loose text-lg">
                        <p>
                            DEO Church Benguet is a Christ-centered community of believers rooted 
                            in the vision of DEO Church. We are a family of Bible-believing Christians 
                            who love God, love our neighbors, and extend Christ's love to all. Through 
                            genuine community and authentic worship, we help every person grow deeper in 
                            their relationship with Jesus Christ.
                        </p>

                        <p>
                            Our heart is to see people in Benguet saved, healed, set free, transformed 
                            into devoted disciples, and empowered to serve Jesus Christ and advance His 
                            Kingdom. We believe that real transformation happens when God's Word is 
                            proclaimed boldly, and when believers are equipped to make disciples in their 
                            communities.
                        </p>

                        <p>
                            As a partner plant of DEO Church, we carry the same mission and values globally. 
                            We are part of a growing movement of believers united in spreading the Gospel 
                            across nations. Through powerful weekend services, intentional discipleship, 
                            and missional outreach, we are building a thriving church that reflects Christ's 
                            love in Benguet and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-100 fade-in py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-teal-700">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-loose text-lg">
                                To make disciples who love God, love people, and impact the world through 
                                the power of the Holy Spirit. We accomplish this by glorifying God, 
                                proclaiming the Kingdom of God through the Gospel, ministering to the 
                                needs of the total person, developing and equipping believers for ministry, 
                                extending our church's influence beyond our boundaries, and promoting 
                                fellowship and unity among believers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-teal-700">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-loose text-lg">
                                A vibrant, Spirit-empowered church community where every believer is 
                                transformed by Christ's love, equipped to serve with purpose, and mobilized 
                                to extend God's Kingdom from Benguet to the nations. We envision a movement 
                                of disciples making disciples, advancing the Gospel through powerful 
                                ministry, authentic worship, and missional engagement.
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

            {/* Leadership */}
            <section className="bg-gray-100 fade-in py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Meet Our Leadership Team
                    </h2>

                    <div className="space-y-20">
                        {leadership.map((leader, index) => (
                            <div
                                key={leader.id}
                                className={`grid md:grid-cols-2 gap-12 items-center ${
                                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                                }`}
                            >
                                {/* Image - alternates sides */}
                                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                    <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                                        <Image
                                            src={leader.image}
                                            alt={leader.name}
                                            width={600}
                                            height={500}
                                            className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        {/* Ministry Focus Badge */}
                                        <div className="absolute top-6 right-6 bg-black/40 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                                            {leader.icon} {leader.focus}
                                        </div>
                                    </div>
                                </div>

                                {/* Content - alternates sides */}
                                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                                    <div className="mb-4">
                                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                                            {leader.name}
                                        </h3>
                                        <p className="text-teal-600 font-semibold text-lg">
                                            {leader.role}
                                        </p>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-loose mb-6">
                                        {leader.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
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

            {/* Scripture Highlight */}
            <section className="bg-teal-600 text-white text-center fade-in py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                        “For where two or three gather in my name, there am I with them.”
                    </p>
                    <span className="text-teal-100">Matthew 18:20</span>
                </div>
            </section>

            {/* Confession of Faith */}
            <section className="bg-gray-50 fade-in py-28">
                <div className="max-w-3xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold mb-6">
                        Confession of Faith
                    </h2>

                    <p className="text-gray-600 mb-16 text-lg">
                        The foundation of our church stands firmly on these biblical truths.
                    </p>

                    <h3 className="text-teal-700 font-semibold tracking-widest mb-10">
                        WE BELIEVE THAT:
                    </h3>

                    <div className="space-y-10 text-left">
                        
                        {beliefs.map((belief, index) => (
                            <div key={index} className="space-y-3">

                                <p className="text-gray-700 leading-relaxed">
                                   * {belief}
                                </p>

                                <div className="border-b border-gray-200 pt-2"></div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </main>
    );
}
