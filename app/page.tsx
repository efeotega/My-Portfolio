"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun, Moon, Menu, X, Mail, Phone,
  Linkedin, Github, ExternalLink, Code
} from "lucide-react";

// ───────────────────────────────────────────────
// Custom Brand Icons (Inline SVGs)
// ───────────────────────────────────────────────
const BrandIcons = {
  NextJs: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.8-5.8l-4.8-6.2V16h-1.4V8h1.4l4.8 6.2V8h1.4v8h-1.4zM16.4 16h-1.5l-4-5.2 4-5.2h1.5l-4 5.2 4 5.2z" />
    </svg>
  ),
  Firebase: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.89 15.672L6.255.461a.542.542 0 011.026.155l-2.008 11.234 6.784-7.447a.542.542 0 01.936.425l-2.753 11.397L19.46 5.61a.54.54 0 01.937.287L13.12 22.28a.54.54 0 01-.98 0L3.89 15.672z" />
    </svg>
  ),
  Tailwind: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.001 10.25c-1.74 0-3.056-.966-3.805-2.793-.722 1.76-2.022 2.662-3.882 2.662-1.636 0-2.858-.91-3.666-2.732.613 2.112 2.131 3.232 4.095 3.232 1.838 0 3.213-1.07 3.908-2.924.793 1.937 2.14 3.057 4.095 3.057 1.636 0 2.858-.91 3.666-2.732-.808 1.822-2.028 2.732-3.666 2.732-1.86 0-3.16-1.155-3.882-2.915-.749 1.827-2.065 2.793-3.805 2.793zm-6.058-2.585c-.958 0-1.74-.69-2.28-1.923.636 1.154 1.346 1.733 2.22 1.733.987 0 1.716-.62 2.115-1.684.512 1.144 1.258 1.817 2.28 1.817.958 0 1.74-.69 2.28-1.923-.636 1.154-1.346 1.733-2.22 1.733-.987 0-1.716-.62-2.115-1.684-.512 1.144-1.258 1.817-2.28 1.817z" />
      <path d="M18.813 18.25c-1.74 0-3.056-.966-3.805-2.793-.722 1.76-2.022 2.662-3.882 2.662-1.636 0-2.858-.91-3.666-2.732.613 2.112 2.131 3.232 4.095 3.232 1.838 0 3.213-1.07 3.908-2.924.793 1.937 2.14 3.057 4.095 3.057 1.636 0 2.858-.91 3.666-2.732-.808 1.822-2.028 2.732-3.666 2.732-1.86 0-3.16-1.155-3.882-2.915-.749 1.827-2.065 2.793-3.805 2.793zm-6.058-2.585c-.958 0-1.74-.69-2.28-1.923.636 1.154 1.346 1.733 2.22 1.733.987 0 1.716-.62 2.115-1.684.512 1.144 1.258 1.817 2.28 1.817.958 0 1.74-.69 2.28-1.923-.636 1.154-1.346 1.733-2.22 1.733-.987 0-1.716-.62-2.115-1.684-.512 1.144-1.258 1.817-2.28 1.817z" />
    </svg>
  ),
  Flutter: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 2.5L2.5 13.5l3.8 3.8 11-11v-3.8h-3.8zm-3.8 19l3.8 3.8h3.8l-5.7-5.7-1.9 1.9zM21.5 8.2l-8.3 8.3L15.1 20l10.2-10.2V6l-3.8 2.2z" />
    </svg>
  ),
  React: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.2c1.78 0 3.37.28 4.63.78C15.22 3.8 13.68 4.4 12 4.4c-1.68 0-3.22-.6-4.63-1.42 1.26-.5 2.85-.78 4.63-.78zm0 19.6c-1.78 0-3.37-.28-4.63-.78 1.41.82 2.95 1.42 4.63 1.42 1.68 0 3.22-.6 4.63-1.42-1.26.5-2.85.78-4.63.78zm5.95-3.3c-1.05 1.5-2.67 2.45-4.48 2.65.65-1.25 1.03-2.65 1.03-4.15 0-1.5-.38-2.9-1.03-4.15 1.81.2 3.43 1.15 4.48 2.65 1.1 1.55 1.1 3.45 0 5zM12 9.4c1.44 0 2.6 1.16 2.6 2.6s-1.16 2.6-2.6 2.6-2.6-1.16-2.6-2.6 1.16-2.6 2.6-2.6z" />
    </svg>
  ),
  NodeJs: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2zm0 2.1l7.8 4.5v9.1L12 22.2 4.2 17.7V8.6L12 4.1zM10.8 17h2.4v-4h3.6v-2h-3.6V9h-2.4v8z" />
    </svg>
  ),
  TypeScript: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 2v20h20V2H2zm16.5 15h-2.5v-6h-2v6H11v-6H9v-2h7.5v2zm-8.5 0H7.5v-1.5c0-1.5-.5-2-2-2h-1v-2h1c.5 0 1 .2 1 .5v1h2v-1.5c0-1.5-1-2.5-3-2.5S2.5 7.5 2.5 9v1.5c0 1.5.5 2 2 2h1v2h-1c-.5 0-1-.2-1-.5v-1h-2v1.5c0 1.5 1 2.5 3 2.5s3-1 3-2.5V17z" />
    </svg>
  ),
  JavaScript: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 2v20h20V2H2zm16.5 16h-2.5c0-1.5-1-2.5-2.5-2.5s-2.5 1-2.5 2.5v.5h-2v-.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4h.5zm-8.5 0H7.5v-5h2.5v5z" />
    </svg>
  ),
  Gemini: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.9 10.2c-.3-1.1-.9-2.1-1.7-2.9-.8-.8-1.9-1.4-3-1.6-.3-1.1-.9-2.1-1.7-2.9-.8-.8-1.9-1.4-3-1.6-1.1-.2-2.3 0-3.3.6-.9-.6-2-.9-3.1-.9-1.1 0-2.2.3-3.1.9-1.1.7-1.9 1.7-2.3 2.9-.4 1.2-.4 2.5 0 3.7.3 1.1.9 2.1 1.7 2.9.8.8 1.9 1.4 3 1.6.3 1.1.9 2.1 1.7 2.9.8.8 1.9 1.4 3 1.6 1.1.2 2.3 0 3.3-.6.9.6 2 .9 3.1.9 1.1 0 2.2-.3 3.1-.9 1.1-.7 1.9-1.7 2.3-2.9.4-1.2.4-2.5 0-3.7zM12 18.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" />
    </svg>
  ),
  GoogleMaps: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  Java: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V6h2v8z" />
    </svg>
  )
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = saved ?? (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    // Sync class (mostly redundant but safe)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // React to system theme changes (only when no manual preference saved)
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  const toggleTheme = () => {
    if (!mounted || !theme) return;

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navLinks = ['About', 'Projects', 'Skills', 'Contact'];

  const projects = [
    {
      title: "ParagonFi",
      description: "Invest. Trade. Grow. From Crypto To Stocks",
      tags: ["Crypto", "Stocks", "React", "Node.js", "Firebase", "Flutter"],
      link: "https://paragonfi-web--paragonfi-5317b.us-central1.hosted.app/",
      icon: <Code className="w-full h-full" />
    },
    {
      title: "PadiPay",
      description: "From quick transfers to bills payment, we make money move faster, smarter, and friendlier.",
      tags: ["Finance", "React", "Node.js", "Firebase", "Flutter"],
      link: "https://padipay.co",
      icon: <Code className="w-full h-full" />
    },
    {
      title: "BorrowMe",
      description: "Instant loans made easy.",
      tags: ["React", "Node.js", "Firebase", "Flutter"],
      link: "https://borrowme.com.ng/",
      icon: <Code className="w-full h-full" />
    },
    {
      title: "Carfax Deals",
      description: "Vehicle history aggregator fetching real-time data from VIN numbers to provide transparent deal analysis.",
      tags: ["Next.js", "TypeScript", "Python", "Web Scraping",],
      link: "https://carfaxdeals.com/",
      icon: <BrandIcons.NextJs className="w-full h-full" />
    },
    {
      title: "Hire Smart",
      description: "AI-powered resume analysis and candidate matching platform that streamlines the recruitment process using AI.",
      tags: ["Gemini", "React", "Firebase", "AI", "Flutter"],
      link: "https://hire-smart-e4245.web.app/",
      icon: <BrandIcons.Gemini className="w-full h-full" />
    },
    {
      title: "Clock In",
      description: "Enterprise attendance system utilizing geofencing to ensure employees are physically present when clocking in.",
      tags: ["Flutter", "Google Maps API", "Firebase"],
      link: "https://clock-in-1b305.web.app/",
      icon: <BrandIcons.GoogleMaps className="w-full h-full" />
    },
    {
      title: "EasiRent",
      description: "Comprehensive property management dashboard for landlords to track payments, tenants, and maintenance.",
      tags: ["React", "Tailwind", "Cloud Functions"],
      link: "https://easirentpropertyventures.com/",
      icon: <BrandIcons.Firebase className="w-full h-full" />
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <BrandIcons.React className="w-6 h-6" /> },
        { name: "Next.js", icon: <BrandIcons.NextJs className="w-6 h-6" /> },
        { name: "Tailwind", icon: <BrandIcons.Tailwind className="w-6 h-6" /> },
        { name: "Flutter", icon: <BrandIcons.Flutter className="w-6 h-6" /> },
        { name: "TypeScript", icon: <BrandIcons.TypeScript className="w-6 h-6" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <BrandIcons.NodeJs className="w-6 h-6" /> },
        { name: "Firebase", icon: <BrandIcons.Firebase className="w-6 h-6" /> },
        { name: "Java", icon: <BrandIcons.Java className="w-6 h-6" /> },
      ]
    },
    {
      title: "Essentials",
      skills: [
        { name: "JavaScript", icon: <BrandIcons.JavaScript className="w-6 h-6" /> },
        { name: "Git", icon: <Github className="w-6 h-6" /> },
        { name: "AI Integration", icon: <BrandIcons.Gemini className="w-6 h-6" /> },
      ]
    }
  ];

  if (!mounted || !theme) {
    return <div className="min-h-screen bg-white dark:bg-[#030712]" />;
  }

  return (
    <div className={`
      min-h-screen
      bg-[var(--color-background)]
      text-[var(--color-foreground)]
      transition-colors duration-300
      font-sans
      selection:bg-blue-600 selection:text-white
    `}>

      {/* Background Decor Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/5 dark:bg-blue-600/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/5 dark:bg-purple-600/4 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-[var(--color-background)]/95 dark:bg-[var(--color-background)]/95 backdrop-blur-xl border-b border-[var(--color-divider)] shadow-sm'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 bg-[var(--color-background)]/95 dark:bg-[var(--color-background)]/95">
            <a href="#" className="text-2xl font-bold tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group">
              EFE OTEGA
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--color-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-[var(--color-foreground)]"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--color-foreground)]"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[var(--color-background)] border-b border-[var(--color-divider)] overflow-hidden"
            >
              <div className="px-4 py-6 space-y-5">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-[var(--color-text-primary)] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-block px-5 py-2 mb-8 rounded-full border border-blue-200 dark:border-transparent bg-blue-600 dark:bg-blue-950/40 text-blue-700 dark:text-white text-sm font-semibold tracking-wide uppercase">
            Full Stack Developer
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8 text-[var(--color-text-primary)]">
            Building digital <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              experiences that matter.
            </span>
          </h1>
          <p className="md:text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            I’m Efeoghene Otega, a software developer specializing in web development, mobile apps, backends, and AI integration.
            I craft accessible, pixel-perfect, and performant applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="#projects"
              className="w-full sm:w-auto px-9 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-9 py-4 bg-white dark:bg-slate-800 border border-[var(--color-border)] hover:border-blue-500 dark:hover:border-blue-500 text-[var(--color-text-primary)] dark:text-white rounded-xl font-semibold transition-all hover:bg-[var(--color-hover)] flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" /> Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--color-text-primary)]">
                About Me
              </h2>
              <div className="space-y-7 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                <p className="text-[16px] md:text-xl">
                  I'm a passionate software developer with a knack for solving complex problems.
                  My journey began with a curiosity for how things work, which led me to the world of coding.
                </p>
                <p className="text-[16px] md:text-xl">
                  Currently, I work <span className="font-semibold text-blue-600 dark:text-blue-400">Freelance</span>,
                  where I focus on sharpening my skills, honing them to make better future-proof applications.
                </p>
                <p className="text-[16px] md:text-xl">
                  When I'm not coding.....I'm still thinking about writing code.
                  Taking breaks with nature documentaries.
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="mt-20 pt-8 text-3xl border-t border-[var(--color-divider)] md:text-5xl font-bold mb-8 text-[var(--color-text-primary)]">
                  Professional Summary
                </h2>
                <div className="flex flex-wrap gap-12">

                  <div>
                    <h4 className="text-2xl md:text-5xl font-bold text-[var(--color-text-primary)]">5+</h4>
                    <p className="text-[var(--color-text-muted)] mt-1">Years Exp.</p>
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-5xl font-bold text-[var(--color-text-primary)]">10+</h4>
                    <p className="text-[var(--color-text-muted)] mt-1">Projects</p>
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-5xl font-bold text-[var(--color-text-primary)]">2,000+</h4>
                    <p className="text-[var(--color-text-muted)] mt-1">Commits</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-5">Featured Work</h2>
            <p className="text-[var(--color-text-secondary)] text-[16px] md:text-xl max-w-2xl mx-auto text-lg">
              A selection of my recent work, ranging from everyday office software to enterprise financial software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/15 dark:hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
              >
                <div className="relative w-full aspect-[5/3] sm:aspect-video bg-slate-50 dark:bg-slate-950/70 border-b border-[var(--color-border)] overflow-hidden">
                  <iframe
                    src={project.link}
                    title={`${project.title} live preview`}
                    loading="lazy"
                    allow="fullscreen"
                    className="absolute inset-0 w-full h-full border-0 scale-[1] origin-top-left pointer-events-none"
                    sandbox="allow-scripts allow-same-origin"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-5">
                    <ExternalLink className="w-7 h-7 text-white drop-shadow-lg" />
                  </div>
                </div>

                <div className="p-4 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-2xl mt-4 font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[var(--color-text-secondary)] text-[14px] md:text-xl mb-6 flex-grow text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1 bg-[var(--color-hover)] text-[var(--color-text-muted)] rounded-full text-xs font-medium border border-[var(--color-border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-y border-[var(--color-divider)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">Technical Arsenal</h2>
            <p className="text-[var(--color-text-secondary)] md:text-lg">
              My expertise spans the entire development lifecycle, from robust backend systems to immersive frontend experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[var(--color-hover)] dark:bg-slate-800/40 rounded-2xl p-8 border border-[var(--color-border)]"
              >
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-7 flex items-center gap-3">
                  <span className="w-2.5 h-9 bg-blue-500 rounded-full"></span>
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-4 group">
                      <div className="text-3xl text-[var(--color-text-muted)] group-hover:text-blue-500 transition-colors w-9 h-9 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-[var(--color-text-primary)] text-lg">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 sm:p-12 text-center text-white shadow-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to start a project?</h2>
              <p className="text-blue-100 md:text-lg mb-10 max-w-2xl mx-auto">
                I'm currently available for freelance projects and open to new opportunities.
                Let's discuss how we can build something great together.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="mailto:efeogheneotega@gmail.com"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <a
                  href="tel:+2347089963599"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-700/50 border border-blue-400/30 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  Call Me
                </a>
              </div>

              <div className="mt-12 flex justify-center gap-6">
                <a href="https://linkedin.com/in/efeogheneotega" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/efeotega" target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
         
          <div className="mt-8 flex gap-8 text-sm text-[var(--color-text-secondary)]">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{link}</a>
            ))}
          </div>
           <div className="text-center md:text-left">
            <p className="text-sm text-[var(--color-text-muted)] mt-2">
              © {new Date().getFullYear()} Efeoghene Otega. Built with React & Tailwind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}