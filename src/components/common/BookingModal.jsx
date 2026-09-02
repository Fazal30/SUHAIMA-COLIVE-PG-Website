import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaWhatsapp } from "react-icons/fa";

const BookingModal = ({ roomType = "Single / Double Sharing" }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi SUHAIMA COLIVE PG! I am interested in reserving a spot.\n\nRoom: ${roomType}\nName: ${formData.name || "Resident"}\nPhone: ${formData.phone || "Not specified"}\nExpected Check-in: ${formData.date || "Immediate"}`;
    const url = `https://wa.me/919187200607?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full md:w-auto px-10 bg-[#DAA520] text-black hover:bg-black hover:text-white font-bold transition-all">
          Reserve Your Spot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[440px] bg-[#0A0C10] text-white border-white/10 rounded-[2rem]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-white">
            Complete Your <span className="text-[#DAA520]">Booking</span>
          </DialogTitle>
          <p className="text-xs text-slate-400">
            Selected Room: <strong className="text-white">{roomType}</strong>
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</Label>
            <Input
              id="name"
              placeholder="e.g. Rahul Mishra"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[#DAA520]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[#DAA520]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-slate-400">Check-in Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[#DAA520]"
            />
          </div>
          <Button
            type="submit"
            className="mt-4 w-full h-12 bg-[#DAA520] text-black font-black hover:bg-white transition-all rounded-xl flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} /> Confirm via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;