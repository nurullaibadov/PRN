'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Shield, Zap, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable and robust web applications using modern stacks like React, Next.js, and .NET."
  },
  {
    icon: Globe,
    title: "Web Optimization",
    description: "Improving website performance, SEO, and user experience for higher engagement and speed."
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Designing efficient database schemas and optimizing queries for high-traffic applications."
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Implementing security best practices, vulnerability assessments, and infrastructure protection."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile experiences with React Native and Flutter."
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    description: "Deploying and managing applications on cloud platforms like Azure and AWS."
  }
];

export function Services() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="services" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-space-grotesk tracking-tighter mb-4">{isMounted ? t('services.title') : "Expertise & Services"}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] group hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
