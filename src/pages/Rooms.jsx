import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaCheckCircle, FaCube, 
  FaArrowRight, FaWhatsapp, FaInfoCircle, FaSync 
} from "react-icons/fa";
import { ROOM_CATEGORIES } from "../data/roomsData";

const Rooms = () => {
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const handleWhatsApp = (roomType) => {
    window.open(`https://wa.me/919187200607?text=Hi,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(roomType)}%20at%20Suhaima%20Colive.`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#0A0C10] text-white pt-24 pb-20 overflow-hidden">
      <div className="absolute top-10 left-[-10%] w-[550px] h-[550px] bg-[#DAA520]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#DAA520]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAA520] text-[11px] font-black uppercase tracking-[0.2em] mb-4 backdrop-blur-xl shadow-inner"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DAA520] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DAA520]"></span>
            </span>
            Premium Spaces & Suites
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3"
          >
            FIND YOUR <span className="text-[#DAA520]">SPACE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl"
          >
            Engineered for ergonomics, privacy, and community living. Select your sharing preference and experience coliving at its finest.
          </motion.p>
        </div>

        <div className="space-y-20 md:space-y-24">
          {ROOM_CATEGORIES.map((room, index) => {
            const currentImgIndex = activeImageIndex[room.id] || 0;
            return (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center p-6 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-[#DAA520]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(218,165,32,0.1)] backdrop-blur-xl group`}
              >
                <div className="w-full lg:w-3/5">
                  <div className="relative h-[280px] sm:h-[350px] md:h-[420px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImgIndex}
                        initial={{ scale: 1.08, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.04, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={room.images[currentImgIndex]}
                        alt={`${room.type} showcase`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-lg cursor-default"
                    >
                      <FaSync className="text-[#DAA520] text-xs animate-spin" style={{ animationDuration: "6s" }} />
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-200">360° Preview</span>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="absolute bottom-5 left-5 bg-[#0A0C10]/85 backdrop-blur-xl border border-[#DAA520]/50 text-white px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col transition-all"
                    >
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl md:text-2xl font-black text-[#DAA520]">₹{room.price}</span>
                        <span className="text-[10px] font-semibold text-slate-400">/ mo</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex gap-3 mt-4 justify-center lg:justify-start">
                    {room.images.map((img, idx) => (
                      <motion.button 
                        key={idx}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveImageIndex({ ...activeImageIndex, [room.id]: idx })}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-md ${
                          currentImgIndex === idx 
                            ? "border-[#DAA520] scale-105 shadow-[0_0_15px_rgba(218,165,32,0.4)] ring-2 ring-[#DAA520]/20" 
                            : "border-white/10 opacity-50 hover:opacity-90"
                        }`}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-2/5 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[#DAA520] font-black text-xs tracking-widest uppercase mb-2">
                      <FaCube className="text-xs" /> {room.category}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#DAA520] transition-colors duration-300">
                      {room.type}
                    </h2>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {room.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {room.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#DAA520]/10 border border-[#DAA520]/20 text-[#DAA520]">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2.5">
                    {room.amenities.slice(0, 4).map((item, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="group/amenity flex items-center gap-2 text-slate-300 bg-white/5 hover:bg-white/10 p-2.5 rounded-xl border border-white/5 hover:border-[#DAA520]/30 transition-all cursor-default"
                      >
                        <FaCheckCircle className="text-[#DAA520] text-xs group-hover/amenity:scale-110 group-hover/amenity:text-[#FFD700] transition-transform shrink-0" />
                        <span className="text-[11px] md:text-xs font-semibold truncate">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <motion.button 
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleWhatsApp(room.type)}
                      className="inline-flex items-center justify-center gap-2 bg-[#DAA520] hover:bg-white text-black font-black px-6 py-3 rounded-xl text-xs md:text-sm uppercase tracking-wider shadow-[0_10px_20px_rgba(218,165,32,0.25)] hover:shadow-[0_10px_25px_rgba(255,255,255,0.3)] transition-all"
                    >
                      <FaWhatsapp className="text-base" /> Check Availability <FaArrowRight className="text-xs" />
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => navigate(`/room/${room.id}`)}
                      className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#DAA520] hover:text-[#DAA520] text-white px-5 py-3 rounded-xl text-xs md:text-sm uppercase tracking-wider transition-all bg-white/5 hover:bg-[#DAA520]/10"
                    >
                      <FaInfoCircle className="text-xs" /> Full Specs
                    </motion.button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="mt-28 md:mt-32 p-8 md:p-14 rounded-[3rem] bg-gradient-to-br from-slate-900/80 via-[#0A0C10] to-black border border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#DAA520]/10 rounded-full blur-[90px] pointer-events-none" />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tight text-white">
            Not sure which space to pick?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Schedule an on-site walkthrough and experience the comfort, ventilation, and community vibe yourself.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleWhatsApp("Physical Tour")}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all shadow-[0_15px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)]"
          >
            <FaWhatsapp size={20} /> Schedule Visit on WhatsApp
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default Rooms;