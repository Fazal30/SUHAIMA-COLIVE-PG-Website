import { motion } from "framer-motion";
import { FaUndoAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import SectionHeader from "../components/shared/SectionHeader";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-white py-24">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title={<span>Refund <span className="text-[#DAA520]">Policy</span></span>} 
          subtitle="Fairness and transparency in every transaction." 
          centered
          dark
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: FaClock, 
              t: "Notice Period", 
              d: "A mandatory 30-day notice is required before vacating. Rent for the notice period is non-refundable." 
            },
            { 
              icon: FaUndoAlt, 
              t: "Security Deposit", 
              d: "The security deposit is fully refundable within 7 working days after move-out, minus any damage charges." 
            },
            { 
              icon: FaCheckCircle, 
              t: "Booking Token", 
              d: "The initial booking token is non-refundable if the resident cancels before move-in." 
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 bg-[#DAA520] rounded-2xl flex items-center justify-center mx-auto mb-6 text-black">
                <card.icon size={28} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{card.t}</h4>
              <p className="text-slate-400 leading-relaxed">{card.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-[3rem] bg-slate-900 border border-white/5 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 italic">Processing Time</h3>
          <p className="text-slate-500">All eligible refunds are processed via bank transfer to the resident's primary account within 7-10 business days after clearance.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;