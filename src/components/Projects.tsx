'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "MetroFLOW",
    description: "Enterprise C# application for managing metro flow data and predictive analytics.",
    tech: ["C#", ".NET", "SQL Server"],
    github: "https://github.com/nurullaibadov/MetroFLOWWWWWWWWWw",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Hackathon Mobile App",
    description: "Cross-platform mobile application developed for high-stakes competition using React Native.",
    tech: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/nurullaibadov/HackathonMobileAPP",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Subway API",
    description: "High-performance RESTful API for subway system management and tracking.",
    tech: ["C#", "ASP.NET Core", "REST API"],
    github: "https://github.com/nurullaibadov/SubwayApi",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Artful",
    description: "A modern platform built with TypeScript for digital art showcasing and curation.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/nurullaibadov/artful",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "DocAI",
    description: "Intelligent document processing and analysis tool leveraging AI models.",
    tech: ["TypeScript", "OpenAI", "Node.js"],
    github: "https://github.com/nurullaibadov/DocAI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "OnlineCompilerAPI",
    description: "API-driven online code execution engine supporting multiple programming languages.",
    tech: ["C#", "Docker", "API"],
    github: "https://github.com/nurullaibadov/OnlineCompilerAPI",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "CleanClaudeAPI",
    description: "Optimized wrapper and API integration for Claude AI models with clean architecture.",
    tech: ["C#", "AI", "Clean Architecture"],
    github: "https://github.com/nurullaibadov/CleanClaudeAPI",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ChatgptAPI",
    description: "Custom integration for OpenAI's GPT models with specialized prompt handling.",
    tech: ["C#", ".NET Core", "OpenAI"],
    github: "https://github.com/nurullaibadov/ChatgptAPI",
    image: "https://images.unsplash.com/photo-1675557009875-436f595b1897?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "TwitterAPI",
    description: "Social media automation and data extraction tool using Twitter's developer API.",
    tech: ["C#", "Social Media API"],
    github: "https://github.com/nurullaibadov/TwitterAPI",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "LiknedinAPI",
    description: "B2B integration tool for professional networking data management.",
    tech: ["C#", "LinkedIn API", "Business Logic"],
    github: "https://github.com/nurullaibadov/LiknedinAPI",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "BinanceAPI",
    description: "Cryptocurrency trading bot and market data analysis tool for Binance.",
    tech: ["C#", "Crypto", "WebSockets"],
    github: "https://github.com/nurullaibadov/BinanceAPI",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "NetflixAPI",
    description: "Media catalog and recommendation system simulation using external APIs.",
    tech: ["C#", "Media API", "JSON Serialization"],
    github: "https://github.com/nurullaibadov/NetflixAPI",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "SpotifyAPI",
    description: "Music streaming metadata and playlist management tool.",
    tech: ["C#", "Spotify SDK", "OAuth2"],
    github: "https://github.com/nurullaibadov/SpotifyAPI",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "InstagramAPI",
    description: "Image processing and social media integration tool for Instagram features.",
    tech: ["C#", "Image Processing", "REST"],
    github: "https://github.com/nurullaibadov/InstagramAPI",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Cineverse",
    description: "Modern cinematic discovery platform for movie enthusiasts.",
    tech: ["TypeScript", "Next.js", "TMDB API"],
    github: "https://github.com/nurullaibadov/Cineverse",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "FitnessAPIii",
    description: "Health tracking and workout management API for fitness applications.",
    tech: ["C#", "PostgreSQL", "Unit Testing"],
    github: "https://github.com/nurullaibadov/FitnessAPIii",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "BattleShipClean",
    description: "A clean architecture implementation of the classic BattleShip game.",
    tech: ["C#", "Clean Architecture", "OOP"],
    github: "https://github.com/nurullaibadov/BattleShipClean-",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Npotify",
    description: "Personal music library and player with optimized loading and playback.",
    tech: ["TypeScript", "React", "Audio API"],
    github: "https://github.com/nurullaibadov/Npotify-",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Subway Full Auto",
    description: "Real-time automated subway monitoring and operation system.",
    tech: ["C#", "Entity Framework", "WebSockets"],
    github: "https://github.com/nurullaibadov/SubwayFullAuto",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "MetroFlowa",
    description: "Frontend interface for the MetroFlow ecosystem with optimized performance.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/nurullaibadov/MetroFlowa",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
  }
];

export function Projects() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState("All");

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = ["All", "Mobile", "C#", "TypeScript", "AI"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => 
        p.tech.some(t => t.includes(activeCategory)) || 
        p.title.includes(activeCategory)
      );

  return (
    <section id="projects" className="section-padding bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-space-grotesk tracking-tighter mb-4">{isMounted ? t('projects.title') : "Featured Projects"}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-black" 
                    : "bg-background border border-border hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" className="p-3 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold font-space-grotesk mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/60 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-bold uppercase tracking-wider text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
