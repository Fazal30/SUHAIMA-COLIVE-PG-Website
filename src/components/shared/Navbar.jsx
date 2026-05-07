import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Amenities", path: "/amenities" },
    { name: "Contact", path: "/contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/919187200607?text=Hi, I'm interested in booking a room at Suhaima Colive!", "_blank");
  };

  return (
    <nav 
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ease-in-out ${
        scrolled 
        ? "bg-[#0A0C10]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
        : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        
        {/* --- LOGO WITH PULSE EFFECT --- */}
        <Link to="/" className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-black tracking-tighter text-white"
          >
            SUHAIMA<span className="text-[#DAA520]">.</span>
          </motion.div>
          <motion.div 
            className="absolute -bottom-1 left-0 h-0.5 bg-[#DAA520]"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group text-xs font-black uppercase tracking-[0.2em]"
              >
                <span className={`transition-colors duration-300 ${
                  location.pathname === link.path ? "text-[#DAA520]" : "text-slate-300 group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                {/* Underline Animation */}
                <span className={`absolute -bottom-2 left-1/2 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 -translate-x-1/2 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 border-l border-white/10 pl-10">
            <motion.button 
              whileHover={{ y: -2 }}
              onClick={handleWhatsApp}
              className="flex items-center gap-2 text-white hover:text-green-400 transition-all font-bold text-xs"
            >
              <div className="p-2 bg-green-500/10 rounded-lg">
                <FaWhatsapp className="text-lg text-green-500" />
              </div>
              <span className="hidden xl:inline tracking-widest">ENQUIRE</span>
            </motion.button>

            <Button 
              onClick={handleWhatsApp}
              className="bg-[#DAA520] hover:bg-white text-black font-black rounded-full px-8 py-6 text-xs tracking-widest shadow-[0_10px_30px_rgba(218,165,32,0.2)] transition-all active:scale-95"
            >
              BOOK NOW
            </Button>
          </div>
        </div>

        {/* --- MOBILE TOGGLE WITH ANIMATED ICON --- */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white shadow-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>
      </div>

      {/* --- MOBILE FULLSCREEN DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md lg:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-screen w-[85%] max-w-[400px] bg-[#0A0C10] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-[110] p-10 flex flex-col lg:hidden border-l border-white/5"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-2xl font-black text-white italic">SUHAIMA<span className="text-[#DAA520]">.</span></span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-4xl font-black tracking-tighter transition-colors ${
                        location.pathname === link.path ? "text-[#DAA520]" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <div className="h-[1px] w-full bg-white/10" />
                <div className="grid grid-cols-2 gap-4">
                  <a href="tel:+919187200607" className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-[#DAA520] hover:text-black transition-all group">
                    <FaPhoneAlt size={20} className="text-[#DAA520] group-hover:text-black" />
                    <span className="text-[10px] font-black tracking-widest uppercase">Call</span>
                  </a>
                  <button onClick={handleWhatsApp} className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-green-500 hover:text-white transition-all group">
                    <FaWhatsapp size={22} className="text-green-500 group-hover:text-white" />
                    <span className="text-[10px] font-black tracking-widest uppercase">Chat</span>
                  </button>
                </div>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full h-18 bg-[#DAA520] text-black font-black text-xl rounded-[2rem] shadow-2xl active:scale-95 transition-transform"
                >
                  RESERVE NOW
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;