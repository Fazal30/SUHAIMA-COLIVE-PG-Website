import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { FaExpandAlt, FaTimes, FaArrowRight, FaShapes } from "react-icons/fa";

import room3 from "../assets/room-3.jpeg";
import Washrooms from "../assets/bathroom.jpeg";
import roof3 from "../assets/roof3.jpeg";
import Balcony from "../assets/balcony1.jpeg";
import room4 from "../assets/room-4.jpeg";
import common from "../assets/common.jpg";
import common1 from "../assets/common1.jpg";
import dinnerTable from "../assets/dinnertable.jpeg";

const GALLERY_IMAGES = [
  { url: common, title: "Premium Lounge", category: "Common Area" },
  { url: room4, title: "Luxury Suite", category: "Bedrooms" },
  { url: Balcony, title: "Sunrise View", category: "Balcony" },
  { url: common1, title: "Working Zone", category: "Work" },
  { url: room3, title: "Single Room", category: "Bedrooms" },
  { url: roof3, title: "Sky Deck", category: "Leisure" },
  { url: Washrooms, title: "Modern Washrooms", category: "Facilities" },
  { url: dinnerTable, title: "Modern Dinner Table", category: "Dining" },
];

const CATEGORIES = ["All", ...new Set(GALLERY_IMAGES.map((img) => img.category))];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = useMemo(() => {
    return activeFilter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  const handleBookTour = () => {
    window.open(
      "https://wa.me/919187200607?text=Hi%20SUHAIMA%20COLIVE%20PG,%20I%20would%20like%20to%20schedule%20a%20physical%20tour!",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#DAA520]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title={<span className="text-white">The Suhaima <span className="text-[#DAA520]">Visual Experience</span></span>}
            subtitle="Ultra-HD glimpses of a lifestyle designed for the elite."
            centered
            dark
          />
        </motion.div>

        {/* --- CATEGORY FILTER TABS --- */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-[#DAA520] text-black border-[#DAA520] shadow-[0_0_20px_rgba(218,165,32,0.4)]"
                  : "bg-white/5 text-slate-400 border-white/10 hover:border-[#DAA520]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC MASONRY GRID --- */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer break-inside-avoid rounded-[2rem] overflow-hidden border border-white/10 bg-[#161B22]"
                onClick={() => setSelectedImg(item.url)}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Luxury Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                    <p className="text-[#DAA520] text-[10px] font-black uppercase tracking-[0.3em] mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-white text-xl font-bold mb-3 tracking-tight">{item.title}</h3>

                    <div className="flex items-center gap-3">
                      <div className="h-[1px] w-8 bg-[#DAA520]" />
                      <span className="text-white/70 text-xs font-bold uppercase tracking-wider">View Fullscreen</span>
                    </div>
                  </div>

                  {/* Floating Icon on Hover */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <div className="bg-[#DAA520] p-3 rounded-2xl text-black shadow-xl">
                      <FaExpandAlt size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- ENHANCED LIGHTBOX --- */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button
                className="absolute top-8 right-8 z-[210] text-white text-2xl w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DAA520] hover:text-black transition-all shadow-2xl"
                onClick={() => setSelectedImg(null)}
                aria-label="Close image preview"
              >
                <FaTimes />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImg}
                  className="w-full h-auto max-h-[82vh] rounded-[2rem] shadow-[0_0_60px_rgba(218,165,32,0.2)] object-contain border border-white/10 mx-auto"
                  alt="Full preview"
                />
                <div className="mt-4 flex items-center justify-center gap-3 text-white/50 text-xs font-bold uppercase tracking-[0.3em]">
                  <FaShapes className="text-[#DAA520]" />
                  Suhaima Luxury PG
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- PREMIUM BOTTOM SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-r from-white/5 to-transparent border border-white/5 text-center relative"
        >
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#0A0C10] px-6">
            <FaShapes className="text-[#DAA520] text-3xl" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Seeing is <span className="italic text-[#DAA520]">Believing</span>.
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium">
            Images can only tell half the story. Experience the ambiance, taste the home-style food, and feel the community in person.
          </p>

          <button
            onClick={handleBookTour}
            className="inline-flex items-center gap-3 bg-[#DAA520] hover:bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-[0_0_40px_rgba(218,165,32,0.3)] active:scale-95"
          >
            Schedule a Visit <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;