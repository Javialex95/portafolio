"use client";

import { useEffect, useState } from "react";
import { useTranslations, type Lang } from "@/app/i18n";

const Header = () => {
  const { lang, setLang, t } = useTranslations();
  const [activeSection, setActiveSection] = useState("projects");

  const navLinks = [
    { label: t.header.techStack, href: "#skills" },
    { label: t.header.work, href: "#projects" },
  ];

  useEffect(() => {
    const sectionIds = ["skills", "projects"];

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "0% 0px 0% 0px" },
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b border-indigo-900/50">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <span className="text-white font-bold tracking-widest uppercase text-sm select-none">
          {t.header.logo}
        </span>

        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`text-sm transition-colors pb-1 ${
                    isActive
                      ? "text-white border-b border-indigo-500"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side: lang switcher + connect */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs">
            {(["en", "es"] as Lang[]).map((l, i) => (
              <div key={l} className="flex items-center gap-1">
                {i > 0 && (
                  <span className="text-zinc-700 select-none">|</span>
                )}
                <button
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-0.5 rounded transition-colors uppercase font-semibold tracking-wider ${
                    lang === l
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {l}
                </button>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-semibold px-5 py-2 rounded-lg"
          >
            {t.header.connect}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
