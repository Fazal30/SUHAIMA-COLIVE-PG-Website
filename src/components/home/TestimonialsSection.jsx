import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import SectionHeader from "../shared/SectionHeader";
import stu from "../../assets/stu-1.webp";
import stu1 from "../../assets/stu.jpg";

const REVIEWS = [
  {
    name: "Rahul Mishra",
    image: stu,
    review: "The best PG in Electronic City. The North Indian food reminds me of home, and the high-speed WiFi is perfect for my WFH setup.",
    tag: "Verified Resident"
  },
  {
    name: "Ananya Sharma",
    image: "https://xsgames.co/randomusers/assets/avatars/female/24.jpg",
    review: "Safety was my main concern, but Suhaima feels so secure. The rooms are spacious and the cleaning staff is very professional.",
    tag: "Verified Resident"
  },
  {
    name: "Satyam Mishra",
    image: stu1,
    review: "Value for money! The amenities like the rooftop gym and common area are top-notch. Highly recommended for tech professionals.",
    tag: "Verified Resident"
  },
  {
    name: "Priya Das",
    image: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
    review: "Beautiful interiors and a peaceful work-friendly environment. Management is exceptionally responsive to any service requests.",
    tag: "Verified Resident"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-28 bg-[#0A0C10] overflow-hidden text-white border-t border-white/5">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DAA520]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title={<span>Voices of Our <span className="text-[#DAA520]">Community</span></span>} 
          subtitle="Real experiences shared by our premium residents." 
          centered 
          dark
        />

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            className="pb-16 testimonial-swiper"
          >
            {REVIEWS.map((t, i) => (
              <SwiperSlide key={i} className="py-4 h-auto">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative h-full flex flex-col justify-between bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#DAA520]/40 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl transition-all duration-300"
                >
                  <div>
                    {/* Top: Quote Icon & Stars */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#DAA520]/10 flex items-center justify-center">
                        <FaQuoteLeft className="text-[#DAA520] text-sm" />
                      </div>
                      <div className="flex text-[#DAA520] gap-1 bg-white/5 px-2.5 py-1 rounded-full">
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} size={10} />
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                      "{t.review}"
                    </p>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#DAA520]/30 to-transparent mb-5" />

                    {/* User Profile */}
                    <div className="flex items-center gap-3.5">
                      <div className="relative">
                        <img
                          src={t.image}
                          alt={t.name}
                          loading="lazy"
                          className="w-12 h-12 rounded-xl object-cover border border-white/20 shadow-md"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 border-2 border-[#0A0C10] w-3.5 h-3.5 rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm tracking-tight">{t.name}</h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          <FaCheckCircle className="text-[#DAA520] text-[10px]" />
                          <span className="text-[10px] uppercase tracking-wider text-[#DAA520] font-black">{t.tag}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-swiper .swiper-pagination-bullet {
          background: #DAA520 !important;
          opacity: 0.3;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px !important;
          border-radius: 10px !important;
        }
      `}} />
    </section>
  );
};

export default TestimonialsSection;
