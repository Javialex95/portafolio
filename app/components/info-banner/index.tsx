"use client";

import { motion } from "motion/react";
import { useTranslations } from "@/app/i18n";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

const InfoBanner = () => {
  const { t } = useTranslations();
  const tags = ["React", "Next.js", "Node.js", "TypeScript"];

  return (
    <motion.div
      className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] overflow-hidden mt-10 px-8 md:px-12 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Left */}
        <div className="flex flex-col gap-5 max-w-xl">
          {/* Status */}
          <motion.span
            className="flex items-center gap-2 text-zinc-400 text-xs font-medium tracking-[0.18em] uppercase"
            {...fadeUp(0.1)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
            {t.hero.status}
          </motion.span>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tight"
            {...fadeUp(0.2)}
          >
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </motion.h1>

          {/* Subtitle with line */}
          <motion.div className="flex items-center gap-3" {...fadeUp(0.25)}>
            <span className="text-blue-400 font-semibold text-base whitespace-nowrap">
              {t.hero.subtitle}
            </span>
            <span className="h-px flex-1 bg-zinc-700" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-zinc-400 text-sm leading-relaxed"
            {...fadeUp(0.3)}
          >
            {t.hero.description}
          </motion.p>

          {/* Tags */}
          <motion.div className="flex gap-2 flex-wrap" {...fadeUp(0.4)}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-zinc-700 text-zinc-300 rounded-full px-4 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="self-start mt-1 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white px-6 py-2.5 rounded-full text-sm font-medium"
            {...fadeUp(0.5)}
          >
            {t.hero.cta} <span aria-hidden>→</span>
          </motion.a>
        </div>

        {/* Right — Avatar */}
        <motion.div
          className="hidden md:flex flex-col items-center gap-4 shrink-0"
          {...fadeUp(0.35)}
        >
          <div className="w-52 h-52 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="100" fill="#1e1e1e" />
              <circle cx="100" cy="78" r="32" fill="#3f3f3f" />
              <ellipse cx="100" cy="160" rx="50" ry="36" fill="#3f3f3f" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-white font-semibold text-sm">Javier Lopez</p>
            <p className="text-zinc-500 text-xs">{t.hero.subtitle}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfoBanner;
