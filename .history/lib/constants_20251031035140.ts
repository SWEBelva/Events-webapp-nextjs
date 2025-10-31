export type EventItem = {
  title: string;
  image: string; // path under /public
  slug: string;
  location: string;
  date: string; // human-readable date
  time: string; // human-readable time or range
  short?: string;
};

export const events: EventItem[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "Mar 24–25, 2026",
    time: "09:00 – 17:30",
    short: "A global conference focused on the React ecosystem — keynotes, workshops and networking.",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "Jun 8–10, 2026",
    time: "09:30 – 18:00",
    short: "European edition of JSConf with a broad agenda covering web platform, tooling and performance.",
  },
  {
    title: "NodeConf London",
    image: "/images/event3.png",
    slug: "nodeconf-london-2026",
    location: "London, UK",
    date: "May 12–13, 2026",
    time: "10:00 – 17:00",
    short: "Node.js focused technical talks, deep dives and community meetups.",
  },
  {
    title: "Microsoft Build",
    image: "/images/event4.png",
    slug: "microsoft-build-2026",
    location: "Seattle, WA, USA & virtual",
    date: "May 20–22, 2026",
    time: "All day",
    short: "Microsoft's developer conference covering Azure, .NET, Teams and AI tooling.",
  },
  {
    title: "AWS re:Invent 2025",
    image: "/images/event5.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "Nov 26–29, 2025",
    time: "09:00 – 19:00",
    short: "Cloud-focused conference with product launches, hands-on labs and deep technical sessions.",
  },
  {
    title: "Major League Hacking — Global Hackathon",
    image: "/images/event6.png",
    slug: "mlh-global-hackathon-2026",
    location: "Online / Various campuses",
    date: "Feb 14–16, 2026",
    time: "48-hour hack",
    short: "Community hackathon for students and early-career builders — prizes and mentorship.",
  },
];
