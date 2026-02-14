export default function Location() {
    return (
        <section id="location" className="bg-gray-50 py-24 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left Side */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Find Us in Benguet
                    </h2>

                    <p className="text-gray-600 mb-6">
                        We are located in the heart of Virac, welcoming families,
                        students, and individuals from all walks of life.
                    </p>

                    <div className="space-y-3 text-gray-700">
                        <p><strong>Address:</strong> 1229 Camanggaan, Virac, Itogon, Benguet, Philippines</p>
                        <p><strong>Sunday Service:</strong> 10:30 AM</p>
                        <p><strong>Parking:</strong> Available nearby</p>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/DdSt7GaUAHBoQJFe7"
                        target="_blank"
                        className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
                    >
                        Get Directions
                    </a>
                </div>

                {/* Right Side - Map Placeholder */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d239.2614419018902!2d120.66195215591807!3d16.364634058630806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1771076307326!5m2!1sen!2sph" 
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="border-0"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}