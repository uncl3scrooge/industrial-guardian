import { motion } from "framer-motion";
import { Factory, Crosshair, Cpu, Handshake } from "lucide-react";

const reasons = [
  { icon: Factory, title: "Connaissance des environnements industriels" },
  { icon: Crosshair, title: "Vision croisée terrain, sécurité et risque" },
  { icon: Cpu, title: "Outils dédiés à la cybersécurité industrielle" },
  { icon: Handshake, title: "Accompagnement opérationnel et conseil" },
];

const WhySection = () => (
  <section id="pourquoi" className="py-24 bg-background">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Pourquoi Ultrametrix
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-lg border border-border bg-card shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-accent-dark/10 flex items-center justify-center mx-auto mb-5">
              <r.icon className="w-7 h-7 text-accent-dark" />
            </div>
            <h3 className="text-sm font-heading font-semibold text-foreground leading-snug">
              {r.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
