import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#D6C29A]/10 bg-[#080808] pt-16 pb-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[#D6C29A]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#242424]">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D6C29A]/40 flex items-center justify-center">
                <span className="font-serif text-xs font-semibold text-[#F1E4C8] tracking-wider">DGB</span>
              </div>
              <div>
                <p className="font-serif text-lg text-white font-medium">Dhanya Ganesh Bhat</p>
                <p className="text-[10px] text-[#D6C29A]/70 tracking-widest uppercase">CS Engineering Student</p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Building meaningful digital experiences through code, creativity and continuous learning.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[#F1E4C8]">Navigation</h4>
            <ul className="space-y-2">
              {["/", "/about", "/skills", "/projects", "/contact"].map((href, i) => (
                <li key={href}>
                  <Link href={href} data-hover
                    className="text-sm text-neutral-400 hover:text-[#D6C29A] transition-colors">
                    {["Home", "About Me", "Skills", "Projects", "Contact"][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-[#F1E4C8]">Contact</h4>
            <a href="mailto:dhanyabhaz@gmail.com" data-hover
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-[#D6C29A] transition-colors">
              <Mail size={14} className="text-[#D6C29A]" />
              dhanyabhaz@gmail.com
            </a>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Bangalore Institute of Technology<br />Bengaluru, Karnataka, India
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Dhanya Ganesh Bhat · All rights reserved</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-hover
            className="flex items-center gap-1.5 text-[#D6C29A]/70 hover:text-[#D6C29A] transition-colors">
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
