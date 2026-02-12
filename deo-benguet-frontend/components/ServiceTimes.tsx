export default function ServiceTimes() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Join Our Church Services and Activities
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl shadow-sm border">
                        <h3 className="font-semibold text-xl mb-2">Sunday Worship</h3>
                        <p className="text-gray-600">10:30 AM - 12:00 PM</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow-sm border">
                        <h3 className="font-semibold text-xl mb-2">Friday Youth Connect</h3>
                        <p className="text-gray-600">8:00 PM - 9:30 PM</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow-sm border">
                        <h3 className="font-semibold text-xl mb-2">MTTH Bible Study</h3>
                        <p className="text-gray-600">9:00 PM - 10:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
    );
}