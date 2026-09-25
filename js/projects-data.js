// Centralized projects data. MessMate details verified against its repository.
const projectsData = [
  {
    "id": "messmate",
    "slug": "messmate",
    "number": "01",
    "title": "MessMate",
    "eyebrow": "Realtime Hostel Menu Platform",
    "description": "A mobile-first menu platform for United Homes, Karnavati University, with confirmed meals, serving times, and live manager updates.",
    "shortDescription": "Planned menus, confirmed meals, and serving times in one mobile-first app.",
    "fullDescription": "MessMate helps United Homes students check what is actually being served. Managers can update meals and confirm menus, with Firebase synchronizing menu overrides across devices.",
    "image": "./assets/projects/messmate/today-dark.png",
    "technologies": [
      "React",
      "Firebase",
      "Vite",
      "CSS",
      "PWA"
    ],
    "technologiesDetailed": [
      {
        "name": "React",
        "role": "Component UI and routing"
      },
      {
        "name": "Firebase",
        "role": "Realtime menu overrides"
      },
      {
        "name": "Vite",
        "role": "Build tooling"
      },
      {
        "name": "CSS",
        "role": "Responsive layouts and themes"
      },
      {
        "name": "PWA",
        "role": "Home-screen installation"
      }
    ],
    "features": [
      "Today’s menu and meal timings",
      "Date-based menu browsing",
      "Planned and confirmed meal status",
      "Manager menu editor",
      "Light and dark themes"
    ],
    "featuresDetailed": [
      {
        "title": "Student menu",
        "desc": "Current, upcoming, and ended meal cards with dishes and serving windows."
      },
      {
        "title": "Menu updates",
        "desc": "Manager overrides arrive through a Firebase Realtime Database subscription."
      }
    ],
    "overview": "A mobile-first hostel menu platform built for United Homes, Karnavati University.",
    "problem": "Monthly schedules do not always match the meals actually served.",
    "solution": "Show planned and confirmed menus clearly, with a manager editor for updates.",
    "workflow": "Managers update or confirm meals; Firebase publishes overrides to student views with a local cache fallback.",
    "github": "https://github.com/souryajeet10/MessMate",
    "githubPrivate": false,
    "demo": "https://messmate-uh.vercel.app",
    "demoAvailable": true,
    "detailRoute": "/projects/messmate",
    "detailHref": "./projects/messmate.html",
    "accentColor": "violet"
  },
  {
    "id": "campuslive",
    "slug": "campuslive",
    "number": "02",
    "title": "CampusLive",
    "eyebrow": "Interactive Discovery Platform",
    "description": "A campus activity discovery platform that helps students discover what's happening around them through an interactive live campus map.",
    "shortDescription": "A campus activity discovery platform that helps students discover what's happening around them through an interactive live campus map.",
    "fullDescription": "A campus activity discovery platform that helps students discover what's happening around them through an interactive live campus map. Built to replace scattered bulletin board notices and chat groups with a centralized map experience.",
    "image": "/images/projects/campuslive.png",
    "technologies": [
      "React",
      "Firebase",
      "JavaScript"
    ],
    "technologiesDetailed": [
      {
        "name": "React",
        "role": "Dynamic Map UI & Filter System"
      },
      {
        "name": "Firebase",
        "role": "Realtime Database & Authentication"
      },
      {
        "name": "JavaScript",
        "role": "Interactive Map Geometry & State"
      }
    ],
    "features": [
      "Live campus map",
      "Activity pins",
      "Activity discovery",
      "Event information"
    ],
    "featuresDetailed": [
      {
        "title": "Live campus map",
        "desc": "Interactive map visualization pinning real-time workshops, club meetups, and hackathons across campus venues."
      },
      {
        "title": "Activity pins",
        "desc": "Color-coded geospatial map markers reflecting activity categories, crowd interest, and ongoing timelines."
      },
      {
        "title": "Activity discovery",
        "desc": "Filterable feed allowing students to discover happenings by category, academic department, or time."
      },
      {
        "title": "Event information",
        "desc": "Detailed modal views providing venue directions, agenda outlines, organizer contacts, and RSVP counters."
      }
    ],
    "overview": "A real-time geospatial discovery platform where students can see what clubs, workshops, or study groups are meeting right now across university grounds.",
    "problem": "Campus announcements were scattered across multiple unofficial social channels, causing students to miss relevant workshops, tech talks, and cultural events.",
    "solution": "Created an interactive web map with Firebase Realtime Database integration allowing student organizers to drop activity pins and attendees to discover them instantaneously.",
    "workflow": "Event organizers drop an event pin on the digital campus coordinate grid. Firebase broadcasts changes to all active student clients, populating live activity tags on the map.",
    "challenges": "Managing responsive SVG/Canvas map scaling across mobile screens while maintaining accurate pin positions.",
    "learnings": "Gained hands-on experience developing under hackathon time limits, working with NoSQL data schemas, and implementing responsive map interfaces.",
    "github": null,
    "githubPrivate": true,
    "demo": null,
    "demoAvailable": false,
    "detailRoute": "/projects/campuslive",
    "detailHref": "./projects/campuslive.html",
    "accentColor": "violet"
  },
  {
    "id": "krishilink",
    "slug": "krishilink",
    "number": "03",
    "title": "KrishiLink",
    "eyebrow": "Agricultural Intelligence Layer",
    "description": "An AI-powered decision layer designed to help farmers decide where, when, and to whom to sell their produce.",
    "shortDescription": "An AI-powered decision layer designed to help farmers decide where, when, and to whom to sell their produce.",
    "fullDescription": "An AI-powered decision layer designed to help farmers decide where, when, and to whom to sell their produce. Evaluates regional mandi prices, transit expenses, and buyer networks to maximize take-home income.",
    "image": "/images/projects/krishilink.png",
    "technologies": [
      "Flutter",
      "REST APIs",
      "AI",
      "e-NAM",
      "Agmarknet"
    ],
    "technologiesDetailed": [
      {
        "name": "Flutter",
        "role": "Cross-Platform Mobile Interface"
      },
      {
        "name": "REST APIs",
        "role": "Data Ingestion & Mandi Aggregation"
      },
      {
        "name": "AI",
        "role": "Price Trend Analytics & Decision Layer"
      },
      {
        "name": "e-NAM",
        "role": "National Agriculture Market Data Integration"
      },
      {
        "name": "Agmarknet",
        "role": "Commodity Spot Price Feeds"
      }
    ],
    "features": [
      "Market data",
      "Price analysis",
      "Buyer discovery",
      "Multilingual interface",
      "Voice-first interaction"
    ],
    "featuresDetailed": [
      {
        "title": "Market data",
        "desc": "Aggregated live commodity rates from government mandis via e-NAM and Agmarknet public feeds."
      },
      {
        "title": "Price analysis",
        "desc": "Net-income calculation factoring in distance, haulage logistics, and mandi commission fees."
      },
      {
        "title": "Buyer discovery",
        "desc": "Curated directory of verified regional buyers, collection hubs, and institutional purchasers."
      },
      {
        "title": "Multilingual interface",
        "desc": "Localized interfaces designed to overcome linguistic barriers in regional agricultural belts."
      },
      {
        "title": "Voice-first interaction",
        "desc": "Audio query input enabling farmers to request crop prices effortlessly without complex typing."
      }
    ],
    "overview": "A decision layer for agricultural commerce that calculates true net realization for crops after subtracting logistics and market levies.",
    "problem": "Farmers frequently travel to distant markets quoting marginally higher prices, only to find transit expenses and spoilage erase their profit margins.",
    "solution": "Designed an accessible mobile interface powered by REST endpoints aggregating Agmarknet/e-NAM data, paired with a net realization decision algorithm and voice queries.",
    "workflow": "The farmer speaks or selects crop type and quantity. The system pulls current prices from nearby mandis, computes haulage cost per kilometer, and recommends the destination maximizing net take-home revenue.",
    "challenges": "Dealing with disparate data schemas from public agricultural registries and designing an interface accessible for non-technical users.",
    "learnings": "Learned the crucial importance of user-centric empathy in software design, building tech that solves real economic challenges.",
    "github": null,
    "githubPrivate": true,
    "demo": null,
    "demoAvailable": false,
    "detailRoute": "/projects/krishilink",
    "detailHref": "./projects/krishilink.html",
    "accentColor": "cyan"
  }
];

if (typeof module !== "undefined" && module.exports) { module.exports = { projectsData }; }
