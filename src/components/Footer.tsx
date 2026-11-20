"use client";

import Link from "next/link";
import { Mail, ArrowUp, Github, Linkedin, MapPin, Heart } from "lucide-react";
import VisitorAnalyticsBadge from "@/components/VisitorAnalyticsBadge";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#D6C29A]/15 bg-[#080808] pt-16 pb-10 text-neutral-400">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[#D6C29A]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#242424]">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D6C29A]/40 flex items-center justify-center bg-[#111111]">
                <span className="font-serif text-sm font-semibold text-[#F1E4C8] tracking-wider">DGB</span>
              </div>
              <div>
                <p className="font-serif text-lg text-white font-medium">Dhanya Ganesh Bhat</p>
                <p className="text-[10px] text-[#D6C29A] tracking-widest uppercase font-mono">
                  CS Engineering Student · BIT Bengaluru
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              Computer Science student at Bangalore Institute of Technology (BIT), passionate about programming, web development, problem-solving, and turning ideas into meaningful digital experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/dhanyaganeshbhat"
                target="_blank"
                rel="noreferrer"
                data-hover
                className="w-9 h-9 rounded-full border border-[#D6C29A]/20 bg-[#111] flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#D6C29A] transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                data-hover
                className="w-9 h-9 rounded-full border border-[#D6C29A]/20 bg-[#111] flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#D6C29A] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:dhanyabhaz@gmail.com"
                data-hover
                className="w-9 h-9 rounded-full border border-[#D6C29A]/20 bg-[#111] flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#D6C29A] transition-all"
                aria-label="Send Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#F1E4C8] font-mono">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Me" },
                { href: "/skills", label: "Skills" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-hover
                    className="text-sm text-neutral-400 hover:text-[#D6C29A] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D6C29A]/40" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#F1E4C8] font-mono">Contact & Location</h4>
            <a
              href="mailto:dhanyabhaz@gmail.com"
              data-hover
              className="flex items-center gap-2.5 text-sm text-neutral-300 hover:text-[#D6C29A] transition-colors"
            >
              <Mail size={15} className="text-[#D6C29A] shrink-0" />
              <span className="break-all">dhanyabhaz@gmail.com</span>
            </a>
            <div className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed">
              <MapPin size={15} className="text-[#D6C29A] shrink-0 mt-0.5" />
              <span>Bangalore Institute of Technology (BIT)<br />K.R. Road, V.V. Puram, Bengaluru, Karnataka</span>
            </div>
          </div>

        </div>

        {/* Live Visitor Analytics Row */}
        <div className="py-6 border-b border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-4">
          <VisitorAnalyticsBadge />
          <p className="text-[11px] font-mono text-neutral-500">
            Real-time telemetry tracking · Bangalore Institute of Technology
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Dhanya Ganesh Bhat · Crafted with luxury precision</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-hover
            className="flex items-center gap-1.5 text-[#D6C29A]/80 hover:text-[#D6C29A] transition-colors font-mono uppercase tracking-wider text-[11px]"
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
