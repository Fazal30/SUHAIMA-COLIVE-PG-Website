import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

const HomeCtaSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919187200607?text=Hi%20I%20am%20interested%20in%20booking%20a%20room%20at%20SUHAIMA%20COLIVE%20PG", "_blank");
  };

  return (
    <section className="relative py-24 md:py-28 bg-gradient-to-b from-[#0A0C10] via-[#12161F] to-[#0A0C10] text-white text-center overflow-hidden border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DAA520]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#DAA520] mb-3 block">
            Start Your Premium Stay
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
            Ready to Elevate Your Living?
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Reserve your suite in minutes or chat with our property manager for customized sharing arrangements.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-[#DAA520] hover:bg-white text-black font-black px-10 py-5 rounded-2xl text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[0_15px_40px_rgba(218,165,32,0.3)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
          >
            <FaWhatsapp size={18} /> Book On WhatsApp <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCtaSection;
