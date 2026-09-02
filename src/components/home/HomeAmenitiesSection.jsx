import { motion } from "framer-motion";
import {
  FaWifi, FaUtensils, FaShieldAlt, FaBolt, FaMotorcycle,
  FaCheckCircle, FaUsers, FaCrown, FaKey
} from "react-icons/fa";
import SectionHeader from "../shared/SectionHeader";

const AMENITIES = [
  {
    icon: FaWifi,
    title: "High-Speed WiFi",
    desc: "Seamless 5G internet connectivity for work, streaming, and lag-free gaming."
  },
  {
    icon: FaUtensils,
    title: "Delicious Meals",
    desc: "Fresh, hygienic, and home-style nutritious food prepared 3 times daily."
  },
  {
    icon: FaShieldAlt,
    title: "24/7 Security",
    desc: "CCTV surveillance, digital biometric entry, and round-the-clock on-site security."
  },
  {
    icon: FaBolt,
    title: "Power Backup",
    desc: "Uninterrupted electricity supply with automatic generator backup systems."
  },
  {
    icon: FaMotorcycle,
    title: "Dedicated Parking",
    desc: "Safe and spacious covered parking facilities for two-wheelers and vehicles."
  },
  {
    icon: FaCheckCircle,
    title: "Daily Housekeeping",
    desc: "Professional cleaning staff ensures spotless rooms and sanitized bathrooms."
  },
  {
    icon: FaUsers,
    title: "Vibrant Community",
    desc: "Connect with tech professionals and like-minded individuals in our lounge."
  },
  {
    icon: FaCrown,
    title: "Executive Suites",
    desc: "Ergonomic furniture, orthopaedic mattresses, and dedicated study tables."
  },
  {
    icon: FaKey,
    title: "Flexible Timings",
    desc: "Secure smart access systems allowing hassle-free movement at all hours."
  }
];

const HomeAmenitiesSection = () => {
  return (
    <section className="py-28 bg-[#0A0C10] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#DAA520]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title={<span>World-Class <span className="text-[#DAA520]">Amenities</span></span>} 
          subtitle="Engineered for unmatched comfort, productivity, and peace of mind." 
          centered 
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {AMENITIES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-6 sm:p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#DAA520]/40 hover:shadow-[0_20px_40px_rgba(218,165,32,0.1)] transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#DAA520]/10 border border-[#DAA520]/20 text-[#DAA520] mb-5 group-hover:scale-110 group-hover:bg-[#DAA520] group-hover:text-black transition-all duration-300 shadow-md">
                <item.icon size={22} />
              </div>

              {/* Title */}
              <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#DAA520] transition-colors">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAmenitiesSection;
