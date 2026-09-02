import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const RoomCard = ({ room }) => (
  <motion.div 
    whileHover={{ y: -6, scale: 1.02 }} 
    transition={{ duration: 0.3 }}
    className="group"
  >
    <Card className="overflow-hidden border border-white/10 shadow-lg rounded-2xl bg-white/[0.03] backdrop-blur-xl hover:border-[#DAA520]/40 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={room.image} 
          alt={room.type} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
        />
        <Badge className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-0.5 rounded-full ${
          room.available 
            ? "bg-green-500/80 text-white" 
            : "bg-red-500/80 text-white"
        }`}>
          {room.available ? "Available" : "Booked"}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-base font-bold text-white group-hover:text-[#DAA520] transition-colors">{room.type}</h3>
        <p className="text-slate-400 text-xs mt-0.5">Electronic City, Phase 1</p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-lg font-black text-[#DAA520]">₹{room.price}</span>
          <span className="text-[11px] text-slate-400">/ month</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-[#DAA520] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md">
          <Link to={`/room/${room.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export default RoomCard;