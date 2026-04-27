/* ================================================================
   BIRTHDAY WEBSITE — CONTENT FILE
   ================================================================
   HOW TO CUSTOMISE:
     1. Change siteData.name to the birthday person's name.
     2. Add/edit entries in birthdayMessages.
     3. Add your own photos:
          - Drop image files into an "assets/photos/" folder
          - Set  photo: "assets/photos/filename.jpg"
          - OR paste a direct URL from Google Photos / iCloud
     4. Update galleryMemories and galleryPhotos similarly.
   ================================================================ */

/* ── Site-wide settings ──────────────────────────────────────── */
const siteData = {
  name: "Sumi",
  tagline: "You are loved beyond words. Explore what everyone has put together, just for you.",
};

/* ── Birthday wishes ─────────────────────────────────────────── */
/*
  Each entry:
    name     : string  (required)
    relation : string  (optional — shown below the name)
    tags     : array   — use "family" and/or "friend" for filters
    photo    : string  (optional — path or URL)
    message  : string  (required)
*/
const birthdayMessages = [
  {
    name: "Japsimar",
    relation: "Husband",
    tags: ["family"],
    photo: "assets/photos/with_simar.jpg",
    message: "Happy Birthday Sumeet! Wishing you all the happiness in the world today and always. You mean the world to me and I am so grateful you are in my life. Here is to you! \u2764\ufe0f",
  },
  {
    name: "Alex",
    relation: "Brother",
    tags: ["family"],
    photo: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    message: "Hope you have an absolutely amazing day full of cake, laughter, and everything you love. You deserve nothing but the best \u2014 always. \ud83c\udf82",
  },
  {
    name: "Sehaj & Tanya",
    relation: "Family",
    tags: ["family"],
    photo: "assets/photos/sehaj_tanya.jpeg",
    message: "Happy Birthday! 🎉 Here’s to a year where the Cali sun finally finds you ☀️, your days feel warm and easy, and there’s always a perfect matcha in hand 🍵✨. May everything you’re working toward fall into place especially landing an amazing job (with the same kinda manager lol). Can’t wait to see you soon on our next trip and make more fun memories together! 💛",
  },
  {
    name: "Mom",
    relation: "Family",
    tags: ["family"],
    photo: "assets/photos/mom_and_sumeet.jpeg",
    message: "Happy Birthday to my lovely daughter 🎂💖 May you always stay as vibrant, joyful, and full of life as you are today 🌈✨ You bring so much happiness and light into our lives, and I’m so proud of the person you are becoming 💕 With all my love, Mom 🤗💐",
  },
  {
    name: "Dad",
    relation: "Family",
    tags: ["family"],
    photo: "assets/photos/dad_and_sumeet.jpeg",
    message: "Happy Birthday, my dear daughter 🎉💖 Watching you grow into the person you are today fills me with so much pride. You’ve brought endless joy into our lives, and I couldn’t be happier to call you my daughter 🌟 Always remember how deeply you are loved, today and every day ❤️",
  },
  {
    name: "Meetu",
    relation: "Sister",
    tags: ["family"],
    photo: "assets/photos/meetu_and_sumeet.jpeg",
    message: "To my most adorable sister 💕May your day be filled with love, laughter, and lots of cake 🎂✨All my love SK",
  },
  {
    name: "Avreen",
    relation: "Niece",
    tags: ["family"],
    photo: "assets/photos/avru_and_sumeet.jpeg",
    message: "Happy Birthday, Masi 🎉💖 Sending you the biggest hug 🤗 and so much love your way 💕I know it’s your birthday today… but tell me, when do I get my presents? 😄🎁",
  },
  {
    name: "Angad",
    relation: "Brother",
    tags: ["family"],
    photo: "assets/photos/angad_and_sumeet.jpeg",
    message: "Happy Birthday to my amazing sister 🎉💖 You’ve always been my support system and my guide, someone I can count on no matter what 🤍✨ I’m truly lucky to have you in my life. Wishing you endless happiness, love, and all the success you deserve 🎂🌟",
  },
  {
    name: "Nani ma",
    relation: "Nani",
    tags: ["family"],
    photo: "assets/photos/nani_and_sumeet.jpeg",
    message: "Happy Birthday, my dear child 🎉💖 You are truly the best grandchild of all, and you hold a very special place in my heart 🥰✨ May your life always be filled with happiness, good health, and endless blessings 🌸🙏",
  }, 
];

