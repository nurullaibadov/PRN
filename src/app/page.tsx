'use client';

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      <CustomCursor />
      <ScrollToTop />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Header />
      <Hero />
      <Services />
      <TechStack />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-12 border-t border-border text-center text-foreground/40 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-space-grotesk font-bold text-foreground">
            NI<span className="text-primary">.</span>
          </div>
          <p>© {new Date().getFullYear()} Nurulla Ibadov. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <div className="flex gap-6">
            <a href="https://github.com/nurullaibadov" target="_blank" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/nurulla-ibadov-7971732a5/" target="_blank" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/1badovic/" target="_blank" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
