"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import {
  Code2,
  Terminal,
  FileCode,
  Palette,
  Boxes,
  Cpu,
  GitBranch,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "Languages" | "Frontend" | "Frameworks" | "Tools";
  icon: typeof Code2;
  description: string;
  topics: string[];
  placeholderLevel: string; // explicitly labeled editable placeholder
  highlight?: string;
}

const skillsData: SkillItem[] = [
  {
    name: "C Programming",
    category: "Languages",
    icon: Terminal,
    description: "Core procedural programming language studied at BIT. Foundations of systems, algorithmic logic, pointers, and memory manipulation.",
    topics: ["Pointers & Memory", "Data Structures", "Dynamic Allocation", "File I/O"],
    placeholderLevel: "[Editable Level: e.g. Academic Foundation / Intermediate]",
    highlight: "Core Academic Curriculum",
  },
  {
    name: "Python",
    category: "Languages",
    icon: Code2,
    description: "High-level, expressive language used for problem-solving, scripting, algorithmic exploration, and basic automation.",
    topics: ["Object-Oriented Syntax", "Data Structures", "Scripting", "Algorithm Design"],
    placeholderLevel: "[Editable Level: e.g. Foundational / Intermediate]",
    highlight: "Rapid Prototyping",
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: FileCode,
    description: "The structural foundation of the World Wide Web. Writing semantic, accessible, SEO-optimized markup for modern browser applications.",
    topics: ["Semantic Tags", "Accessibility (a11y)", "DOM Hierarchy", "Forms & Validation"],
    placeholderLevel: "[Editable Level: e.g. Proficient / Core]",
    highlight: "Web Standard",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: Palette,
    description: "Cascading Style Sheets & modern utility frameworks like Tailwind CSS to craft responsive layouts, luxury typography, and smooth transitions.",
    topics: ["Flexbox & Grid", "Tailwind CSS", "Keyframe Animations", "Responsive Media"],
    placeholderLevel: "[Editable Level: e.g. Proficient / Styling]",
    highlight: "Visual Design",
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: Code2,
    description: "Modern ECMAScript (ES6+) for interactive client-side logic, event-driven programming, DOM manipulation, and asynchronous APIs.",
    topics: ["ES6+ Syntax", "Promises & Async/Await", "DOM & Events", "Functional Array Methods"],
    placeholderLevel: "[Editable Level: e.g. Intermediate / Core]",
    highlight: "Interactive Web",
  },
  {
    name: "React",
    category: "Frameworks",
    icon: Boxes,
    description: "Component-based declarative UI architecture. Creating reusable, modular interfaces with state management, hooks, and virtual DOM efficiency.",
    topics: ["Functional Components", "React Hooks", "State & Props", "Component Lifecycle"],
    placeholderLevel: "[Editable Level: e.g. Modern Frontend / Intermediate]",
    highlight: "Component UI",
  },
  {
    name: "Next.js",
    category: "Frameworks",
    icon: Cpu,
    description: "Production React framework with App Router, Server and Client Components, static site generation, and optimized performance.",
    topics: ["App Router", "SSR & SSG", "File-based Routing", "Performance Optimization"],
    placeholderLevel: "[Editable Level: e.g. Modern Stack / Building]",
    highlight: "Full-Stack React",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: GitBranch,
    description: "Distributed version control system and repository hosting platform for tracking code evolution, branches, and team collaboration.",
    topics: ["Branching & Merging", "Commit Best Practices", "GitHub Repositories", "Open Source Collaboration"],
    placeholderLevel: "[Editable Level: e.g. Essential Tooling / Proficient]",
    highlight: "Version Control",
  },
];

const categories = ["All", "Languages", "Frontend", "Frameworks", "Tools"] as const;

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <SectionHeader
        badge="02 / TECHNICAL TOOLKIT"
        title="Disciplined Competencies &"
        highlight="Technologies"
        subtitle="Core programming languages, web standards, frameworks, and engineering tools I utilize in coursework and independent projects."
      />

      {/* ── TRANSPARENCY NOTICE ON EDITABLE LEVELS ─────────────────────── */}
      <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl border border-[#D6C29A]/20 bg-[#111111]/70 backdrop-blur-md flex items-start gap-3.5 text-xs text-neutral-300">
        <HelpCircle size={18} className="text-[#D6C29A] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#F1E4C8] font-medium block mb-0.5 font-mono uppercase tracking-wider text-[11px]">
            Notice regarding skill proficiency
          </strong>
          <span>
            Skill indicators below are formatted as <strong className="text-white">editable placeholders</strong>. As a first-year Computer Science student at BIT, I believe in genuine engineering honesty — you can update these badges as you advance through coursework and certifications.
          </span>
        </div>
      </div>

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

      {/* ── SKILLS GRID ────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="glass rounded-2xl p-7 border border-[#D6C29A]/20 flex flex-col justify-between group hover:-translate-y-1.5 hover:border-[#D6C29A]/50 transition-all duration-300"
            >
              <div>
                {/* Card Header: Icon & Category Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#D6C29A]/30 flex items-center justify-center text-[#D6C29A] group-hover:border-[#D6C29A] group-hover:shadow-[0_0_20px_rgba(214,194,154,0.2)] transition-all">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#D6C29A]/20 bg-[#141414] text-[#D6C29A]">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-serif text-2xl text-white font-medium group-hover:text-[#F1E4C8] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-[#D6C29A]/80 font-mono mt-0.5 mb-3">
                  {skill.highlight}
                </p>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {skill.description}
                </p>

                {/* Topics Covered */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Core Concepts
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#161616] border border-[#262626] text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Editable Level Placeholder Container */}
              <div className="pt-4 border-t border-[#242424]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Proficiency Level
                </span>
                <div className="px-3 py-1.5 rounded-lg border border-dashed border-[#D6C29A]/40 bg-[#121212] text-[11px] font-mono text-[#F1E4C8] flex items-center justify-between">
                  <span>{skill.placeholderLevel}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── ADDITIONAL PRACTICES / LEARNING PILLARS ───────────────────── */}
      <section className="glass rounded-3xl p-8 sm:p-12 border border-[#D6C29A]/25 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6C29A]">Methodology</span>
            <h4 className="font-serif text-2xl text-white font-medium">Algorithmic Rigor</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Focusing on computational complexity (Time & Space Big-O), data structures, and edge-case handling.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6C29A]">Design Aesthetics</span>
            <h4 className="font-serif text-2xl text-white font-medium">Luxury UI Precision</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Crafting responsive web interfaces with thoughtful champagne micro-interactions, dark tones, and accessible layouts.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6C29A]">Workflow</span>
            <h4 className="font-serif text-2xl text-white font-medium">Version Discipline</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Adopting semantic Git commit messages, atomic commits, and structured GitHub workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ─────────────────────────────────────────────── */}
      <div className="text-center">
        <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
          Want to see how these skills come alive in projects?
        </p>
        <Link href="/projects" data-hover className="btn-primary">
          <span>View Project Gallery</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
