import { motion } from "framer-motion";
import { 
  FaWifi, FaUtensils, FaShieldAlt, FaBolt, FaMotorcycle, 
  FaCheckCircle, FaTv, FaWind, FaCoffee, FaGamepad, 
  FaGlassCheers, FaDumbbell, FaWater, FaCouch 
} from "react-icons/fa";
import SectionHeader from "../components/shared/SectionHeader";

const Amenities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const mainAmenities = [
    { 
      icon: FaWifi, 
      title: "Seamless Connectivity", 
      desc: "Dual-band Gigabit WiFi with 99.9% uptime. Perfect for WFH and 4K streaming.",
      color: "from-blue-500/20 to-cyan-500/20",
      size: "lg" 
    },
    { 
      icon: FaUtensils, 
      title: "Chef-Curated Meals", 
      desc: "Hygienic, home-style North & South Indian meals served thrice a day.",
      color: "from-orange-500/20 to-red-500/20",
      size: "md"
    },
    { 
      icon: FaShieldAlt, 
      title: "Fortified Security", 
      desc: "Biometric entry, 24/7 CCTV surveillance, and on-site security personnel.",
      color: "from-emerald-500/20 to-teal-500/20",
      size: "md"
    },
    { 
      icon: FaCouch, 
      title: "Designer Lounges", 
      desc: "Fully air-conditioned common areas with premium Italian leather seating.",
      color: "from-purple-500/20 to-pink-500/20",
      size: "lg"
    },
  ];

  const secondaryAmenities = [
    { icon: FaBolt, label: "Power Backup", desc: "100% DG Backup" },
    { icon: FaMotorcycle, label: "Private Parking", desc: "Spacious & Secure" },
    { icon: FaCheckCircle, label: "Daily Housekeeping", desc: "Professional Staff" },
    { icon: FaWind, label: "Full Ventilation", desc: "Large Windows" },
    { icon: FaTv, label: "Smart Entertainment", desc: "Netflix & Chill" },
    { icon: FaDumbbell, label: "Fitness Corner", desc: "Stay Healthy" },
    { icon: FaWater, label: "RO Drinking Water", desc: "Pure & Chilled" },
    { icon: FaCoffee, label: "Self-Service Cafe", desc: "24/7 Access" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0C10] py-24 relative overflow-hidden">
      {/* --- BACKGROUND BLOBS --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DAA520]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title={<span className="text-white">World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DAA520]">Amenities</span></span>}
          subtitle="We’ve obsessed over the details so you can focus on your hustle."
          centered
        />

        {/* --- BENTO GRID (Main Features) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {mainAmenities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden p-8 rounded-[2.5rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl group ${
                item.size === "lg" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="text-3xl text-[#DAA520]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
              </div>
              
              {/* Decorative Corner Icon */}
              <item.icon className="absolute -bottom-6 -right-6 text-9xl text-white/5 rotate-12 group-hover:text-[#DAA520]/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* --- SECONDARY AMENITIES (Icon Grid) --- */}
        <div className="mt-24 pt-24 border-t border-white/5">
          <h4 className="text-[#DAA520] text-center font-bold tracking-[0.3em] uppercase mb-16">Standard Inclusions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {secondaryAmenities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white/5 transition-colors cursor-default group"
              >
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#DAA520] group-hover:bg-[#DAA520]/10 transition-all">
                  <item.icon className="text-xl text-white group-hover:text-[#DAA520]" />
                </div>
                <h5 className="text-white font-bold mb-1">{item.label}</h5>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- LIFESTYLE CALLOUT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-r from-[#DAA520] to-[#B8860B] text-black flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl font-black mb-2 leading-none">THE FULL EXPERIENCE.</h2>
            <p className="text-black/70 font-medium">All amenities are included in your monthly rent. No hidden charges.</p>
          </div>
          <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform">
            Book a Live Tour
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Amenities;