import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { 
  FaFileContract, FaUserShield, FaCreditCard, FaRegClock, 
  FaUsers, FaTools, FaExclamationTriangle, FaChevronDown, 
  FaWhatsapp, FaCheckCircle 
} from "react-icons/fa";

const TERMS_SECTIONS = [
  {
    id: "admission",
    icon: FaUserShield,
    title: "1. Admission & Documentation (KYC)",
    tag: "Mandatory",
    summary: "Verification documents, local police intimation, and initial admission requirements.",
    points: [
      "Government Identification: Submission of valid government-issued photo identity proof (Aadhaar Card, Passport, or Voter ID) is mandatory before keys are issued.",
      "Employment / Academic Proof: Residents must furnish valid corporate employer ID, company offer letter, or university student card.",
      "Local Police Verification: The resident agrees to sign and complete the tenant verification form required under Karnataka State Police guidelines.",
      "Token & Security Deposit: Tenancy is formalized only upon clearance of the initial booking token and security deposit."
    ]
  },
  {
    id: "rent-payment",
    icon: FaCreditCard,
    title: "2. Monthly Rent, Due Dates & Utilities",
    tag: "Financials",
    summary: "Rent cycle schedule, late payment grace period, and electricity calculation.",
    points: [
      "Payment Calendar: Monthly rent is payable in advance between the 1st and 5th of every English calendar month.",
      "Grace Period & Late Penalty: Payments received after the 7th of the month will incur a standard late penalty fee of ₹200 per delayed day.",
      "Electricity Charges: Sub-meter readings for AC and private heavy appliances are calculated per actual unit consumption at prevailing BESCOM commercial tariffs.",
      "Payment Modes: Direct bank transfer (NEFT/RTGS/IMPS) or approved UPI gateways to the designated Suhaima Colive account."
    ]
  },
  {
    id: "community-conduct",
    icon: FaUsers,
    title: "3. Resident Conduct & Community Living",
    tag: "Decorum",
    summary: "Quiet hours, substance prohibition, and maintaining peaceful co-existence.",
    points: [
      "Quiet Hours: To support working professionals and students, quiet hours are observed between 11:00 PM and 6:30 AM across all residential corridors.",
      "Zero Substance Tolerance: Consumption, possession, or distribution of illicit narcotics or illegal substances is strictly forbidden and results in immediate eviction.",
      "No Smoking Zone: Smoking or vaping inside private bedrooms, balconies, or washrooms is prohibited to ensure fire safety and smoke-free air.",
      "Common Lounge Decorum: Residents must clean up after themselves in the dining lounge, cafeteria, and rooftop co-working spaces."
    ]
  },
  {
    id: "visitors",
    icon: FaRegClock,
    title: "4. Visitor & Guest Policy",
    tag: "Safety First",
    summary: "Visiting hours, common area hosting, and overnight guest protocols.",
    points: [
      "Daytime Visitors: Guests and family members are welcome in the ground-floor reception and common lounge between 9:00 AM and 8:00 PM daily.",
      "Entry Log: All visitors must register at the reception with a valid photo ID upon arrival.",
      "Overnight Guests: Overnight stays require minimum 24-hour advance intimation to property management and are subject to room vacancy and nominal guest charges.",
      "Restricted Zones: Visitors are not permitted in residential room floors without explicit prior authorization from management."
    ]
  },
  {
    id: "maintenance",
    icon: FaTools,
    title: "5. Room Fixtures, Assets & Housekeeping",
    tag: "Asset Care",
    summary: "Furniture inventory, daily cleaning schedule, and repair liability.",
    points: [
      "Move-in Inventory: Residents inspect and acknowledge the condition of room fixtures (mattress, wardrobe, geyser, study unit, smart lock) upon check-in.",
      "Housekeeping: Daily housekeeping covers floor sweeping, wet mopping, and trash removal. Deep bathroom cleaning is conducted weekly.",
      "Damage Liability: Willful destruction, wall graffiti, or structural damages caused by negligence will be assessed and deducted from the security deposit.",
      "Maintenance SLA: Routine plumbing, electrical, or WiFi repair requests submitted via the resident desk are resolved within 24–48 working hours."
    ]
  },
  {
    id: "termination",
    icon: FaExclamationTriangle,
    title: "6. Notice Period & Termination of Stay",
    tag: "Move-out",
    summary: "30-day vacating notice, clearance certificate, and grounds for eviction.",
    points: [
      "Mandatory 30-Day Notice: Residents must submit a formal written vacating notice minimum 30 days prior to their intended move-out date.",
      "Notice Rent Adjustment: Rent for the 30-day notice window cannot be waived or substituted with the security deposit.",
      "Immediate Eviction Grounds: Management reserves the right to cancel tenancy immediately without notice in cases of physical altercation, harassment, or criminal misconduct.",
      "Key Return & Handover: Room keys and biometric credentials must be returned by 12:00 PM on the official checkout date."
    ]
  }
];

const TermsOfService = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919187200607?text=Hi%20Suhaima%20Colive,%20I%20have%20a%20query%20about%20the%20Terms%20of%20Service.", "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#0A0C10] text-slate-300 pt-24 pb-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-10 right-[-10%] w-[550px] h-[550px] bg-[#DAA520]/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAA520] text-[11px] font-black uppercase tracking-[0.2em] mb-4 backdrop-blur-xl shadow-inner"
          >
            <FaFileContract className="text-xs" />
            Resident Agreement & Living Standards
          </motion.div>

          <SectionHeader 
            title={<span className="text-white">Terms of <span className="text-[#DAA520]">Service</span></span>} 
            subtitle="Clear, fair, and transparent community guidelines for all residents." 
            centered
            dark
          />

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-4">
            Version 3.2 • Applicable to all long-term & flexible stays
          </p>
        </div>

        {/* --- QUICK NAVIGATION TABS --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "all"
                ? "bg-[#DAA520] text-black font-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Full Agreement ({TERMS_SECTIONS.length})
          </button>
          {TERMS_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                setActiveTab(sec.id);
                const el = document.getElementById(sec.id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === sec.id
                  ? "bg-[#DAA520] text-black font-black shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {sec.title.split(". ")[1]}
            </button>
          ))}
        </div>

        {/* --- SECTIONS ACCORDION --- */}
        <div className="space-y-6">
          {TERMS_SECTIONS.map((section, idx) => {
            const isExpanded = expandedIndex === idx || activeTab === section.id;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-white/[0.04] border-[#DAA520]/50 shadow-[0_15px_40px_rgba(218,165,32,0.1)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 sm:p-8 flex items-start sm:items-center justify-between gap-4 text-left cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#DAA520]/10 border border-[#DAA520]/30 flex items-center justify-center text-[#DAA520] text-lg shrink-0">
                      <section.icon />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#DAA520]/15 text-[#DAA520]">
                          {section.tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                        {section.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1">
                        {section.summary}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#DAA520] p-2 shrink-0 text-sm"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 pt-0 border-t border-white/5 mt-2 space-y-3">
                        {section.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <FaCheckCircle className="text-[#DAA520] text-xs mt-1 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white">Need Clarification on Agreement Terms?</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Our front desk manager is happy to answer any questions prior to booking.
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2.5 bg-[#DAA520] hover:bg-white text-black font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shrink-0"
          >
            <FaWhatsapp className="text-sm" /> Ask on WhatsApp
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default TermsOfService;