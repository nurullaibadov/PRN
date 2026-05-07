'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const skills = [
  { category: "Backend & Systems", items: ["C#", ".NET Core", "ASP.NET", "Node.js", "Python", "PostgreSQL", "SQL Server", "REST APIs", "Clean Architecture", "Microservices"] },
  { category: "Frontend Excellence", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "Three.js", "GSAP"] },
  { category: "Mobile Development", items: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Mobile Security", "App Store/Play Store"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "Azure", "CI/CD", "Kubernetes", "Linux", "Swagger", "Postman"] },
];

export function Skills() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="skills" className="section-padding bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-space-grotesk tracking-tighter mb-4">{isMounted ? t('skills.title') : "My Skills"}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold font-space-grotesk mb-6 text-blue-500">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background rounded-full text-sm font-medium border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
