'use client';

import React from 'react';
import { motion } from 'framer-motion';

const tech = [
  "React", "Next.js", "TypeScript", ".NET Core", "C#", "React Native", "Flutter", 
  "Swift", "Kotlin", "Docker", "Azure", "PostgreSQL", "Tailwind CSS", "Framer Motion",
  "Node.js", "Python", "Kubernetes", "Redis", "Firebase", "GraphQL"
];

export function TechStack() {
  return (
    <div className="py-20 bg-accent/10 overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.5em] text-primary/50">Modern Stack</h3>
      </div>
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex gap-20 py-4"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...tech, ...tech].map((item, idx) => (
            <span
              key={idx}
              className="text-3xl sm:text-4xl md:text-6xl font-bold font-space-grotesk text-foreground/10 hover:text-primary transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
