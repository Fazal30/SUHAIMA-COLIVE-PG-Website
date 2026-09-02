import { motion } from "framer-motion";
import { 
  FaUndoAlt, FaClock, FaCheckCircle, FaMoneyBillWave, 
  FaShieldAlt, FaWhatsapp, 
  FaExclamationCircle, FaReceipt 
} from "react-icons/fa";
import SectionHeader from "../components/shared/SectionHeader";

const POLICIES = [
  { 
    icon: FaClock, 
    title: "Mandatory 30-Day Notice", 
    tag: "Notice Period",
    accent: "text-amber-400",
    desc: "A formal written notice must be submitted at least 30 days prior to your checkout date via email or resident portal. Rent for the notice duration is payable in full and cannot be offset against the deposit.",
    bulletPoints: [
      "Written email or resident app notification required (verbal notice not accepted).",
      "Notice can be submitted on any date; checkout is calculated exactly 30 days from submission.",
      "Early checkout without 30 days notice will incur forfeiture of rent for the remaining notice period."
    ]
  },
  { 
    icon: FaUndoAlt, 
    title: "Security Deposit Settlement", 
    tag: "7-10 Working Days",
    accent: "text-emerald-400",
    desc: "Your refundable security deposit is transferred directly to your primary verified bank account within 7 to 10 business days following the physical room inspection and final key handover.",
    bulletPoints: [
      "Itemized deduction invoice shared on WhatsApp and email before transfer.",
      "Direct NEFT or UPI bank transfer to the resident's registered account.",
      "Clearance certificate issued upon successful completion."
    ]
  },
  { 
    icon: FaMoneyBillWave, 
    title: "Booking Token Cancellation", 
    tag: "Reservation Fee",
    accent: "text-blue-400",
    desc: "To provide flexibility, booking tokens carry a clear cancellation window before the room is officially locked off the public market.",
    bulletPoints: [
      "100% Full Refund: If booking is cancelled within 24 hours of token payment.",
      "Non-Refundable: Once the 24-hour window passes, as the room has been held and rejected for other prospective tenants.",
      "Transferable: Token can be transferred to a future month's stay with 48-hour prior intimation."
    ]
  },
  { 
    icon: FaReceipt, 
    title: "Allowable Deductions Criteria", 
    tag: "Transparent Charges",
    accent: "text-[#DAA520]",
    desc: "Any deductions from your security deposit are calculated transparently based on actual consumption and pre-agreed standards.",
    bulletPoints: [
      "Electricity consumption based on sub-meter reading up to checkout hour.",
      "Standard checkout deep cleaning fee (₹500 for single / ₹350 per sharing bed).",
      "Cost of repairing or replacing any broken furnishings, torn mattresses, or wall damage beyond regular wear and tear."
    ]
  }
];

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Notice Submission",
    desc: "Submit your vacating form 30 days prior through WhatsApp or official email."
  },
  {
    step: "02",
    title: "Room Inspection",
    desc: "Joint inspection on checkout date verifying furniture, electricals, and keys."
  },
  {
    step: "03",
    title: "Dues Clearance",
    desc: "Sub-meter electricity and cleaning fees tallied into a transparent checkout receipt."
  },
  {
    step: "04",
    title: "Bank Disbursement",
    desc: "Deposit credited via NEFT/UPI within 7–10 business days with digital receipt."
  }
];

const RefundPolicy = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919187200607?text=Hi%20Suhaima%20Colive,%20I%20have%20an%20inquiry%20regarding%20the%20Refund%20and%20Deposit%20policy.", "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#0A0C10] text-slate-300 pt-24 pb-20 overflow-hidden">
      {/* --- AMBIENT GLOW EFFECTS --- */}
      <div className="absolute top-10 left-[-10%] w-[550px] h-[550px] bg-[#DAA520]/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAA520] text-[11px] font-black uppercase tracking-[0.2em] mb-4 backdrop-blur-xl shadow-inner"
          >
            <FaShieldAlt className="text-xs" />
            Guaranteed Settlement SLA
          </motion.div>

          <SectionHeader 
            title={<span>Refund & Deposit <span className="text-[#DAA520]">Policy</span></span>} 
            subtitle="Fairness, full financial transparency, and timely electronic settlements." 
            centered
            dark
          />

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-4">
            Security Deposit Protection • 7 to 10 Working Days Direct Bank Transfer
          </p>
        </div>

        {/* --- 4-STEP REFUND WORKFLOW --- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#DAA520]">
              The Move-Out Roadmap
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              How Checkout & Refund Works
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_STEPS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-[#DAA520]/40 transition-all group relative"
              >
                <span className="text-3xl font-black text-white/10 group-hover:text-[#DAA520]/30 transition-colors block mb-2">
                  {item.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#DAA520] transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- CORE POLICIES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POLICIES.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#DAA520]/50 hover:shadow-[0_20px_40px_rgba(218,165,32,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#DAA520]/10 border border-[#DAA520]/30 flex items-center justify-center text-[#DAA520] text-xl">
                    <card.icon />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#DAA520]">
                    {card.tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h4 className="text-xl font-black text-white mb-3 tracking-tight">
                  {card.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {card.bulletPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <FaCheckCircle className="text-[#DAA520] text-xs mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CLEARANCE NOTICE BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl shrink-0">
            <FaExclamationCircle />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white mb-1">Electronic Payment Transparency</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We never issue paper cheques or delayed promises. All refunds are executed via real-time NEFT/IMPS or UPI with an instant UTR bank transaction reference sent straight to your WhatsApp.
            </p>
          </div>
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#DAA520]/15 to-transparent border border-[#DAA520]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white">Have Questions About Your Deposit?</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Talk to our accounts and finance desk directly on WhatsApp for status tracking.
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2.5 bg-[#DAA520] hover:bg-white text-black font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shrink-0"
          >
            <FaWhatsapp className="text-sm" /> Inquire on WhatsApp
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default RefundPolicy;