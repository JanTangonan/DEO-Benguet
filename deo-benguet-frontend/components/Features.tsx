function FeatureCard({ title, description }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">⛪</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>

            <button className="mt-6 text-teal-600 font-semibold hover:underline">
                Learn more →
            </button>
        </div>
    );
}

export default function Features() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                <FeatureCard
                    title="Midweek Groups"
                    description="Come together in smaller groups throughout the week to grow in faith and friendship."
                />

                <FeatureCard
                    title="Loving & Giving"
                    description="Our mission is to spread Jesus' love through service and compassion."
                />

                <FeatureCard
                    title="Our Sermons"
                    description="Watch and listen to messages that inspire and guide your spiritual journey."
                />
            </div>
        </section>
    );
}