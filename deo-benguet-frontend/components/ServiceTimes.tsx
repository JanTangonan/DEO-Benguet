interface ServiceTime {
    title: string;
    time: string;
}

const serviceTimes: ServiceTime[] = [
    {
        title: "Sunday Worship",
        time: "10:30 AM - 12:00 PM"
    },
    {
        title: "Friday Youth Connect",
        time: "8:00 PM - 9:30 PM"
    },
    {
        title: "MTTH Bible Study",
        time: "9:00 PM - 10:00 PM"
    }
];

function ServiceTimeCard({ title, time }: ServiceTime) {
    return (
        <div className="p-6 rounded-2xl shadow-sm border hover:-translate-y-1 transition duration-300">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-gray-600">{time}</p>
        </div>
    );
}

export default function ServiceTimes() {
    return (
        <section className="bg-white py-26">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Join Our Church Services and Activities
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {serviceTimes.map((service) => (
                        <ServiceTimeCard
                            key={service.title}
                            title={service.title}
                            time={service.time}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}