import { motion } from "framer-motion";
import { MapPin, Eye, Shield, ListChecks, ArrowRightLeft } from "lucide-react";

const items = [
  { icon: MapPin, label: "Cartographie des environnements industriels" },
  { icon: Eye, label: "Visualisation du risque" },
  { icon: Shield, label: "Accompagnement à la sécurisation" },
  { icon: ListChecks, label: "Aide à la priorisation" },
  { icon: ArrowRightLeft, label: "Support aux démarches de transformation et de mise en conformité" },
];

const ConseilSection = () => (
  <section id="conseil" className="py-24 bg-background">
    <div className="container max-w-5xl">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Conseil & accompagnement
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Ultrametrix ne propose pas seulement des outils. Nous accompagnons les industriels
            avec des prestations de conseil en cybersécurité industrielle, en combinant expertise
            terrain, compréhension technique et aide à la décision.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            L'objectif : passer de la visibilité à l'action.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-4"
        >
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border"
            >
              <div className="w-9 h-9 rounded-md bg-accent-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                <item.icon className="w-4 h-4 text-accent-dark" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ConseilSection;
