"use client";

import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { GraduationCap, Award, Compass, Lightbulb, Code2, BookOpen, ArrowRight, Target, Sparkles, CheckCircle2 } from "lucide-react";

const educationTimeline = [
  {
    period: "2024 — Present",
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    institution: "Bangalore Institute of Technology (BIT)",
    location: "Bengaluru, Karnataka",
    description:
      "Affiliated with VTU. Focusing on foundational computer science disciplines: Data Structures, C Programming, Discrete Mathematics, Object-Oriented Principles, and Modern Web Systems.",
    status: "Currently Pursuing · 1st Year",
  },
  {
    period: "2022 — 2024",
    degree: "Pre-University Education (PCMC)",
    institution: "Pre-University College",
    location: "Karnataka",
    description:
      "Focused on Physics, Chemistry, Mathematics, and Computer Science. Built early algorithmic thinking and strong analytical foundations.",
    status: "Completed with Distinction",
  },
  {
    period: "2022",
    degree: "Secondary School Examination (SSLC / 10th)",
    institution: "High School",
    location: "Karnataka",
    description:
      "Graduated with top academic standing, fostering an enduring curiosity for mathematics, science, and computer technology.",
    status: "Graduated with Honors",
  },
];

const journeyMilestones = [
  {
    stage: "01",
    title: "Igniting Curiosity",
    subtitle: "First Lines of Code",
    description:
      "My passion began with understanding what happens behind the screen. From learning logical flow to writing simple scripts, coding immediately felt like digital craftsmanship.",
    icon: Lightbulb,
  },
  {
    stage: "02",
    title: "Rigorous Foundations",
    subtitle: "C & Computational Thinking",
    description:
      "Stepping into engineering at BIT, I immersed myself in C, memory management, pointers, and problem-solving, understanding how software interacts with hardware at the lowest level.",
    icon: Code2,
  },
  {
    stage: "03",
    title: "Modern Web Exploration",
    subtitle: "JavaScript, React & Next.js",
    description:
      "Expanded into modern frontend architectures and reactive programming. I build responsive, luxury-themed applications that blend aesthetic elegance with performant functionality.",
    icon: Compass,
  },
  {
    stage: "04",
    title: "Future Horizons",
    subtitle: "Scalable Systems & Engineering",
    description:
      "Continuously honing problem-solving on data structures, exploring backend engineering, APIs, and aiming to engineer software that positively impacts people at scale.",
    icon: Target,
  },
];

const pillars = [
  {
    title: "Problem Solving",
    description: "Approaching challenges methodically, breaking complex questions into clean, testable logic.",
    icon: Target,
  },
  {
    title: "Clean Aesthetics",
    description: "Believing that elegant software should not only execute flawlessly but also provide delight through design.",
    icon: Sparkles,
  },
  {
    title: "Continuous Learning",
    description: "Rapidly adapting to modern technologies, frameworks, and engineering standards in an ever-evolving ecosystem.",
    icon: BookOpen,
  },
  {
    title: "Engineering Integrity",
    description: "Writing maintainable, readable, and structured code following modern TypeScript and React best practices.",
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <SectionHeader
        badge="01 / ABOUT ME"
        title="Engineering Passion Meets"
        highlight="Digital Craftsmanship"
        subtitle="Computer Science Engineering student at Bangalore Institute of Technology, driven by an insatiable curiosity to build meaningful, elegant software."
      />

      {/* ── MAIN BIO SECTION ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
        {/* Left Side: Story Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass rounded-3xl p-8 sm:p-10 border border-[#D6C29A]/20">
            <span className="text-[10px] font-mono tracking-widest text-[#D6C29A] uppercase font-semibold">
              WHO I AM
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-2 mb-6">
              More than just code — <span className="text-gold-gradient">a lifelong learner.</span>
            </h3>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I am <strong className="text-white font-medium">Dhanya Ganesh Bhat</strong>, currently in my first year pursuing a Bachelor of Engineering in <strong className="text-[#F1E4C8] font-medium">Computer Science & Engineering</strong> at the esteemed <strong className="text-white font-medium">Bangalore Institute of Technology (BIT)</strong> in Bengaluru.
              </p>
              <p>
                My journey into technology is driven by a deep love for problem-solving, structured thinking, and turning abstract concepts into living, functional software. Whether crafting algorithms in C, writing dynamic interactive experiences in Next.js and TypeScript, or exploring modern tools, I approach every project with focus, craftsmanship, and curiosity.
              </p>
              <p>
                Outside of college lectures and coding sessions, I actively explore emerging software trends, study design patterns, and collaborate with peers to create impactful digital tools.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#242424] flex flex-wrap gap-4 text-xs font-mono text-[#D6C29A]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#D6C29A]" /> BIT Bengaluru
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#D6C29A]" /> CS Engineering
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#D6C29A]" /> Web & Software Dev
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Stats & Pillars */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass rounded-2xl p-6 border border-[#D6C29A]/15 hover:border-[#D6C29A]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#D6C29A]/30 flex items-center justify-center mb-4 text-[#D6C29A]">
                  <Icon size={18} />
                </div>
                <h4 className="font-serif text-lg text-white font-medium mb-2">{pillar.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MY JOURNEY SECTION ───────────────────────────────────────────── */}
      <section className="mb-24">
        <div className="text-center mb-14">
          <span className="text-[10px] font-mono tracking-widest text-[#D6C29A] uppercase font-semibold">
            EVOLUTION
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-1">
            My <span className="text-gold-gradient">Journey</span>
          </h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto mt-2">
            A milestone chronicle of how curiosity transformed into dedicated engineering discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeyMilestones.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stage}
                className="glass rounded-2xl p-7 border border-[#D6C29A]/20 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl font-light text-[#D6C29A]">{item.stage}</span>
                    <div className="w-9 h-9 rounded-lg bg-[#141414] border border-[#D6C29A]/30 flex items-center justify-center text-[#D6C29A] group-hover:border-[#D6C29A] transition-colors">
                      <Icon size={16} />
                    </div>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F1E4C8]/70">{item.subtitle}</p>
                  <h4 className="font-serif text-xl text-white font-medium mt-1 mb-3">{item.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#242424] flex items-center gap-1.5 text-[10px] font-mono text-[#D6C29A]">
                  <span>MILESTONE {item.stage}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── EDUCATION TIMELINE ─────────────────────────────────────────── */}
      <section className="mb-24">
        <div className="text-center mb-14">
          <span className="text-[10px] font-mono tracking-widest text-[#D6C29A] uppercase font-semibold">
            ACADEMIC BACKGROUND
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-1">
            Education <span className="text-gold-gradient">Timeline</span>
          </h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto mt-2">
            Formal education shaping my intellectual foundation and analytical rigor.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationTimeline.map((item, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-7 sm:p-8 border border-[#D6C29A]/20 hover:border-[#D6C29A]/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#D6C29A]/30 flex items-center justify-center text-[#D6C29A] shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                      {item.degree}
                    </h4>
                    <p className="text-xs text-[#D6C29A] font-mono uppercase tracking-wider mt-0.5">
                      {item.institution} · {item.location}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-medium border border-[#D6C29A]/30 bg-[#161616] text-[#F1E4C8]">
                    {item.period}
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed pl-0 sm:pl-[52px]">
                {item.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#242424] sm:ml-[52px] flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono text-[11px] text-[#D6C29A]">Status: {item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CALL TO ACTION ─────────────────────────────────────────────── */}
      <div className="text-center pt-8">
        <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
          Ready to see my technical proficiencies?
        </p>
        <Link href="/skills" data-hover className="btn-primary">
          <span>Explore My Skills</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
