import { motion } from "framer-motion";
import { Search, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BridgeSection = () => {
  const { t } = useLanguage();

  const parallels = [
    t("bridge.item1"),
    t("bridge.item2"),
    t("bridge.item3"),
    t("bridge.item4"),
  ];

  return (
    <section className="py-24 bg-surface-subtle">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t("bridge.title")}</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-lg p-10 border border-border shadow-card">
          <p className="text-muted-foreground leading-relaxed mb-8">{t("bridge.desc")}</p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Search className="w-5 h-5 text-fire" /><span>{t("bridge.diag")}</span>
            </div>
            <div className="flex-1 border-t border-dashed border-border" />
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="w-5 h-5 text-accent-dark" /><span>{t("bridge.cyber")}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-5">{t("bridge.intro")}</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {parallels.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground bg-surface-subtle rounded-md px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-dark shrink-0" />{item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BridgeSection;
