import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ModulesSection from "@/components/ModulesSection";
import ConseilSection from "@/components/ConseilSection";
import BridgeSection from "@/components/BridgeSection";
import WhySection from "@/components/WhySection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => (
  <LanguageProvider>
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ModulesSection />
      <ConseilSection />
      <BridgeSection />
      <WhySection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
    </div>
  </LanguageProvider>
);

export default Index;
