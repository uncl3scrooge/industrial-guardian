import { useLanguage } from "@/contexts/LanguageContext";
import sanofiLogo from "@/assets/logos/sanofi.png";
import thalesLogo from "@/assets/logos/thales.png";
import renaultLogo from "@/assets/logos/renault.png";
import ahlstromLogo from "@/assets/logos/ahlstrom.png";
import ntnLogo from "@/assets/logos/ntn.png";
import boironLogo from "@/assets/logos/boiron.png";
import elkemLogo from "@/assets/logos/elkem.png";
import rossmannLogo from "@/assets/logos/rossmann.png";

const logos = [
  { name: "Sanofi", src: sanofiLogo },
  { name: "Thales", src: thalesLogo },
  { name: "Renault", src: renaultLogo },
  { name: "Ahlstrom", src: ahlstromLogo },
  { name: "NTN", src: ntnLogo },
  { name: "Boiron", src: boironLogo },
  { name: "Elkem", src: elkemLogo },
  { name: "Rossmann", src: rossmannLogo },
];

const ReferencesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-14">
          {t("references.title")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center max-w-5xl mx-auto">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center bg-background rounded-xl border border-border p-6 h-28 shadow-sm hover:shadow-md hover:border-accent-dark/30 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                width={160}
                height={160}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
