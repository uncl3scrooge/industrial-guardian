import { motion } from "framer-motion";
import { Flame, ShieldCheck } from "lucide-react";

const parallels = [
  "Mieux connaître les installations",
  "Identifier les points sensibles",
  "Réduire l'exposition au risque",
  "Protéger la disponibilité et la sécurité des opérations",
];

const BridgeSection = () => (
  <section className="py-24 bg-surface-subtle">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Le lien entre protection incendie et protection cyber
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-lg p-10 border border-border shadow-card"
      >
        <p className="text-muted-foreground leading-relaxed mb-8">
          La protection incendie et la protection cyber répondent à une même logique :
          protéger les fonctions critiques d'une installation, réduire les vulnérabilités,
          limiter les impacts d'un incident et renforcer la continuité d'activité.
        </p>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Flame className="w-5 h-5 text-accent" />
            <span>Protection incendie</span>
          </div>
          <div className="flex-1 border-t border-dashed border-border" />
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Protection cyber</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          Dans les deux cas, la démarche est la même :
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {parallels.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-foreground bg-surface-subtle rounded-md px-4 py-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default BridgeSection;
