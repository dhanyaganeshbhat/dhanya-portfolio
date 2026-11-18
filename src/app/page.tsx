"use client";

import { useState } from "react";

const skills = [
  "C Programming",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Problem Solving",
];

const projects = [
  {
    title: "Smart City Explorer",
    description:
      "A digital platform to explore city infrastructure, civic utilities, and real-time public services.",
    tech: "Next.js · TypeScript",
    link: "#",
    github: "#",
  },
  {
    title: "EcoTrack",
    description:
      "A platform to understand, monitor, and calculate personal carbon footprint and environmental impact.",
    tech: "React · JavaScript",
    link: "#",
    github: "#",
  },
  {
    title: "Student Hub",
    description:
      "A comprehensive academic dashboard to organize coursework, notes, schedules, and college resources.",
    tech: "Next.js · CSS",
    link: "#",
    github: "#",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070816] text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          background: #070816;
        }
        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #22d3ee);
          -webkit-background-clip: text;
          color: transparent;
        }
        .glass {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-black tracking-wider">
            DHANYA<span className="text-violet-400">.</span>
          </a>

          <button
            className="text-2xl text-gray-300 md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
            <a href="#home" className="transition hover:text-violet-400">Home</a>
            <a href="#about" className="transition hover:text-violet-400">About</a>
            <a href="#skills" className="transition hover:text-violet-400">Skills</a>
            <a href="#projects" className="transition hover:text-violet-400">Projects</a>
            <a href="#contact" className="transition hover:text-violet-400">Contact</a>
          </div>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden bg-[#070816]">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-gray-300 transition hover:text-violet-400"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center px-6 pt-24">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px] pointer-events-none" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-7 inline-block rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-semibold text-violet-300">
              ● FIRST YEAR CSE STUDENT
            </p>

            <p className="text-lg text-gray-400">Hello, I&apos;m</p>

            <h1 className="mt-3 text-6xl font-black leading-tight sm:text-7xl">
              Dhanya
              <br />
              <span className="gradient-text">Bhat.</span>
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-gray-200">
              Aspiring Software Engineer
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-400">
              Exploring technology, building creative projects and turning
              ideas into meaningful digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:opacity-95"
              >
                Explore My Work ↗
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-7 py-3 font-medium transition hover:border-violet-400 hover:text-violet-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 shadow-2xl">
            <div className="rounded-2xl bg-[#0b0d20] p-7">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono text-gray-500">DEVELOPER.TS</p>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>
              <div className="mt-7 font-mono text-sm leading-9 text-gray-400">
                <p><span className="text-violet-400">const</span> developer = {"{"}</p>
                <p>&nbsp;&nbsp;name: <span className="text-green-300">&quot;Dhanya&quot;</span>,</p>
                <p>&nbsp;&nbsp;role: <span className="text-green-300">&quot;CSE Student&quot;</span>,</p>
                <p>&nbsp;&nbsp;passion: <span className="text-green-300">&quot;Coding&quot;</span>,</p>
                <p>&nbsp;&nbsp;dream: <span className="text-green-300">&quot;Build the future&quot;</span></p>
                <p>{"}"};</p>
              </div>
              <div className="mt-7 rounded-xl bg-violet-400/10 p-4 text-sm font-medium text-violet-300">
                Learning. Building. Growing. ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold tracking-widest text-violet-400">01 / ABOUT ME</p>
        <h2 className="mt-4 text-4xl font-bold">
          More than just <span className="gradient-text">code.</span>
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="leading-8 text-gray-400 text-base sm:text-lg">
            I am a Computer Science and Engineering student at Bangalore
            Institute of Technology. I enjoy learning how technology works
            and creating solutions to real-world problems. Every project is
            an opportunity to grow, collaborate, and bring creative ideas to life.
          </p>
          <div className="glass rounded-2xl p-7 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold">MY FOCUS</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Building a better tomorrow.</h3>
            <p className="mt-4 text-gray-400">Software development · Innovation · Continuous Learning</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white/[.02] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-widest text-violet-400">02 / SKILLS</p>
          <h2 className="mt-4 text-4xl font-bold">
            My tech <span className="gradient-text">toolkit.</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="glass rounded-xl p-5 text-center transition hover:-translate-y-1 hover:border-violet-500/40"
              >
                <p className="mb-2 text-xs font-mono text-violet-400">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </p>
                <p className="font-semibold text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold tracking-widest text-violet-400">03 / PROJECTS</p>
        <h2 className="mt-4 text-4xl font-bold">
          Featured <span className="gradient-text">creations.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          A selection of projects where I experiment with modern technologies and turn concepts into practical applications.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-7 flex flex-col justify-between transition duration-300 hover:-translate-y-1.5 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-600/10"
            >
              <div>
                <span className="text-xs font-mono text-violet-400">
                  PROJECT 0{idx + 1}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-violet-300">
                  {project.tech}
                </span>
                <a
                  href={project.link}
                  className="text-xs font-semibold text-gray-300 hover:text-white transition"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white/[.02] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-widest text-violet-400">04 / CONTACT</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let&apos;s build something <span className="gradient-text">together.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400 leading-relaxed">
            I am always open to exploring new opportunities, discussing project ideas, or simply connecting with fellow developers and engineers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dhanyabhat@example.com"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:opacity-95"
            >
              Say Hello 👋
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl px-7 py-3.5 font-medium transition hover:border-violet-400 hover:text-violet-300"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl px-7 py-3.5 font-medium transition hover:border-violet-400 hover:text-violet-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Dhanya Bhat. All rights reserved.</p>
          <p className="font-mono text-xs text-gray-500">
            Designed &amp; Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
