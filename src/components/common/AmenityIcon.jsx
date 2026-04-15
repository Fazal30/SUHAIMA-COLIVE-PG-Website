const AmenityIcon = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
    <Icon className="w-6 h-6 text-primary" />
    <span className="text-xs font-medium text-gray-600">{label}</span>
  </div>
);

export default AmenityIcon;