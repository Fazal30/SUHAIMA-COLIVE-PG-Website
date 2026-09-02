import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { weeklyMenu } from "../data/menuData";
import { 
  FaClock, FaSun, FaMoon, FaCalendarDay, 
  FaUtensils 
} from "react-icons/fa";

const MenuCard = ({ dayMenu, isToday, activeMealTab }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const meals = [
    { id: "breakfast", name: "Breakfast", data: dayMenu.breakfast, icon: FaClock, time: "8:00 - 9:30 AM", tag: "Fresh" },
    { id: "lunch", name: "Lunch", data: dayMenu.lunch, icon: FaSun, time: "1:00 - 2:30 PM", tag: "Hearty" },
    { id: "dinner", name: "Dinner", data: dayMenu.dinner, icon: FaMoon, time: "8:00 - 9:30 PM", tag: "Light" }
  ];

  const displayedMeals = activeMealTab === "all" 
    ? meals 
    : meals.filter(m => m.id === activeMealTab);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative p-1 md:p-8 rounded-[3rem] transition-all duration-500 ${
        isToday ? "bg-gradient-to-br from-[#DAA520]/20 to-transparent border border-[#DAA520]/50 shadow-2xl" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 px-6">
        <div>
          <h3 className={`text-4xl md:text-5xl font-black tracking-tighter ${isToday ? "text-[#DAA520]" : "text-white"}`}>
            {dayMenu.day}
          </h3>
          {isToday && (
            <span className="flex items-center gap-2 text-[#DAA520] font-bold text-xs uppercase tracking-[0.3em] mt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DAA520] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DAA520]"></span>
              </span>
              Serving Today
            </span>
          )}
        </div>
      </div>

      <div className={`grid grid-cols-1 ${activeMealTab === 'all' ? 'lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
        {displayedMeals.map((meal, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5"
          >
            {/* Image Layer */}
            <div className="absolute inset-0">
              <img 
                src={meal.data.img} 
                alt={meal.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-[0.3]" 
              />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <div className="bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                  <meal.icon className="text-[#DAA520] text-xl" />
                </div>
                <span className="bg-[#DAA520] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {meal.tag}
                </span>
              </div>

              <div>
                <p className="text-[#DAA520] font-bold text-xs tracking-widest mb-1">{meal.time}</p>
                <h4 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter">{meal.name}</h4>
                
                <div className="h-[1px] w-12 bg-[#DAA520] mb-4 group-hover:w-full transition-all duration-500" />
                
                <p className="text-slate-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {meal.data.items}
                </p>
              </div>
            </div>

            {/* Hover Decor */}
            <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <FaUtensils className="text-[#DAA520]/20 text-6xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const [todayIndex] = useState(() => {
    const day = new Date().getDay();
    return day === 0 ? 6 : day - 1;
  });
  const [filter, setFilter] = useState("all");

  const filterButtons = [
    { id: "all", label: "Full Week", icon: FaCalendarDay },
    { id: "breakfast", label: "Breakfast", icon: FaClock },
    { id: "lunch", label: "Lunch", icon: FaSun },
    { id: "dinner", label: "Dinner", icon: FaMoon },
  ];

  return (
    <div className="min-h-screen bg-[#0A0C10] text-white py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#DAA520]/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <SectionHeader 
            title={<span>Executive <span className="text-[#DAA520]">Dining</span></span>} 
            subtitle="Premium home-style nutrition served daily." 
            centered 
            dark
          />

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 bg-white/5 p-2 rounded-[2rem] border border-white/10 backdrop-blur-xl mt-8">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  filter === btn.id 
                  ? "bg-[#DAA520] text-black shadow-lg" 
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <btn.icon /> {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="space-y-24">
          <AnimatePresence mode="wait">
            {weeklyMenu.map((dayMenu, index) => (
              <MenuCard 
                key={`${index}-${filter}`}
                dayMenu={dayMenu} 
                isToday={index === todayIndex} 
                activeMealTab={filter}
              />
            ))}
          </AnimatePresence>
        </div>

     </div>
    </div>
  );
};

export default Menu;