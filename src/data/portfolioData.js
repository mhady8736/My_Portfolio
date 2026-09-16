export const personalInfo = {
  name: "Mohamed AbdEl Hady",
  shortName: "Mohamed A.",
  role: "Front-End Developer",
  heroHeadline: "Crafting fast, responsive, and user-centered web applications with modern frontend engineering.",
  heroSubtext: "Frontend Developer specializing in React and modern JavaScript. I bridge the gap between design and robust code to build clean, accessible, and high-performance web experiences that feel effortless to use.",
  availability: "Available for Frontend Developer Roles & Select Projects",
  primaryCta: "View Projects",
  secondaryCta: "Let's Connect",
  location: "Alexandria, Egypt • Open to Remote",
  email: "mhady8736@gmail.com",
  phone: "+20 114 536 7954",
  whatsapp: "https://wa.me/201145367954",
  formspreeEndpoint: "https://formspree.io/f/xppznbdb",
  github: "https://github.com/mhady8736",
  linkedin: "https://www.linkedin.com/in/mohamed-abdel-hady-8164a12a2",
  copyrightYear: new Date().getFullYear(),
};

export const aboutData = {
  headline: "Crafting modern web interfaces with clean code, responsive design, and intuitive user experiences.",
  paragraphs: [
    "I am a Front-End Developer with hands-on experience building responsive, user-friendly web applications using HTML, CSS, JavaScript, and React. With a deep foundation in Software Engineering from Borg Al Arab Technological University (maintaining a 3.80 / 4.00 GPA), I focus on the structural, visual, and architectural quality of web software.",
    "Trained through the competitive Digital Egypt Pioneers Initiative (DEPI) and rigorous university practical projects, I have developed e-commerce sites, interactive web applications, and component-driven interfaces. I actively apply modern frontend practices, consume REST APIs, and implement solid version control hygiene with Git and GitHub.",
    "Driven by continuous learning and software craftsmanship, I focus on building accessible, high-performance interfaces, writing clean modular code, and translating UI/UX designs into fluid digital products."
  ],
  metadataBlocks: [
    { label: "Education", value: "B.Sc. Software Engineering (GPA: 3.80 / 4.00)" },
    { label: "University", value: "Borg Al Arab Technological University, Egypt" },
    { label: "Current Role", value: "DEPI Front-End Developer Intern" },
    { label: "Core Focus", value: "React • JavaScript • REST APIs • UI/UX Design" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Front-End Development",
      badge: "Core Stack",
      description: "Core technologies used to build responsive, accessible, and fast web applications.",
      skills: [
        {
          name: "React.js",
          subtitle: "Component-Based UI",
          details: "Functional components, custom hooks, reactive state management, props drilling mitigation, and modular frontend architectures."
        },
        {
          name: "JavaScript",
          subtitle: "ES6+ Logic & DOM Manipulation",
          details: "Modern syntax, Arrow functions, Async/Await, Promises, array transformations, Event Listeners, and direct DOM manipulation."
        },
        {
          name: "HTML5 & CSS3",
          subtitle: "Semantic Structure & Modern Styling",
          details: "Semantic HTML landmarks, CSS Grid, Flexbox, media queries, Custom Properties (variables), and cross-browser styling."
        },
        {
          name: "REST APIs",
          subtitle: "Asynchronous Data Integration",
          details: "Fetching remote data streams, handling loading & error boundaries, JSON payloads, and dynamic interface rendering."
        },
        {
          name: "UI/UX & Responsive Design",
          subtitle: "User-Centered Interfaces",
          details: "Translating wireframes into responsive interfaces with intuitive navigation, fluid viewports, and clean visual hierarchy."
        },
        {
          name: "Web Accessibility & Compatibility",
          subtitle: "Cross-Browser & a11y Standards",
          details: "Building accessible web experiences adhering to WCAG standards, ARIA attributes, and seamless cross-browser testing."
        }
      ]
    },
    {
      id: "programming",
      title: "Programming & Foundations",
      badge: "Engineering Core",
      description: "Computer science fundamentals, object-oriented concepts, and algorithmic problem solving.",
      skills: [
        {
          name: "C & C++",
          subtitle: "Structured & Low-Level Foundations",
          details: "Memory awareness, pointers, structural control flows, data structures, and algorithmic complexity."
        },
        {
          name: "Java",
          subtitle: "Object-Oriented Programming (OOP)",
          details: "Encapsulation, inheritance, polymorphism, abstraction, interface design, and clean OOP principles."
        },
        {
          name: "Python",
          subtitle: "Scripting & Logical Problem Solving",
          details: "Rapid scripting, data structures, control logic, automation, and algorithmic challenges."
        },
        {
          name: "Problem Solving",
          subtitle: "Algorithmic Thinking",
          details: "Systematic decomposition of complex problems, edge-case analysis, and scalable solution implementation."
        }
      ]
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      badge: "Workflow & Data",
      description: "Development environment, version control workflows, and database tooling.",
      skills: [
        {
          name: "Git",
          subtitle: "Distributed Version Control",
          details: "Branching strategies, atomic commits, merge conflict resolution, detached HEAD management, and stash workflows."
        },
        {
          name: "GitHub",
          subtitle: "Collaborative Engineering",
          details: "Pull request reviews, remote repository hosting, issue management, project boards, and Git collaboration."
        },
        {
          name: "MySQL",
          subtitle: "Relational Database Management",
          details: "Database schema design, relational modeling, SQL queries (SELECT, JOIN, UPDATE, DELETE), and data integrity."
        },
        {
          name: "Visual Studio Code",
          subtitle: "Primary Developer Environment",
          details: "Modern extension ecosystem, terminal integration, debugging, formatters (Prettier/ESLint), and productivity shortcuts."
        }
      ]
    },
    {
      id: "softskills",
      title: "Professional & Soft Skills",
      badge: "Team & Communication",
      description: "Interpersonal, leadership, and collaboration capabilities demonstrated through structured team engineering.",
      skills: [
        {
          name: "Technical Communication",
          subtitle: "Presentations & Clear Explanations",
          details: "Communicating technical frontend concepts with clarity, documenting component structures, and presenting project ideas effectively."
        },
        {
          name: "Teamwork & Collaboration",
          subtitle: "Structured Group Engineering",
          details: "Collaborating with peers on practical team projects in the DEPI initiative and academic group deliverables."
        },
        {
          name: "Time Management & Adaptability",
          subtitle: "Balancing Academics & Practical Projects",
          details: "Successfully balancing university engineering coursework (3.80 GPA) with DEPI internship deliverables and hands-on projects."
        }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "aura-ecommerce",
    title: "Aura Store — E-Commerce Web Application",
    category: "React / REST API / E-Commerce",
    shortDescription: "A fully responsive e-commerce web application consuming live REST endpoints, featuring product catalogs, real-time cart state, and clean UI/UX design.",
    image: "/projects/pulse.png",
    technologies: ["React", "JavaScript", "REST APIs", "HTML5", "CSS3", "Git"],
    githubUrl: "https://github.com/mhady8736",
    liveDemoUrl: "https://github.com/mhady8736",
    featured: true,
    caseStudy: {
      tagline: "Engineering a responsive e-commerce platform with dynamic REST API integration",
      overview: "Built as part of practical development projects to demonstrate real-world commercial web interface engineering. Aura Store provides customers with a fluid browsing, filtering, and shopping experience across all device viewports.",
      problem: "E-commerce frontends frequently face performance hiccups during client-side search filtering, cart state inconsistencies, and poor mobile adaptation on budget devices.",
      approach: "Engineered a component-driven React application consuming RESTful product feeds. Designed responsive layouts using CSS Grid and Flexbox, with optimistic cart updates and clean error-handling states.",
      keyFeatures: [
        "Product catalog with real-time category filtering and price sorting",
        "Persistent shopping cart state with live price calculation and item removal",
        "Responsive design tested across mobile, tablet, and desktop screens",
        "REST API integration with graceful loading states and error boundaries"
      ],
      architecturalHighlights: [
        "Structured React component hierarchy with reusable UI elements",
        "Clean separation between API consumption logic and UI components",
        "Semantic HTML5 document outline ensuring accessible navigation"
      ]
    }
  },
  {
    id: "pulse-dashboard",
    title: "Pulse — RESTful Data Explorer & Metrics Web App",
    category: "React / REST API Integration",
    shortDescription: "An interactive analytical web application consuming live REST endpoints, featuring debounced multi-parameter filtering and responsive data grids.",
    image: "/projects/pulse.png",
    technologies: ["React", "REST APIs", "Modern JavaScript", "CSS Grid", "GitHub"],
    githubUrl: "https://github.com/mhady8736",
    liveDemoUrl: "https://github.com/mhady8736",
    featured: true,
    caseStudy: {
      tagline: "Transforming asynchronous REST streams into fluid, responsive interfaces",
      overview: "Pulse is a web application designed to demonstrate robust handling of asynchronous data states, API pagination, and complex client-side filtering without sacrificing performance.",
      problem: "Web applications frequently stutter during continuous user inputs or fail to communicate network latency gracefully, leading to broken user flows.",
      approach: "Implemented a resilient data-fetching layer with automated debouncing and intentional error boundaries. Structured the interface using fluid CSS Grid systems that adapt gracefully across viewports.",
      keyFeatures: [
        "Debounced real-time search eliminating redundant network requests",
        "Multi-facet parameter filtering with instantaneous client updates",
        "Graceful loading indicators and network recovery states",
        "Adaptive data grid displaying compact cards on mobile and analytical tables on desktop"
      ],
      architecturalHighlights: [
        "Custom fetching hooks with cancellation mechanisms for race-condition prevention",
        "Memoized data selectors for rapid sub-10ms filter computations",
        "Clean error boundary architecture preventing application crashes"
      ]
    }
  },
  {
    id: "nexus-ui",
    title: "Nexus UI — Component System & Accessible UI/UX",
    category: "React / UI/UX Design System",
    shortDescription: "A modular, accessible React component library and interactive UI system emphasizing responsive layout principles, DOM manipulation, and cross-browser compatibility.",
    image: "/projects/nexus.png",
    technologies: ["React", "JavaScript (ES6+)", "UI/UX Design", "HTML5", "CSS3", "Git"],
    githubUrl: "https://github.com/mhady8736",
    liveDemoUrl: "https://github.com/mhady8736",
    featured: true,
    caseStudy: {
      tagline: "Building scalable UI primitives with strict accessibility and user-friendly interaction",
      overview: "Nexus UI represents a focused implementation of modern UI/UX principles, semantic HTML, and component composition in React. It addresses UI state inconsistency and ensures keyboard accessibility.",
      problem: "Many web interfaces suffer from inaccessible form controls, poor contrast ratios, and rigid layouts that break across varying screen dimensions.",
      approach: "Built modular React components with full keyboard navigability (WAI-ARIA specifications), fluid CSS typography, and smooth micro-interactions.",
      keyFeatures: [
        "Interactive component playground with real-time prop adjustments",
        "Full keyboard accessibility with visible focus rings and ARIA attributes",
        "Responsive design ensuring consistent fidelity across all breakpoints",
        "Modular component patterns for easy integration across web projects"
      ],
      architecturalHighlights: [
        "Zero-dependency component primitives ensuring minimal bundle overhead",
        "Accessible DOM manipulation and keyboard event handling",
        "Strict semantic DOM trees guaranteeing screen-reader readability"
      ]
    }
  }
];

export const timelineData = [
  {
    period: "Jul 2026 – Present",
    title: "Front-End Developer Intern",
    institution: "Digital Egypt Pioneers Initiative (DEPI)",
    badge: "Internship • Part-Time",
    description: "Building user-friendly, responsive web interfaces using HTML, CSS, JavaScript, and React in a structured, high-intensity training program. Applying UI/UX principles, consuming REST APIs, and collaborating with engineering peers on practical team projects while strengthening professional workplace workflows."
  },
  {
    period: "Oct 2023 – Present",
    title: "Bachelor of Information Technology – Software Engineering",
    institution: "Borg Al Arab Technological University, Alexandria, Egypt",
    badge: "Education • GPA: 3.80 / 4.00",
    description: "Specializing in Software Engineering with an outstanding GPA of 3.80 / 4.00. Completed extensive coursework in software development, web development, programming (C, C++, Java, Python), database systems (MySQL), and software engineering principles."
  },
  {
    period: "Jul 2024",
    title: "Front-End Developer Trainee",
    institution: "Borg El Arab Technological University, Alexandria, Egypt",
    badge: "Practical Training",
    description: "Completed intensive practical training in front-end development, building interfaces with HTML, CSS, and JavaScript for cross-device compatibility. Developed and improved web interfaces through hands-on projects, applying UI/UX and responsive design principles."
  }
];
