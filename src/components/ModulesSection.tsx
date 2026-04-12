import { motion } from "framer-motion";
import { Map, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ModulesSection = () => {
  const { t } = useLanguage();

  const modules = [
    {
      icon: Map,
      name: "UMX Explorer",
      subtitle: t("modules.explorer.subtitle"),
      description: t("modules.explorer.desc"),
    },
    {
      icon: BarChart3,
      name: "UMX Risk Manager",
      subtitle: t("modules.risk.subtitle"),
      description: t("modules.risk.desc"),
    },
  ];

  return (
    <section id="modules" className="py-24 bg-surface-subtle">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t("modules.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t("modules.subtitle")}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((mod, i) => (
            <motion.div key={mod.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card rounded-lg p-10 shadow-card hover:shadow-card-hover transition-shadow border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent-dark/10 flex items-center justify-center mb-5"><mod.icon className="w-6 h-6 text-accent-dark" /></div>
              <h3 className="text-xl font-heading font-bold text-foreground">{mod.name}</h3>
              <p className="text-sm font-medium text-accent-dark mt-1 mb-4">{mod.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
