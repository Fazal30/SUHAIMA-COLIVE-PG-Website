import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaWifi, FaUtensils, FaTshirt, FaShieldAlt } from "react-icons/fa";
import { Badge } from "../components/ui/badge";
import BookingModal from "../components/common/BookingModal";
import AmenityIcon from "../components/common/AmenityIcon";

const RoomDetails = () => {
  const { id } = useParams();

  // In a real app, you'd fetch the room by ID. Using dummy data for now:
  const room = {
    type: "Premium Single Sharing",
    price: "15,000",
    description: "Experience luxury living in our premium single rooms. Fully furnished with high-quality woodwork, ergonomic chair, and a private balcony view of Shikaripalya.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Gallery & Info */}
        <div className="lg:col-span-2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="rounded-3xl overflow-hidden shadow-xl h-[400px] md:h-[500px]"
          >
            {room.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="Room" className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold">{room.type}</h1>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Available</Badge>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">{room.description}</p>

            <h3 className="text-xl font-semibold mb-6">Room Facilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AmenityIcon icon={FaWifi} label="High-speed WiFi" />
              <AmenityIcon icon={FaUtensils} label="3 Meals/Day" />
              <AmenityIcon icon={FaTshirt} label="Laundry Support" />
              <AmenityIcon icon={FaShieldAlt} label="Biometric Entry" />
            </div>
          </div>
        </div>

        {/* Right: Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 p-8 rounded-3xl border border-slate-200 bg-white shadow-premium">
            <h2 className="text-2xl font-bold mb-2">₹{room.price} <span className="text-sm font-normal text-slate-500">/ month</span></h2>
            <hr className="my-6 border-slate-100" />
            
            <div className="space-y-4 mb-6 text-sm text-slate-600">
              <div className="flex justify-between"><span>Deposit</span><span className="font-semibold">₹15,000</span></div>
              <div className="flex justify-between"><span>Maintenance</span><span className="font-semibold text-green-600">Included</span></div>
              <div className="flex justify-between"><span>Notice Period</span><span className="font-semibold">1 Month</span></div>
            </div>

            <BookingModal />
            <p className="text-[10px] text-center text-slate-400 mt-4">
              By clicking "Reserve", you agree to our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;