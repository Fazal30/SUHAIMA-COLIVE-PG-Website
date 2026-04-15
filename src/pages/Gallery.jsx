import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { FaExpandAlt, FaTimes, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { url: "https://images.unsplash.com/photo-1555854817-40e098ee79bd", title: "Premium Lounge", category: "Common Area" },
    { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf", title: "Luxury Suite", category: "Bedrooms" },
    { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Gourmet Kitchen", category: "Dining" },
    { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", title: "Tech Hub", category: "Work" },
    { url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c", title: "Single Room", category: "Bedrooms" },
    { url: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511", title: "Fitness Center", category: "Leisure" },
    { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "Rooftop Terrace", category: "Leisure" },
    { url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c", title: "Modern Washrooms", category: "Facilities" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0C10] py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader 
            title={<span className="text-white">The Suhaima <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DAA520]">Gallery</span></span>}
            subtitle="Explore every corner of your future home in ultra-high definition." 
            centered 
          />
        </motion.div>

        {/* --- MASONRY GRID --- */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mt-16">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden border border-white/5 bg-slate-900/40"
              onClick={() => setSelectedImg(item.url)}
            >
              {/* Image with Advanced Hover Scale */}
              <div className="relative overflow-hidden aspect-auto">
                <motion.img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.span 
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-[#FFD700] text-xs font-bold tracking-widest uppercase mb-2"
                  >
                    {item.category}
                  </motion.span>
                  <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                    <span>View Detail</span>
                    <FaExpandAlt className="text-[#FFD700]" />
                  </div>
                </div>
              </div>

              {/* Glassmorphism Border Glow */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-[#DAA520]/40 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* --- LIGHTBOX OVERLAY --- */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedImg(null)}
            >
              <motion.button
                whileHover={{ rotate: 90 }}
                className="absolute top-10 right-10 text-white text-3xl p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                onClick={() => setSelectedImg(null)}
              >
                <FaTimes />
              </motion.button>

              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImg}
                className="max-w-full max-h-[85vh] rounded-2xl shadow-[0_0_50px_rgba(218,165,32,0.3)] object-contain"
                alt="Enlarged view"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center border-t border-white/5 pt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Want a closer look in person?</h2>
          <button className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-[#FFD700] transition-colors group">
            Schedule a Private Tour
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;