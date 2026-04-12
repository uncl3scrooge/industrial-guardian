import { motion } from "framer-motion";
import { Search, ShieldCheck, FlaskConical, Droplets, Building2, FileSearch, Cpu, Network } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const diagItems = [
    { icon: FlaskConical, label: t("services.diag.item1") },
    { icon: Droplets, label: t("services.diag.item2") },
    { icon: Building2, label: t("services.diag.item3") },
    { icon: FileSearch, label: t("services.diag.item4") },
  ];

  const cyberItems = [
    { icon: Network, label: t("services.cyber.item1") },
    { icon: Search, label: t("services.cyber.item2") },
    { icon: Cpu, label: t("services.cyber.item3") },
    { icon: FileSearch, label: t("services.cyber.item4") },
  ];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t("services.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-lg p-10 shadow-card hover:shadow-card-hover transition-shadow border border-border relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-fire" />
            <div className="w-14 h-14 rounded-xl bg-fire/10 flex items-center justify-center mb-6"><Search className="w-7 h-7 text-fire" /></div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">{t("services.diag.title")}</h3>
            <p className="text-sm font-medium text-fire mb-5">{t("services.diag.subtitle")}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t("services.diag.desc")}</p>
            <div className="space-y-3 mt-auto">
              {diagItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-fire/10 flex items-center justify-center shrink-0"><item.icon className="w-4 h-4 text-fire" /></div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-card rounded-lg p-10 shadow-card hover:shadow-card-hover transition-shadow border border-border relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 gradient-accent" />
            <div className="w-14 h-14 rounded-xl bg-accent-dark/10 flex items-center justify-center mb-6"><ShieldCheck className="w-7 h-7 text-accent-dark" /></div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">{t("services.cyber.title")}</h3>
            <p className="text-sm font-medium text-accent-dark mb-5">{t("services.cyber.subtitle")}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t("services.cyber.desc")}</p>
            <div className="space-y-3 mt-auto">
              {cyberItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-accent-dark/10 flex items-center justify-center shrink-0"><item.icon className="w-4 h-4 text-accent-dark" /></div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
