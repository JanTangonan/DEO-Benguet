export type YouthCampStory = {
    name: string;
    excerpt: string;
    story: string[];
    image: string;
    alt: string;
    language?: string;
};

export const youthCampStories: YouthCampStory[] = [
    {
        name: "Larah",
        excerpt: "I learned that I have a purpose and that God knows me. I also grew closer to Him.",
        story: ["My youth camp experience was unforgettable. I met new friends and, even though I was shy at first, God gave me the confidence to talk with them.", "I learned that I have a purpose and that God knows me. I also grew closer to Him. The camp was more meaningful than I expected, and I hope we can do it again."],
        image: "/events/youth-camp-1.jpg", alt: "Youth Camp participants gathered together",
    },
    {
        name: "Jhanna",
        excerpt: "I now know that God knows me, chose me, and has a purpose for me.",
        story: ["This was my first youth camp, and I learned so much through the devotions, worship, and games. Jeremiah 1:5 helped me understand that the Lord already knew and chose me before I was born.", "I learned teamwork, trust, and that I do not need to be first to be important. I also met new friends who helped me become more confident and active. I now know that God knows me, chose me, and has a purpose for me."],
        image: "/events/youth-camp-2.jpg", alt: "Youth Camp activity in Benguet",
    },
    {
        name: "Kierstel",
        excerpt: "Leadership is not about being perfect; it is about serving others with love and kindness.",
        story: ["Joining the camp with the theme \"Known and Chosen\" was truly a blessing. Because I was new to Baguio and Luzon, everything initially felt unfamiliar: the place, the people, and the environment. Through the camp, I slowly felt welcomed and learned that God can use unfamiliar situations to help us grow.", "As a team leader, I learned to be patient, understanding, and to trust the Lord more. Leadership is not about being perfect; it is about serving others with love and kindness. This camp gave me more than memories and friendships. It reminded me that God knows us and has a purpose for us, even outside our comfort zone."],
        image: "/events/youth-camp-3.jpg", alt: "Youth Camp community worship",
    },
    {
        name: "Angel",
        excerpt: "I learned that we have a purpose and that God knows us better than anybody else.",
        story: ["I thank God for the opportunity to join youth camp. Before it began, I felt anxious because I did not know whether I would get along with my team. But after our first activity, we were already talking and laughing together.", "During sharing time, many said that worship was their favorite part because they could know God more deeply and worship Him freely. I learned that we have a purpose and that God knows us better than anybody else."],
        image: "/events/youth-camp-4.jpg", alt: "Youth Camp fellowship",
    },
];

export const additionalYouthCampStories: YouthCampStory[] = [
    { name: "Resha", excerpt: "We laughed, cried, and talked like family.", story: ["Youth camp brought funny and challenging moments, new friendships, conversations about life, activities, and devotions. I learned that God knew me before I was born and that I have a purpose in this world.", "We laughed, cried, and talked like family. Even when things felt embarrassing or difficult, we found a better version of ourselves together."], image: "/events/youth-camp-1.jpg", alt: "Youth Camp participants together" },
    { name: "Jhianne", excerpt: "We finished the difficult games together and did our best.", story: ["My first youth camp was so much fun. I enjoyed the activities, our morning and evening fellowship, and sharing meals as a group.", "Through the devotions, I was reminded that the Lord knew and chose us even before we were formed in our mothers' wombs. Some games were difficult, but we finished them together and did our best. I also made a new friend, which made the camp even more special."], image: "/events/youth-camp-2.jpg", alt: "Youth Camp activity" },
    { name: "Guin", excerpt: "Worship helped me think about my relationship with God and how I can grow closer to Him.", story: ["Youth camp was an awesome experience. I met many new friends who love God, and we had a wonderful time together. Worship was my favorite part because it helped me think about my relationship with God and how I can grow closer to Him.", "Jeremiah 1:5 especially stayed with me: God knew and set us apart before we were born. I came home happy, motivated in my faith, and reminded that God has a special plan for me."], image: "/events/youth-camp-3.jpg", alt: "Youth Camp worship gathering" },
    { name: "Helena", excerpt: "I am thankful to God for our youth fellowship.", story: ["Ti pagpaspasalamat ken APO iti youth camp mi ket diyay nag-enjoy nak iti games ken nanayunan ti friends ko. Ket agyamanak ken APO iti fellowship mi nga youth.", "I thank the Lord for our youth camp because I enjoyed the games and made more friends. I am also thankful to God for our youth fellowship."], image: "/events/youth-camp-4.jpg", alt: "Youth Camp fellowship", language: "Ilocano, with English translation" },
];
