import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Nav
    "nav.solutions": "Solutions",
    "nav.modules": "Modules",
    "nav.conseil": "Conseil",
    "nav.why": "Pourquoi Ultrametrix",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Sécuriser les installations industrielles, du terrain au numérique",
    "hero.subtitle": "Cartographie, diagnostic et cybersécurité des environnements industriels. Ultrametrix accompagne les acteurs de l'industrie dans la compréhension et la sécurisation de leurs installations critiques.",
    "hero.cta1": "Découvrir nos solutions",
    "hero.cta2": "Nous contacter",

    // Services
    "services.title": "Deux expertises, une même exigence",
    "services.subtitle": "Protéger les installations industrielles — du physique au numérique.",
    "services.diag.title": "Diagnostic & contrôle industriel",
    "services.diag.subtitle": "Laboratoire CND — Industrie & bâtiment",
    "services.diag.desc": "Laboratoire spécialisé en diagnostics et contrôles non destructifs. Pour chaque problématique, nous identifions le mode d'analyse adéquat selon une méthodologie systématique : revue documentaire, identification des causes, choix du mode d'analyse, mesures et interprétation.",
    "services.diag.item1": "Contrôles non destructifs (CND)",
    "services.diag.item2": "Corrosion & hydraulique",
    "services.diag.item3": "Structures & bâtiment",
    "services.diag.item4": "Audits & revue documentaire",
    "services.cyber.title": "Cybersécurité industrielle",
    "services.cyber.subtitle": "Sécurisation des systèmes OT",
    "services.cyber.desc": "Cartographier les environnements industriels, visualiser le risque cyber et accompagner les industriels dans la sécurisation de leurs systèmes numériques, réseaux et continuité d'activité.",
    "services.cyber.item1": "Cartographie des environnements OT",
    "services.cyber.item2": "Visualisation du risque cyber",
    "services.cyber.item3": "Sécurisation des systèmes industriels",
    "services.cyber.item4": "Accompagnement & mise en conformité",

    // Modules
    "modules.title": "Nos modules cyber",
    "modules.subtitle": "Deux outils dédiés à la cybersécurité industrielle, de la visibilité à la maîtrise du risque OT.",
    "modules.explorer.subtitle": "Cartographie cyber des environnements OT",
    "modules.explorer.desc": "Module de cartographie des installations industrielles dédié à la cybersécurité. Il identifie et structure les équipements, systèmes et interconnexions d'un environnement OT. La collecte peut être réalisée en mode agent ou agentless selon le contexte technique et opérationnel.",
    "modules.risk.subtitle": "Pilotage du risque cyber & conformité IEC 62443",
    "modules.risk.desc": "S'appuie sur la cartographie UMX Explorer pour fournir une vision du risque cyber visuelle, rapide et intuitive. Lecture claire des expositions, des zones sensibles et des priorités de sécurisation, avec un accompagnement vers la mise en conformité IEC 62443.",

    // Conseil
    "conseil.title": "Conseil & accompagnement",
    "conseil.desc1": "Ultrametrix ne propose pas seulement des outils. Nous accompagnons les industriels avec des prestations de conseil en cybersécurité industrielle, en combinant expertise terrain, compréhension technique et aide à la décision.",
    "conseil.desc2": "L'objectif : passer de la visibilité à l'action.",
    "conseil.item1": "Cartographie des environnements industriels",
    "conseil.item2": "Visualisation du risque",
    "conseil.item3": "Accompagnement à la sécurisation",
    "conseil.item4": "Aide à la priorisation",
    "conseil.item5": "Support aux démarches de transformation et de mise en conformité",

    // Bridge
    "bridge.title": "Le lien entre diagnostic industriel et cybersécurité",
    "bridge.desc": "Le diagnostic industriel et la cybersécurité répondent à une même logique : comprendre un système, identifier ses faiblesses et protéger ses fonctions critiques. Notre double expertise nous permet d'aborder la sécurisation des installations avec une vision complète — physique et numérique.",
    "bridge.diag": "Diagnostic industriel",
    "bridge.cyber": "Cybersécurité OT",
    "bridge.intro": "Dans les deux cas, la démarche est la même :",
    "bridge.item1": "Comprendre les installations et leurs dépendances",
    "bridge.item2": "Identifier les points sensibles et les vulnérabilités",
    "bridge.item3": "Réduire l'exposition au risque",
    "bridge.item4": "Protéger la disponibilité et la sécurité des opérations",

    // Why
    "why.title": "Pourquoi Ultrametrix",
    "why.item1": "Connaissance des environnements industriels",
    "why.item2": "Vision croisée terrain, sécurité et risque",
    "why.item3": "Outils dédiés à la cybersécurité industrielle",
    "why.item4": "Accompagnement opérationnel et conseil",

    // Contact
    "contact.title": "Parlons-en",
    "contact.subtitle": "Diagnostic industriel, cartographie ou cybersécurité OT — échangeons sur vos enjeux.",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.company": "Entreprise",
    "contact.message": "Votre message",
    "contact.send": "Envoyer",
    "contact.sendEmail": "Nous écrire",
    "contact.mailtoSubject": "Demande de contact",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Téléphone",
    "contact.addressLabel": "Siège social",

    // References
    "references.title": "Nos références",
    "references.subtitle": "Ils nous font confiance pour sécuriser leurs installations industrielles.",

    // Footer
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Nav
    "nav.solutions": "Solutions",
    "nav.modules": "Modules",
    "nav.conseil": "Advisory",
    "nav.why": "Why Ultrametrix",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Securing industrial facilities, from the field to the digital",
    "hero.subtitle": "Mapping, diagnostics and cybersecurity for industrial environments. Ultrametrix helps industrial operators understand and secure their critical installations.",
    "hero.cta1": "Discover our solutions",
    "hero.cta2": "Contact us",

    // Services
    "services.title": "Two areas of expertise, one standard of excellence",
    "services.subtitle": "Protecting industrial facilities — from physical to digital.",
    "services.diag.title": "Industrial diagnostics & testing",
    "services.diag.subtitle": "NDT Laboratory — Industry & buildings",
    "services.diag.desc": "Laboratory specialized in diagnostics and non-destructive testing. For each issue, we identify the appropriate analysis method following a systematic methodology: document review, root cause identification, analysis selection, measurements and interpretation.",
    "services.diag.item1": "Non-destructive testing (NDT)",
    "services.diag.item2": "Corrosion & hydraulics",
    "services.diag.item3": "Structures & buildings",
    "services.diag.item4": "Audits & document review",
    "services.cyber.title": "Industrial cybersecurity",
    "services.cyber.subtitle": "OT systems security",
    "services.cyber.desc": "Mapping industrial environments, visualizing cyber risk and supporting manufacturers in securing their digital systems, networks and business continuity.",
    "services.cyber.item1": "OT environment mapping",
    "services.cyber.item2": "Cyber risk visualization",
    "services.cyber.item3": "Industrial system hardening",
    "services.cyber.item4": "Compliance & advisory support",

    // Modules
    "modules.title": "Our cyber modules",
    "modules.subtitle": "Two tools dedicated to industrial cybersecurity, from visibility to OT risk control.",
    "modules.explorer.subtitle": "Cyber mapping of OT environments",
    "modules.explorer.desc": "Cybersecurity-focused industrial asset mapping module. It identifies and structures equipment, systems and interconnections within an OT environment. Data collection can be performed in agent or agentless mode depending on the technical and operational context.",
    "modules.risk.subtitle": "Cyber risk management & IEC 62443 compliance",
    "modules.risk.desc": "Builds on UMX Explorer mapping to deliver a visual, fast and intuitive cyber risk overview. Clear reading of exposures, sensitive areas and security priorities, with support towards IEC 62443 compliance.",

    // Conseil
    "conseil.title": "Advisory & support",
    "conseil.desc1": "Ultrametrix doesn't just provide tools. We support industrial operators with industrial cybersecurity advisory services, combining field expertise, technical understanding and decision-making support.",
    "conseil.desc2": "The goal: moving from visibility to action.",
    "conseil.item1": "Industrial environment mapping",
    "conseil.item2": "Risk visualization",
    "conseil.item3": "Security support",
    "conseil.item4": "Prioritization guidance",
    "conseil.item5": "Support for transformation and compliance initiatives",

    // Bridge
    "bridge.title": "The link between industrial diagnostics and cybersecurity",
    "bridge.desc": "Industrial diagnostics and cybersecurity follow the same logic: understanding a system, identifying its weaknesses and protecting its critical functions. Our dual expertise allows us to approach facility security with a complete vision — physical and digital.",
    "bridge.diag": "Industrial diagnostics",
    "bridge.cyber": "OT cybersecurity",
    "bridge.intro": "In both cases, the approach is the same:",
    "bridge.item1": "Understanding installations and their dependencies",
    "bridge.item2": "Identifying sensitive points and vulnerabilities",
    "bridge.item3": "Reducing risk exposure",
    "bridge.item4": "Protecting availability and operational safety",

    // Why
    "why.title": "Why Ultrametrix",
    "why.item1": "Deep knowledge of industrial environments",
    "why.item2": "Cross-disciplinary view of field, security & risk",
    "why.item3": "Tools dedicated to industrial cybersecurity",
    "why.item4": "Operational support & advisory",

    // Contact
    "contact.title": "Let's talk",
    "contact.subtitle": "Industrial diagnostics, mapping or OT cybersecurity — let's discuss your challenges.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Your message",
    "contact.send": "Send",
    "contact.sendEmail": "Write to us",
    "contact.mailtoSubject": "Contact request",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.addressLabel": "Headquarters",

    // References
    "references.title": "Our references",
    "references.subtitle": "They trust us to secure their industrial facilities.",

    // Footer
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: string): string => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
