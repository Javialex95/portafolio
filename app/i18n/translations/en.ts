export const en = {
  header: {
    logo: "Software Engineer",
    techStack: "Tech Stack",
    work: "Work",
    connect: "Connect",
  },
  hero: {
    status: "Available for projects",
    titleLine1: "Software",
    titleLine2: "Engineer",
    subtitle: "Frontend Tech Lead",
    description:
      "Architecting resilient digital experiences through precision engineering. Specializing in high-performance frontend architectures and scalable systems for the modern web.",
    cta: "Contact Me",
  },
  skills: {
    sectionLabel: "Engineering Philosophy",
    titleLine1: "Code as",
    titleAccent: "Architecture.",
    subtitle:
      "Building digital systems requires more than syntax. It demands a rigorous commitment to durability, clarity, and the relentless pursuit of elegant simplicity.",
    philosophy: [
      {
        title: "Clean Code",
        description:
          "Writing code that is as expressive as it is functional. Prioritizing long-term maintainability over quick patches.",
      },
      {
        title: "Performance First",
        description:
          "Optimizing the critical rendering path to ensure every millisecond counts for the end-user.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Building foundations that grow seamlessly from zero to millions of active sessions.",
      },
    ],
    experience: {
      years: "6+ Years",
      label: "Industry Experience",
      description:
        "From early-stage startups to enterprise-level infrastructures, refining the balance between speed and stability.",
    },
    techStackLabel: "Tech Stack & Tooling",
    techStackFooter: "Standardizing the Future",
    groups: [
      {
        title: "Frontend",
        skills: [
          "React (advanced)",
          "Next.js (SSR, SSG, performance optimization)",
          "State management patterns",
          "Component architecture & design systems",
        ],
      },
      {
        title: "Performance & Architecture",
        skills: [
          "Rendering optimization",
          "Code splitting / lazy loading",
          "Core Web Vitals improvement",
          "Scalable frontend architecture",
        ],
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express", "REST APIs", "GraphQL (client-side)"],
      },
      {
        title: "Quality & DevOps",
        skills: [
          "Testing with Jest",
          "CI/CD pipelines",
          "Git workflows",
          "Deployments with Vercel & Bitbucket",
        ],
      },
      {
        title: "Leadership & Product",
        skills: [
          "Tech leadership",
          "Client communication",
          "Technical decision-making",
          "Product-oriented mindset",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    nominated: "Nominated",
    descriptions: [
      "Built reusable static sections, led cart & mini-cart business logic, and developed a product comparison tool. Integrated a new search and PLP across all brands.",
      "A Large B2B e-commerce platform for a major electricity provider in Canada, featuring a custom CMS, REST API, and seamless integration with third-party services — deployed on Vercel with a focus on performance and scalability.",
      "Biggest music festival in colombia, with more than 100.000 attendees each year. I was responsible for the entire development of the web platform.",
      "Web platform for Feria Vassar, featuring store profiles, event schedules, and multimedia galleries. I led the development of the platform, which included a custom CMS for content management and a REST API for data fetching.",
      "E-commerce platform for Productos Arquitectónicos, a Colombian company that sells architectural products. The platform features a custom CMS for content management, a REST API for data fetching, and seamless integration with third-party services.",
      "Main page for Páramo Presenta, a Colombian company that organizes large concerts and live events.",
      "Web platform for Festival Cordillera, a major music event in Colombia",
      "Starup page for Indio Gurú, where I worked as a main developer, building the entire web platform from scratch",
      "One of the biggest techno music festival in Colombia",
      "Web platform for Motor Show RCN, a major automotive event in Colombia —  multimedia galleries.",
      "Web platform for Claro por Colombia",
      "Web platform for Colombia 4.0, a major event in Colombia focused on digital transformation and innovation.",
      "Web platform for Unión Festival Digital, a major music event in Colombia — featuring live streaming, artist profiles, and interactive schedules.",
      "Web platform for Congreso Sura, a major event in Colombia focused on digital transformation in the insurance industry — featuring live streaming, session scheduling, and interactive Q&A.",
      "Interactive web experience for the Museum \"Casa de las memorias\" in Cali, Colombia — featuring virtual tours, historical timelines, and multimedia storytelling to engage visitors with the city's rich cultural heritage.",
      "Community-driven platform connecting volunteers with local social initiatives in Cali, Colombia — featuring project listings, impact tracking, and a resource library.",
    ],
  },
};

export type Translations = typeof en;
