'use client';

import React from 'react';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Frontend Developer (Remote)",
    company: "Qwasar Silicon Valley",
    period: "Present",
    description: "Developing advanced web applications and collaborating with a global team in a remote-first environment.",
    type: "work"
  },
  {
    title: "Frontend Developer",
    company: "Vivisolis",
    period: "2024",
    description: "Building responsive and performant user interfaces for enterprise-level applications.",
    type: "work"
  },
  {
    title: "Cyber Security Intern",
    company: "Bakcell",
    period: "2024",
    description: "Gaining hands-on experience in network security, threat analysis, and infrastructure protection.",
    type: "work"
  },
  {
    title: "Frontend Developer",
    company: "Jet Academy",
    period: "2023 - 2024",
    description: "Mentoring students and developing web solutions using modern React ecosystems.",
    type: "work"
  },
  {
    title: "IT Student",
    company: "Azerbaijan Technical University (AzTU)",
    period: "2021 - 2025",
    description: "Focusing on Information Technology fundamentals and computer science.",
    type: "education"
  },
  {
    title: "Backend Development",
    company: "Code Academy",
    period: "Completed",
    description: "Comprehensive training in backend architecture, databases, and server-side logic.",
    type: "education"
  }
];

export function Experience() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-space-grotesk tracking-tighter mb-4">{isMounted ? t('experience.title') : "Work Experience"}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 before:absolute before:left-[1.35rem] before:top-2 before:bottom-[-2rem] before:w-[2px] before:bg-border last:before:hidden"
            >
              <div className="absolute left-0 top-1 p-2 rounded-full bg-blue-500 text-white z-10">
                {exp.type === 'work' && <Briefcase className="w-5 h-5" />}
                {exp.type === 'achievement' && <Trophy className="w-5 h-5" />}
                {exp.type === 'education' && <GraduationCap className="w-5 h-5" />}
              </div>
              
              <div className="glass p-8 rounded-3xl hover:bg-accent/50 transition-colors">
                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                  <h3 className="text-2xl font-bold font-space-grotesk">{exp.title}</h3>
                  <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <div className="text-lg font-medium text-blue-500 mb-4">{exp.company}</div>
                <p className="text-foreground/60 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
