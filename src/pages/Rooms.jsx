import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBed, FaUsers, FaCheckCircle, FaCube, 
  FaArrowRight, FaWhatsapp, FaInfoCircle, FaSync 
} from "react-icons/fa";
import { Button } from "../components/ui/button";
import room1 from "../assets/room-1.jpeg"
import room5 from "../assets/room-5.jpeg"
import room2 from "../assets/room-2.jpeg"
import room3 from "../assets/room-3.jpeg"
import room4 from "../assets/room-4.jpeg"


const ROOM_DATA = [
  {
    id: 1,
    type: "The Elite Single",
    category: "Luxury Private",
    price: "13,000",
    images: [
      room3,
      room4,
      room5
    ],
    amenities: ["Attached Balcony", "Private Workstation", "King Bed"],
    description: "Designed for the focused professional. Complete privacy with premium interiors."
  },
  {
    id: 2,
    type: "Premium Double",
    category: "Shared Excellence",
    price: "7500",
    images: [
      room1,
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    ],
    amenities: ["Spacious Storage", "Individual Desks", "Twin Beds", "Task Lighting"],
    description: "The perfect balance of social living and personal comfort. Shared by two."
  },
  {
    id: 3,
    type: "Executive Triple",
    category: "Community Living",
    price: "6,500",
    images: [
      room2,
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ],
    amenities: ["Extra Storage", "Lounge Access", "AC/Non-AC", "High Ceilings"],
    description: "Affordable luxury for students and young creators. Massive community vibes."
  }
];

const Rooms = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const handleWhatsApp = (roomType) => {
    window.open(`https://wa.me/919187200607?text=Hi, I want to book the ${roomType}.`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="max-w-4xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            FIND YOUR <span className="text-[#DAA520]">SPACE.</span>
          </motion.h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Every room at Suhaima is a blend of ergonomics and aesthetics. 
            Select your sharing preference and start your premium stay.
          </p>
        </div>

        <div className="space-y-32">
          {ROOM_DATA.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              
              <div className="w-full lg:w-3/5 group relative">
                <div className="relative h-[400px] md:h-[550px] w-full rounded-[3rem] overflow-hidden border border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex[room.id] || 0}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.05, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      src={room.images[activeImageIndex[room.id] || 0]}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* 360 Degree Indicator Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
                    <FaSync className="text-[#DAA520] animate-spin-slow" />
                    <span className="text-xs font-bold tracking-widest uppercase">360° View Available</span>
                  </div>

                  {/* Pricing Badge */}
                  <div className="absolute bottom-10 left-10 bg-[#DAA520] text-black p-6 rounded-3xl shadow-2xl">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">Starting from</p>
                    <p className="text-3xl font-black">₹{room.price}<span className="text-sm">/mo</span></p>
                  </div>
                </div>

                {/* Thumbnails / Switcher */}
                <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                  {room.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImageIndex({ ...activeImageIndex, [room.id]: idx })}
                      className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                        (activeImageIndex[room.id] || 0) === idx ? "border-[#DAA520] scale-110 shadow-lg" : "border-transparent opacity-50"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* --- CONTENT AREA --- */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-[#DAA520] font-bold text-sm tracking-widest uppercase mb-4">
                    <FaCube /> {room.category}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    {room.type}
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Amenities List */}
                <div className="grid grid-cols-2 gap-4">
                  {room.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <FaCheckCircle className="text-[#DAA520]" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 flex flex-wrap gap-4">
                  <Button 
                    onClick={() => handleWhatsApp(room.type)}
                    className="bg-white text-black hover:bg-[#DAA520] font-black px-10 h-16 rounded-full text-lg shadow-xl"
                  >
                    Check Availability <FaArrowRight className="ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-16"
                  >
                    <FaInfoCircle className="mr-2" /> Full Specs
                  </Button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="mt-40 p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-slate-900 to-black border border-white/5 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Not sure which one to pick?</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            Schedule a physical tour and feel the vibe of each room yourself.
          </p>
          <button 
            onClick={() => handleWhatsApp("Physical Tour")}
            className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-black text-xl transition-transform hover:scale-105 shadow-[0_20px_40px_rgba(34,197,94,0.3)]"
          >
            <FaWhatsapp size={28} /> WhatsApp Manager
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Rooms;