/* ── Gallery: Timeline memories ──────────────────────────────── */
/*
  Each entry:
    year  : string  — shown on the timeline dot
    title : string  — heading
    text  : string  — paragraph
    photo : string  — path or URL (optional)
*/
const galleryMemories = [
   {
    year: "1995",
    title: "And Then There Was You.",
    text: "April 28. The day you came into this world and quietly changed ours forever. None of us knew it yet, but life had just become a lot more beautiful",
    photo: "assets/photos/born_1995.jpeg",
  },
  {
    year: "1997",
    title: "Two Tiny Humans, One Big Bond",
    text: "One hiding, one posing, and both already stealing hearts. This is where the sister chaos officially began.",
    photo: "assets/photos/one_with_meetu.jpeg",
  },
  {
    year: "1999",
    title: "Little Girl, Big Stage Energy",
    text: "Tiny outfit, big expressions, and a whole lot of attitude. ‘Choti si gaggar, choti si main’ but already a full performer.",
    photo: "assets/photos/school_function.jpeg",
  },
  {
    year: "2003",
    title: "Rooted in Love",
    text: "Growing into yourself, but always held close by the ones who shaped you. This is where your strength, warmth, and love quietly came from.",
    photo: "assets/photos/sumeet_mom_nani_baby.jpg",
  },
  {
    year: "2008",
    title: "In Charge Since Forever",
    text: "Growing up with everyone around you, you found your voice early. Strong, confident, and just a little bossy in the most lovable way.",
    photo: "assets/photos/with_siblings.jpeg",
  },
  {
    year: "2012",
    title: "The Funniest Version Yet",
    text: "Somewhere between exams and snacks, you became even more you. A little fuller, a lot funnier, and impossible to ignore.",
    photo: "assets/photos/class_10.jpeg",
  },
  {
    year: "2017",
    title: "Where She Found Her Way",
    text: "From school days to figuring out life on your own, this was your glow-up era. A little chaos, a lot of growth, and stories that would last forever.",
    photo: "assets/photos/college.jpeg",
  },
  {
    year: "2019",
    title: "The Bangalore Leap",
    text: "When you moved to Bangalore, it wasn’t just for a job, it was for growth. New challenges, new lessons, and you handling it all your way.",
    photo: "assets/photos/bangalore.jpeg",
  },
  {
    year: "2021",
    title: "Unfiltered WFH Era(Covid Times)",
    text: "WFH days looked a lot like this. A little chaos, a lot of laughs, and somewhere in between, you decided to take on the world and go abroad.",
    photo: "assets/photos/wfh.jpeg",
  },
  {
    title: "Just You Being You",
    text: "No caption needed. Just you, being completely yourself.",
    video: "assets/photos/cat-video.mp4",
  },
  {
    year: "2021",
    title: "Across Borders, Beyond Limits.",
    text: "New country, new beginnings, and a dream you chose to chase. This wasn’t just a move, it was everything you had been building towards.",
    photo: "assets/photos/canada.jpeg",
  },
  {
    year: "Jan, 2023",
    title: "All Worth It",
    text: "Every step, every risk, every decision led here. Your first job in Canada, not luck, just you showing up and making it happen.",
    photo: "assets/photos/job_canada.jpeg",
  },
  {
    year: "Nov, 2023",
    title: "Full Circle Moment",
    text: "The first time you returned after building your life in a new country. Not just a visit, but a reminder of how far you’ve come.",
    photo: "assets/photos/after_canada.jpeg",
  },
  {
    year: "2024",
    title: "And Then Came Simar ❤️",
    text: "Just when you had built everything for yourself, life had something new waiting. In 2024, you met Simar, and a beautiful new chapter of love quietly began.",
    photo: "assets/photos/simar_and_sumeet.jpeg",
  },
  {
    year: "2025",
    title: "A Love That Became Home",
    text: "After everything you built on your own, you found someone to build the rest of your life with. And just like that, your story became even more beautiful.",
    photo: "assets/photos/marriage.jpeg",
  },
  {
    title: "And This Is You",
    text: "From where it all began to everything you’ve become, this is your story. And somehow, it still feels like the best is yet to come.",
    photo: "assets/photos/life_collage.jpg",
  },
];

/* ── Gallery: Photo grid ─────────────────────────────────────── */
/*
  Each entry:
    src     : string  — path or URL (required)
    caption : string  — shown on hover (optional)
*/
const galleryPhotos = [
  { src: "assets/photos/siblings.jpg", caption: "With the siblings." },
  { src: "assets/photos/sumeet_mom_nani_baby.jpg", caption: "Mom and mom's mom" },
  { src: "assets/photos/sumeet.jpg", caption: "Bachelorette Party" },
  { src: "assets/photos/with_simar.jpg", caption: "Ring ceremony time" },
  { src: "assets/photos/sehaj_tanya.jpeg", caption: "A beautiful soul" },
  { src: "assets/photos/the_wahis.jpeg", caption: "The Wahi's rocking it." },
  { src: "assets/photos/mexico_trip.jpeg", caption: "Party vibes" },
  { src: "assets/photos/sumeet_baby.jpeg", caption: "OG since '95" },
];
