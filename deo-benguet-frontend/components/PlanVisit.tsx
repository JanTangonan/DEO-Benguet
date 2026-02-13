interface VisitCard {
    title: string;
    description: string;
}

const visitCards: VisitCard[] = [
    {
        title: "What to Expect",
        description: "Friendly people, uplifting worship, and a practical message from the Bible."
    },
    {
        title: "What to Wear",
        description: "Come as you are! Some dress casually, others more formally — you'll fit right in."
    },
    {
        title: "Bring Your Family",
        description: "We love families and welcome kids of all ages."
    }
];

function VisitCard({ title, description }: VisitCard) {
    return (
        <div className="bg-white/10 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition duration-300">
            <h3 className="font-semibold text-xl mb-2">
                {title}
            </h3>
            <p className="text-teal-100">
                {description}
            </p>
        </div>
    );
}

export default function PlanVisit() {
    return (
        <section id="visit" className="bg-teal-600 text-white py-26 scroll-mt-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Plan Your Visit
                </h2>

                <p className="max-w-2xl mx-auto text-lg text-teal-100 mb-8">
                    We know visiting a new church can feel overwhelming.
                    We want you to feel at home from the moment you arrive.
                    Join us this Sunday — we can't wait to meet you!
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
                    {visitCards.map((card) => (
                        <VisitCard 
                            key={card.title}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}