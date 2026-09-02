import HeroSection from "../components/home/HeroSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import HomeAmenitiesSection from "../components/home/HomeAmenitiesSection";
import Menu from "./Menu";
import HomeRoomsSection from "../components/home/HomeRoomsSection";
import Gallery from "./Gallery";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FaqSection from "../components/home/FaqSection";
import HomeCtaSection from "../components/home/HomeCtaSection";

const Home = () => {
  return (
    <div className="bg-[#0A0C10] text-white min-h-screen overflow-hidden">
      {/* 1. Hero Section with Trust Badges and CTAs */}
      <HeroSection />

      {/* 2. How It Works 4-Step Process */}
      <HowItWorksSection />

      {/* 3. High-End Amenities Grid */}
      <HomeAmenitiesSection />

      {/* 4. Weekly Culinary Menu Showcase */}
      <Menu />

      {/* 5. Filterable Modern Living Spaces */}
      <HomeRoomsSection />

      {/* 6. Visual Experience Gallery */}
      <section className="overflow-hidden">
        <Gallery />
      </section>

      {/* 7. Community Resident Testimonials */}
      <TestimonialsSection />

      {/* 8. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 9. Final Booking Call to Action */}
      <HomeCtaSection />
    </div>
  );
};

export default Home;