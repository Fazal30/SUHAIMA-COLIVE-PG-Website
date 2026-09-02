import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { 
  FaShieldAlt, FaLock, FaUserCheck, FaVideo, 
  FaDatabase, FaChevronDown, FaWhatsapp, 
  FaFileContract, FaCheckCircle 
} from "react-icons/fa";

const SECTIONS = [
  {
    id: "collection",
    icon: FaUserCheck,
    title: "1. Information We Collect",
    tag: "Data Ingestion",
    summary: "Personal details, government ID for mandatory police tenant verification, and biometric credentials.",
    details: [
      "Personal Identification: Full legal name, date of birth, permanent address, contact number, and email.",
      "Statutory Verification Documents: Photocopy of Government-issued photo identification (Aadhaar Card, Passport, or Voter ID) as mandated by the Karnataka Police Tenant Verification rules.",
      "Employment & Academic Credentials: Corporate employee ID, college admission confirmation, or proof of internship/employment in Electronic City.",
      "Access & Security Data: Encrypted biometric fingerprint or digital keycard records logged upon entering common perimeter doors.",
      "Emergency Contact Info: Name and contact details of parents or immediate guardian for medical and safety contingencies."
    ]
  },
  {
    id: "purpose",
    icon: FaFileContract,
    title: "2. How We Use Your Information",
    tag: "Operational Need",
    summary: "Managing your tenancy, processing billing, and maintaining campus safety.",
    details: [
      "Tenancy Management: Processing room allocation, maintenance ticketing, and amenity access.",
      "Financial Transactions: Invoicing monthly rent, utility bills, token deposits, and refund clearances.",
      "Safety & Security: Verifying legitimate resident access to eliminate unauthorized trespassers.",
      "Important Service Notices: Communicating routine maintenance schedules, meal timings, or policy updates.",
      "Statutory Compliance: Complying with municipal, police, or judicial records maintenance guidelines."
    ]
  },
  {
    id: "surveillance",
    icon: FaVideo,
    title: "3. CCTV & Video Surveillance Policy",
    tag: "Public Safety",
    summary: "Round-the-clock CCTV cameras located exclusively in public community areas.",
    details: [
      "Camera Coverage: High-definition 24/7 CCTV surveillance operates in main entry gates, reception, corridors, staircases, and rooftop dining spaces.",
      "Strict Privacy Guarantee: Zero cameras or recording apparatus are installed inside resident private bedrooms, shared sleeping areas, or washrooms.",
      "Footage Access: CCTV recordings are securely encrypted and accessible solely by senior property management for incident investigations or law enforcement requests."
    ]
  },
  {
    id: "sharing",
    icon: FaDatabase,
    title: "4. Data Sharing & Third-Party Disclosure",
    tag: "No Sale Policy",
    summary: "We never monetize or sell your data. Disclosure happens only under legal mandates.",
    details: [
      "Zero Commercial Sharing: We do not sell, rent, or trade resident personal information to advertisers or marketing agencies under any circumstances.",
      "Legal & Regulatory Demands: Disclosures may be made to local law enforcement or government authorities upon receiving formal statutory orders.",
      "Trusted Service Providers: Encrypted data is shared only with certified payment gateway processors (e.g., Razorpay, UPI) to securely execute banking transactions."
    ]
  },
  {
    id: "security",
    icon: FaLock,
    title: "5. Data Security & Storage Standards",
    tag: "Industry Standard",
    summary: "Multi-layered encryption, restricted administrative access, and secure local storage.",
    details: [
      "Digital Records: All digital records are stored behind firewalled, encrypted cloud servers adhering to SSL/TLS industry protocols.",
      "Physical Copies: Paper verification forms and KYC photocopies are archived in secure, restricted-access facility lockers.",
      "Data Retention: Verification data is retained throughout the active tenancy period and safely expunged within 90 days after checkout clearance."
    ]
  },
  {
    id: "rights",
    icon: FaShieldAlt,
    title: "6. Your Rights & Grievance Contact",
    tag: "Resident Control",
    summary: "You have the right to review, update, or request data corrections at any time.",
    details: [
      "Right to Rectification: You may update or correct your contact and emergency information by notifying the manager.",
      "Data Purge Requests: Upon checkout and settlement of all dues, you may request written confirmation of the deletion of non-statutory records.",
      "Grievance Officer: For any privacy inquiries, reach out directly to suhaimacolivingpg@gmail.com."
    ]
  }
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919187200607?text=Hi%20Suhaima%20Colive,%20I%20have%20a%20question%20regarding%20the%20Privacy%20Policy.", "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#0A0C10] text-slate-300 pt-24 pb-20 overflow-hidden">
      <div className="absolute top-10 left-[-10%] w-[550px] h-[550px] bg-[#DAA520]/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAA520] text-[11px] font-black uppercase tracking-[0.2em] mb-4 backdrop-blur-xl shadow-inner"
          >
            <FaShieldAlt className="text-xs" />
            Legal Trust & Resident Protection
          </motion.div>

          <SectionHeader 
            title={<span className="text-white">Privacy <span className="text-[#DAA520]">Policy</span></span>} 
            subtitle="Transparent data practices for residents at Suhaima Coliving PG." 
            centered
            dark
          />

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-4">
            Last Updated & Verified: May 2026 • Effective for all active tenancies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => setActiveSection("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeSection === "all"
                ? "bg-[#DAA520] text-black font-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            View All ({SECTIONS.length})
          </button>
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                setActiveSection(sec.id);
                const el = document.getElementById(sec.id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeSection === sec.id
                  ? "bg-[#DAA520] text-black font-black shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {sec.title.split(". ")[1]}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {SECTIONS.map((section, idx) => {
            const isExpanded = expandedIndex === idx || activeSection === section.id;
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
                        {section.details.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <FaCheckCircle className="text-[#DAA520] text-xs mt-1 shrink-0" />
                            <span>{item}</span>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white">Have Privacy Inquiries?</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Reach out to our resident desk on WhatsApp or contact management directly.
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2.5 bg-[#DAA520] hover:bg-white text-black font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shrink-0"
          >
            <FaWhatsapp className="text-sm" /> Chat with Manager
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;