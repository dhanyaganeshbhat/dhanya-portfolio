"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  ExternalLink,
  Github,
  FolderGit2,
  Code2,
  Layers,
  Sparkles,
  PlusCircle,
  ArrowRight,
  Terminal,
  Globe,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Web Development" | "Programming" | "Other Projects";
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  isPlaceholder?: boolean;
}

const projectsList: Project[] = [
  {
    id: "smart-city",
    title: "Smart City Explorer",
    category: "Web Development",
    description:
      "A digital platform to explore city infrastructure, civic utilities, transit routes, and public services with interactive maps and clean dashboards.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/dhanyaganeshbhat",
    featured: true,
  },
  {
    id: "ecotrack",
    title: "EcoTrack Environmental Monitor",
    category: "Web Development",
    description:
      "A responsive web platform designed to analyze personal and community environmental footprint, offering carbon emission insights and sustainability goals.",
    tech: ["React", "JavaScript", "CSS3", "Chart.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/dhanyaganeshbhat",
    featured: true,
  },
  {
    id: "student-hub",
    title: "Student Academic Hub",
    category: "Web Development",
    description:
      "An integrated student dashboard for engineering undergraduates to organize semester coursework, track assignment deadlines, and share academic resources.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/dhanyaganeshbhat",
    featured: false,
  },
  {
    id: "c-data-structures",
    title: "Algorithmic Data Structures Engine",
    category: "Programming",
    description:
      "A modular C programming suite implementing core data structures (Linked Lists, Binary Trees, Stacks, Queues, Graphs) with dynamic memory tracking.",
    tech: ["C Language", "Valgrind", "Pointers", "Algorithms"],
    liveUrl: "#",
    githubUrl: "https://github.com/dhanyaganeshbhat",
    featured: true,
  },
  {
    id: "python-automation",
    title: "Utility Automation & Scripting Suite",
    category: "Programming",
    description:
      "A collection of Python scripts developed for automated file organization, batch renaming, data parsing, and academic schedule reminders.",
    tech: ["Python", "File I/O", "CLI", "Automation"],
    liveUrl: "#",
    githubUrl: "https://github.com/dhanyaganeshbhat",
    featured: false,
  },
  {
    id: "placeholder-1",
    title: "Upcoming Project: AI / ML Explorer",
    category: "Other Projects",
    description:
      "A planned machine learning project exploring data analysis, predictive models, and interactive visualizations. Development commencing soon.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-Learn"],
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    title: "Upcoming Project: Full-Stack App",
    category: "Web Development",
    description:
      "A full-stack database-driven application with authentication, RESTful API endpoints, and cloud storage currently in design phase.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    title: "Upcoming Project: Systems Utility",
    category: "Programming",
    description:
      "A low-level systems programming utility focusing on multi-threading, socket networking, or custom memory allocators in C.",
    tech: ["C", "POSIX Threads", "Sockets", "Linux"],
    isPlaceholder: true,
  },
];

const categories = ["All", "Web Development", "Programming", "Other Projects"] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <SectionHeader
        badge="03 / PORTFOLIO"
        title="Featured Projects &"
        highlight="Creations"
        subtitle="A curated showcase of software applications, algorithms, and engineering experiments I've built and am actively developing."
      />

      {/* ── CATEGORY FILTER BUTTONS ────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-hover
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 border ${
                isActive
                  ? "bg-[#D6C29A] text-[#080808] border-[#D6C29A] font-semibold shadow-[0_0_20px_rgba(214,194,154,0.3)]"
                  : "bg-[#111111]/70 text-neutral-400 border-[#242424] hover:border-[#D6C29A]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ── PROJECTS GRID ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredProjects.map((project, idx) => {
          const isPlaceholder = project.isPlaceholder;

          return (
            <div
              key={project.id}
              className={`glass rounded-2xl p-7 border flex flex-col justify-between group transition-all duration-300 ${
                isPlaceholder
                  ? "border-dashed border-[#D6C29A]/20 bg-[#0d0d0d]/60 opacity-80 hover:opacity-100 hover:border-[#D6C29A]/40"
                  : "border-[#D6C29A]/20 hover:-translate-y-2 hover:border-[#D6C29A]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(214,194,154,0.12)]"
              }`}
            >
              <div>
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#D6C29A]/20 bg-[#141414] text-[#D6C29A]">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider text-[#F1E4C8] bg-[#D6C29A]/10 border border-[#D6C29A]/30 px-2 py-0.5 rounded-full">
                      <Sparkles size={11} className="text-[#D6C29A]" /> Featured
                    </span>
                  )}

                  {isPlaceholder && (
                    <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                      Placeholder
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-2xl text-white font-medium group-hover:text-[#F1E4C8] transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#161616] border border-[#2a2a2a] text-[#F1E4C8]/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-5 border-t border-[#242424] flex items-center justify-between">
                {isPlaceholder ? (
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D6C29A]/70">
                    <PlusCircle size={15} />
                    <span>Slot ready for future project</span>
                  </div>
                ) : (
                  <>
                    <a
                      href={project.liveUrl || "#"}
                      data-hover
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#D6C29A] transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink size={13} className="text-[#D6C29A]" />
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-hover
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── PROJECT PLACEHOLDER CALLOUT ─────────────────────────────────── */}
      <div className="max-w-3xl mx-auto rounded-3xl border border-[#D6C29A]/20 bg-[#111111]/80 backdrop-blur-md p-8 sm:p-10 text-center">
        <FolderGit2 size={32} className="text-[#D6C29A] mx-auto mb-3" />
        <h4 className="font-serif text-2xl text-white font-medium mb-2">
          More Projects in the Pipeline
        </h4>
        <p className="text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed mb-6">
          I am regularly coding new applications, algorithm visualizations, and coursework assignments. Check out my GitHub profile for the latest repositories and commits.
        </p>
        <a
          href="https://github.com/dhanyaganeshbhat"
          target="_blank"
          rel="noreferrer"
          data-hover
          className="btn-secondary"
        >
          <Github size={15} />
          <span>Follow on GitHub</span>
        </a>
      </div>
    </div>
  );
}
