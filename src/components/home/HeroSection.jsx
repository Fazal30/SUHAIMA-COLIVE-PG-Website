import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/919187200607?text=Hi%20I%20am%20interested%20in%20SUHAIMA%20COLIVE%20PG", "_blank");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0C10]">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          className="w-full h-full object-cover brightness-[0.25]"
          alt="Suhaima Luxury PG"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0C10]/60 to-[#0A0C10]" />
      </div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-[#DAA520]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-[#DAA520] text-xs font-black uppercase tracking-[0.2em] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DAA520] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DAA520]"></span>
          </span>
          Trusted by 100+ Premium Residents
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-[7.5rem] font-black text-white leading-[0.95] tracking-tighter"
        >
          SUHAIMA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B]">
            COLIVING PG 
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 mt-8 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Redefining co-living in <span className="text-white">Electronic City</span>. 
          Where luxury design meets a vibrant professional community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex gap-4 justify-center flex-wrap"
        >
          <Button 
            onClick={handleWhatsApp}
            className="group px-8 sm:px-10 py-6 sm:py-7 text-xs sm:text-sm font-black uppercase tracking-widest rounded-2xl bg-[#DAA520] text-black hover:bg-white hover:scale-105 transition-all shadow-[0_20px_50px_rgba(218,165,32,0.3)]"
          >
            <FaWhatsapp className="mr-2 text-lg" /> Book Your Slot
          </Button>

          <Button 
            onClick={() => navigate("/rooms")}
            className="group px-8 sm:px-10 py-6 sm:py-7 text-xs sm:text-sm font-black uppercase tracking-widest rounded-2xl bg-white/5 text-white border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition-all"
          >
            Explore Rooms <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto border-t border-white/5 pt-10 sm:pt-12"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-black text-white">100+</h3>
            <p className="text-[10px] uppercase tracking-widest text-[#DAA520] font-bold mt-1">Residents</p>
          </div>
          <div className="text-center border-x border-white/5">
            <h3 className="text-2xl md:text-4xl font-black text-white">4.8★</h3>
            <p className="text-[10px] uppercase tracking-widest text-[#DAA520] font-bold mt-1">Top Rated</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-black text-white">24/7</h3>
            <p className="text-[10px] uppercase tracking-widest text-[#DAA520] font-bold mt-1">Support</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#DAA520] to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
