"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Tech Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

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
          Software Engineer
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

        {/* Connect button */}
        <a
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-semibold px-5 py-2 rounded-lg"
        >
          Connect
        </a>
      </nav>
    </header>
  );
};

export default Header;
