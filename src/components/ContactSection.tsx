import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const mailtoLink = `mailto:contact@ultrametrix.fr?subject=${encodeURIComponent(t("contact.mailtoSubject"))}`;

  return (
    <section id="contact" className="py-24 bg-surface-subtle">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t("contact.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-8">
          <div className="grid sm:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-card border border-border">
              <Mail className="w-6 h-6 text-accent-dark" />
              <p className="text-sm font-medium text-foreground">{t("contact.emailLabel")}</p>
              <a href="mailto:contact@ultrametrix.fr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">contact@ultrametrix.fr</a>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-card border border-border">
              <Phone className="w-6 h-6 text-accent-dark" />
              <p className="text-sm font-medium text-foreground">{t("contact.phoneLabel")}</p>
              <span className="text-sm text-muted-foreground">04 78 79 21 71</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-card border border-border">
              <MapPin className="w-6 h-6 text-accent-dark" />
              <p className="text-sm font-medium text-foreground">{t("contact.addressLabel")}</p>
              <span className="text-sm text-muted-foreground">6 rue du Méboud, 69120 Vaulx-en-Velin</span>
            </div>
          </div>
          <Button asChild variant="hero" size="lg">
            <a href={mailtoLink}>{t("contact.sendEmail")}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
