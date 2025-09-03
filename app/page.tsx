/* eslint-disable @next/next/no-img-element */
"use client";

import {
  experiences,
  INTIAL_SECTION,
  projects,
  SECTIONS_LIST,
} from "@/lib/constants";
import {
  Calendar,
  ChevronDown,
  Cloud,
  Code,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(INTIAL_SECTION);

  useEffect(() => {
    const handleScroll = () => {
      const current = SECTIONS_LIST.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Akshay Lokapur</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-black border-b-2 border-black"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-black"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Frontend Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              2+ years of experience building exceptional web applications with
              React.js, Next.js,Vue.js and modern technologies. Team leader with
              full-stack expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors font-medium"
              >
                Get In Touch
              </button>
            </div>
            <div className="animate-bounce">
              <ChevronDown size={32} className="mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Professional Background
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 2 years of professional experience in frontend
                  development, I specialize in building scalable,
                  high-performance web applications using React.js, Next.js, and
                  modern JavaScript frameworks. My expertise lies in crafting
                  intuitive user interfaces, reusable component libraries, and
                  optimized state management solutions that elevate user
                  experience.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Beyond frontend, I bring full-stack proficiency with Node.js,
                  Express.js, and MongoDB, enabling me to contribute across the
                  entire development lifecycle — from API design to deployment.
                  I have also integrated real-time communication features with
                  Socket.IO and worked with Vue.js on dynamic web solutions,
                  making me versatile across tech stacks.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I’ve had the opportunity to lead development teams, driving
                  architecture decisions, mentoring junior developers, and
                  delivering projects from conception to production. Notable
                  projects include building an AI-powered resume platform, a
                  UK-based admin panel dashboard, and a large-scale election
                  data management system.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I hold both Engineering and Master’s degrees in Technology,
                  providing a solid foundation in computer science principles,
                  complemented by real-world industry experience. I’m passionate
                  about building impactful digital products, solving complex
                  frontend challenges, and growing into a well-rounded
                  full-stack engineer and leader.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Available Worldwide</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Frontend Expertise */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Code className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Frontend Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      React.js, Next.js, Vue.js, TypeScript, Redux, Tailwind
                      CSS, Material UI
                    </p>
                  </div>
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Server className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Backend Skills</h4>
                    <p className="text-gray-600 text-sm">
                      Node.js, Express.js, MongoDB, PostgreSQL, REST APIs
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Users className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Leadership</h4>
                    <p className="text-gray-600 text-sm">
                      Team Lead, Mentorship, Project Management
                    </p>
                  </div>
                </div>
              </div>

              {/* DevOps & Deployment */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Cloud className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">DevOps & Deployment</h4>
                    <p className="text-gray-600 text-sm">
                      Docker, Kubernetes, AWS, Vercel, Netlify, Git
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Settings className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Development Practices</h4>
                    <p className="text-gray-600 text-sm">
                      OOP, DSA, File-based Routing, SSR, Performance
                      Optimization
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic & Research (Optional) */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Cpu className="text-black" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Academic & Research</h4>
                    <p className="text-gray-600 text-sm">
                      Python (Django), Blockchain (Ganache, Ethereum), AI (CNN,
                      Web3, ChatGPT)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on creating
              scalable, maintainable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h4 className="font-bold text-lg mb-2">{tech.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{tech.category}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-right">
                    {tech.level}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  <div className="absolute left-6 w-4 h-4 bg-black rounded-full mt-2"></div>
                  <div className="ml-16 bg-white p-8 rounded-xl shadow-lg w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-gray-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of recent projects demonstrating my technical skills
              and problem-solving abilities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        target="_blank"
                      >
                        <ExternalLink size={20} className="text-black" />
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} className="text-black" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let&apos;s discuss how I can contribute to your next project or
              team
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I&apos;m always interested in new opportunities, challenging
                  projects, and collaborating with talented teams. Whether you
                  have a project in mind or just want to connect, I&apos;d love
                  to hear from you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Mail size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">akshaylokapur@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Linkedin size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-gray-600">
                        linkedin.com/in/akshay-lokapur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Github size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-gray-600">github.com/01aksh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-gray-400">
              © 2025 Akshay Lokapur · Built with Next.js & Tailwind CSS
            </p>
            <p className="text-gray-400">
              Connect with me on
              <a
                href="https://linkedin.com/in/akshay-lokapur"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                {" "}
                LinkedIn
              </a>{" "}
              ·
              <a
                href="https://github.com/01aksh"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                {" "}
                GitHub
              </a>{" "}
              ·
              <a
                href="mailto:akshaylokapur@gmail.com"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                {" "}
                Email
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
