import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaClock, FaInstagram, FaFacebook, FaPaperPlane,
  FaCheckCircle, FaComments, FaArrowRight, FaShieldAlt
} from "react-icons/fa";
import { Button } from "../components/ui/button";
import SectionHeader from "../components/shared/SectionHeader";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const Contact = () => {
  const whatsappNumber = "9187200607";
  const emailAddress = "suhaimacolivingpg@gmail.com";
  const locationText = "SUHAIMA COLIVING PG, GOLLAHALLI MAIN ROAD NEAR MY NEST APARTMENT, ELECTRONIC CITY, BANGALORE 560100";
  const mapDirectionsUrl = "https://www.google.com/maps/place/12%C2%B049'58.8%22N+77%C2%B039'25.1%22E/@12.8329949,77.6543828,855m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d12.8329949!4d77.6569577";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    room: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const roomQuickOptions = ["Single Private", "Double Sharing", "Triple Sharing", "Executive Suite"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const msg = `Hi SUHAIMA COLIVE PG!\n\nNew Website Inquiry:\n- Name: ${formData.name || "Resident"}\n- Phone: ${formData.phone || "Not specified"}\n- Room Preference: ${formData.room || "Any"}\n- Message: ${formData.message || "I would like to inquire about availability and book a visit."}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
      setSubmitted(false);
    }, 600);
  };

  const contactMethods = [
    { 
      icon: FaWhatsapp, 
      title: "Direct WhatsApp", 
      value: "+91 91872 00607", 
      actionLabel: "Chat Instantly",
      link: `https://wa.me/91${whatsappNumber}?text=Hi%20Suhaima%20Colive,%20I%20have%20an%20inquiry!`,
      accent: "text-emerald-400",
      borderGlow: "hover:border-emerald-500/50"
    },
    { 
      icon: FaPhoneAlt, 
      title: "Property Desk", 
      value: "+91 91872 00607", 
      actionLabel: "Call Now",
      link: "tel:+919187200607",
      accent: "text-[#DAA520]",
      borderGlow: "hover:border-[#DAA520]/50"
    },
    { 
      icon: FaEnvelope, 
      title: "Email Support", 
      value: emailAddress, 
      actionLabel: "Send Email",
      link: `mailto:${emailAddress}`,
      accent: "text-blue-400",
      borderGlow: "hover:border-blue-500/50"
    },
    { 
      icon: FaClock, 
      title: "Visiting Hours", 
      value: "09:00 AM – 09:00 PM Daily", 
      actionLabel: "Open 7 Days",
      link: "#",
      accent: "text-amber-400",
      borderGlow: "hover:border-amber-500/50"
    },
    { 
      icon: FaMapMarkerAlt, 
      title: "Property Address", 
      value: locationText, 
      actionLabel: "Get Route",
      link: mapDirectionsUrl,
      accent: "text-rose-400",
      borderGlow: "hover:border-rose-500/50"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0C10] text-white pt-24 pb-20 overflow-hidden">
      <div className="absolute top-10 right-[-10%] w-[600px] h-[600px] bg-[#DAA520]/10 blur-[160px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#DAA520]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAA520] text-[11px] font-black uppercase tracking-[0.2em] mb-4 backdrop-blur-xl shadow-inner"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Helpdesk Online • Quick Response Guaranteed
          </motion.div>

          <SectionHeader 
            title={<span className="text-white">Get in <span className="text-[#DAA520]">Touch</span></span>} 
            subtitle="Connect with our hospitality team for bookings, visits, or general inquiries." 
            centered 
            dark
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DAA520]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-widest text-[#DAA520] uppercase flex items-center gap-2">
                  <FaComments /> Direct Communication
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Active
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
                We're Here to <span className="text-[#DAA520]">Assist You.</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you're planning a relocation, scheduling a walkthrough, or asking about food options, we are available daily.
              </p>

              <div className="space-y-3">
                {contactMethods.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 ${item.borderGlow} transition-all duration-300 group cursor-pointer shadow-sm`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#DAA520] group-hover:text-black transition-all duration-300">
                        <item.icon className={`text-lg ${item.accent} group-hover:text-black transition-colors`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                          {item.title}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#DAA520] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white shrink-0 ml-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.actionLabel} <FaArrowRight className="text-[8px]" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Follow Our Community:</span>
              <div className="flex gap-3">
                {[
                  { icon: FaInstagram, url: "#", name: "Instagram" },
                  { icon: FaFacebook, url: "https://www.facebook.com/profile.php?id=61589190667120", name: "Facebook" }
                ].map((s, idx) => (
                  <motion.a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#DAA520] hover:text-black transition-all shadow-md"
                  >
                    <s.icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#161B22]/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#DAA520]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Send an <span className="text-[#DAA520]">Instant Inquiry.</span>
                  </h3>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <FaCheckCircle className="text-xs" /> WhatsApp Connect
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-8">
                  Fill in your requirements below. Your message will be formatted and routed directly to our manager.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-300 ml-1">
                        Your Full Name *
                      </label>
                      <Input 
                        placeholder="e.g. Rahul Sharma" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-14 bg-white/5 border border-white/10 rounded-2xl focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/20 text-white placeholder:text-slate-500 font-medium transition-all" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-300 ml-1">
                        Contact Phone *
                      </label>
                      <Input 
                        type="tel"
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-14 bg-white/5 border border-white/10 rounded-2xl focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/20 text-white placeholder:text-slate-500 font-medium transition-all" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-300 ml-1">
                        Room Preference
                      </label>
                      <span className="text-[10px] text-slate-500">Click a chip or type below</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {roomQuickOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, room: opt })}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                            formData.room === opt
                              ? "bg-[#DAA520] text-black border-[#DAA520] shadow-md font-black"
                              : "bg-white/5 text-slate-400 border-white/10 hover:border-[#DAA520]/50 hover:text-white"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    <Input 
                      placeholder="e.g. Single Private / Double Sharing / AC" 
                      value={formData.room}
                      onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                      className="h-14 bg-white/5 border border-white/10 rounded-2xl focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/20 text-white placeholder:text-slate-500 font-medium transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-300 ml-1">
                      Your Message / Questions
                    </label>
                    <Textarea 
                      placeholder="Share your planned move-in date, work timings, or questions about food, amenities, or parking..." 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[130px] bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/20 text-white placeholder:text-slate-500 font-medium transition-all resize-none" 
                    />
                  </div>

                  <motion.button 
                    type="submit"
                    disabled={submitted}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-15 py-4 rounded-2xl bg-[#DAA520] hover:bg-white text-black font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[0_15px_30px_rgba(218,165,32,0.3)] flex items-center justify-center gap-3 cursor-pointer group/btn"
                  >
                    <FaPaperPlane className="text-sm group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    {submitted ? "Opening WhatsApp..." : "Send Inquiry via WhatsApp"}
                  </motion.button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-semibold pt-1">
                    <FaShieldAlt className="text-[#DAA520]" />
                    Your personal contact details are 100% confidential and secure.
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[3rem] overflow-hidden shadow-2xl h-[450px] relative border border-white/10"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.58474271424!2d77.6710!3d12.8427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c9f280e29b1%3A0x8677c385a6a6877e!2sElectronic%20City!5e0!3m2!1sen!2sin!4v1713123456789!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            title="Suhaima Colive PG Location"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }} 
            allowFullScreen="" 
            loading="lazy"
          />
          
          <div className="absolute bottom-6 left-6 right-6 md:right-auto max-w-xl bg-black/85 backdrop-blur-xl p-6 rounded-[2rem] border border-white/15 shadow-2xl flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 bg-[#DAA520] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <FaMapMarkerAlt className="text-black text-xl animate-bounce" />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[10px] uppercase font-black tracking-widest text-[#DAA520] mb-0.5">Prime Electronic City Hub</p>
              <p className="text-xs sm:text-sm text-white font-semibold leading-snug">
                Near My Nest Apartment, Gollahalli Main Road, Electronic City, Bangalore 560100
              </p>
            </div>

            <Button 
              onClick={() => window.open(mapDirectionsUrl, '_blank')}
              className="rounded-xl bg-[#DAA520] text-black font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md shrink-0 w-full sm:w-auto"
            >
              Get Directions <FaArrowRight className="ml-1.5 text-xs" />
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;