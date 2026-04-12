import { motion } from "framer-motion";
import { MapPin, Eye, Shield, ListChecks, ArrowRightLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ConseilSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: MapPin, label: t("conseil.item1") },
    { icon: Eye, label: t("conseil.item2") },
    { icon: Shield, label: t("conseil.item3") },
    { icon: ListChecks, label: t("conseil.item4") },
    { icon: ArrowRightLeft, label: t("conseil.item5") },
  ];

  return (
    <section id="conseil" className="py-24 bg-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t("conseil.title")}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t("conseil.desc1")}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t("conseil.desc2")}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-4">
            {items.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border">
                <div className="w-9 h-9 rounded-md bg-accent-dark/10 flex items-center justify-center shrink-0 mt-0.5"><item.icon className="w-4 h-4 text-accent-dark" /></div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConseilSection;
