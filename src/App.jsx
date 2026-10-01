import { lazy, Suspense } from "react";

import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import PageLoader from "./components/PageLoader";

// ================= LAZY PAGES =================

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Rooms = lazy(() => import("./pages/Rooms"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Booking = lazy(() => import("./pages/Booking"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#f8f4ec] text-[#29251f]">
      <SmoothScroll />
      <ScrollToTop />

      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/rooms" element={<Rooms />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/booking" element={<Booking />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
