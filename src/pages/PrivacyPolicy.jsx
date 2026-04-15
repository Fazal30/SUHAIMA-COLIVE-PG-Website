import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";

const PrivacyPolicy = () => {
  const sections = [
    { id: "collection", title: "1. Information Collection", content: "We collect information you provide directly to us, such as when you create an account, book a room, or communicate with us. This includes your name, contact number, email address, and government-issued ID for verification." },
    { id: "usage", title: "2. How We Use Information", content: "We use the information to process your bookings, manage the PG facilities, ensure security, and communicate important updates regarding your stay." },
    { id: "sharing", title: "3. Data Sharing", content: "We do not sell your personal data. We only share information with local authorities if required by law for tenant verification or with trusted service providers who help us operate our facility." },
    { id: "security", title: "4. Data Security", content: "We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security." }
  ];

  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-300 py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <SectionHeader 
            title={<span className="text-white">Privacy <span className="text-[#DAA520]">Policy</span></span>} 
            subtitle="Last Updated: April 2026" 
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-32 h-fit space-y-4">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="block text-sm font-bold uppercase tracking-widest hover:text-[#DAA520] transition-colors">
                {s.title}
              </a>
            ))}
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-16">
            {sections.map((section, idx) => (
              <motion.section 
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="leading-relaxed text-lg text-slate-400">{section.content}</p>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;