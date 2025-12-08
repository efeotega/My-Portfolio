"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  const projects = [
    {
      title: "Hire Smart",
      description: "Get the right candidate faster with Intelligent resume analysis with AI-powered candidate matching and screening.",
      technologies: ["AI/ML", "React", "Firebase", "NLP"],
      link: "https://hire-smart-e4245.web.app/",
      image: "/projects/hiresmart.jpg"
    },
    {
      title: "Clock In",
      description: "Employee tracking system using geofencing technology to monitor and manage workforce attendance efficiently.",
      technologies: ["Flutter", "Geofencing", "Firebase", "Maps API"],
      link: "https://clock-in-1b305.web.app/",
      image: "/projects/clockin.jpg"
    },
    {
      title: "Poetical",
      description: "A social media platform dedicated to poets where they can share, discover, and connect through poetry.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://poeticalpoems.web.app/",
      image: "/projects/poetical.jpg"
    },
    {
      title: "Carfax Deals",
      description: "Get accurate vehicle history reports from VIN numbers to make informed car purchasing decisions.",
      technologies: ["React", "Next.js", "API Integration", "TypeScript"],
      link: "https://carfaxdeals.com/",
      image: "/projects/carfax.jpg"
    },
    {
      title: "EasiRent",
      description: "Property rental platform for agents and vendors to post and manage rental properties efficiently.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Cloud Functions"],
      link: "https://easirentpropertyventures.com/",
      image: "/projects/easirent.jpg"
    },
    {
      title: "BetGenius",
      description: "Sports scores prediction platform helping users make informed betting decisions with data analytics.",
      technologies: ["React", "Sports API", "Firebase", "Machine Learning"],
      link: "https://betgeniussite.web.app/",
      image: "/projects/betgenius.jpg"
    },
    {
      title: "Numxy",
      description: "Cross-platform app for purchasing non-VOIP numbers for use across WhatsApp, Telegram, Facebook and more.",
      technologies: ["Flutter", "Dart", "Firebase", "Payment Gateway"],
      link: "https://peony-6f946.web.app/",
      image: "/projects/numxy.jpg"
    },
    {
      title: "Peepz",
      description: "Dating app that helps users meet, create forms, join clubs and build meaningful connections.",
      technologies: ["Flutter", "Firebase", "Real-time Database", "Cloud Storage"],
      link: "https://peepzdating.web.app/",
      image: "/projects/peepz.jpg"
    },
    {
      title: "Lo-e",
      description: "Location-based business directory for Mexico, fully bilingual in Spanish and English.",
      technologies: ["React", "i18n", "Maps API", "Firebase"],
      link: "https://mundotlaxcala.web.app/",
      image: "/projects/loe.jpg"
    },
    {
      title: "Kwicky",
      description: "E-Commerce platform with User and Vendor apps, Admin website, supporting 5 languages including Arabic, Bengali, English, Hindi, and Spanish.",
      technologies: ["Flutter", "React", "i18n", "Firebase", "Stripe"],
      link: "https://kwicky.ng/",
      image: "/projects/kwicky.jpg"
    }
  ];

  const skills = {
    "Languages": ["Java", "Dart", "C#", "JavaScript", "TypeScript"],
    "Frontend": ["React", "Next.js", "Flutter", "HTML/CSS", "Tailwind CSS"],
    "Backend & Tools": ["Node.js", ".NET", "REST APIs", "Firebase"],
    "AI & Automation": ["AI Integration", "Automation Tools", "Git", "CI/CD"]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg' 
          : 'bg-white/70 dark:bg-gray-900/70 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">Portfolio</a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                aria-label="Toggle menu"
              >
                <svg 
                  className="w-6 h-6 text-gray-700 dark:text-gray-300" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-2 py-1"
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-2 py-1"
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-2 py-1"
                >
                  Skills
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition px-2 py-1"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 -z-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400 text-transparent bg-clip-text animate-gradient">Efeoghene Otega</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              I code in Java, Dart, C#, JavaScript, React. I love automation with AI and I am also a private tutor for software development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium hover:scale-105 transform hover:border-blue-700"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">About Me</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">A bit about my work history</p>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Timeline</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Software Developer</h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">July 2025 - Present</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">All Good Technologies</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Mobile App Development Instructor</h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">2022 - 2024</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">NIIT Abuja</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Web Development Instructor</h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">2022 - 2024</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">NIIT Abuja</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Java Programming Instructor</h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">2022 - 2024</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">NIIT Abuja</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">UI/UX Design Instructor</h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">2022 - 2024</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">NIIT Abuja</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Java</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Flutter</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">AI Integration</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Javascript</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">UI/UX Design</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">C#</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">React</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform border border-transparent hover:border-blue-200 dark:hover:border-blue-900 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">UI/UX Design</h4>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform border border-transparent hover:border-blue-200 dark:hover:border-blue-900 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Web Development</h4>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform border border-transparent hover:border-blue-200 dark:hover:border-blue-900 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Native App Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Mobile, Web & Desktop</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform border border-transparent hover:border-blue-200 dark:hover:border-blue-900 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Cross Platform Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Mobile, Web & Desktop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">My Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A showcase of 10+ applications I've built, ranging from AI-powered platforms to e-commerce solutions and social apps.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 transform">
                <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <iframe 
                    src={project.link}
                    className="w-full h-full pointer-events-none scale-[0.5] origin-top-left transition-transform duration-300 group-hover:scale-[0.55]"
                    style={{ width: '200%', height: '200%' }}
                    title={`${project.title} preview`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 text-blue-600 dark:text-blue-300 rounded-full text-sm hover:scale-110 transform transition-transform duration-200 cursor-default shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center group/link transition-colors"
                  >
                    View Project <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Skills & Technologies</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, techs], index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {techs.map((tech, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 -z-10"></div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Want to create something amazing? I'm your guy. Get in touch.
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in touch</h3>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:efeogheneotega@gmail.com" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    efeogheneotega@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href="tel:+2347089963599" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    +234 708 996 3599
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:efeogheneotega@gmail.com" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/efeogheneotega" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition font-medium"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/efeotega" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Efeoghene Otega. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
