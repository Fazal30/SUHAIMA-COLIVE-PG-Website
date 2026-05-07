import { motion, AnimatePresence  } from "framer-motion";
import {
  FaWifi,
  FaUtensils,
  FaShieldAlt,
  FaBolt,
  FaMotorcycle,
  FaCheckCircle,
  FaCrown,
  FaUsers,
  FaClipboardCheck,
  FaKey,
  FaStar,
  FaChevronDown 
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Button } from "../components/ui/button";
import FilterBar from "../components/common/FilterBar";
import RoomCard from "../components/common/RoomCard";
import SectionHeader from "../components/shared/SectionHeader";
import { useState } from "react";
import Menu from "./Menu";
import room1 from "../assets/room-1.jpeg"
import room5 from "../assets/room-5.jpeg"
import room2 from "../assets/room-2.jpeg"
import room3 from "../assets/room-3.jpeg"
import room4 from "../assets/room-4.jpeg"
import room6 from "../assets/room-6.jpeg"
import room8 from "../assets/room-8.jpeg"
import room9 from "../assets/room-9.jpeg"
import room10 from "../assets/room-10.jpeg"
import Washrooms from "../assets/bathroom.jpeg"
import roof1 from "../assets/roof.jpeg"
import roof2 from "../assets/roof2.jpeg"
import Balcony from "../assets/balcony1.jpeg"
import Balcony2 from "../assets/balcony2.jpeg"
import Gallery from "./Gallery";

// Animation
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.15 } }
};

const MOCK_ROOMS = [
  { id: 1, type: "Single Sharing", price: "13,000", available: true, image: room3 },
  { id: 2, type: "Single Sharing", price: "13,000", available: true, image: room4 },
  { id: 3, type: "Single Sharing", price: "13,000", available: true, image: room5 },
  { id: 4, type: "Double Sharing", price: "7,500", available: true, image: room8 },
  { id: 5, type: "Double Sharing", price: "7,500", available: true, image: room6 },
  { id: 6, type: "Double Sharing", price: "7,500", available: true, image: room1 },
  { id: 7, type: "Triple Sharing", price: "6,500", available: false, image: room2 },
  { id: 8, type: "Triple Sharing", price: "6,500", available: false, image: room9 },
  { id: 9, type: "Triple Sharing", price: "6,500", available: false, image: room10 },
];

