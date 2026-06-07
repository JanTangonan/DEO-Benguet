"use client";
import { useState } from "react";
import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function AboutPage() {
    //#region State & Data
    useFadeIn();
    const [expandedValue, setExpandedValue] = useState<string | null>(null);
    const [openBelief, setOpenBelief] = useState<string | null>(null);

    const leadership = [
        {
            id: "visionary-lyka-arman",
            name: "PH Campus Pastor Lyka & Arman",
            role: "Pastor",
            image: "/events/pastor4-extended.jpeg",
            focus: "Church Leadership",
            icon: "🙋‍♀️",
            bio: "PH Campus Pastor Lyka & Arman is the heart that holds DEO Church together. As the visionary who started the partnership with DEO Church, they bring unity, wisdom, and steadfast commitment to leading our growing congregation with grace and purpose."
        },
        {
            id: "pastor-kesha",
            name: "Pastor Kesha",
            role: "Preacher & Bible Teacher",
            image: "/events/pastor6.jpg",
            focus: "God's Word",
            icon: "📖",
            bio: "Pastor Kesha is passionate about sharing God's Word with depth and clarity. As our Sunday service preacher, she delivers powerful messages that help our congregation understand and apply Scripture in their daily lives."
        },
        {
            id: "youth-leader-kate",
            name: "Youth Leader Kate",
            role: "Youth & Kids Ministry",
            image: "/events/pastor5-extended.jpeg",
            focus: "Youth & Kids Ministry",
            icon: "🎤",
            bio: "Youth Leader Kate brings passion and energy to our young people through the Youth Connect ministry. As the head of the Youth & Kids Ministry, she creates authentic worship experiences that draw our community closer to God. She nurtures and disciples young believers, helping them grow in their faith and discover their purpose in Christ."
        },
        {
            id: "assistant-leader-janelle",
            name: "Assistant Leader Janelle",
            role: "Youth & Kids Ministry",
            image: "/events/pastor.jpg",
            focus: "Youth & Kids Ministry",
            icon: "🎤",
            bio: "Assistant Leader Janelle along with Youth Leader Kate in nurturing our young people and children. She brings enthusiasm and care to the Youth Connect and Kids ministry, helping to create a welcoming environment where every young person feels valued and grows in their faith."
        }
    ];

    const coreValues = [
        {
            id: "christ-centered",
            title: "Christ-Centered",
            icon: "✝️",
            brief: "Jesus is the foundation of all we do.",
            full: "Jesus is the foundation and focus of all we do. We exist to glorify Him and make Him known."
        },
        {
            id: "love",
            title: "Love",
            icon: "❤️",
            brief: "We reflect God's unconditional love.",
            full: "We demonstrate God's unconditional love in how we serve, relate, and care for others."
        },
        {
            id: "excellence",
            title: "Excellence",
            icon: "🏆",
            brief: "We give our best in all things.",
            full: "We strive to honor God by giving our best in all things, reflecting His nature through quality and diligence."
        },
        {
            id: "spirit-driven",
            title: "Spirit-Driven",
            icon: "🔥",
            brief: "Led by the Holy Spirit.",
            full: "We are led by the Holy Spirit in worship, decision-making, ministry, and daily living."
        },
        {
            id: "word-based",
            title: "Word-Based",
            icon: "📖",
            brief: "Guided by God's Word.",
            full: "God’s Word is our ultimate authority, guiding our beliefs, practices, and growth."
        },
        {
            id: "integrity",
            title: "Biblical Integrity",
            icon: "🧭",
            brief: "Truth in character and conduct.",
            full: "We live with honesty and alignment to Scripture, upholding truth in both character and conduct."
        },
        {
            id: "brave",
            title: "Brave",
            icon: "⚔️",
            brief: "Bold faith and courage.",
            full: "We step out in faith, take risks for the Gospel, and stand firm in spiritual boldness."
        },
        {
            id: "unashamed",
            title: "Unashamed",
            icon: "📣",
            brief: "Boldly proclaim Jesus.",
            full: "We boldly proclaim the name of Jesus without compromise or fear."
        },
        {
            id: "generous",
            title: "Generous Giving",
            icon: "🎁",
            brief: "We give joyfully and sacrificially.",
            full: "We give joyfully, sacrificially, and faithfully, recognizing all we have belongs to God."
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

    const missionPoints = [
        {
            title: "Evangelize",
            verse: "Matthew 28:19-20",
            text: "Evangelize the lost with the transforming message of Jesus Christ."
        },
        {
            title: "Encourage",
            verse: "Hebrews 10:24-25",
            text: "Encourage believers through authentic community and compassionate care."
        },
        {
            title: "Equip",
            verse: "Ephesians 4:11-13",
            text: "Equip disciples with biblical truth and spiritual disciplines."
        },
        {
            title: "Establish",
            verse: "Mark 16:15, 1 Thessalonians 5:11-18",
            text: "Establish strong foundations of faith and character. Empower every individual to walk in their God-given purpose."
        },
        {
            title: "Excellence",
            verse: "Colossians 3:23",
            text: "Pursue excellence in all we do for the glory of God."
        }
    ];

    //#endregion
    return (
        <main>
            
            {/* Page Hero */}
            <section className="relative h-[50vh] flex items-center justify-center text-white fade-in py-24 scroll-mt-24">
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

            {/* Deo Logo */}
            <section className="bg-gray-100 fade-in py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl mb-6 font-semibold">
                                DEO = GOD <br />
                                THIS IS GOD'S CHURCH <br />
                                DEO VICTORIA = "GOD GIVES VICTORY"
                            </h3>
                        </div>

                        <div>
                            <Image
                                src="10.svg"
                                alt="DEO Church Logo"
                                width={400}
                                height={400}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision */}
            <section className="fade-in py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8 text-center">
                        Our Vision
                    </h2>

                    <div className="space-y-6 text-gray-600 leading-loose text-lg text-center">
                        <p>
                            One church impacting nations through establishing christ-like communities around the world.
                        </p>
                    </div>

                    <div className="space-y-6 text-teal-600 leading-loose text-lg text-center mt-8">
                        <p className="text-lg font-semibold">
                            ACTS 1:8 - NEWCASTLE,KZN, SOUTH AFRICA, BENGUET AND THE WORLD
                        </p>
                    </div>

                </div>
            </section>

            {/* Our Mission */}
            <section className="fade-in py-24">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Header */}
                    <h2 className="text-4xl font-bold text-center mb-6">
                        Our Mission
                    </h2>

                    <p className="text-center text-gray-600 leading-relaxed text-lg mb-16 max-w-2xl mx-auto">
                        At DEO Church Benguet, our mission is guided by Scripture and expressed in every part of our church life.
                    </p>

                    {/* Content Layout */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT: IMAGE */}
                        <div className="relative flex justify-center">
                            <Image
                                src="9.svg"
                                alt="Our Mission"
                                width={700}
                                height={700}
                                className="w-full max-w-[480px] md:max-w-[700px] h-auto"
                            />
                        </div>

                        {/* RIGHT: MISSION POINTS */}
                        <div className="space-y-3">

                            {missionPoints.map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {item.title}
                                        </h3>

                                        <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                                            {item.verse}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}

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

            {/* Focus Areas */}
            <section className="fade-in py-24 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold mb-6">
                        Our Focus Areas
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        These are the core foundations that shape how we worship, grow, and serve as a church community.
                    </p>

                    {/* Optional image */}
                    <div className="flex justify-center mb-12">
                        <Image
                            src="11.svg"
                            alt="Our Focus Areas"
                            width={900}
                            height={500}
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            {
                                title: "Worship",
                                icon: "🙏",
                                desc: "Worship the Lord with reverence and Spirit-led praise.",
                                verseDesc: "Worship the Lord your God, and serve Him only.",
                                verse: "Luke 4:8"
                            },
                            {
                                title: "Word-Based",
                                icon: "📖",
                                desc: "Grounded in Scripture and biblical teaching.",
                                verseDesc: "All Scripture is God-breathed so that the servant of God may be thoroughly equipped for every good work.",
                                verse: "2 Timothy 3:16-17"
                            },
                            {
                                title: "Prayer",
                                icon: "🤲",
                                desc: "A church built on consistent and powerful prayer.",
                                verseDesc: "Be joyful in hope, patient in affliction, faithful in prayer.",
                                verse: "Romans 12:12"
                            },
                            {
                                title: "People",
                                icon: "👥",
                                desc: "Building authentic relationships and community.",
                                verseDesc: "To equip His people for works of service, so that the body of Christ may be built up.",
                                verse: "Ephesians 4:11-15"
                            },
                            {
                                title: "Missions",
                                icon: "🌍",
                                desc: "Reaching the local community and nations.",
                                verseDesc: "Go and make disciples of all nations.",
                                verse: "Matthew 28:19-20"
                            },
                            {
                                title: "Growth",
                                icon: "📈",
                                desc: "Spiritual maturity and discipleship development.",
                                verseDesc: "Grow in the grace and knowledge of our Lord and Savior Jesus Christ.",
                                verse: "2 Peter 3:18"
                            }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4">
                                    {item.desc}
                                </p>

                                {/* Verse block */}
                                <div className="border-l-4 border-teal-500 pl-3">
                                    <p className="text-gray-700 text-sm italic">
                                        “{item.verseDesc}”
                                    </p>
                                    <p className="text-teal-600 text-xs font-semibold mt-2">
                                        {item.verse}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="fade-in py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Core Values
                    </h2>

                    <p className="text-gray-600 text-center mb-16">
                        Together, these values shape our identity as a church and fuel our mission to impact nations for Christ.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {coreValues.map((value) => {
                            const isOpen = expandedValue === value.id;

                            return (
                                <div key={value.id} className="space-y-3">

                                    {/* CARD */}
                                    <div
                                        onClick={() =>
                                            setExpandedValue(isOpen ? null : value.id)
                                        }
                                        className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300
                                            ${isOpen
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

                                    {/* EXPANDED CONTENT (NOW INSIDE GRID ITEM) */}
                                    {isOpen && (
                                        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 shadow-lg animate-fadeIn">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="text-3xl">{value.icon}</div>
                                                <h3 className="text-xl font-bold text-gray-800">
                                                    {value.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                {value.full}
                                            </p>
                                        </div>
                                    )}

                                </div>
                            );
                        })}
                    </div>
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
                            <h4 className="font-semibold text-teal-700">Early Years — Founded in Benguet</h4>
                            <p className="text-gray-600">
                                DEO Church Benguet was originally established as a local church community in Benguet, rooted in the faith and vision of our early believers who sought to build a Christ-centered congregation in our region.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-teal-700">Partnership — Joined DEO Church</h4>
                            <p className="text-gray-600">
                                We partnered with DEO Church, aligning our mission and values with this growing global movement. This partnership strengthened our commitment to make disciples, advance God's Kingdom, and be part of a thriving network of believers across nations.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-teal-700">Present — Growing as a Church Plant</h4>
                            <p className="text-gray-600">
                                As an official partner plant of DEO Church, we continue to grow and expand our impact in Benguet and beyond. Through powerful weekend services, intentional discipleship, and missional outreach, we are building a vibrant community that reflects Christ's love.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-teal-700">Future — Expanding God's Kingdom</h4>
                            <p className="text-gray-600">
                                We are excited to see how God will continue to use us to reach more people with the love of Jesus, both locally in Benguet and globally through our partnership with DEO Church's expanding movement.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Scripture Highlight */}
            <section className="bg-teal-600 text-white text-center fade-in py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                        “And let us consider how we may spur one another on toward love and good deeds not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.”
                    </p>
                    <span className="text-teal-100">Hebrew 10:24-25</span>
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
