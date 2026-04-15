const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
    {subtitle && <p className="mt-2 text-slate-500 text-lg">{subtitle}</p>}
    <div className={`h-1.5 w-20 bg-primary mt-4 ${centered ? "mx-auto" : "ml-0"}`} />
  </div>
);

export default SectionHeader;