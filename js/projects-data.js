// Project details verified against the linked repositories.
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
    "image": "./assets/projects/messmate/main.png",
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
    "detailHref": "./projects/messmate/",
    "accentColor": "violet"
  },
  {
    "id": "campuslive",
    "slug": "campuslive",
    "number": "02",
    "title": "CampusLive @VITAP",
    "eyebrow": "Campus Social Platform",
    "description": "A map-first campus platform built for the VIT-AP Freshers Hackathon 2026, connecting events, communities, announcements, and Lost & Found.",
    "shortDescription": "Discover activities, join events, and explore your campus in real time.",
    "fullDescription": "CampusLive connects campus discovery with participation through interactive maps, event creation, clubs, announcements, and location-based Lost & Found reports.",
    "image": "./assets/projects/campuslive/cover-final.png",
    "technologies": [
      "React",
      "Firestore",
      "React Leaflet",
      "Tailwind CSS",
      "Framer Motion",
      "Vite"
    ],
    "technologiesDetailed": [
      {
        "name": "React",
        "role": "Component UI and routing"
      },
      {
        "name": "Firestore",
        "role": "Realtime activities, clubs, and participation"
      },
      {
        "name": "Leaflet / OpenStreetMap",
        "role": "Maps and location markers"
      },
      {
        "name": "Tailwind CSS",
        "role": "Responsive styling"
      },
      {
        "name": "Framer Motion",
        "role": "Interface transitions"
      },
      {
        "name": "Vite / Vercel",
        "role": "Build tooling and hosting"
      }
    ],
    "features": [
      "Interactive campus map",
      "Create and join activities",
      "Club communities",
      "Campus announcements",
      "Lost & Found"
    ],
    "featuresDetailed": [
      {
        "title": "Map-first discovery",
        "desc": "Search activities and filter categories on the campus map."
      },
      {
        "title": "Participation",
        "desc": "Join and leave activities through Firestore participant updates."
      },
      {
        "title": "Community",
        "desc": "Explore clubs, announcements, and Lost & Found reports."
      }
    ],
    "overview": "A real-time campus engagement platform for VIT-AP.",
    "problem": "Campus activities are scattered across chat groups and notice boards.",
    "solution": "Unify discovery, event participation, and community tools around an interactive campus map.",
    "workflow": "Choose a location, enter event details, publish to Firestore, and synchronize updates through snapshot listeners.",
    "github": "https://github.com/souryajeet10/CampusliveVITAP",
    "githubPrivate": false,
    "demo": "https://campuslive-vitap.vercel.app",
    "demoAvailable": true,
    "detailRoute": "/projects/campuslive",
    "detailHref": "./projects/campuslive/",
    "accentColor": "violet"
  },
  {
    "id": "krishilink",
    "slug": "krishilink",
    "number": "03",
    "title": "KrishiLink",
    "eyebrow": "Agricultural Market Platform",
    "description": "A farmer-focused web app for mandi-price comparison, produce discovery, and voice-assisted selling.",
    "shortDescription": "Market information and a guided selling workflow in one place.",
    "fullDescription": "My work on KrishiLink during Smart India Hackathon 2026, PS 26132. A responsive web MVP with market rates, produce listings, offers, and multilingual UI.",
    "image": "./assets/projects/krishilink/cover.png",
    "technologies": [
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis"
    ],
    "features": [
      "Mandi-price comparison",
      "Produce marketplace",
      "Guided selling",
      "Voice-input integration",
      "Multilingual interface"
    ],
    "overview": "A web prototype connecting agricultural market information and produce workflows.",
    "problem": "Prices, buyers, and selling tools are spread across disconnected services.",
    "solution": "A single web interface for discovering prices and produce and preparing listings.",
    "workflow": "Compare mandi rates, explore produce, and prepare a listing with typed or voice-assisted fields.",
    "github": "https://github.com/souryajeet10/KrishiLink",
    "githubPrivate": false,
    "demo": "https://krishilink-production.up.railway.app/app.html",
    "demoAvailable": true,
    "detailRoute": "/projects/krishilink/",
    "detailHref": "./projects/krishilink/",
    "accentColor": "green"
  }
];
if (typeof module !== "undefined" && module.exports) { module.exports = { projectsData }; }
