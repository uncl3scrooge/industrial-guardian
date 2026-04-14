import { useLanguage } from "@/contexts/LanguageContext";
import sanofiLogo from "@/assets/logos/sanofi.png";
import thalesLogo from "@/assets/logos/thales.png";
import renaultLogo from "@/assets/logos/renault.svg";
import ahlstromLogo from "@/assets/logos/ahlstrom.png";
import ntnLogo from "@/assets/logos/ntn.png";
import boironLogo from "@/assets/logos/boiron.png";
import elkemLogo from "@/assets/logos/elkem.png";
import rossmannLogo from "@/assets/logos/rossmann.png";

const logosRow1 = [
  { name: "Sanofi", src: sanofiLogo },
  { name: "Thales", src: thalesLogo },
  { name: "Renault", src: renaultLogo },
  { name: "Ahlstrom", src: ahlstromLogo },
];

const logosRow2 = [
  { name: "NTN", src: ntnLogo },
  { name: "Boiron", src: boironLogo },
  { name: "Elkem", src: elkemLogo },
  { name: "Rossmann", src: rossmannLogo },
];

const MarqueeRow = ({
  logos,
  direction = "left",
  speed = 30,
}: {
  logos: { name: string; src: string }[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Triple the logos for seamless loop
  const items = [...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-4 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div
        className={`flex gap-8 items-center w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 w-[200px] h-24 shadow-sm hover:shadow-lg hover:border-accent-dark/40 hover:scale-105 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-12 max-w-[140px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ReferencesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mb-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center">
          {t("references.title")}
        </h2>
      </div>
      <div className="space-y-2">
        <MarqueeRow logos={logosRow1} direction="left" speed={25} />
        <MarqueeRow logos={logosRow2} direction="right" speed={30} />
      </div>
    </section>
  );
};

export default ReferencesSection;
