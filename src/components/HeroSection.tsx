import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Installation industrielle connectée" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero opacity-85" />
      <div className="relative z-10 container text-center max-w-3xl px-6">
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight text-balance">
          {t("hero.title")}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild><a href="#solutions">{t("hero.cta1")}</a></Button>
          <Button variant="hero-outline" size="lg" asChild><a href="#contact">{t("hero.cta2")}</a></Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
