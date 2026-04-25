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
    type: "upcoming" | "past" | "sooner-upcoming";
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
    {
        id: 4,
        title: "MidWeek Prayer",
        slug: "midweek-prayer",
        date: "Every Wednesday",
        time: "6:00 PM onwards",
        location: "1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines",
        description:
            "Join us for a time of prayer, worship, and spiritual fellowship.",
        fullDescription:
            "Join us for a dedicated time of spiritual growth and intercession. We come together to pray for our church family, community, and the world. This is a welcoming space for all believers seeking to strengthen their relationship with God and grow in faith together.",
        images: [
            "/events/midweek-prayer-1.jpg",
            "/events/midweek-prayer-2.jpg",
            "/events/midweek-prayer-3.jpg",
        ],
        type: "upcoming",
    },
    {
        id: 5,
        title: "Soldiers of God Taekwondo",
        slug: "soldiers-of-god-taekwondo",
        date: "Every TThS",
        time: "9:00 AM - 3:00 PM",
        location: "1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines",
        description:
            "Join our Taekwondo Ministry as we develop discipline, strength, and character through martial arts training.",
        fullDescription:
            "Soldiers of God Taekwondo is a ministry dedicated to developing young people through martial arts training. We emphasize discipline, respect, physical fitness, and spiritual growth. This is a place where participants learn not only combat techniques but also Christian values and character development. To connect with our community and stay updated on training schedules and events, visit our <a href='https://www.facebook.com/share/18RgeM8GJ3/' target='_blank' rel='noopener noreferrer' style='color: #14b8a6; font-weight: 600; text-decoration: underline;' onmouseover=\"this.style.color='#0d9488'\" onmouseout=\"this.style.color='#14b8a6'\">Soldiers of God Taekwondo</a> Facebook page.",
        images: [
            "/events/taekwondo-ministry-1.jpg",
            "/events/taekwondo-ministry-2.jpg",
            "/events/taekwondo-ministry-3.jpg",
        ],
        type: "upcoming",
    },

    // Sooner Upcoming Events (Special Section)
    {
        id: 6,
        title: "Communion Thanksgiving",
        slug: "communion-thanksgiving",
        date: "March 29, 2026",
        time: "10:30 AM - 12:00 PM",
        location: "1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines",
        description:
            "A special service celebrating communion and thanksgiving for God's blessings.",
        fullDescription:
            "Join us for a meaningful Communion Thanksgiving service where we gather to celebrate the sacrifice of Christ and express gratitude for His grace and blessings in our lives. This will be a spiritually enriching experience of worship, reflection, and community.",
        images: [
            "/events/communion-thanksgiving-1.jpg",
            "/events/communion-thanksgiving-2.jpg",
            "/events/communion-thanksgiving-3.jpg",
        ],
        type: "past",
    },
    {
        id: 7,
        title: "Vacation Bible School",
        slug: "vacation-bible-school",
        date: "April 2-4, 2026",
        time: "9:00 AM - 12:00 PM",
        location: "1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines",
        description:
            "An exciting week of Bible learning, games, and activities for children and youth.",
        fullDescription:
            "Vacation Bible School is an exciting week-long program designed for children and youth to learn about God's Word through interactive Bible lessons, engaging activities, games, worship, and crafts. It's a fun, safe environment where young people grow spiritually and build friendships within our church community.",
        images: [
            "/events/vacation-bible-school-1.jpg",
            "/events/vacation-bible-school-2.jpg",
            "/events/vacation-bible-school-3.jpg",
        ],
        type: "past",
    },
    {
        id: 8,
        title: "Women's Fellowship",
        slug: "womens-fellowship",
        date: "March 29, 2026",
        time: "2:00 PM - 5:00 PM",
        location: "1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines",
        description:
            "A gathering focused on sisterhood, spiritual growth, and meaningful connections.",
        fullDescription:
            "Women's Fellowship is a special gathering where the women of our church come together for prayer, worship, inspiring messages, and meaningful conversations. It's a time to strengthen our bonds as sisters in Christ, support one another, and grow together in our faith journey.",
        images: [
            "/events/womens-fellowship-1.jpg",
            "/events/womens-fellowship-2.jpg",
            "/events/womens-fellowship-3.jpg",
        ],
        type: "past",
    },

    // Past Events
    {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
    {
        id: 15,
        title: "Youth Camp",
        slug: "youth-camp",
        date: "May 2026",
        description:
            "An exciting time of fun, fellowship, and spiritual growth for our youth.",
        fullDescription:
            "An exciting week of fun, fellowship, and spiritual growth for our youth.",
        images: [
            "/events/youth-camp-1.jpg",
            "/events/youth-camp-2.jpg",
            "/events/youth-camp-3.jpg",
        ],
        type: "sooner-upcoming",
    },
];