import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaClock, FaInstagram, FaLinkedinIn, FaExternalLinkAlt, FaPaperPlane 
} from "react-icons/fa";
import { Button } from "../components/ui/button";
import SectionHeader from "../components/shared/SectionHeader";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const Contact = () => {
  const whatsappNumber = "9187200607";
  const emailAddress = "suhaimacolivingpg@gmail.com";
  const locationText = "SUHAIMA COLIVING PG, GOLLAHALLI MAIN ROAD NEAR MY NEST APARTMENT, ELECTRONIC CITY, BANGALORE 560100";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    room: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi SUHAIMA COLIVE PG!\n\nNew Website Inquiry:\n- Name: ${formData.name || "Resident"}\n- Phone: ${formData.phone || "Not specified"}\n- Room Preference: ${formData.room || "Any"}\n- Message: ${formData.message || "I would like more information about availability."}`;
    window.open(`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0C10] overflow-hidden text-white pt-20">
      {/* --- PREMIUM BACKGROUND DECOR --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAA520]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-16"
        >
          <SectionHeader 
            title={<span className="text-white">Get in <span className="text-[#DAA520]">Touch</span></span>} 
            subtitle="Ready to join the SUHAIMA community? We're just a message away." 
            centered 
            dark
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* --- CONTACT INFO PANEL --- */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-black text-white mb-10 tracking-tight italic">
                SUHAIMA <span className="text-[#DAA520]">COLIVING PG.</span>
              </h3>
              
              <div className="space-y-10">
                {[
                  { 
                    icon: FaPhoneAlt, 
                    t: "Call Us", 
                    v: "+91 91872 00607", 
                    link: "tel:+919187200607",
                    color: "text-[#DAA520]" 
                  },
                  { 
                    icon: FaWhatsapp, 
                    t: "WhatsApp", 
                    v: "+91 91872 00607", 
                    link: `https://wa.me/91${whatsappNumber}`,
                    color: "text-green-500" 
                  },
                  { 
                    icon: FaEnvelope, 
                    t: "Email Support", 
                    v: emailAddress, 
                    link: `mailto:${emailAddress}`,
                    color: "text-blue-400" 
                  },
                  { 
                    icon: FaMapMarkerAlt, 
                    t: "Location", 
                    v: locationText, 
                    link: "https://www.google.com/maps/place/12%C2%B049'58.8%22N+77%C2%B039'25.1%22E/@12.8329949,77.6543828,855m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d12.8329949!4d77.6569577?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D", 
                    color: "text-red-500" 
                  },
                  { 
                    icon: FaClock, 
                    t: "Office Hours", 
                    v: "09:00 AM - 09:00 PM (Daily)", 
                    color: "text-amber-500" 
                  }
                ].map((item, i) => (
                  <motion.a 
                    href={item.link}
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#DAA520] group-hover:text-black">
                      <item.icon className={`text-2xl ${item.color} group-hover:text-black transition-colors`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#DAA520] mb-1">{item.t}</p>
                      <p className="text-lg font-medium text-slate-100 group-hover:text-[#DAA520] transition-colors leading-snug">{item.v}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Connect */}
            <div className="px-8 flex items-center gap-6">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Socials —</span>
              <div className="flex gap-4">
                {[FaInstagram, FaLinkedinIn].map((Social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, scale: 1.1, backgroundColor: "#DAA520", color: "#000" }}
                    href="#" 
                    className="w-12 h-12 border border-white/10 text-white rounded-full flex items-center justify-center text-xl transition-all"
                  >
                    <Social />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- INQUIRY FORM PANEL --- */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 bg-white rounded-[3.5rem] p-8 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#DAA520]/10 rounded-bl-[100px] -z-0" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Send a <span className="text-[#DAA520]">Message.</span></h3>
              <p className="text-slate-500 mb-12 font-medium">Have questions? Fill out the form and our manager will contact you.</p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <Input 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-16 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-[#DAA520]/50 text-slate-900 font-semibold placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                  <Input 
                    type="tel"
                    placeholder="+91 00000 00000" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-16 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-[#DAA520]/50 text-slate-900 font-semibold placeholder:text-slate-400" 
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Room Preference</label>
                  <Input 
                    placeholder="Single / Double / Triple Sharing" 
                    value={formData.room}
                    onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    className="h-16 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-[#DAA520]/50 text-slate-900 font-semibold placeholder:text-slate-400" 
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[160px] bg-slate-100 border-none rounded-[2rem] p-6 focus:ring-2 focus:ring-[#DAA520]/50 text-slate-900 font-semibold placeholder:text-slate-400" 
                  />
                </div>
                <div className="md:col-span-2 mt-4">
                  <Button type="submit" className="w-full h-18 text-xl font-black rounded-[2rem] bg-[#0A0C10] text-white hover:bg-[#DAA520] hover:text-black transition-all group flex items-center justify-center gap-4">
                    Send Inquiry <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[4rem] overflow-hidden shadow-2xl h-[500px] relative border-4 border-white/5"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.58474271424!2d77.6710!3d12.8427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c9f280e29b1%3A0x8677c385a6a6877e!2sElectronic%20City!5e0!3m2!1sen!2sin!4v1713123456789!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }} 
            allowFullScreen="" 
            loading="lazy"
          />
          
          <div className="absolute bottom-10 left-10 right-10 md:right-auto bg-black/80 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center shrink-0">
               <FaMapMarkerAlt className="text-black text-xl animate-bounce" />
            </div>
            <div>
              <p className="text-white font-bold leading-tight">{locationText}</p>
            </div>
            <Button 
              onClick={() => window.open('https://maps.google.com', '_blank')}
              variant="outline" 
              className="rounded-full border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-black whitespace-nowrap"
            >
              Get Directions <FaExternalLinkAlt className="ml-2 text-xs" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;