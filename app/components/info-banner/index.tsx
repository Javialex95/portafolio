/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useTranslations } from "@/app/i18n";
import { profile } from "@/app/assets";

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
            <span className="text-brown-400 font-semibold text-base whitespace-nowrap">
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
            className="self-start mt-1 flex items-center gap-2 bg-brown-600 hover:bg-brown-500 transition-colors text-white px-6 py-2.5 rounded-full text-sm font-medium"
            {...fadeUp(0.5)}
          >
            {t.hero.cta} <span aria-hidden>→</span>
          </motion.a>
        </div>

        {/* Right — Avatar */}
        <motion.div
          className="hidden md:flex flex-col items-center gap-8 shrink-0"
          {...fadeUp(0.35)}
        >
          <div className="relative flex items-end justify-center overflow-visible ">
            <img
              src={profile.src}
              alt="profile"
              className="
      h-auto
      w-auto
      max-h-96
      object-contain
      brightness-95
      contrast-105
      drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
    "
            />

            {/* Fade solo en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-black via-black/70 to-transparent" />
          </div>
          <div className="text-center">
            <p className="text-white font-semibold text-3xl">Javier Lopez</p>
            <p className="text-zinc-500 text-xs">{t.hero.subtitle}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfoBanner;