const Home = () => {
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
  }
  return (
    <div className="bg-white text-slate-800 overflow-hidden">

     <section className="relative h-screen flex items-center justify-center overflow-hidden">

  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
      className="w-full h-full object-cover scale-105 brightness-[0.35]"
      alt="PG"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/40 to-purple-900/40"></div>
  </div>

  {/* Floating Blur Circles (Modern UI Effect) */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-5xl">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-sm mb-6">
      ⭐ Trusted by 100+ Residents
    </div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-8xl font-black text-white leading-[1.1]"
    >
      SUHAIMA <br />
      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        COLIVE PG
      </span>
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto font-light leading-relaxed"
    >
      Experience premium co-living in Electronic City with fully furnished rooms, 
      hygienic food, high-speed WiFi, and a vibrant community.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-10 flex gap-5 justify-center flex-wrap"
    >
      <a
    href="https://wa.me/919187200607?text=Hi%20I%20am%20interested%20in%20SUHAIMA%20COLIVE%20PG"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="px-10 py-5 text-lg rounded-full bg-white text-black hover:scale-110 transition-all shadow-xl">
      Book Your Room
    </Button>
  </a>
  <a
    href="/rooms"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="px-10 py-5 text-lg rounded-full bg-white text-black hover:scale-110 transition-all shadow-xl">
      Explore Rooms
    </Button>
  </a>
    </motion.div>

    {/* Stats Section */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
        <h3 className="text-2xl font-bold text-white">100+</h3>
        <p className="text-sm text-gray-300">Happy Residents</p>
      </div>
      <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
        <h3 className="text-2xl font-bold text-white">4.8★</h3>
        <p className="text-sm text-gray-300">Rating</p>
      </div>
      <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
        <h3 className="text-2xl font-bold text-white">24/7</h3>
        <p className="text-sm text-gray-300">Support</p>
      </div>
    </motion.div>

  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
    </div>
  </div>

     </section>

      {/* HOW IT WORKS - PREMIUM VERSION */}
<section className="py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
  <div className="container mx-auto px-4">

    <SectionHeader 
      title="How It Works" 
      subtitle="Get your perfect PG in just 4 simple steps" 
      centered 
    />

    <motion.div
      variants={stagger}
      initial="initial"
      whileInView="whileInView"
      className="relative mt-20"
    >

      {/* Center Line (Desktop Only) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {[
          { 
            icon: FaClipboardCheck, 
            title: "Online Inquiry",
            desc: "Fill a quick form and choose your preferred room type."
          },
          { 
            icon: FaUsers, 
            title: "Schedule Visit",
            desc: "Visit the PG, explore rooms, and check facilities."
          },
          { 
            icon: FaCrown, 
            title: "Instant Booking",
            desc: "Pay a small token amount and reserve your room."
          },
          { 
            icon: FaKey, 
            title: "Move In",
            desc: "Complete documentation and shift to your new home."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="relative group text-center"
          >

            {/* Step Number */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-black text-indigo-100 group-hover:text-indigo-200 transition hidden md:block">
              0{i + 1}
            </div>

            {/* Card */}
            <div className="relative p-8 rounded-3xl bg-white shadow-md border border-gray-100 
              group-hover:shadow-[0_20px_60px_rgba(99,102,241,0.2)] 
              group-hover:-translate-y-3 transition-all duration-500">

              {/* Icon */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center 
                bg-gradient-to-r from-indigo-500 to-purple-500 
                text-white rounded-2xl shadow-lg mb-6 
                group-hover:scale-110 transition">
                <item.icon size={30} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </motion.div>
  </div>
</section>

      {/* AMENITIES - PREMIUM UI */}
<section className="py-32 bg-slate-900 text-white relative overflow-hidden">

  {/* Background Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

  <div className="container mx-auto px-4 relative z-10">

    <SectionHeader 
      title="Premium Amenities" 
      subtitle="Everything you need for a comfortable and modern lifestyle" 
      centered 
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

      {[
        {
          icon: FaWifi,
          title: "High-Speed WiFi",
          desc: "Enjoy seamless internet connectivity for work, streaming, and gaming without interruptions."
        },
        {
          icon: FaUtensils,
          title: "Delicious Meals",
          desc: "Fresh, hygienic, and home-style meals served daily with a balanced diet."
        },
        {
          icon: FaShieldAlt,
          title: "24/7 Security",
          desc: "CCTV surveillance, biometric entry, and secure environment for your safety."
        },
        {
          icon: FaBolt,
          title: "Power Backup",
          desc: "Uninterrupted electricity supply with full backup during power cuts."
        },
        {
          icon: FaMotorcycle,
          title: "Parking Space",
          desc: "Dedicated and safe parking area for bikes and vehicles."
        },
        {
          icon: FaCheckCircle,
          title: "Daily Cleaning",
          desc: "Professional housekeeping ensures clean and hygienic living spaces."
        },
        {
          icon: FaUsers,
          title: "Community Living",
          desc: "Connect with like-minded people and enjoy a vibrant co-living experience."
        },
        {
          icon: FaCrown,
          title: "Premium Rooms",
          desc: "Fully furnished modern rooms with comfortable beds and storage."
        },
        {
          icon: FaKey,
          title: "Easy Access",
          desc: "Hassle-free entry with secure access systems and flexible timings."
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.3 }}
          className="group p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 
          hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-purple-500/20
          hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)]
          transition-all duration-500"
        >

          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl 
            bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-6 
            group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
            <item.icon size={28} />
          </div>

          {/* Title */}
          <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-indigo-300 transition">
            {item.title}
          </h4>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>

  </div>
</section>

{/* Menu */}
 <Menu />

      {/* ROOMS */}
<section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full -z-10"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full -z-10"></div>

  <div className="container mx-auto px-4">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row justify-between items-end gap-6"
    >
      <SectionHeader 
        title="Modern Living Spaces" 
        subtitle="Choose the perfect room tailored to your comfort and budget." 
      />

      {/* Animated Filter */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/70 backdrop-blur-xl p-3 rounded-2xl shadow-md border border-gray-200"
      >
        <FilterBar onFilterChange={(key, val) => handleFilter(key, val)} />
      </motion.div>
    </motion.div>

    {/* Room Cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
    >
      {MOCK_ROOMS.map((room) => (
        <motion.div
          key={room.id}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative group"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

          {/* Card */}
          <div className="relative z-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
            
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={room.image}
                alt={room.type}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Availability Badge */}
              <span className={`absolute top-4 left-4 px-3 py-1 text-xs rounded-full font-semibold backdrop-blur-md
                ${room.available 
                  ? "bg-green-500/80 text-white" 
                  : "bg-red-500/80 text-white"}`}>
                {room.available ? "Available" : "Available"}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{room.type}</h3>

              <p className="text-gray-500 text-sm mb-4">
                Fully furnished room with premium amenities and comfort.
              </p>

              {/* Price */}
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-indigo-600">
                  ₹{room.price}
                  <span className="text-sm text-gray-400"> /month</span>
                </span>

                <a href="/rooms" className="px-4 py-2 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  View
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* View More Button */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-center mt-16"
    >
      <button className="px-10 py-4 rounded-full text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:scale-105 transition">
        Explore All Rooms
      </button>
    </motion.div>

  </div>
</section>

      {/* GALLERY */}
      <section className="py-28 container mx-auto px-4">
        {/* <SectionHeader title="Gallery" subtitle="See your future home" centered />
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {[
            Balcony,
            Balcony2,
            roof1,
            roof2
          ].map((img, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.05 }}
              src={img}
              className="rounded-2xl h-60 w-full object-cover"
            />
          ))}
        </div> */}
        
        <Gallery />
      </section>

      {/* TESTIMONIALS */}
<section className="relative py-32 bg-gradient-to-br from-gray-100 via-white to-indigo-100 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full -z-10"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/30 blur-3xl rounded-full -z-10"></div>

  <div className="container mx-auto px-4">
    <SectionHeader 
      title="Loved by Our Residents" 
      subtitle="Real stories from people living at Suhaima Colive PG"
      centered 
    />

    <div className="mt-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
      >
        {[
          {
            name: "Rahul Kumar",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            review: "Amazing PG! Food, cleanliness, and environment are top-class.",
          },
          {
            name: "Priya Sharma",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            review: "Feels like home. Very safe and comfortable for girls.",
          },
          {
            name: "Aman Verma",
            image: "https://randomuser.me/api/portraits/men/65.jpg",
            review: "Best PG in Electronic City. Worth every rupee!",
          },
          {
            name: "Sneha Patel",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            review: "Loved the community and facilities. Highly recommend!",
          }
        ].map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

                {/* User */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={t.image}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-500">Resident</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  “{t.review}”
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>
      
      <section className="relative py-32 bg-gradient-to-br from-white via-indigo-50 to-purple-50 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full -z-10"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full -z-10"></div>

  <div className="container mx-auto px-4">
    <SectionHeader 
      title="Frequently Asked Questions" 
      subtitle="Everything you need to know before moving in." 
      centered 
    />

    <div className="max-w-3xl mx-auto mt-16 space-y-6">
      {[
        {
          q: "Is food included in the rent?",
          a: "Yes, we provide hygienic home-style food (breakfast & dinner) included in the rent."
        },
        {
          q: "Is there any security deposit?",
          a: "Yes, a minimal refundable security deposit is required at the time of booking."
        },
        {
          q: "Are visitors allowed?",
          a: "Visitors are allowed during designated hours with proper entry and security checks."
        },
        {
          q: "Do you provide WiFi and power backup?",
          a: "Absolutely! We offer high-speed WiFi and 24/7 power backup for uninterrupted comfort."
        },
        {
          q: "Is cleaning service available?",
          a: "Yes, daily housekeeping and room cleaning services are included."
        }
      ].map((item, i) => {
        const [openIndex, setOpenIndex] = useState(null);

        const isOpen = openIndex === i;

        return (
          <div key={i}>
            {/* Question */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`w-full flex justify-between items-center p-6 rounded-2xl text-left transition-all duration-300
                ${isOpen 
                  ? "bg-white shadow-xl border border-indigo-200" 
                  : "bg-white/60 backdrop-blur-lg border border-gray-200 hover:bg-white"}`}
            >
              <span className="font-semibold text-lg">{item.q}</span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 text-gray-600 bg-white border-l-4 border-indigo-500 rounded-b-2xl shadow-inner">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>   
  </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Ready to Move In?
  </h2>

  <p className="text-lg text-white/80 mb-8">
    Book your room instantly and connect with us on WhatsApp.
  </p>

  <a
    href="https://wa.me/919187200607?text=Hi%20I%20am%20interested%20in%20SUHAIMA%20COLIVE%20PG"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="px-10 py-5 text-lg rounded-full bg-white text-black hover:scale-110 transition-all shadow-xl">
      Book Your Room
    </Button>
  </a>
</section>

    </div>
  );
};

export default Home;