import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutUs";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="w-full overflow-x-hidden">
    <TopNav />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <Projects />
    <AboutSection />
    <ContactSection />
    <Footer />
   </div>
  );
}
