import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaInstagram, FaLinkedin, FaFacebook, FaArrowRight, FaClock, FaExternalLinkAlt 
} from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import BrandLogo from "../common/BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, link: "#", color: "hover:text-pink-500" },
    { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61589190667120", color: "hover:text-blue-500" },
    { icon: FaLinkedin, link: "#", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="bg-[#0A0C10] text-slate-400 pt-24 pb-32 md:pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DAA520]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="mb-4">
                <BrandLogo />
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                Redefining luxury coliving in Bangalore. We provide premium, tech-enabled managed spaces for the modern professional who values community and comfort.
              </p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <motion.a 
                  key={i} 
                  href={item.link} 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl transition-all duration-300 border border-white/5 hover:border-[#DAA520]/50 ${item.color} hover:bg-white/10`}
                >
                  <item.icon />
                </motion.a>
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
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10 opacity-50">Navigation</h4>
            <ul className="space-y-5">
              {["Home", "Rooms", "Gallery", "Amenities", "Contact", "Menu"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    className="hover:text-[#DAA520] font-bold text-sm flex items-center group transition-colors"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#DAA520] mr-0 group-hover:mr-3 transition-all duration-300" />
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
            className="lg:col-span-1"
          >
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10 opacity-50">Contact</h4>
            <div className="space-y-8">
              <a 
                href="https://www.google.com/maps/place/12%C2%B049'58.8%22N+77%C2%B039'25.1%22E/@12.8329949,77.6543828,855m"
                target="_blank"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#DAA520]/10 flex-shrink-0 flex items-center justify-center text-[#DAA520] group-hover:bg-[#DAA520] group-hover:text-black transition-all duration-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1 group-hover:text-[#DAA520] transition-colors">Find Us</p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    SUHAIMA COLIVING PG, GOLLAHALLI MAIN ROAD, NEAR MY NEST APARTMENT, ELECTRONIC CITY, BANGALORE 560100
                  </p>
                </div>
              </a>

              <a href="mailto:suhaimacolivingpg@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center group-hover:text-[#DAA520] transition-colors">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Email Support</p>
                  <p className="text-xs text-slate-500">suhaimacolivingpg@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919187200607" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center group-hover:text-[#DAA520] transition-colors">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Direct Call</p>
                  <p className="text-xs text-slate-500">+91 91872 00607</p>
                </div>
              </a>
              <a href="tel:+919187200608" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center group-hover:text-[#DAA520] transition-colors">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Direct Call</p>
                  <p className="text-xs text-slate-500">+91 91872 00608</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Newsletter / Map Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
               {/* <div className="h-32 w-full bg-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/77.6569,12.8330,14,0/400x200?access_token=YOUR_MAPBOX_TOKEN" 
                    alt="Location Preview"
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                  />
                  <a 
                    href="https://www.google.com/maps/place/12%C2%B049'58.8%22N+77%C2%B039'25.1%22E/@12.8329949,77.6543828,855m"
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all"
                  >
                    <span className="bg-[#DAA520] text-black text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl">
                      OPEN MAPS <FaExternalLinkAlt size={8}/>
                    </span>
                  </a>
               </div> */}
               <div className="mt-6 px-2 pb-2">
                  <p className="text-xs font-bold mb-3 text-white uppercase tracking-wider">Stay Updated</p>
                  <div className="flex gap-2">
                    <Input 
                      className="bg-white/5 border-white/5 rounded-xl h-10 text-xs focus:border-[#DAA520]" 
                      placeholder="Your email" 
                    />
                    <Button className="bg-[#DAA520] hover:bg-white text-black font-black text-[10px] rounded-xl h-10 px-4">
                      JOIN
                    </Button>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>

        {/* Horizontal Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600 order-2 md:order-1">
            © {currentYear} SUHAIMA COLIVING. Handcrafted for <span className="text-white">Premium Living</span>.
          </div>
          
          {/* Bottom Bar Links - Manually Defined */}
<div className="flex flex-wrap justify-center gap-6 md:gap-10 order-1 md:order-2">
  <Link 
    to="/privacy" 
    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#DAA520] transition-colors"
  >
    Privacy Policy
  </Link>

  <Link 
    to="/terms" 
    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#DAA520] transition-colors"
  >
    Terms of Service
  </Link>

  <Link 
    to="/refund" 
    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#DAA520] transition-colors"
  >
    Refund Policy
  </Link>
</div>

        </div>
      </div>

      {/* --- MOBILE STICKY ACTION BAR --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] md:hidden z-50">
        <div className="bg-[#0A0C10]/90 backdrop-blur-2xl border border-white/10 p-2 rounded-[2rem] flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <a href="tel:+919187200607" className="flex-1 flex flex-col items-center justify-center gap-1 text-white py-3 border-r border-white/5 hover:bg-white/5 rounded-l-2xl transition-all">
            <FaPhoneAlt className="text-[#DAA520] text-lg" />
            <span className="text-[10px] font-black tracking-widest uppercase">Call</span>
          </a>
          <a href="https://wa.me/919187200607" className="flex-[1.5] flex items-center justify-center gap-3 text-black bg-[#DAA520] mx-2 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-[0_10px_20px_rgba(218,165,32,0.3)] active:scale-95 transition-all">
            <FaWhatsapp size={18} /> Book Now
          </a>
          <a href="mailto:suhaimacolivingpg@gmail.com" className="flex-1 flex flex-col items-center justify-center gap-1 text-white py-3 border-l border-white/5 hover:bg-white/5 rounded-r-2xl transition-all">
            <FaEnvelope className="text-white text-lg" />
            <span className="text-[10px] font-black tracking-widest uppercase">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;