"use client";
import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Facebook } from "lucide-react";

export default function Contact() {
    useFadeIn();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setSuccess(true);
            setForm({ name: "", email: "", message: "" });
        }

        setLoading(false);
    };

    return (
        <>
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center text-white fade-in scroll-mt-24">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/events/deo-church-benguet-3.jpg')" }}
                ></div>

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        We'd love to connect with you. Whether you have a question, need prayer,
                        or want to visit, we're here for you.
                    </p>
                </div>
            </section>

            {/* Contact Details */}
            <section id="contact" className="py-24 fade-in scroll-mt-24">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-16">
                        Contact Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-center">

                        {/* Address */}
                        <div className="p-8 rounded-3xl shadow-md bg-white hover:shadow-lg transition">
                            <div className="text-3xl mb-4">📍</div>
                            <h3 className="font-semibold text-lg mb-2">Location</h3>
                            <p className="text-gray-600 hover:text-teal-600 transition">
                                Benguet, Philippines
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="p-8 rounded-3xl shadow-md bg-white hover:shadow-lg transition">
                            <div className="text-3xl mb-4">📞</div>
                            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                            <p className="text-gray-600 hover:text-teal-600 transition">
                                +63 977 126 8262
                            </p>
                        </div>

                        {/* Email */}
                        <div className="p-8 rounded-3xl shadow-md bg-white hover:shadow-lg transition">
                            <div className="text-3xl mb-4">✉️</div>
                            <h3 className="font-semibold text-lg mb-2">Email</h3>
                            <p className="text-gray-600 hover:text-teal-600 transition">
                                antiwallbreaker@gmail.com
                            </p>
                        </div>

                        {/* Facebook */}
                        <div className="p-8 rounded-3xl shadow-md bg-white hover:shadow-lg transition">
                            <div className="text-3xl mb-4 flex justify-center">
                                <Facebook size={32} className="text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Facebook</h3>
                            <a
                                href="https://www.facebook.com/profile.php?id=61587087962445"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-teal-600 transition"
                            >
                                Visit Our Page
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-gray-50 py-24 fade-in">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Send Us a Message
                    </h2>

                    {success && (
                        <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-6 text-center">
                            Thank you! Your message has been sent.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500"
                            required
                        />

                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500"
                            required
                        />

                        <textarea
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500"
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </section>

            {/* Invitation */}
            <section className="py-20 text-center fade-in">
                <div className="max-w-2xl mx-auto px-6">
                    <h3 className="text-2xl font-bold mb-4">
                        You’re Always Welcome Here
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        No matter where you are in your faith journey, we would love to
                        meet you and worship together. We look forward to seeing you soon.
                    </p>
                </div>
            </section>
        </>
    );
}