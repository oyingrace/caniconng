import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutUs";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
   <div>
    <TopNav />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <Projects />
    <AboutSection />
    <ContactSection />
   </div>
  );
}
