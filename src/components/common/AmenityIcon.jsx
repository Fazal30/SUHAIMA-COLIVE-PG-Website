const AmenityIcon = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/10 bg-white/5 text-center">
    {Icon && <Icon className="w-6 h-6 text-[#DAA520]" />}
    <span className="text-xs font-medium text-slate-300">{label}</span>
  </div>
);

export default AmenityIcon;