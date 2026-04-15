import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-300 py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title={<span className="text-white">Terms of <span className="text-[#DAA520]">Service</span></span>} 
          subtitle="Please read these terms carefully before booking your stay." 
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 space-y-12"
        >
          <div className="prose prose-invert max-w-none">
            <h3 className="text-[#DAA520] text-xl font-bold uppercase tracking-widest mb-6">1. Acceptance of Terms</h3>
            <p className="text-lg leading-relaxed">By accessing or using SUHAIMA COLIVE PG services, you agree to be bound by these terms. If you do not agree, you may not use our services.</p>

            <h3 className="text-[#DAA520] text-xl font-bold uppercase tracking-widest mt-12 mb-6">2. Resident Conduct</h3>
            <p className="text-lg leading-relaxed">Residents must maintain decorum. Illegal activities, smoking inside rooms, and unauthorized visitors after 8:00 PM are strictly prohibited. Damage to property will result in fines deducted from the security deposit.</p>

            <h3 className="text-[#DAA520] text-xl font-bold uppercase tracking-widest mt-12 mb-6">3. Rent & Payments</h3>
            <p className="text-lg leading-relaxed">Monthly rent is due by the 5th of every month. A late fee of ₹200 per day will be applicable after the 7th. Electricity bills are calculated as per actual sub-meter readings.</p>

            <h3 className="text-[#DAA520] text-xl font-bold uppercase tracking-widest mt-12 mb-6">4. Termination</h3>
            <p className="text-lg leading-relaxed">Management reserves the right to terminate the stay of any resident found violating the core rules of the community without prior notice.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;