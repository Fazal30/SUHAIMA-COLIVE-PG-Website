import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { weeklyMenu } from "../data/menuData";
import { 
  FaClock, FaSun, FaMoon, FaCalendarDay, 
  FaUtensils, FaFireAlt, FaLeaf, FaCheckCircle, 
  FaArrowRight, FaWhatsapp, FaShieldAlt, FaStar
} from "react-icons/fa";

// Day name array matching weeklyMenu order (0 = Monday, 6 = Sunday)
const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const DAY_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const getTodayIndex = () => {
  const day = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  return day === 0 ? 6 : day - 1;
};

// Determine active meal based on current local hour
const getCurrentMeal = () => {
  const hour = new Date().getHours();
  if (hour >= 7 && hour < 11) return { name: "Breakfast", icon: FaClock, time: "8:00 - 9:30 AM" };
  if (hour >= 12 && hour < 16) return { name: "Lunch", icon: FaSun, time: "1:00 - 2:30 PM" };
  if (hour >= 19 && hour < 23) return { name: "Dinner", icon: FaMoon, time: "8:00 - 9:30 PM" };
  return null;
};

const MenuCard = ({ dayMenu, isToday, activeMealTab, dayIndex }) => {
  const currentMeal = isToday ? getCurrentMeal() : null;

  const meals = [
    { 
      id: "breakfast", 
      name: "Breakfast", 
      data: dayMenu.breakfast, 
      icon: FaClock, 
      time: "8:00 - 9:30 AM", 
      tag: "Fresh Start", 
      glow: "from-amber-500/20 to-transparent",
      accent: "#FFD700" 
    },
    { 
      id: "lunch", 
      name: "Lunch", 
      data: dayMenu.lunch, 
      icon: FaSun, 
      time: "1:00 - 2:30 PM", 
      tag: "Wholesome", 
      glow: "from-yellow-500/20 to-transparent",
      accent: "#DAA520" 
    },
    { 
      id: "dinner", 
      name: "Dinner", 
      data: dayMenu.dinner, 
      icon: FaMoon, 
      time: "8:00 - 9:30 PM", 
      tag: dayMenu.day === "Sunday" ? "Sunday Feast" : "Satisfying", 
      glow: "from-purple-500/20 to-transparent",
      accent: "#E2B714" 
    }
  ];

  const displayedMeals = activeMealTab === "all" 
    ? meals 
    : meals.filter(m => m.id === activeMealTab);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: dayIndex * 0.05 }}
      className={`relative p-6 sm:p-8 md:p-10 rounded-[3rem] transition-all duration-500 border ${
        isToday 
          ? "bg-gradient-to-b from-[#DAA520]/15 via-white/[0.02] to-transparent border-[#DAA520]/60 shadow-[0_0_50px_rgba(218,165,32,0.15)]" 
          : "bg-white/[0.02] border-white/10 hover:border-white/20"
      }`}
    >
      {/* --- DAY HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${
            isToday 
              ? "bg-[#DAA520] text-black shadow-[0_0_20px_rgba(218,165,32,0.5)]" 
              : "bg-white/10 text-white"
          }`}>
            {dayMenu.day.slice(0, 3)}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight ${isToday ? "text-[#DAA520]" : "text-white"}`}>
                {dayMenu.day}
              </h3>
              {isToday && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DAA520] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DAA520]"></span>
                </span>
              )}
            </div>
            <p className="text-slate-400 text-xs mt-0.5">
              3 Freshly prepared daily meals included
            </p>
          </div>
        </div>

        {/* Live Serving Badge if Today */}
        {isToday && currentMeal && (
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="self-start sm:self-auto inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#DAA520]/20 border border-[#DAA520] text-[#DAA520] text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-lg"
          >
            <FaFireAlt className="text-amber-400 animate-bounce" />
            <span>Serving Now: {currentMeal.name}</span>
          </motion.div>
        )}
      </div>

      {/* --- MEAL CARDS GRID --- */}
      <div className={`grid grid-cols-1 ${activeMealTab === 'all' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-2xl mx-auto'} gap-6`}>
        {displayedMeals.map((meal) => {
          const isCurrentActiveMeal = isToday && currentMeal && currentMeal.name === meal.name;
          const itemsList = meal.data.items.split(",").map(i => i.trim());

          return (
            <motion.div 
              key={meal.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`group relative rounded-[2rem] overflow-hidden border transition-all duration-500 ${
                isCurrentActiveMeal 
                  ? "border-[#DAA520] shadow-[0_15px_40px_rgba(218,165,32,0.25)] ring-2 ring-[#DAA520]/30" 
                  : "border-white/10 hover:border-[#DAA520]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              } bg-[#161B22]`}
            >
              {/* Photo Background Layer with Zoom */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <img 
                  src={meal.data.img} 
                  alt={`${meal.name} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.7] group-hover:brightness-[0.85]" 
                />

                {/* Shimmer light sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2 text-white">
                    <meal.icon className="text-[#DAA520] text-xs" />
                    <span className="text-[10px] font-bold tracking-wide">{meal.time}</span>
                  </div>

                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${
                    meal.tag === "Sunday Feast" 
                      ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-black animate-pulse" 
                      : "bg-[#DAA520] text-black"
                  }`}>
                    {meal.tag}
                  </span>
                </div>

                {/* Meal Title on Image */}
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase drop-shadow-md">
                    {meal.name}
                  </h4>
                  {isCurrentActiveMeal && (
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-green-500 text-white shadow-md">
                      Live
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Menu Content */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#DAA520]">
                      Menu Highlights
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </div>

                  {/* Dish item pills */}
                  <div className="flex flex-wrap gap-2">
                    {itemsList.map((dish, dIdx) => (
                      <span 
                        key={dIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 group-hover:border-[#DAA520]/30 transition-colors"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Status / Quality Indicator */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <FaCheckCircle className="text-xs" /> Unlimited Servings
                  </span>
                  <FaUtensils className="text-slate-600 group-hover:text-[#DAA520] transition-colors" />
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const todayIndex = getTodayIndex();
  const [activeMealTab, setActiveMealTab] = useState("all");
  const [selectedDayFilter, setSelectedDayFilter] = useState("all"); // 'all' or day index 0..6

  const filterButtons = [
    { id: "all", label: "Full Day", icon: FaCalendarDay },
    { id: "breakfast", label: "Breakfast", icon: FaClock },
    { id: "lunch", label: "Lunch", icon: FaSun },
    { id: "dinner", label: "Dinner", icon: FaMoon },
  ];

  const displayedMenu = useMemo(() => {
    if (selectedDayFilter === "all") return weeklyMenu;
    return [weeklyMenu[Number(selectedDayFilter)]];
  }, [selectedDayFilter]);

  const handleInquireMenu = () => {
    window.open(
      "https://wa.me/919187200607?text=Hi%20SUHAIMA%20COLIVE%20PG,%20I%20have%20a%20question%20about%20the%20daily%20food%20and%20dining%20menu.",
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen bg-[#0A0C10] text-white py-24 overflow-hidden">
      {/* --- AMBIENT GLOW EFFECTS & PARTICLES --- */}
      <div className="absolute top-10 left-[-10%] w-[600px] h-[600px] bg-[#DAA520]/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-[450px] h-[450px] bg-[#DAA520]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAA520] text-[11px] font-black uppercase tracking-[0.2em] mb-4 backdrop-blur-xl shadow-inner"
          >
            <FaUtensils className="text-xs" />
            3 Times Delicious Home-Style Food
          </motion.div>

          <SectionHeader 
            title={<span>Executive <span className="text-[#DAA520]">Dining</span></span>} 
            subtitle="Hygienic, nutritious, and appetizing home-cooked meals served 7 days a week." 
            centered 
            dark
          />

          {/* --- QUICK SHORTCUT TO TODAY --- */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDayFilter(todayIndex)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                selectedDayFilter === todayIndex
                  ? "bg-[#DAA520] text-black border-[#DAA520] shadow-[0_0_20px_rgba(218,165,32,0.4)]"
                  : "bg-white/5 text-[#DAA520] border-[#DAA520]/40 hover:bg-[#DAA520]/10"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              View Today's Menu ({DAY_NAMES[todayIndex]})
            </motion.button>

            {selectedDayFilter !== "all" && (
              <button
                onClick={() => setSelectedDayFilter("all")}
                className="text-xs font-bold text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                Reset to Full Week
              </button>
            )}
          </div>

          {/* --- WEEKDAY SELECTOR TABS --- */}
          <div className="flex flex-wrap justify-center gap-2 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-xl mt-8 max-w-2xl w-full">
            <button
              onClick={() => setSelectedDayFilter("all")}
              className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedDayFilter === "all"
                  ? "bg-[#DAA520] text-black font-black shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Days
            </button>
            {DAY_SHORT.map((shortDay, i) => {
              const isTodayDay = i === todayIndex;
              const isSelected = selectedDayFilter === i;
              return (
                <button
                  key={shortDay}
                  onClick={() => setSelectedDayFilter(i)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#DAA520] text-black font-black shadow-md"
                      : isTodayDay
                      ? "text-[#DAA520] bg-white/5 border border-[#DAA520]/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {shortDay}
                  {isTodayDay && !isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* --- MEAL FILTER TABS (Breakfast / Lunch / Dinner) --- */}
          <div className="flex flex-wrap justify-center gap-2 bg-black/40 p-1.5 rounded-full border border-white/10 backdrop-blur-xl mt-4">
            {filterButtons.map((btn) => (
              <motion.button
                key={btn.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveMealTab(btn.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeMealTab === btn.id 
                    ? "bg-white text-black shadow-lg" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <btn.icon className="text-xs" /> {btn.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* --- MENU LISTINGS --- */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {displayedMenu.map((dayMenu) => {
              const realIndex = weeklyMenu.findIndex(d => d.day === dayMenu.day);
              return (
                <MenuCard 
                  key={`${dayMenu.day}-${activeMealTab}`}
                  dayMenu={dayMenu} 
                  isToday={realIndex === todayIndex} 
                  activeMealTab={activeMealTab}
                  dayIndex={realIndex}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- HYGIENE & NUTRITION ASSURANCE CARDS --- */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#DAA520]">
              Kitchen Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Food Prepared with Care & Hygiene
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaShieldAlt,
                title: "100% RO Water",
                desc: "All cooking, drinking, and utensil cleaning is performed using commercial multi-stage RO purified water.",
              },
              {
                icon: FaLeaf,
                title: "Separate Cooking",
                desc: "Strict hygiene protocols with separate cookware and preparation for vegetarian and non-vegetarian menus.",
              },
              {
                icon: FaStar,
                title: "Sunday Special Feast",
                desc: "Lavish Sunday dinners featuring special Chicken Biryani, Paneer, Mushroom, and fresh regional treats.",
              },
            ].map((feat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#DAA520]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DAA520]/10 border border-[#DAA520]/20 flex items-center justify-center text-[#DAA520] text-xl mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feat.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM DINING CTA --- */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Have Specific Dietary Preferences?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-lg">
              Talk to our resident chef and manager about meal times, tiffin packing for office, or custom dietary accommodations.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleInquireMenu}
            className="inline-flex items-center gap-3 bg-[#DAA520] hover:bg-white text-black font-black px-8 py-4 rounded-2xl text-xs uppercase tracking-wider shadow-[0_10px_30px_rgba(218,165,32,0.3)] transition-all shrink-0"
          >
            <FaWhatsapp size={18} /> Inquire About Meals <FaArrowRight />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default Menu;