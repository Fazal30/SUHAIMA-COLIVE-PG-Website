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
      <HeroSection />
      <HowItWorksSection />
      <HomeAmenitiesSection />
      <Menu />
      <HomeRoomsSection />
      <section className="overflow-hidden">
        <Gallery />
      </section>
      <TestimonialsSection />
      <FaqSection />
      <HomeCtaSection />
    </div>
  );
};

export default Home;