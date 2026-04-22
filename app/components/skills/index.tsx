'use client'

import { motion } from 'motion/react'
import { useTranslations } from '@/app/i18n'

const philosophyIcons = [
  <svg key="clean" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 12h8M8 8h4" strokeLinecap="round" />
  </svg>,
  <svg key="perf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="scale" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>,
]

// English-only export for external use
export const skillGroups = [
  {
    icon: '🚀',
    title: 'Frontend',
    skills: [
      'React (advanced)',
      'Next.js (SSR, SSG, performance optimization)',
      'State management patterns',
      'Component architecture & design systems',
    ],
  },
  {
    icon: '⚙️',
    title: 'Performance & Architecture',
    skills: [
      'Rendering optimization',
      'Code splitting / lazy loading',
      'Core Web Vitals improvement',
      'Scalable frontend architecture',
    ],
  },
  {
    icon: '🔌',
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL (client-side)'],
  },
  {
    icon: '🧪',
    title: 'Quality & DevOps',
    skills: [
      'Testing with Jest',
      'CI/CD pipelines',
      'Git workflows',
      'Deployments with Vercel & Bitbucket',
    ],
  },
  {
    icon: '🧠',
    title: 'Leadership & Product',
    skills: [
      'Tech leadership',
      'Client communication',
      'Technical decision-making',
      'Product-oriented mindset',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

const Skills = () => {
  const { t } = useTranslations()

  return (
    <section id="skills" className="py-14 pt-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

        {/* LEFT */}
        <motion.div
          className="flex flex-col gap-8 lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Label + title + subtitle */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              {t.skills.sectionLabel}
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold leading-none text-neutral-100">
              {t.skills.titleLine1}<br />
              <span className="text-neutral-400">{t.skills.titleAccent}</span>
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {t.skills.subtitle}
            </p>
          </motion.div>

          {/* Philosophy items */}
          <div className="flex flex-col gap-6">
            {t.skills.philosophy.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-800 text-brown-400">
                  {philosophyIcons[i]}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-neutral-100">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">

          {/* Experience card */}
          <motion.div
            className="rounded-2xl bg-brown-600 p-7 flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-5xl font-bold text-white">{t.skills.experience.years}</span>
            <span className="text-xs font-semibold tracking-widest text-brown-200 uppercase">
              {t.skills.experience.label}
            </span>
            <p className="text-sm text-brown-100 leading-relaxed">
              {t.skills.experience.description}
            </p>
          </motion.div>

          {/* Tech stack card */}
          <motion.div
            className="rounded-2xl bg-neutral-800 p-7 flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              {t.skills.techStackLabel}
            </span>

            <div className="flex flex-col gap-4">
              {t.skills.groups.map((group) => (
                <div key={group.title} className="flex flex-col gap-2">
                  <span className="text-xs text-neutral-500">{group.title}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs rounded-full bg-neutral-700 text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-700 pt-4">
              <span className="text-xs font-semibold tracking-widest text-neutral-600 uppercase">
                {t.skills.techStackFooter}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Skills
