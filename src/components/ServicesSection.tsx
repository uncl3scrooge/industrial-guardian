import { motion } from "framer-motion";
import { Search, ShieldCheck, FlaskConical, Droplets, Building2, FileSearch, Map, BarChart3, Network, Cpu } from "lucide-react";

const diagItems = [
  { icon: FlaskConical, label: "Contrôles non destructifs (CND)" },
  { icon: Droplets, label: "Corrosion & hydraulique" },
  { icon: Building2, label: "Structures & bâtiment" },
  { icon: FileSearch, label: "Audits & revue documentaire" },
];

const cyberItems = [
  { icon: Network, label: "Cartographie des environnements OT" },
  { icon: Search, label: "Visualisation du risque cyber" },
  { icon: Cpu, label: "Sécurisation des systèmes industriels" },
  { icon: FileSearch, label: "Accompagnement & mise en conformité" },
];

const cyberModules = [
  {
    icon: Map,
    name: "UMX Explorer",
    desc: "Cartographie et inventaire des actifs industriels",
  },
  {
    icon: BarChart3,
    name: "UMX Risk Manager",
    desc: "Visualisation intuitive et pilotage des risques",
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
          Deux expertises, une même exigence
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Protéger les installations industrielles — du physique au numérique.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Diagnostic & CND */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-10 shadow-card hover:shadow-card-hover transition-shadow border border-border relative overflow-hidden flex flex-col"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-fire" />
          <div className="w-14 h-14 rounded-xl bg-fire/10 flex items-center justify-center mb-6">
            <Search className="w-7 h-7 text-fire" />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            Diagnostic & contrôle industriel
          </h3>
          <p className="text-sm font-medium text-fire mb-5">
            Laboratoire CND — Industrie & bâtiment
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Laboratoire spécialisé en diagnostics et contrôles non destructifs. Pour chaque problématique, nous identifions le mode d'analyse adéquat selon une méthodologie systématique : revue documentaire, identification des causes, choix du mode d'analyse, mesures et interprétation.
          </p>
          <div className="space-y-3 mt-auto">
            {diagItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-fire/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-fire" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cybersécurité industrielle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-lg p-10 shadow-card hover:shadow-card-hover transition-shadow border border-border relative overflow-hidden flex flex-col"
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
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Cartographier les environnements industriels, visualiser le risque cyber et accompagner les industriels dans la sécurisation de leurs systèmes numériques, réseaux et continuité d'activité.
          </p>
          <div className="space-y-3 mb-6">
            {cyberItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-accent-dark/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-accent-dark" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          {/* Modules UMX */}
          <div className="mt-auto pt-6 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark mb-4">Nos modules</p>
            <div className="grid grid-cols-2 gap-3">
              {cyberModules.map((mod) => (
                <div key={mod.name} className="bg-accent-dark/5 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 rounded-lg bg-accent-dark/10 flex items-center justify-center mx-auto mb-2">
                    <mod.icon className="w-5 h-5 text-accent-dark" />
                  </div>
                  <p className="text-sm font-heading font-bold text-foreground">{mod.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
