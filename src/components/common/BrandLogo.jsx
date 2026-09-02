import { motion } from "framer-motion";

export const BrandIcon = ({ className = "w-9 h-9" }) => (
  <svg 
    viewBox="0 0 64 64" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2A3" />
        <stop offset="30%" stopColor="#FFD700" />
        <stop offset="70%" stopColor="#DAA520" />
        <stop offset="100%" stopColor="#996515" />
      </linearGradient>
      <linearGradient id="brandDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E232A" />
        <stop offset="100%" stopColor="#0A0C10" />
      </linearGradient>
      <filter id="iconGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Luxury Rounded Shield Frame */}
    <rect width="64" height="64" rx="18" fill="url(#brandDark)" />
    <rect width="62" height="62" x="1" y="1" rx="17" stroke="url(#brandGold)" strokeWidth="1.5" strokeOpacity="0.4" />

    {/* Apex Crown / Roof Dome */}
    <path d="M32 9 L34 13 L30 13 Z" fill="url(#brandGold)" />
    <path d="M26 14 C26 12 38 12 38 14 L41 17 C38 18 26 18 23 17 Z" fill="url(#brandGold)" />

    {/* Architectural Silhouette Backing */}
    <path d="M29 20 L35 20 L35 34 L29 34 Z" fill="url(#brandGold)" opacity="0.35" />
    <path d="M35 24 L40 24 L40 38 L35 38 Z" fill="url(#brandGold)" opacity="0.25" />
    <path d="M24 26 L29 26 L29 42 L24 42 Z" fill="url(#brandGold)" opacity="0.25" />

    {/* Polished "S" Monogram */}
    <path 
      d="M41 22 C37 19 26 19 23 24 C20 28 22 33 28 35 L36 38 C42 40 44 45 41 50 C38 55 27 55 22 52 L21 47 C25 50 35 51 37 46 C39 42 37 39 32 37 L25 34 C19 32 17 26 21 21 C25 15 37 15 42 18 Z" 
      fill="url(#brandGold)" 
      filter="url(#iconGlow)" 
    />

    {/* Base Plinth */}
    <rect x="22" y="53.5" width="20" height="2" rx="1" fill="url(#brandGold)" opacity="0.8" />
  </svg>
);

const BrandLogo = ({ showSubtitle = true, iconSize = "w-10 h-10" }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }} 
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 cursor-pointer select-none group"
    >
      <div className="relative">
        <BrandIcon className={`${iconSize} transition-transform duration-300 group-hover:rotate-[-3deg] shadow-lg`} />
        <div className="absolute -inset-1 bg-[#DAA520]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      
      <div className="flex flex-col text-left">
        <div className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
          SUHAIMA<span className="text-[#DAA520]">.</span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#DAA520] mt-1">
            COLIVING PG
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default BrandLogo;
