import { motion } from "framer-motion";
import { FaFilter, FaRedoAlt } from "react-icons/fa";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../ui/select";
import { Button } from "../ui/button";

const FilterBar = ({ onFilterChange }) => {
  
  // Safe wrapper to prevent "is not a function" errors
  const handleChange = (key, val) => {
    if (typeof onFilterChange === "function") {
      onFilterChange(key, val);
    } else {
      console.warn("FilterBar: onFilterChange prop is missing!");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-20 w-full mb-12"
    >
      <div className="flex flex-wrap items-center gap-4 bg-[#0A0C10] p-6 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl">
        
        {/* Label Icon */}
        <div className="flex items-center gap-3 px-4 border-r border-white/10 mr-2">
          <FaFilter className="text-[#DAA520]" />
          <span className="font-bold text-white text-sm uppercase tracking-widest">Refine</span>
        </div>

        {/* 1. Room Type Filter */}
        <div className="flex-1 min-w-[160px]">
          <Select onValueChange={(val) => handleChange("type", val)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-slate-300 rounded-xl focus:ring-[#DAA520]">
              <SelectValue placeholder="Room Sharing" />
            </SelectTrigger>
            <SelectContent className="bg-[#161B22] border-white/10 text-white">
              <SelectItem value="all">All Sharing</SelectItem>
              <SelectItem value="single">Single Sharing</SelectItem>
              <SelectItem value="double">Double Sharing</SelectItem>
              <SelectItem value="triple">Triple Sharing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 2. Budget Filter */}
        <div className="flex-1 min-w-[160px]">
          <Select onValueChange={(val) => handleChange("price", val)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-slate-300 rounded-xl">
              <SelectValue placeholder="Budget Range" />
            </SelectTrigger>
            <SelectContent className="bg-[#161B22] border-white/10 text-white">
              <SelectItem value="all">Any Price</SelectItem>
              <SelectItem value="low">Below ₹10,000</SelectItem>
              <SelectItem value="mid">₹10,000 - ₹15,000</SelectItem>
              <SelectItem value="high">Above ₹15,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 3. AC Preference */}
        <div className="flex-1 min-w-[160px]">
          <Select onValueChange={(val) => handleChange("ac", val)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-slate-300 rounded-xl">
              <SelectValue placeholder="AC Preference" />
            </SelectTrigger>
            <SelectContent className="bg-[#161B22] border-white/10 text-white">
              <SelectItem value="all">AC / Non-AC</SelectItem>
              <SelectItem value="ac">Air Conditioned</SelectItem>
              <SelectItem value="non-ac">Non-AC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 4. Availability Toggle */}
        <div className="flex-1 min-w-[160px]">
          <Select onValueChange={(val) => handleChange("status", val)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-slate-300 rounded-xl">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-[#161B22] border-white/10 text-white">
              <SelectItem value="all">All Rooms</SelectItem>
              <SelectItem value="available">Available Now</SelectItem>
              <SelectItem value="booked">Filling Soon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reset Button */}
        <Button 
          variant="ghost" 
          onClick={() => window.location.reload()}
          className="text-slate-400 hover:text-[#DAA520] hover:bg-white/5 rounded-xl px-4"
        >
          <FaRedoAlt className="mr-2 text-xs" />
          Reset
        </Button>

      </div>
    </motion.div>
  );
};

export default FilterBar;