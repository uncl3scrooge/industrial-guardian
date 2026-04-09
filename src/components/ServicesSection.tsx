import { motion } from "framer-motion";
import { Flame, ShieldCheck, Search } from "lucide-react";

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
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Deux expertises complémentaires, une même exigence : protéger les installations industrielles.
        </p>
      </motion.div>

      {/* Two equal pillars */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Fire Protection */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-10 shadow-card hover:shadow-card-hover transition-shadow border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600" />
          <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
            <Flame className="w-7 h-7 text-orange-500" />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            Protection incendie
          </h3>
          <p className="text-sm font-medium text-orange-600 mb-5">
            Maîtrise des fonctions critiques
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Expertise historique sur les installations, les équipements de protection et la sécurité des environnements industriels. Diagnostic, compréhension des systèmes et maîtrise des risques physiques.
          </p>
        </motion.div>

        {/* Cybersecurity */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-lg p-10 shadow-card hover:shadow-card-hover transition-shadow border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 gradient-accent" />
          <div className="w-14 h-14 rounded-xl bg-accent-dark/10 flex items-center justify-center mb-6">
            <ShieldCheck className="w-7 h-7 text-accent-dark" />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            Cybersécurité industrielle
          </h3>
          <p className="text-sm font-medium text-accent-dark mb-5">
            Sécurisation des systèmes OT
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cartographier les environnements, visualiser le risque et accompagner les industriels dans la sécurisation de leurs systèmes numériques, de leurs réseaux et de leur continuité d'activité.
          </p>
        </motion.div>
      </div>

      {/* Shared foundation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="bg-card rounded-lg p-8 shadow-card border border-border flex items-start gap-6"
      >
        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
          <Search className="w-6 h-6 text-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            Socle commun : diagnostic & compréhension
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Compréhension des systèmes, des équipements, des flux et des dépendances techniques. Le point de départ de toute démarche de sécurisation.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
