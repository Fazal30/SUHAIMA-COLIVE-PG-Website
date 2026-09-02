import { motion } from "framer-motion";
import { 
  FaClipboardCheck, FaUsers, FaCrown, FaKey 
} from "react-icons/fa";
import SectionHeader from "../shared/SectionHeader";

const STEPS = [
  { 
    icon: FaClipboardCheck, 
    title: "Online Inquiry",
    desc: "Fill a quick form and choose your preferred sharing room type."
  },
  { 
    icon: FaUsers, 
    title: "Schedule Visit",
    desc: "Visit the PG, explore rooms, and experience high-end amenities."
  },
  { 
    icon: FaCrown, 
    title: "Instant Booking",
    desc: "Pay a small token amount and securely reserve your room."
  },
  { 
    icon: FaKey, 
    title: "Move In",
    desc: "Complete documentation and settle into your new luxury home."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-28 bg-[#0D1017] text-white relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title={<span>How It <span className="text-[#DAA520]">Works</span></span>} 
          subtitle="Reserve your perfect coliving space in 4 effortless steps." 
          centered 
          dark
        />

        <div className="relative mt-16 md:mt-20">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#DAA520]/30 to-transparent -translate-y-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {STEPS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white/5 group-hover:text-[#DAA520]/20 transition-colors mb-2">
                  0{i + 1}
                </div>

                <div className="relative p-6 sm:p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 group-hover:border-[#DAA520]/40 group-hover:shadow-[0_20px_40px_rgba(218,165,32,0.1)] transition-all duration-300">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-br from-[#FFD700] via-[#DAA520] to-[#B8860B] text-black rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={26} />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#DAA520] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
