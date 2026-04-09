import { motion } from "framer-motion";
import { Search, ShieldCheck, Lock } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Diagnostic & compréhension",
    description:
      "Compréhension des systèmes, des équipements, des flux et des dépendances techniques de vos installations.",
  },
  {
    icon: ShieldCheck,
    title: "Protection incendie & fonctions critiques",
    description:
      "Expertise historique sur les installations, les équipements de protection et la sécurité des environnements industriels.",
  },
  {
    icon: Lock,
    title: "Cybersécurité industrielle",
    description:
      "Cartographier, visualiser le risque et accompagner les industriels dans la sécurisation de leurs systèmes OT.",
  },
];

const ServicesSection = () => (
  <section id="solutions" className="py-24 bg-background">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Ce que nous faisons
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Trois piliers complémentaires pour une vision complète de la sécurité industrielle.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-shadow border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <pillar.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
              {pillar.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
