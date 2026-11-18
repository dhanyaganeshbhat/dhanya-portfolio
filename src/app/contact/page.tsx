"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Sparkles,
  Info,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare honest client-side mailto draft
    const mailtoUrl = `mailto:dhanyabhaz@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setSentNotice(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <SectionHeader
        badge="04 / GET IN TOUCH"
        title="Let's Create Something"
        highlight="Amazing"
        subtitle="I am open to internship opportunities, academic collaborations, open-source projects, and technical discussions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-20">
        {/* ── LEFT COLUMN: DIRECT CONTACT DETAILS ───────────────────────── */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Direct Email Card */}
          <div className="glass rounded-3xl p-8 border border-[#D6C29A]/20">
            <span className="text-[10px] font-mono tracking-widest text-[#D6C29A] uppercase font-semibold">
              DIRECT INQUIRIES
            </span>
            <h3 className="font-serif text-3xl text-white font-medium mt-2 mb-4">
              Dhanya Ganesh Bhat
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Feel free to reach out via email for inquiries, project ideas, or questions. I reply promptly.
            </p>

            <a
              href="mailto:dhanyabhaz@gmail.com"
              data-hover
              className="group flex items-center gap-3 p-4 rounded-xl border border-[#D6C29A]/30 bg-[#161616] hover:border-[#D6C29A] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0d0d0d] border border-[#D6C29A]/30 flex items-center justify-center text-[#D6C29A] group-hover:scale-105 transition-transform">
                <Mail size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Email Address</p>
                <p className="text-sm font-medium text-white group-hover:text-[#F1E4C8] transition-colors truncate">
                  dhanyabhaz@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* Social Profiles & Editable Placeholders */}
          <div className="glass rounded-3xl p-8 border border-[#D6C29A]/20 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#D6C29A] uppercase font-semibold">
              CONNECT & NETWORK
            </span>
            <h4 className="font-serif text-xl text-white font-medium">Professional Links</h4>

            <div className="space-y-3">
              <a
                href="https://github.com/dhanyaganeshbhat"
                target="_blank"
                rel="noreferrer"
                data-hover
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#262626] bg-[#121212] hover:border-[#D6C29A]/40 transition-all text-sm"
              >
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-[#D6C29A]" />
                  <div>
                    <p className="font-medium text-white">GitHub Profile</p>
                    <p className="text-[11px] font-mono text-neutral-500">github.com/dhanyaganeshbhat</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-neutral-500" />
              </a>

              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                data-hover
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#262626] bg-[#121212] hover:border-[#D6C29A]/40 transition-all text-sm"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-[#D6C29A]" />
                  <div>
                    <p className="font-medium text-white">LinkedIn Profile</p>
                    <p className="text-[11px] font-mono text-neutral-500">[Editable URL Placeholder: linkedin.com/in/...]</p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Location & Academic Base */}
          <div className="glass rounded-2xl p-6 border border-[#D6C29A]/15 text-xs text-neutral-400 space-y-2">
            <div className="flex items-center gap-2 text-[#F1E4C8] font-mono uppercase tracking-wider text-[11px]">
              <MapPin size={14} className="text-[#D6C29A]" /> Academic Institution & Location
            </div>
            <p className="leading-relaxed">
              Bangalore Institute of Technology (BIT), K.R. Road, V.V. Puram, Bengaluru, Karnataka, India.
            </p>
          </div>
        </div>

        {/* ── RIGHT COLUMN: INTERACTIVE CONTACT FORM ────────────────────── */}
        <div className="lg:col-span-7">
          <div className="glass rounded-3xl p-8 sm:p-10 border border-[#D6C29A]/25 relative">
            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-widest text-[#D6C29A] uppercase font-semibold">
                SEND A MESSAGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1">
                Start a Conversation
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Fill out the details below. This will prepare a direct email draft to <span className="text-[#F1E4C8]">dhanyabhaz@gmail.com</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-luxury"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Internship Inquiry / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-luxury"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Share details about your idea, proposal, or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-luxury resize-none"
                />
              </div>

              <button
                type="submit"
                data-hover
                className="btn-primary w-full justify-center text-xs tracking-widest font-semibold"
              >
                <span>Compose & Send Email</span>
                <Send size={14} />
              </button>
            </form>

            {/* Clear, honest technical explanation regarding backend integration */}
            <div className="mt-6 pt-5 border-t border-[#242424] flex items-start gap-3 text-xs text-neutral-400">
              <Info size={16} className="text-[#D6C29A] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-neutral-300">Technical Note:</strong> In accordance with strict engineering standards, this form does not pretend to deliver via a mock backend. Submitting launches your device&apos;s email client with all entered fields pre-populated. To add background form delivery, you can hook this handler up to an API route (e.g. Resend, Formspree, or EmailJS).
              </p>
            </div>

            {sentNotice && (
              <div className="mt-4 p-4 rounded-xl border border-[#D6C29A]/40 bg-[#161616] flex items-center gap-3 text-xs text-[#F1E4C8]">
                <CheckCircle2 size={16} className="text-[#D6C29A]" />
                <span>Your email application has been launched with your message draft!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── BEAUTIFUL CLOSING MESSAGE ──────────────────────────────────── */}
      <section className="text-center max-w-3xl mx-auto pt-8 pb-12 border-t border-[#D6C29A]/15">
        <Sparkles size={24} className="text-[#D6C29A] mx-auto mb-3" />
        <h4 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-3">
          Thank you for visiting my portfolio.
        </h4>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto">
          Every line of code is an opportunity to learn, invent, and create something of lasting value. I look forward to building what&apos;s next.
        </p>
        <p className="font-serif italic text-lg text-gold-gradient mt-4">
          — Dhanya Ganesh Bhat
        </p>
      </section>
    </div>
  );
}
