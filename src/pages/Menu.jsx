// src/pages/Menu.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { weeklyMenu } from "../data/menuData";
import { FaClock, FaSun, FaMoon, FaCalendarDay } from "react-icons/fa";

const MenuCard = ({ dayMenu, isToday }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const meals = [
    { name: "Breakfast", data: dayMenu.breakfast, icon: FaClock, time: "8:00 AM - 9:30 AM" },
    { name: "Lunch", data: dayMenu.lunch, icon: FaSun, time: "1:00 PM - 2:30 PM" },
    { name: "Dinner", data: dayMenu.dinner, icon: FaMoon, time: "8:00 PM - 9:30 PM" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative group p-8 rounded-[2.5rem] bg-white/5 border transition-all duration-500 ${
        isToday 
        ? "border-[#DAA520] shadow-[0_0_50px_rgba(218,165,32,0.15)] bg-[#0A0C10]" 
        : "border-white/10 hover:border-white/20 hover:bg-white/10"
      }`}
    >
      {isToday && (
        <div className="absolute top-8 right-8 flex items-center gap-2 bg-[#DAA520] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
          <FaCalendarDay />
          Today's Menu
        </div>
      )}
      
      <h3 className={`text-4xl font-black mb-10 tracking-tight transition-colors ${isToday ? "text-[#DAA520]" : "text-white group-hover:text-[#DAA520]"}`}>
        {dayMenu.day}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meals.map((meal, i) => (
          <div key={i} className="relative group/meal h-[250px] rounded-3xl overflow-hidden cursor-pointer">
            {/* Front: Image & Label */}
            <div className="absolute inset-0 z-10 transition-transform duration-700 ease-in-out group-hover/meal:[transform:rotateY(180deg)] [backface-visibility:hidden]">
              <img 
                src={meal.data.img} 
                alt={meal.name} 
                className="w-full h-full object-cover brightness-75 group-hover/meal:brightness-50 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <meal.icon className="text-[#DAA520]" />
                  <span className="text-xs uppercase tracking-widest opacity-60">{meal.time}</span>
                </div>
                <h4 className="text-2xl font-bold">{meal.name}</h4>
              </div>
            </div>

            {/* Back: Menu Items */}
            <div className="absolute inset-0 z-0 bg-[#161B22] p-8 rounded-3xl flex flex-col justify-center text-center transition-transform duration-700 ease-in-out [transform:rotateY(180deg)] group-hover/meal:[transform:rotateY(0deg)] [backface-visibility:hidden]">
              <meal.icon className="text-5xl text-[#DAA520] mx-auto mb-6" />
              <p className="text-slate-300 text-sm leading-relaxed">
                {meal.data.items}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const [todayIndex, setTodayIndex] = useState(-1);

  useEffect(() => {
    // Determine the current day index (0-6)
    const date = new Date();
    const day = date.getDay(); // Sunday is 0
    // Adjust index to match our data array which starts with Monday (0)
    setTodayIndex(day === 0 ? 6 : day - 1);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0C10] text-white py-24 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAA520]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title={<span>Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DAA520]">Menu</span></span>} 
          subtitle="Chef-curated North & South Indian meals. Hygenic & delicious." 
          centered 
        />

        <div className="space-y-10 mt-16">
          {weeklyMenu.map((dayMenu, index) => (
            <MenuCard 
              key={index} 
              dayMenu={dayMenu} 
              isToday={index === todayIndex} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;