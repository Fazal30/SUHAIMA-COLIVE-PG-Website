import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const RoomCard = ({ room }) => (
  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
    <Card className="overflow-hidden border-none shadow-premium rounded-2xl">
      <div className="relative aspect-video">
        <img src={room.image} alt={room.type} className="object-cover w-full h-full" />
        <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white">
          {room.available ? "Available" : "Full"}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{room.type}</h3>
        <p className="text-muted-foreground text-sm">Electronic City, Phase 1</p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-xl font-bold">₹{room.price}</span>
          <span className="text-xs text-muted-foreground">/ month</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link to={`/room/${room.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export default RoomCard;