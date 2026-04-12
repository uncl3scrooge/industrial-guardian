import { motion } from "framer-motion";
import { Map, BarChart3 } from "lucide-react";

const modules = [
  {
    icon: Map,
    name: "UMX Explorer",
    subtitle: "Cartographie cyber des environnements OT",
    description:
      "Module de cartographie des installations industrielles dédié à la cybersécurité. Il identifie et structure les équipements, systèmes et interconnexions d'un environnement OT. La collecte peut être réalisée en mode agent ou agentless selon le contexte technique et opérationnel.",
  },
  {
    icon: BarChart3,
    name: "UMX Risk Manager",
    subtitle: "Pilotage du risque cyber & conformité IEC 62443",
    description:
      "S'appuie sur la cartographie UMX Explorer pour fournir une vision du risque cyber visuelle, rapide et intuitive. Lecture claire des expositions, des zones sensibles et des priorités de sécurisation, avec un accompagnement vers la mise en conformité IEC 62443.",
  },
];

const ModulesSection = () => (
  <section id="modules" className="py-24 bg-surface-subtle">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Nos modules cyber
        </h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Deux outils dédiés à la cybersécurité industrielle, de la visibilité à la maîtrise du risque OT.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-lg p-10 shadow-card hover:shadow-card-hover transition-shadow border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-accent-dark/10 flex items-center justify-center mb-5">
              <mod.icon className="w-6 h-6 text-accent-dark" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">{mod.name}</h3>
            <p className="text-sm font-medium text-accent-dark mt-1 mb-4">{mod.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
