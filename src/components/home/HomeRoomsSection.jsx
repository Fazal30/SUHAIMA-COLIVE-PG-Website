import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import FilterBar from "../common/FilterBar";
import SectionHeader from "../shared/SectionHeader";
import { MOCK_ROOMS } from "../../data/roomsData";

const HomeRoomsSection = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    type: "all",
    price: "all",
    ac: "all",
    status: "all",
  });

  const handleFilter = (key, val) => {
    setFilters((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  const filteredRooms = useMemo(() => {
    return MOCK_ROOMS.filter((room) => {
      // Type filter
      if (filters.type !== "all" && !room.type.toLowerCase().includes(filters.type.toLowerCase())) {
        return false;
      }
      // Price filter
      const priceNum = room.numericPrice || parseInt(room.price.replace(/,/g, ""), 10);
      if (filters.price === "low" && priceNum >= 10000) return false;
      if (filters.price === "mid" && (priceNum < 10000 || priceNum > 15000)) return false;
      if (filters.price === "high" && priceNum <= 15000) return false;
      // AC filter
      if (filters.ac === "ac" && !room.hasAc) return false;
      if (filters.ac === "non-ac" && room.hasAc) return false;
      // Status filter
      if (filters.status === "available" && !room.available) return false;
      if (filters.status === "booked" && room.available) return false;

      return true;
    });
  }, [filters]);

  return (
    <section className="relative py-28 bg-[#0D1017] text-white overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DAA520]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <SectionHeader 
            title={<span>Modern Living <span className="text-[#DAA520]">Spaces</span></span>} 
            subtitle="Choose the perfect room tailored to your comfort and budget." 
            dark
          />

          <div className="bg-white/5 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-lg">
            <FilterBar onFilterChange={handleFilter} />
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-[#DAA520]/40 overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Availability Badge */}
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs rounded-full font-bold backdrop-blur-md shadow-md ${
                    room.available 
                      ? "bg-emerald-500/80 text-white" 
                      : "bg-red-500/80 text-white"
                  }`}>
                    {room.available ? "Available" : "Booked"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#DAA520] transition-colors">
                    {room.type}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                    Fully furnished with high-speed WiFi, attached bath, and housekeeping.
                  </p>

                  {/* Price & Action */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Monthly Rent</span>
                      <span className="text-xl font-black text-[#DAA520]">
                        ₹{room.price}
                        <span className="text-xs font-semibold text-slate-400">/mo</span>
                      </span>
                    </div>
                    
                    <Button 
                      onClick={() => navigate(`/room/${room.id}`)}
                      className="px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl bg-[#DAA520] text-black hover:bg-white transition-all shadow-md"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/10">
              <p className="text-lg font-bold text-white">No rooms match your filter criteria.</p>
              <p className="text-xs text-slate-400 mt-1">Try resetting the filters to view all available spaces.</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => navigate("/rooms")}
            className="px-10 py-6 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-widest bg-white/5 hover:bg-[#DAA520] text-white hover:text-black border border-white/10 hover:border-[#DAA520] transition-all shadow-lg hover:scale-105"
          >
            Explore All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeRoomsSection;
