import { motion } from "framer-motion";
import { Search, ShieldCheck } from "lucide-react";

const parallels = [
  "Comprendre les installations et leurs dépendances",
  "Identifier les points sensibles et les vulnérabilités",
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
          Le lien entre diagnostic industriel et cybersécurité
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
          Le diagnostic industriel et la cybersécurité répondent à une même logique :
          comprendre un système, identifier ses faiblesses et protéger ses fonctions critiques.
          Notre double expertise nous permet d'aborder la sécurisation des installations
          avec une vision complète — physique et numérique.
        </p>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Search className="w-5 h-5 text-fire" />
            <span>Diagnostic industriel</span>
          </div>
          <div className="flex-1 border-t border-dashed border-border" />
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <ShieldCheck className="w-5 h-5 text-accent-dark" />
            <span>Cybersécurité OT</span>
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
              <span className="w-1.5 h-1.5 rounded-full bg-accent-dark shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default BridgeSection;
