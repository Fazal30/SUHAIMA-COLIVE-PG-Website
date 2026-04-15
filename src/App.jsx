import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout & Shared
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import PageWrapper from "./components/shared/PageWrapper";

// Pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import Amenities from "./pages/Amenities";
import Rooms from "./pages/Rooms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect (() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/room/:id" element={<PageWrapper><RoomDetails /></PageWrapper>} />
              <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
              <Route path="/amenities" element={<PageWrapper><Amenities /> </PageWrapper>} />
              <Route path="/rooms" element={<PageWrapper><Rooms /> </PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
              <Route path="/terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
              <Route path="/refund" element={<PageWrapper><RefundPolicy /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;