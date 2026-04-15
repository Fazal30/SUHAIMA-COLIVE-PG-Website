import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaInstagram, FaLinkedin, FaFacebook, FaArrowRight, FaClock 
} from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0C10] text-slate-400 pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-white text-3xl font-black tracking-tighter">
              SUHAIMA<span className="text-[#DAA520]">.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Redefining the standard of living for the modern professional. 
              Premium spaces, vibrant community, and zero-hassle management in Electronic City.
            </p>
            <div className="flex gap-4">
              {[FaInstagram, FaLinkedin, FaFacebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#DAA520] hover:text-black transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Rooms", "Gallery", "Amenities", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    className="hover:text-[#DAA520] flex items-center group transition-colors"
                  >
                    <FaArrowRight className="text-[10px] mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Get in Touch</h4>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:text-[#DAA520] transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-slate-500">Shikaripalya, Phase 1, Electronic City, Bangalore</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:text-[#DAA520] transition-colors">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-white font-medium">Direct Line</p>
                  <p className="text-slate-500">+91 96209 96689</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:text-[#DAA520] transition-colors">
                  <FaClock />
                </div>
                <div>
                  <p className="text-white font-medium">Visiting Hours</p>
                  <p className="text-slate-500">Daily: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Stay Updated</h4>
            <p className="text-sm mb-6">Join our waitlist for upcoming luxury room openings.</p>
            <div className="flex flex-col gap-3">
              <Input 
                className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-[#DAA520]" 
                placeholder="Enter your email" 
              />
              <Button className="w-full bg-[#DAA520] hover:bg-[#B8860B] text-black font-bold rounded-xl h-12">
                Subscribe
              </Button>
            </div>
          </motion.div>

        </div>

        {/* Horizontal Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase">
          <p>© {currentYear} SUHAIMA COLIVE. Handcrafted for Premium Living.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/refund" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* --- MOBILE QUICK ACTION BAR (Responsive Enhancement) --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-50">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-2 rounded-full flex justify-between items-center shadow-2xl">
          <a href="tel:+91 9620996689" className="flex-1 flex items-center justify-center gap-2 text-white font-bold py-3 border-r border-white/10">
            <FaPhoneAlt className="text-[#DAA520]" /> Call
          </a>
          <a href="https://wa.me/919620996689" className="flex-1 flex items-center justify-center gap-2 text-green-400 font-bold py-3">
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;