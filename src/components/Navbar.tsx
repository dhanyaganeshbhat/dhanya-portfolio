"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-[#080808]/90 backdrop-blur-xl border-b border-[#D6C29A]/10" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" data-hover className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#D6C29A]/40 flex items-center justify-center transition-all group-hover:border-[#D6C29A] group-hover:shadow-[0_0_20px_rgba(214,194,154,0.3)]">
            <span className="font-serif text-sm font-semibold text-[#F1E4C8] tracking-widest">DGB</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-serif text-base font-medium text-white leading-tight group-hover:text-[#F1E4C8] transition-colors">Dhanya Ganesh Bhat</p>
            <p className="text-[10px] tracking-widest uppercase text-[#D6C29A]/70">BIT · Bengaluru</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => {
            const active = path === l.href;
            return (
              <Link key={l.href} href={l.href} data-hover
                className={`relative px-5 py-2 text-xs font-medium tracking-widest uppercase rounded-full transition-all duration-300 ${active ? "text-white" : "text-[#D6C29A]/70 hover:text-white"}`}>
                {active && <span className="absolute inset-0 rounded-full bg-white/5 border border-[#D6C29A]/30" />}
                <span className="relative">{l.label}</span>
                {!active && <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-px w-0 bg-[#D6C29A] transition-all duration-300 group-hover:w-4 hover:w-4" />}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link href="/contact" data-hover className="hidden md:flex btn-primary text-[10px]">
          <span>Hire Me</span>
        </Link>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} data-hover
          className="md:hidden p-2 rounded-lg border border-[#D6C29A]/20 text-[#F1E4C8] hover:border-[#D6C29A]/50 transition-colors">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[#080808]/95 backdrop-blur-xl border-b border-[#D6C29A]/15 py-6 px-6 space-y-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} data-hover
              className={`block px-4 py-3 rounded-xl text-sm tracking-wide border transition-all ${path === l.href ? "border-[#D6C29A]/40 text-white bg-white/5" : "border-transparent text-[#D6C29A]/80 hover:text-white"}`}>
              {l.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link href="/contact" data-hover className="btn-primary w-full justify-center text-[10px]">
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
