import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutUs";

export default function Home() {
  return (
   <div>
    <TopNav />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <Projects />
    <AboutSection />
   </div>
  );
}
