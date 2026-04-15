import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left text-primary">SUHAIMA COLIVE</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 mt-10">
            <Link to="/" className="text-lg font-medium hover:text-primary transition">Home</Link>
            <Link to="/rooms" className="text-lg font-medium hover:text-primary transition">Rooms</Link>
            <Link to="/gallery" className="text-lg font-medium hover:text-primary transition">Gallery</Link>
            <Link to="/contact" className="text-lg font-medium hover:text-primary transition">Contact</Link>
            <Button className="w-full rounded-full mt-4">Book Now</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;