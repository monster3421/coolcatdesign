import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioGrid from "./PortfolioGrid";
import ContactSection from "./ContactSection";

function Home() {
  const handleCtaClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection onCtaClick={handleCtaClick} />
      <ServicesSection />
      <PortfolioGrid />
      <ContactSection />
    </div>
  );
}

export default Home;
