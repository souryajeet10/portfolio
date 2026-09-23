// Centralized Projects Data Store
const projectsData = [
  {
    id: "appointment-system",
    slug: "appointment-system",
    number: "01",
    title: "Appointment System",
    eyebrow: "Full-Stack Web Application",
    description: "A full-stack appointment booking platform designed to make scheduling simple for users and administrators.",
    shortDescription: "A full-stack appointment booking platform designed to make scheduling simple for users and administrators.",
    fullDescription: "A full-stack appointment booking platform designed to make scheduling simple for users and administrators. Built with React, Node.js, MongoDB, and WebSockets to enable synchronized slot booking without scheduling conflicts.",
    image: "/images/projects/appointment-system.png",
    technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
    technologiesDetailed: [
      { name: "React", role: "Frontend Component UI" },
      { name: "Node.js", role: "Backend REST API Engine" },
      { name: "MongoDB", role: "Database for Appointments & Users" },
      { name: "WebSockets", role: "Real-Time Slot Synchronization" }
    ],
    features: [
      "Appointment booking",
      "Real-time availability",
      "Admin dashboard",
      "User management"
    ],
    featuresDetailed: [
      { title: "Appointment booking", desc: "Intuitive multi-step calendar workflow for choosing service types, dates, and dynamic available time slots." },
      { title: "Real-time availability", desc: "Live slot locking using WebSocket events to prevent concurrent reservation conflicts across active sessions." },
      { title: "Admin dashboard", desc: "Comprehensive management panel to oversee schedule rosters, approve/cancel appointments, and view metrics." },
      { title: "User management", desc: "Role-based authentication handling client profiles, appointment histories, and administrator access control." }
    ],
    overview: "A complete appointment booking and operational management platform that enables users to easily book services and allows administrators to oversee their daily agenda in real-time.",
    problem: "Traditional appointment scheduling often relies on static forms or phone calls, resulting in double-booking, manual schedule conflicts, and a lack of real-time slot visibility.",
    solution: "Architected a responsive React single-page application supported by a Node.js/Express backend with MongoDB persistence and a WebSocket layer for instant slot updates.",
    workflow: "Users browse available professionals and time slots. When a slot is selected, a WebSocket signal broadcasts a temporary lock. Upon confirmation, the backend commits the record to MongoDB and broadcasts the updated availability to all active viewers.",
    challenges: "Managing state concurrency when two users attempt to select the same time slot at the exact same instant.",
    learnings: "Deepened practical understanding of asynchronous state handling, bi-directional socket events, and building defensive database models.",
    github: null,
    githubPrivate: true,
    demo: null,
    demoAvailable: false,
    detailRoute: "/projects/appointment-system",
    detailHref: "./projects/appointment-system.html",
    accentColor: "cyan"
  },
  {
    id: "campuslive",
    slug: "campuslive",
    number: "02",
    title: "CampusLive",
    eyebrow: "Interactive Discovery Platform",
    description: "A campus activity discovery platform that helps students discover what's happening around them through an interactive live campus map.",
    shortDescription: "A campus activity discovery platform that helps students discover what's happening around them through an interactive live campus map.",
    fullDescription: "A campus activity discovery platform that helps students discover what's happening around them through an interactive live campus map. Built to replace scattered bulletin board notices and chat groups with a centralized map experience.",
    image: "/images/projects/campuslive.png",
    technologies: ["React", "Firebase", "JavaScript"],
    technologiesDetailed: [
      { name: "React", role: "Dynamic Map UI & Filter System" },
      { name: "Firebase", role: "Realtime Database & Authentication" },
      { name: "JavaScript", role: "Interactive Map Geometry & State" }
    ],
    features: [
      "Live campus map",
      "Activity pins",
      "Activity discovery",
      "Event information"
    ],
    featuresDetailed: [
      { title: "Live campus map", desc: "Interactive map visualization pinning real-time workshops, club meetups, and hackathons across campus venues." },
      { title: "Activity pins", desc: "Color-coded geospatial map markers reflecting activity categories, crowd interest, and ongoing timelines." },
      { title: "Activity discovery", desc: "Filterable feed allowing students to discover happenings by category, academic department, or time." },
      { title: "Event information", desc: "Detailed modal views providing venue directions, agenda outlines, organizer contacts, and RSVP counters." }
    ],
    overview: "A real-time geospatial discovery platform where students can see what clubs, workshops, or study groups are meeting right now across university grounds.",
    problem: "Campus announcements were scattered across multiple unofficial social channels, causing students to miss relevant workshops, tech talks, and cultural events.",
    solution: "Created an interactive web map with Firebase Realtime Database integration allowing student organizers to drop activity pins and attendees to discover them instantaneously.",
    workflow: "Event organizers drop an event pin on the digital campus coordinate grid. Firebase broadcasts changes to all active student clients, populating live activity tags on the map.",
    challenges: "Managing responsive SVG/Canvas map scaling across mobile screens while maintaining accurate pin positions.",
    learnings: "Gained hands-on experience developing under hackathon time limits, working with NoSQL data schemas, and implementing responsive map interfaces.",
    github: null,
    githubPrivate: true,
    demo: null,
    demoAvailable: false,
    detailRoute: "/projects/campuslive",
    detailHref: "./projects/campuslive.html",
    accentColor: "violet"
  },
  {
    id: "krishilink",
    slug: "krishilink",
    number: "03",
    title: "KrishiLink",
    eyebrow: "Agricultural Intelligence Layer",
    description: "An AI-powered decision layer designed to help farmers decide where, when, and to whom to sell their produce.",
    shortDescription: "An AI-powered decision layer designed to help farmers decide where, when, and to whom to sell their produce.",
    fullDescription: "An AI-powered decision layer designed to help farmers decide where, when, and to whom to sell their produce. Evaluates regional mandi prices, transit expenses, and buyer networks to maximize take-home income.",
    image: "/images/projects/krishilink.png",
    technologies: ["Flutter", "REST APIs", "AI", "e-NAM", "Agmarknet"],
    technologiesDetailed: [
      { name: "Flutter", role: "Cross-Platform Mobile Interface" },
      { name: "REST APIs", role: "Data Ingestion & Mandi Aggregation" },
      { name: "AI", role: "Price Trend Analytics & Decision Layer" },
      { name: "e-NAM", role: "National Agriculture Market Data Integration" },
      { name: "Agmarknet", role: "Commodity Spot Price Feeds" }
    ],
    features: [
      "Market data",
      "Price analysis",
      "Buyer discovery",
      "Multilingual interface",
      "Voice-first interaction"
    ],
    featuresDetailed: [
      { title: "Market data", desc: "Aggregated live commodity rates from government mandis via e-NAM and Agmarknet public feeds." },
      { title: "Price analysis", desc: "Net-income calculation factoring in distance, haulage logistics, and mandi commission fees." },
      { title: "Buyer discovery", desc: "Curated directory of verified regional buyers, collection hubs, and institutional purchasers." },
      { title: "Multilingual interface", desc: "Localized interfaces designed to overcome linguistic barriers in regional agricultural belts." },
      { title: "Voice-first interaction", desc: "Audio query input enabling farmers to request crop prices effortlessly without complex typing." }
    ],
    overview: "A decision layer for agricultural commerce that calculates true net realization for crops after subtracting logistics and market levies.",
    problem: "Farmers frequently travel to distant markets quoting marginally higher prices, only to find transit expenses and spoilage erase their profit margins.",
    solution: "Designed an accessible mobile interface powered by REST endpoints aggregating Agmarknet/e-NAM data, paired with a net realization decision algorithm and voice queries.",
    workflow: "The farmer speaks or selects crop type and quantity. The system pulls current prices from nearby mandis, computes haulage cost per kilometer, and recommends the destination maximizing net take-home revenue.",
    challenges: "Dealing with disparate data schemas from public agricultural registries and designing an interface accessible for non-technical users.",
    learnings: "Learned the crucial importance of user-centric empathy in software design, building tech that solves real economic challenges.",
    github: null,
    githubPrivate: true,
    demo: null,
    demoAvailable: false,
    detailRoute: "/projects/krishilink",
    detailHref: "./projects/krishilink.html",
    accentColor: "cyan"
  },
  {
    id: "student-dashboard",
    slug: "student-dashboard",
    number: "04",
    title: "Student Dashboard",
    eyebrow: "Academic Productivity Suite",
    description: "A productivity dashboard designed around the everyday workflow of students to manage tasks, deadlines, study goals, and academic progress in one place.",
    shortDescription: "A productivity dashboard designed around the everyday workflow of students to manage tasks, deadlines, study goals, and academic progress in one place.",
    fullDescription: "A productivity dashboard designed around the everyday workflow of students to manage tasks, deadlines, study goals, and academic progress in one place. Eliminates context switching across disparate academic tools.",
    image: "/images/projects/student-dashboard.png",
    technologies: ["React", "JavaScript", "Firebase"],
    technologiesDetailed: [
      { name: "React", role: "Interactive Frontend Architecture" },
      { name: "JavaScript", role: "State Management & Logic" },
      { name: "Firebase", role: "Real-Time Cloud Persistence" }
    ],
    features: [
      "Task management",
      "Deadline tracking",
      "Study goals",
      "Progress overview"
    ],
    featuresDetailed: [
      { title: "Task management", desc: "Prioritized assignment timeline highlighting imminent due dates with urgency tags." },
      { title: "Deadline tracking", desc: "Central calendar tracking active submissions, exam schedules, and milestone alerts." },
      { title: "Study goals", desc: "Subject-wise target hour monitor with daily completion metrics and streak counters." },
      { title: "Progress overview", desc: "Visual grade distribution charts and semester performance projections." }
    ],
    overview: "An all-in-one student workspace combining deadline tracking, study progress analytics, and course task management.",
    problem: "Students juggle assignments across multiple learning management systems and chat channels, leading to missed deadlines and disjointed study schedules.",
    solution: "Constructed a high-performance productivity platform featuring quick task capture, dynamic deadline urgency filters, and visual progress tracking.",
    workflow: "Students enter their courses, deadlines, and study targets. The dashboard automatically calculates upcoming priority queues and updates academic progress charts as tasks are checked off.",
    challenges: "Structuring a database schema flexible enough to handle varied course structures while keeping query latency under 50ms.",
    learnings: "Mastered frontend state synchronization, clean component composition, and designing information-dense dashboards that remain clear and uncluttered.",
    github: null,
    githubPrivate: true,
    demo: null,
    demoAvailable: false,
    detailRoute: "/projects/student-dashboard",
    detailHref: "./projects/student-dashboard.html",
    accentColor: "violet"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectsData };
}
