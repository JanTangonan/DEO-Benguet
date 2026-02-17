interface NextStepProps {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
}

function NextStepCard({ icon, title, description, buttonText }: NextStepProps) {
    return (
        <div className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            
            <div className="text-4xl mb-6">{icon}</div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-600 transition">
                {title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
                {description}
            </p>

            <button className="text-teal-600 font-semibold group-hover:underline">
                {buttonText} →
            </button>
        </div>
    );
}

export default function Features() {
    return (
        <section className="bg-gradient-to-b from-teal-600 to-white py-28">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Take Your Next Step
                </h2>

                <p className="text-white max-w-2xl mx-auto mb-16">
                    Whether you're new or have been with us for years,
                    there's always a way to grow, serve, and stay connected.
                </p>

                <div className="grid md:grid-cols-3 gap-10 text-left">
                    <NextStepCard
                        icon="🤝"
                        title="Join a Midweek Group"
                        description="Build meaningful relationships and grow deeper in faith through small group gatherings during the week."
                        buttonText="Find a Group"
                    />

                    <NextStepCard
                        icon="❤️"
                        title="Serve & Make a Difference"
                        description="Use your gifts and be part of what God is doing in our community through ministry and outreach."
                        buttonText="Get Involved"
                    />

                    <NextStepCard
                        icon="📖"
                        title="Watch Recent Sermons"
                        description="Catch up on messages that inspire, challenge, and guide you in your spiritual journey."
                        buttonText="Watch Now"
                    />
                </div>
            </div>
        </section>
    );
}