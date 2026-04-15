import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change background on scroll for better visibility
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Amenities", path: "/amenities" },
    { name: "Contact", path: "/contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/919620996689?text=Hi, I'm interested in booking a room at Suhaima Colive!", "_blank");
  };

  return (
    <nav 
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled 
        ? "bg-[#0A0C10]/80 backdrop-blur-xl border-b border-white/10 py-3" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* --- LOGO --- */}
        <Link to="/" className="relative group">
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-white group-hover:text-[#DAA520] transition-colors">
            SUHAIMA<span className="text-[#DAA520]">.</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all group-hover:w-full" />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-8 items-center mr-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-[#DAA520] ${
                  location.pathname === link.path ? "text-[#DAA520]" : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-white/20 pl-8">
            <button 
              onClick={handleWhatsApp}
              className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-xs font-bold hidden xl:inline">CHAT NOW</span>
            </button>
            <Button 
              onClick={handleWhatsApp}
              className="bg-[#DAA520] hover:bg-[#B8860B] text-black font-extrabold rounded-full px-8 shadow-[0_10px_20px_rgba(218,165,32,0.3)] transition-transform hover:scale-105"
            >
              BOOK NOW
            </Button>
          </div>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          className="lg:hidden text-white text-2xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#0A0C10] flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black text-white">SUHAIMA<span className="text-[#DAA520]">.</span></span>
              <button onClick={() => setIsOpen(false)} className="text-white text-3xl"><FaTimes /></button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-bold text-white hover:text-[#DAA520]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <Button 
                onClick={handleWhatsApp}
                className="w-full h-16 bg-[#DAA520] text-black font-bold text-xl rounded-2xl"
              >
                Book Your Room
              </Button>
              <div className="flex justify-center gap-8 py-4">
                <a href="tel:+919620996689" className="text-white flex items-center gap-2">
                  <FaPhoneAlt className="text-[#DAA520]" /> Call Us
                </a>
                <button onClick={handleWhatsApp} className="text-white flex items-center gap-2">
                  <FaWhatsapp className="text-green-500" /> WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;