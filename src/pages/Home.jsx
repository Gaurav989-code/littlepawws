import PageTransition from "../components/PageTransition";
import AboutSection from "../sections/AboutSection";
import BookingCTA from "../sections/BookingCTA";
import FAQSection from "../sections/FAQSection";
import GallerySection from "../sections/GallerySection";
import Hero from "../sections/Hero";
import RoomsSection from "../sections/RoomsSection";
import RoutineSection from "../sections/RoutineSection";
import ServicesSection from "../sections/ServicesSection";
import TestimonialsSection from "../sections/TestimonialsSection";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <RoomsSection />
      <RoutineSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingCTA />
      <FAQSection />
    </PageTransition>
  );
};

export default Home;
