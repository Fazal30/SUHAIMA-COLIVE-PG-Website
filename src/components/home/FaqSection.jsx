import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionHeader from "../shared/SectionHeader";

const FAQS = [
  {
    q: "Is food included in the monthly rent?",
    a: "Yes, healthy and nutritious home-style meals (Breakfast, Lunch, and Dinner) prepared with 100% RO water are included in your rent."
  },
  {
    q: "Is there a security deposit required?",
    a: "Yes, a minimal refundable security deposit is collected at check-in and returned within 7 working days of checkout minus standard dues."
  },
  {
    q: "What are the rules regarding visitors and timings?",
    a: "Residents have 24/7 access with secure biometric / digital locks. Day visitors are welcome in common lounges during standard visitor hours."
  },
  {
    q: "Do you provide high-speed WiFi and full power backup?",
    a: "Yes, high-speed dual-band WiFi is available across all floors and rooms, supported by a heavy-duty silent generator for 24/7 power backup."
  },
  {
    q: "Is daily cleaning and housekeeping provided?",
    a: "Yes, professional housekeeping teams sanitize bathrooms, sweep and mop rooms daily, and clean common spaces at no extra charge."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 bg-[#0D1017] text-white overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DAA520]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <SectionHeader 
          title={<span>Frequently Asked <span className="text-[#DAA520]">Questions</span></span>} 
          subtitle="Everything you need to know before moving into Suhaima Colive." 
          centered 
          dark
        />

        <div className="mt-16 space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div 
                key={i} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-white/[0.04] border-[#DAA520]/40 shadow-xl" 
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left transition-colors"
                >
                  <span className={`font-bold text-sm sm:text-base ${isOpen ? "text-[#DAA520]" : "text-white"}`}>
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#DAA520] ml-4 shrink-0 text-sm"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 mt-2">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
