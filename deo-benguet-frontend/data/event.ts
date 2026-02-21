export interface Event {
    id: number;
    title: string;
    slug: string;
    date: string;
    time?: string;
    location?: string;
    description: string;
    fullDescription?: string;
    image?: string;
    images?: string[];
    type: "upcoming" | "past";
    featured?: boolean;
}

export const events: Event[] = [
    // Upcoming Events
    {
        id: 1,
        title: "Sunday Worship Service",
        slug: "sunday-worship-service",
        date: "Every Sunday",
        time: "10:30 AM - 12:00 PM",
        location: "1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines",
        description:
            "Experience powerful worship, inspiring biblical teaching, and warm community fellowship.",
        fullDescription:
            "Join us for our main Sunday Worship Service—a transformative experience where we gather as one family to encounter God's presence. Through dynamic worship, Spirit-led teaching from God's Word, and genuine fellowship, we create an atmosphere of faith, hope, and love. Whether you're new to our church or have been with us for years, you'll find a warm welcome, inspiring messages that speak to your heart, and a community of believers committed to growing together in Christ.",
        images: [
            "/events/sunday-worship-1.jpg",
            "/events/sunday-worship-2.jpg",
            "/events/sunday-worship-3.jpg",
        ],
        type: "upcoming",
        featured: true,
    },
    {
        id: 2,
        title: "Youth Connect",
        slug: "youth-connect",
        date: "Every Friday",
        time: "3:00 PM - 6:00 PM",
        location: "1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines",
        description:
            "Experience vibrant worship, fellowship, and spiritual growth with young believers.",
        fullDescription:
            "Join our dynamic community of young people for an evening filled with worship, games, and meaningful conversations about faith. We create a safe, welcoming space where you can connect with peers, grow spiritually, and have fun! Whether you're looking to strengthen your faith, make new friends, or simply enjoy quality time with your church family, Youth Fellowship Night is the perfect place to belong.",
        images: [
            "/events/youth-connect-1.jpg",
            "/events/youth-connect-2.jpg",
            "/events/youth-connect-3.jpg",
        ],
        type: "upcoming",
    },
    {
        id: 3,
        title: "Bible Study & Prayer Meeting",
        slug: "bible-study-prayer-meeting",
        date: "Every MTTh",
        time: "9:00 PM - 10:00 PM",
        location: "Virtual (Zoom or Facebook Messenger)",
        description:
            "Deepen your faith through interactive Bible study and intimate prayer sessions.",
        fullDescription:
            "Join us for a dedicated time of spiritual growth and intercession. We dive deep into Scripture, share insights, and pray together for our church family, community, and world. This is a welcoming space for all believers seeking to strengthen their relationship with God and grow in faith together.",
        images: [
            "/events/bible-study-1.jpg",
            "/events/bible-study-2.jpg",
            "/events/bible-study-3.jpg",
        ],
        type: "upcoming",
    },
    // Past Events
    {
        id: 4,
        title: "Acoustic Night",
        slug: "acoustic-night",
        date: "February 2026",
        description:
            "An intimate night of worship and acoustic praise.",
        fullDescription:
            "Acoustic Night was a beautiful gathering filled with heartfelt worship, testimonies, and fellowship. It created a space for reflection, gratitude, and connection within our church family.",
        images: [
            "/events/acoustic-night-1.jpg",
            "/events/acoustic-night-2.jpg",
            "/events/acoustic-night-3.jpg",
        ],
        type: "past",
    },
    {
        id: 5,
        title: "Soaking & Seeking",
        slug: "soaking-seeking",
        date: "January 2026",
        description:
            "A powerful start of the year through prayer and worship.",
        fullDescription:
            "Soaking & Seeking focused on intentional prayer and deep worship as we  committed the year to God. It was a spiritually refreshing time for everyone involved.",
        images: [
            "/events/soaking-seeking-1.jpg",
            "/events/soaking-seeking-2.jpg",
            "/events/soaking-seeking-3.jpg",
        ],
        type: "past",
    },
    {
        id: 6,
        title: "Amanda's Street Evangelism",
        slug: "amanda-street-evangelism",
        date: "January 2026",
        description:
            "Equipping and encouraging believers to boldly share the Gospel in the streets.",
        fullDescription:
            "Equipping and encouraging believers to boldly share the Gospel in the streets with confidence and compassion.",
        images: [
            "/events/amanda-street-evangelism-1.jpg",
            "/events/amanda-street-evangelism-2.jpg",
            "/events/amanda-street-evangelism-3.jpg",
        ],
        type: "past",
    },
    {
        id: 7,
        title: "Christmas Party",
        slug: "christmas-party",
        date: "December 2025",
        description:
            "A joyful celebration bringing families together in gratitude and fellowship.",
        fullDescription:
            "A joyful celebration bringing families together in gratitude and fellowship. We shared meals, games, and celebrated the true meaning of Christmas.",
        images: [
            "/events/christmas-party-1.jpg",
            "/events/christmas-party-2.jpg",
            "/events/christmas-party-3.jpg",
        ],
        type: "past",
    },
    {
        id: 8,
        title: "Jesus Reigns",
        slug: "jesus-reigns",
        date: "November 2025",
        description:
            "A public declaration of faith as we joined the nationwide celebration of Christ's reign.",
        fullDescription:
            "A public declaration of faith as we joined the nationwide celebration of Christ's reign.",
        images: [
            "/events/jesus-reigns-1.jpg",
            "/events/jesus-reigns-2.jpg",
            "/events/jesus-reigns-3.jpg",
        ],
        type: "past",
    },
    {
        id: 9,
        title: "DEO Interns Visit",
        slug: "deo-interns-visit",
        date: "August 2025",
        description:
            "A powerful time of sharing testimonies and global ministry updates.",
        fullDescription:
            "A powerful time of sharing testimonies and global ministry updates from our partners in South Africa.",
        images: [
            "/events/deo-interns-visit-1.jpg",
            "/events/deo-interns-visit-2.jpg",
            "/events/deo-interns-visit-3.jpg",
        ],
        type: "past",
    },
];