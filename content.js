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
  name: "Sumeet",
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
    photo: "assets/photos/with_simar.JPG",
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
    name: "Sarah & Mike",
    relation: "Family",
    tags: ["family"],
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    message: "Cheers to another year of wonderful memories! You make every room brighter just by being in it. Wishing you a birthday as magical as you are!",
  },
  {
    name: "David",
    relation: "Friend",
    tags: ["friend"],
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    message: "To the most incredible person I know \u2014 happy birthday! Let us celebrate big and make this the best year yet. \ud83e\udd73",
  },
  {
    name: "Priya",
    relation: "Cousin",
    tags: ["family"],
    photo: "",
    message: "Every year I am reminded of how lucky our family is to have you. You light up every gathering with your laugh and energy. Happy birthday, superstar! \ud83c\udf1f",
  },
  {
    name: "Ravi",
    relation: "Uncle",
    tags: ["family"],
    photo: "",
    message: "Watching you grow into the wonderful person you are has been one of life's greatest joys. Wishing you a birthday filled with love and blessings.",
  },
  {
    name: "Neha",
    relation: "Best Friend",
    tags: ["friend"],
    photo: "",
    message: "You are one of those rare people who makes everything better just by showing up. So happy to have you as my person. Happy birthday! \ud83c\udf38",
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
    year: "2021",
    title: "Adventures Begin",
    text: "Some of the best memories are the ones we made together, laughing too loud and staying up too late. Here is to always finding the fun in everything.",
    photo: "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "2022",
    title: "Celebrations & Milestones",
    text: "Every celebration is better with you in it. Your smile is absolutely contagious and your energy lights up every room.",
    photo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "2023",
    title: "New Chapters",
    text: "You have grown so much this year and we could not be more proud. Every new chapter you write is more beautiful than the last.",
    photo: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "2024",
    title: "Moments to Treasure",
    text: "The little moments are the ones that stay with us forever \u2014 the late-night conversations, the inside jokes, the spontaneous plans. Grateful for every one.",
    photo: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=1000&q=80",
  },
];

/* ── Gallery: Photo grid ─────────────────────────────────────── */
/*
  Each entry:
    src     : string  — path or URL (required)
    caption : string  — shown on hover (optional)
*/
const galleryPhotos = [
  { src: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=600&q=80", caption: "Always smiling" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80", caption: "Golden moments" },
  { src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80", caption: "Best of friends" },
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80", caption: "Celebrations" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80", caption: "A beautiful soul" },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80", caption: "Good times" },
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80", caption: "Party vibes" },
  { src: "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?auto=format&fit=crop&w=600&q=80", caption: "Another year, another adventure" },
];
