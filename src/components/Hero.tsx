'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileDown, Send, Mail } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-gradient -z-20 opacity-50" />

      {/* Floating particles or shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[10%] w-12 h-12 border-2 border-blue-500/20 rounded-lg -z-10 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[10%] w-16 h-16 border-2 border-purple-500/20 rounded-full -z-10 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 mb-6 w-fit px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Available for new projects</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-bold mb-4 tracking-[0.4em] uppercase text-xs"
          >
            {isMounted ? t('hero.greeting') : "Architecting Digital Experiences"}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-space-grotesk tracking-tighter mb-8 leading-[0.85] drop-shadow-sm"
          >
            Nurulla <br />
            <span className="gradient-text">Ibadov</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-lg leading-relaxed border-l-4 border-primary pl-6 md:pl-8"
          >
            <span className="text-foreground font-extrabold">Senior Software & Mobile Developer</span>. 
            Crafting high-performance <span className="text-primary">iOS/Android</span> ecosystems and scalable <span className="text-secondary font-bold">Full-Stack</span> solutions. 
            Merging artistic design with engineering excellence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              <FileDown className="w-5 h-5" />
              {isMounted ? t('hero.downloadResume') : "Download Resume"}
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
            >
              <Send className="w-5 h-5" />
              {isMounted ? t('hero.contactMe') : "Contact Me"}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 mt-12"
          >
            {[
              { icon: (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>, href: "https://github.com/nurullaibadov" },
              { icon: (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>, href: "https://www.linkedin.com/in/nurulla-ibadov-7971732a5/" },
               { icon: (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, href: "https://www.instagram.com/1badovic/" },
              { icon: Mail, href: "mailto:ibadnurulla@gmail.com" }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="text-foreground/40 hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-xl"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative group perspective-1000"
        >
          <div className="absolute -inset-6 bg-gradient-to-r from-primary via-secondary to-primary rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
          <div className="relative w-full aspect-[4/5] max-w-[450px] mx-auto overflow-hidden rounded-[2.5rem] border-2 border-primary/20 shadow-2xl group shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Image
              src="/images/NIKO.png"
              alt="Nurulla Ibadov"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
          </div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden lg:block border-primary/20 shadow-[0_0_20px_rgba(0,210,255,0.2)]"
          >
            <div className="text-3xl font-bold font-space-grotesk tracking-tighter text-primary">3+</div>
            <div className="text-sm text-foreground/60">Years of Experience</div>
          </motion.div>

          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -top-6 -left-6 glass p-6 rounded-2xl hidden lg:block border-primary/20 shadow-[0_0_20px_rgba(0,210,255,0.2)]"
          >
            <div className="text-3xl font-bold font-space-grotesk tracking-tighter text-primary">139</div>
            <div className="text-sm text-foreground/60">GitHub Repos</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
