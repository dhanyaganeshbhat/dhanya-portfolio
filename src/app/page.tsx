"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles, Code2, GraduationCap, Cpu, Layers, Terminal, ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-6 pt-32 pb-20">
        {/* Subtle radial golden glow blobs */}
        <div className="pointer-events-none absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-[#D6C29A]/05 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-[#F1E4C8]/04 blur-[130px]" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D6C29A]/30 bg-[#111111]/80 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-[#D6C29A] opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-[#D6C29A]" />
              </span>
              <span className="text-[11px] font-medium tracking-widest uppercase font-mono text-[#F1E4C8]">
                BIT Bengaluru · CS Engineering
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif leading-[1.08] tracking-tight">
              <span className="block text-4xl sm:text-6xl lg:text-7xl font-normal text-white">
                Hello, I&apos;m
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl font-medium text-gold-gradient mt-2">
                Dhanya Ganesh Bhat.
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-[#F1E4C8]/90 font-light tracking-wide flex items-center gap-3">
              <span>Computer Science Engineering Student</span>
              <span className="text-[#D6C29A]/40">|</span>
              <span className="text-neutral-400">Aspiring Software Developer</span>
            </h2>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Exploring technology, writing code and turning ideas into meaningful digital experiences.
              Passionate about building scalable applications, elegant user interfaces, and solving real-world challenges.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link href="/projects" data-hover className="btn-primary">
                <span>Explore My Work</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/contact" data-hover className="btn-secondary">
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Quick Metrics / Highlights */}
            <div className="pt-8 grid grid-cols-3 gap-6 max-w-lg border-t border-[#242424]">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">BIT</p>
                <p className="text-[11px] text-[#D6C29A]/80 uppercase font-mono tracking-wider mt-0.5">Bengaluru</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">CSE</p>
                <p className="text-[11px] text-[#D6C29A]/80 uppercase font-mono tracking-wider mt-0.5">Engineering</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">8+</p>
                <p className="text-[11px] text-[#D6C29A]/80 uppercase font-mono tracking-wider mt-0.5">Core Techs</p>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-md">
              {/* Golden Ambient Blur Glow behind Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#D6C29A]/20 via-[#F1E4C8]/10 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Luxury Frame Container */}
              <div className="relative rounded-3xl border border-[#D6C29A]/30 bg-[#111111]/90 backdrop-blur-xl p-4 sm:p-5 shadow-2xl overflow-hidden">
                {/* Champagne Corner Ornaments */}
                <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D6C29A]/70" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D6C29A]/70" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D6C29A]/70" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D6C29A]/70" />

                {/* Portrait Placeholder Area (Replaceable with actual photo: <img src="/profile.jpg" ... />) */}
                <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0a0a0a] border border-[#D6C29A]/15 overflow-hidden flex flex-col items-center justify-between p-8 text-center">
                  
                  {/* Subtle Geometric Pattern Overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#D6C29A_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Top Badge */}
                  <div className="relative z-10 w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-[#D6C29A]/70">
                    <span>PORTRAIT</span>
                    <span>BIT · 2026</span>
                  </div>

                  {/* Center Monogram / Silhouette */}
                  <div className="relative z-10 my-auto flex flex-col items-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#D6C29A]/40 bg-[#0d0d0d] flex items-center justify-center shadow-[0_0_35px_rgba(214,194,154,0.15)] group-hover:border-[#D6C29A] group-hover:shadow-[0_0_50px_rgba(214,194,154,0.3)] transition-all duration-500">
                      <span className="font-serif text-3xl sm:text-4xl font-semibold text-gold-gradient tracking-widest">
                        DGB
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-xl sm:text-2xl text-white font-medium">
                      Dhanya Ganesh Bhat
                    </h3>
                    <p className="mt-1 text-xs text-[#D6C29A] font-mono tracking-widest uppercase">
                      Software Developer
                    </p>

                    <div className="mt-4 px-3 py-1 rounded-full border border-[#D6C29A]/20 bg-[#141414] text-[10px] text-neutral-400">
                      Photo Placeholder · Ready for upload
                    </div>
                  </div>

                  {/* Bottom Info bar */}
                  <div className="relative z-10 w-full pt-4 border-t border-[#242424] flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#F1E4C8]">
                      <Terminal size={13} className="text-[#D6C29A]" />
                      B.E. Computer Science
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">Bengaluru</span>
                  </div>
                </div>

                {/* Subtle caption below frame */}
                <p className="mt-3 text-center text-[11px] font-mono text-neutral-500 tracking-wider">
                  DESIGNED WITH LUXURY PRECISION
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <button
            onClick={() => document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" })}
            data-hover
            className="flex flex-col items-center gap-2 text-[10px] tracking-widest uppercase text-[#D6C29A]/70 hover:text-[#D6C29A] transition-colors group"
          >
            <span className="font-mono">Scroll to discover</span>
            <div className="w-5 h-8 rounded-full border border-[#D6C29A]/30 flex items-start justify-center pt-1.5 group-hover:border-[#D6C29A] transition-colors">
              <span className="w-1 h-2 rounded-full bg-[#D6C29A] animate-bounce" />
            </div>
            <ChevronDown size={13} />
          </button>
        </div>
      </section>

      {/* ── DISCOVER / HIGHLIGHTS SECTION ─────────────────────────────────── */}
      <section id="discover" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#D6C29A]/10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6C29A]/30 bg-[#111111]/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6C29A]" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#F1E4C8] font-mono">Overview</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white">
            Curated Excellence in <span className="text-gold-gradient">Every Domain</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            A glance into academic foundations, core technical competencies, and software engineering pursuits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              badge: "ACADEMICS",
              title: "BIT Bengaluru",
              description:
                "Pursuing Bachelor of Engineering in Computer Science at Bangalore Institute of Technology, one of the premier institutions in Karnataka.",
              link: "/about",
              action: "Read My Story",
            },
            {
              icon: Code2,
              badge: "SKILLS",
              title: "Technical Toolkit",
              description:
                "Hands-on expertise across C Programming, Python, modern JavaScript, React, Next.js, and version control with Git & GitHub.",
              link: "/skills",
              action: "Explore Skills",
            },
            {
              icon: Cpu,
              badge: "PORTFOLIO",
              title: "Project Showcase",
              description:
                "Engineering thoughtful web applications, algorithms, and practical software tools that bring innovative ideas to life.",
              link: "/projects",
              action: "View Projects",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.link}
                data-hover
                className="glass rounded-2xl p-8 flex flex-col justify-between group block transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl border border-[#D6C29A]/30 bg-[#141414] flex items-center justify-center mb-6 group-hover:border-[#D6C29A] group-hover:shadow-[0_0_20px_rgba(214,194,154,0.2)] transition-all">
                    <Icon size={22} className="text-[#D6C29A]" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D6C29A]/80 font-semibold">
                    {card.badge}
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1 mb-3 group-hover:text-[#F1E4C8] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#242424] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#F1E4C8]">
                  <span>{card.action}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#D6C29A]" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── LUXURY BANNER / CALLOUT ─────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-[#D6C29A]/25 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#161616] p-10 sm:p-16 text-center shadow-2xl">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#D6C29A]/08 blur-3xl" />
          <Sparkles size={28} className="text-[#D6C29A] mx-auto mb-4 relative z-10" />
          <h2 className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium mb-4">
            Let&apos;s create something <span className="text-gold-gradient">extraordinary.</span>
          </h2>
          <p className="relative z-10 text-neutral-400 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Interested in collaboration, internship opportunities, or discussing new technology ventures? Let&apos;s get connected.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" data-hover className="btn-primary">
              <span>Get In Touch</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="/projects" data-hover className="btn-secondary">
              <span>Browse Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
