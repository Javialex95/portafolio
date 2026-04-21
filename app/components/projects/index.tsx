"use client";

import { motion } from "motion/react";
import {
  mapa,
  mapa2,
  motor2,
  sura1,
  sura2,
  cali,
  union1,
  union2,
  colombia1,
  colombia2,
  claro1,
  claro2,
  baum,
  baum2,
  vassar1,
  vassar2,
  motor1,
  paramo1,
  paramo2,
  pa1,
  pa3,
  fep1,
  fep3,
  cordill,
  cordill2,
  province,
  samsonite,
  indio
} from "@/app/assets";

const projects = [
  {
    title: "Samsonite LATAM E-commerce",
    year: [2024, 2025, 2026],
    description:
      "Built reusable static sections, led cart & mini-cart business logic, and developed a product comparison tool. Integrated a new search and PLP across all brands.",
    image: samsonite,
    hoverImage: samsonite,
    tags: [
      "Next.js",
      "Builder.io",
      "Shopify",
      "Collaborater",
      "Vercel",
      "TypeScript",
      "Search & Filtering",
    ],
  },
  {
    title: "Province Electry Supply",
    year: [2024, 2025],
    description:
      "A Large B2B e-commerce platform for a major electricity provider in Canada, featuring a custom CMS, REST API, and seamless integration with third-party services — deployed on Vercel with a focus on performance and scalability.",
    image: province,
    hoverImage: province,
    tags: [
      "Next.js",
      "Builder.io",
      "Medusa",
      "Tech Lead",
      "Vercel",
      "TypeScript",
      "B2B E-commerce",
    ],
  },
  {
    title: "Festival Estéreo Picnic",
    year: [2021, 2022, 2023, 2024],
    description:
      "Biggest music festival in colombia, with more than 100.000 attendees each year. I was responsible for the entire development of the web platform.",
    image: fep1,
    hoverImage: fep3,
    tags: [
      "React",
      "REST API",
      "CMS",
      "Tech Lead",
      "AWS",
      "Animations",
      "TypeScript",
      "Micro frontends",
    ],
    nomination: { award: "Best Digital Experience", by: "Lápiz de Acero" },
  },
  {
    title: "Feria Vassar",
    year: [2022, 2023],
    description:
      "Web platform for Feria Vassar, featuring store profiles, event schedules, and multimedia galleries. I led the development of the platform, which included a custom CMS for content management and a REST API for data fetching.",
    image: vassar1.src,
    hoverImage: vassar2.src,
    tags: [
      "React",
      "REST API",
      "CMS",
      "Tech Lead",
      "AWS",
      "Animations",
      "TypeScript",
    ],
    nomination: { award: "Best Digital Experience", by: "Lápiz de Acero" },
  },
  {
    title: "Productos Arquitectónicos ",
    year: [2023],
    description:
      "E-commerce platform for Productos Arquitectónicos, a Colombian company that sells architectural products. The platform features a custom CMS for content management, a REST API for data fetching, and seamless integration with third-party services.",
    image: pa1,
    hoverImage: pa3,
    tags: ["React", "CMS", "Animations", "Backend", "Tech lead"],
  },
  {
    title: "Páramo Presenta",
    year: [2023],
    description:
      "Main page for Páramo Presenta, a Colombian company that organizes large concerts and live events.",
    image: paramo1,
    hoverImage: paramo2,
    tags: ["React", "CMS", "Backend", "AWS", "Tech lead"],
  },

  {
    title: "Festival Cordillera",
    year: [2022, 2023],
    description:
      "Web platform for Festival Cordillera, a major music event in Colombia",
    image: cordill,
    hoverImage: cordill2,
    tags: ["React", "Next.js", "Tailwind", "REST API"],
  },
  {
    title: "Indio Gurú",
    year: [2022],
    description:
      "Starup page for Indio Gurú, where I worked as a main developer, building the entire web platform from scratch",
    image: indio,
    hoverImage: indio,
    tags: ["Javascript", "Animations", "Tech lead"],
  },
  {
    title: "Baum Festival",
    year: [2021, 2022, 2023],
    description: "One of the biggest techno music festival in Colombia",
    image: baum.src,
    hoverImage: baum2,
    tags: ["React", "Tech lead", "Animations", "TypeScript"],
  },
  {
    title: "Motor Show RCN",
    year: [2021],
    description:
      "Web platform for Motor Show RCN, a major automotive event in Colombia —  multimedia galleries.",
    image: motor1.src,
    hoverImage: motor2.src,
    tags: [
      "React",
      "Map animation",
      "Micro frontends",
      "TypeScript",
      "Tech lead",
    ],
  },
  {
    title: "Claro por Colombia",
    year: [2021],
    description: "Web platform for Claro por Colombia",
    image: claro1.src,
    hoverImage: claro2.src,
    tags: [
      "React",
      "Google maps",
      "Micro frontends",
      "AWS",
      "CMS",
      "Tech lead",
    ],
  },
  {
    title: "Colombia 4.0",
    year: [2021],
    description:
      "Web platform for Colombia 4.0, a major event in Colombia focused on digital transformation and innovation.",
    image: colombia1.src,
    hoverImage: colombia2.src,
    tags: ["React", "Animations", "Multimedia", "Micro frontends"],
  },
  {
    title: "Unión Festival Digital",
    year: [2020, 2021],
    description:
      "Web platform for Unión Festival Digital, a major music event in Colombia — featuring live streaming, artist profiles, and interactive schedules.",
    image: union1.src,
    hoverImage: union2.src,
    tags: ["Javascript", "Animations", "Multimedia", "Micro frontends"],
  },
  {
    title: "Congreso Sura",
    year: [2020],
    description:
      "Web platform for Congreso Sura, a major event in Colombia focused on digital transformation in the insurance industry — featuring live streaming, session scheduling, and interactive Q&A.",
    image: sura1.src,
    hoverImage: sura2.src,
    tags: ["React", "AWS", "Tech lead"],
  },
  {
    title: 'Museum "Casa de las memorias"',
    year: [2020],
    description:
      'Interactive web experience for the Museum "Casa de las memorias" in Cali, Colombia — featuring virtual tours, historical timelines, and multimedia storytelling to engage visitors with the city\'s rich cultural heritage.',
    image: mapa.src,
    hoverImage: mapa2.src,
    tags: ["JavaScript", "Google Maps Apis"],
  },
  {
    title: "Cali Solidario",
    year: [2020],
    description:
      "Community-driven platform connecting volunteers with local social initiatives in Cali, Colombia — featuring project listings, impact tracking, and a resource library.",
    image: cali.src,
    hoverImage: cali.src,
    tags: ["Javascript", "Shopify"],
  },
];

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

const Media = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) =>
  isVideo(src) ? (
    <video src={src} autoPlay loop muted playsInline className={className} />
  ) : (
    <img src={src} alt={alt} className={className} />
  );

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-6 py-14 pt-20">
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="group flex flex-col bg-[#2a2a2a] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Media */}
            <div className="relative h-48 overflow-hidden">
              <Media
                src={project.hoverImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 z-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out"
              />
              <Media
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-100 scale-100 z-10 group-hover:opacity-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
              <div>
                <h3 className="text-lg font-semibold leading-snug">
                  {project.title}
                </h3>
                <span className="text-xs text-neutral-400">
                  {project.year.join(", ")}
                </span>
              </div>

              {"nomination" in project && project.nomination && (
                <div className="flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-amber-400 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-medium text-amber-400 leading-none">
                    Nominated · {project.nomination.award}
                    {project.nomination.by && (
                      <span className="text-amber-400/70">
                        {" "}
                        — {project.nomination.by}
                      </span>
                    )}
                  </span>
                </div>
              )}

              <p className="text-sm  leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
