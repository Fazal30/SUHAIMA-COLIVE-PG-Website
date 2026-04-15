import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const BookingModal = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="lg" className="w-full md:w-auto px-10">Reserve Your Spot</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Complete Your Booking</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Satyam Mishra" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="date">Check-in Date</Label>
          <Input id="date" type="date" />
        </div>
        <Button type="submit" className="mt-2">Confirm Inquiry</Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default BookingModal;