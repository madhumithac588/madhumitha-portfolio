"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Search,
  BarChart3,
  Users,
  Zap,
  Globe,
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Star,
  MousePointer,
  Sparkles,
  Book,
  PenLine,
} from "lucide-react";

export default function ProfessionalPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    interface MousePosition {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Strategy & Optimization",
      description:
        "Advanced SEO methodologies that drive organic growth and sustainable visibility in competitive markets.",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Engineering",
      description:
        "Architecting lightning-fast digital experiences with Core Web Vitals optimization and advanced caching strategies.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "UX Strategy & Research",
      description:
        "Data-driven user experience design that converts visitors into loyal customers through behavioral analysis.",
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Content Strategy & Analytics",
      description:
        "Strategic content frameworks backed by comprehensive analytics and conversion optimization.",
      gradient: "from-red-500 to-orange-600",
    },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/madhumithac588" },
    {
      icon: Linkedin,
      url: "https://in.linkedin.com/in/madhumitha-c-69468428b",
    },
    { icon: Mail, url: "mailto:madhumithac588@gmail.com" },
    { icon: PenLine, url: "https://medium.com/@madhumithac588" },
  ];

  const technologies = [
    { name: "Google Analytics (GA4)", category: "Analytics", level: 92 },
    { name: "Google Search Console", category: "Analytics", level: 90 },
    { name: "Yoast SEO", category: "SEO Tools", level: 88 },
    { name: "Google Ads", category: "Advertising", level: 85 },
    { name: "Meta Ads Manager", category: "Advertising", level: 88 },
    { name: "WordPress", category: "Web & CMS", level: 90 },
    { name: "Canva", category: "Design & Creatives", level: 95 },
    { name: "Notion", category: "Content & Strategy", level: 90 },
  ];

  const achievements = [
    {
      number: "5+",
      label: "Projects Delivered",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      number: "50M+",
      label: "Organic Impressions",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Custom Cursor */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: "scale(1.5)",
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Madhumitha
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Services", "Work", "Skills", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                      currentSection === index + 1
                        ? "text-blue-400"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                    <div
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300 ${
                        currentSection === index + 1
                          ? "scale-x-100"
                          : "scale-x-0"
                      }`}
                    />
                  </a>
                )
              )}
            </div>
            <a href="#contact" className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
              Let's Talk
            </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div
          className={`text-center max-w-6xl mx-auto transition-all duration-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
            <MousePointer className="w-5 h-5 mr-3 text-blue-400" />
            <span className="text-blue-300 font-medium">Digital Marketing</span>
            <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="block text-white">I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Madhumitha
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            A{" "}
            <span className="text-blue-400 font-semibold">
              developer-strategist
            </span>{" "}
            who architects digital experiences that don't just function—they{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              captivate, convert, and create lasting impact
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
           <a href="#work">
  <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold overflow-hidden hover:scale-105 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <span className="relative flex items-center">
      Explore My Work
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </button>
</a>

            <a
              href="/resume.pdf"
              download
              className="border-2 border-gray-600 hover:border-blue-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-400/10 inline-block"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">
                  About Me
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Crafting Digital
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  My journey began in the world of code, but I discovered my
                  true passion lies at the intersection of
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    technology and human connection
                  </span>
                  . Every project is an opportunity to create something that
                  resonates.
                </p>

                <p>
                  I don't just build websites—I architect digital ecosystems
                  that tell stories, drive engagement, and deliver measurable
                  results. My developer background gives me a unique edge in
                  understanding both the{" "}
                  <span className="text-purple-400 font-semibold">
                    technical possibilities and user psychology
                  </span>
                  .
                </p>

                <p className="text-xl font-semibold text-white">
                  "How can we make this not just functional, but unforgettable?"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 ${
                    index % 2 === 0 ? "translate-y-0" : "translate-y-8"
                  }`}
                >
                  <div className="text-blue-400 mb-4">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
              <Code className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">
                What I Do
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Specialized
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming ideas into powerful digital solutions that drive
              growth and create lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:border-gray-600/50 ${
                  index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-8"
                }`}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${
                      service.gradient.includes("blue")
                        ? "#3B82F6"
                        : service.gradient.includes("purple")
                        ? "#8B5CF6"
                        : service.gradient.includes("pink")
                        ? "#EC4899"
                        : "#F59E0B"
                    }, transparent)`,
                  }}
                />

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Work Section */}
{/* Work Section */}
<section id="work" className="py-32 px-6 relative">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
        <Book className="w-4 h-4 mr-2 text-blue-400" />
        <span className="text-blue-300 text-sm font-medium">My Work</span>
      </div>

      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Featured
        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Real-world digital marketing and SEO projects that delivered measurable results across industries.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Project 1 - MVR Info */}
      <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          MVR Financial Services
        </h3>
        <a
          href="https://mvrinfo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm flex items-center mb-4"
        >
          Visit Website <ExternalLink className="ml-1 w-4 h-4" />
        </a>
        <p className="text-gray-300 leading-relaxed mb-4">
          Executed a full SEO and performance strategy for a financial services company, boosting visibility and technical site structure.
        </p>
        <p className="text-sm text-gray-400 italic">
          Gained expertise in financial keyword research, Core Web Vitals optimization, and content mapping for service pages.
        </p>
      </div>

      {/* Project 2 - Rose Petals */}
      <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
          Rose Petals – Event Planner
        </h3>
        <a
          href="https://rosepetals.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 text-sm flex items-center mb-4"
        >
          Visit Website <ExternalLink className="ml-1 w-4 h-4" />
        </a>
        <p className="text-gray-300 leading-relaxed mb-4">
          Built a conversion-focused landing page and executed on-page SEO for an events brand with a strong visual narrative.
        </p>
        <p className="text-sm text-gray-400 italic">
          Learned to balance aesthetics with performance, optimize images for speed, and use storytelling for brand impact.
        </p>
      </div>

      {/* Project 4 - New Phoenix Boating */}
      <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
          New Phoenix Boating
        </h3>
        <a
          href="https://www.newphoenixboating.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 text-sm flex items-center mb-4"
        >
          Visit Website <ExternalLink className="ml-1 w-4 h-4" />
        </a>
        <p className="text-gray-300 leading-relaxed mb-4">
          Optimized an experience-driven boating service site with visual storytelling, call-to-actions, and mobile-first SEO.
        </p>
        <p className="text-sm text-gray-400 italic">
          Learned user journey planning for service-based tourism, UX content strategy, and lead generation integration.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 backdrop-blur-sm mb-8">
              <Zap className="w-4 h-4 mr-2 text-pink-400" />
              <span className="text-pink-300 text-sm font-medium">
                Tech Stack
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Technologies &
              <span className="block bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                  <span className="text-sm text-gray-400">{tech.level}%</span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{tech.category}</p>

                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
              <Mail className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-green-300 text-sm font-medium">
                Let's Connect
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Create
              <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's collaborate on your next project and build something that
              not only looks incredible but drives real results.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form
              action="https://formspree.io/f/xkgbbzbz"
              method="POST"
              className="space-y-8"
            >
              <div className="group">
                <label className="block text-lg font-semibold text-white mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-green-400/50 focus:bg-gray-800/50 transition-all duration-300 text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label className="block text-lg font-semibold text-white mb-3">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-green-400/50 focus:bg-gray-800/50 transition-all duration-300 text-lg resize-none"
                  placeholder="Tell me about your project idea..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group relative bg-gradient-to-r from-green-500 to-teal-600 px-12 py-4 rounded-full text-lg font-semibold overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Now with proper spacing and visibility */}
      <footer className="relative z-10 border-t border-gray-800/50 py-16 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Madhumitha
            </div>
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800/50 text-center text-gray-400">
            <p className="text-lg">
              © 2025 Madhumitha.C. Designed with passion and precision. ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
