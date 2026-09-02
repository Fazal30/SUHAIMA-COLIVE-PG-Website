const SectionHeader = ({ title, subtitle, centered = false, dark = false, className = "" }) => (
  <div className={`mb-10 ${centered ? "text-center" : "text-left"} ${className}`}>
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
    {subtitle && <p className={`mt-2 text-lg ${dark ? "text-slate-400" : "text-slate-500"}`}>{subtitle}</p>}
    <div className={`h-1.5 w-20 bg-[#DAA520] mt-4 ${centered ? "mx-auto" : "ml-0"}`} />
  </div>
);

export default SectionHeader;