import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Clients from "./components/Clients";
import ServicesSection from "./components/Services";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutUs";
import Team from "./components/Team";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="w-full overflow-x-hidden">
    <TopNav />
    <Navbar />
    <HeroSection />
    <Clients />
    <ServicesSection />
    <Projects />
    <AboutSection />
    <Team />
    <ContactSection />
    <Footer />
   </div>
  );
}
