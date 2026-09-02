import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaWifi, FaUtensils, FaShieldAlt, FaBolt, FaArrowLeft, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import BookingModal from "../components/common/BookingModal";
import AmenityIcon from "../components/common/AmenityIcon";
import { getRoomById } from "../data/roomsData";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = getRoomById(id);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919187200607?text=Hi,%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(room.type)}%20at%20Suhaima%20Colive.`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-white pt-28 pb-24">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/rooms")}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#DAA520] transition-colors mb-8 text-sm font-bold tracking-wider uppercase"
        >
          <FaArrowLeft /> Back to all rooms
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Gallery & Info */}
          <div className="lg:col-span-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 h-[380px] md:h-[500px]"
            >
              {room.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`${room.type} view ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-10">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">{room.type}</h1>
                <Badge
                  className={`border-none px-3 py-1 rounded-full text-xs font-bold ${
                    room.available ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {room.available ? "Available Now" : "Currently Occupied"}
                </Badge>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg mb-10">{room.description}</p>

              {/* Highlights */}
              {room.highlights && (
                <div className="mb-10">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#DAA520] mb-4">Key Highlights</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {room.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-slate-200">
                        <FaCheckCircle className="text-[#DAA520] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Room Facilities */}
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#DAA520] mb-4">Included Facilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AmenityIcon icon={FaWifi} label="Gigabit WiFi" />
                <AmenityIcon icon={FaUtensils} label="3 Meals Daily" />
                <AmenityIcon icon={FaBolt} label="100% DG Backup" />
                <AmenityIcon icon={FaShieldAlt} label="Biometric Entry" />
              </div>
            </div>
          </div>

          {/* Right: Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl">
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-[#DAA520] mb-1">Monthly Tariff</p>
                <h2 className="text-4xl font-black text-white">
                  ₹{room.price} <span className="text-sm font-normal text-slate-400">/ month</span>
                </h2>
              </div>

              <div className="h-[1px] w-full bg-white/10 my-6" />

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Refundable Deposit</span>
                  <span className="font-bold text-white">₹{room.deposit}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Maintenance Fee</span>
                  <span className="font-bold text-green-400">Included</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Housekeeping</span>
                  <span className="font-bold text-green-400">Daily Included</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Notice Period</span>
                  <span className="font-bold text-white">1 Month (30 Days)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Electricity</span>
                  <span className="font-bold text-slate-400">Per Sub-Meter</span>
                </div>
              </div>

              <div className="space-y-3">
                <BookingModal roomType={room.type} />
                <Button
                  onClick={handleWhatsApp}
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <FaWhatsapp size={18} /> Chat with Manager
                </Button>
              </div>

              <p className="text-[10px] text-center text-slate-500 mt-6 leading-relaxed">
                Minimal token amount required for spot reservation. Fully refundable within policy guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;