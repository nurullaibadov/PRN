'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCustomTheme } from '@/context/ThemeContext';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'ru', name: 'Russian' },
  { code: 'tr', name: 'Turkish' },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useCustomTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const navItems = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black font-space-grotesk tracking-tighter"
        >
          NI<span className="text-primary animate-pulse">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-4 border-l pl-4 border-border">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 rounded-full hover:bg-accent transition-colors"
              >
                <Languages className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 py-2 w-40 glass rounded-xl shadow-xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-500/10 transition-colors ${
                          i18n.language === lang.code ? 'text-blue-500 font-bold' : ''
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/98 backdrop-blur-2xl"
          >
            <div className="px-8 py-10 flex flex-col space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold font-space-grotesk hover:text-primary transition-colors flex justify-between items-center group"
                >
                  {item.name}
                  <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex space-x-4">
                   {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => i18n.changeLanguage(lang.code)}
                        className={`text-sm ${
                          i18n.language === lang.code ? 'text-blue-500 font-bold' : 'text-foreground/60'
                        }`}
                      >
                        {lang.code.toUpperCase()}
                      </button>
                    ))}
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-2xl bg-primary text-black transition-all hover:scale-110 active:scale-95 shadow-lg shadow-primary/20"
                >
                  {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
