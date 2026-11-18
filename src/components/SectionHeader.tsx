interface Props {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ badge, title, highlight, subtitle, center = true }: Props) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6C29A]/30 bg-[#111111]/80 mb-5`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6C29A]" />
          <span className="text-[10px] font-semibold tracking-widest uppercase text-[#F1E4C8]">{badge}</span>
        </div>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white leading-tight">
        {title}{" "}
        {highlight && <span className="text-gold-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      {center && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D6C29A]/50" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D6C29A]/60 border border-[#D6C29A]" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D6C29A]/50" />
        </div>
      )}
    </div>
  );
}
