import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-surface-subtle">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t("contact.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </motion.div>
        <div className="grid md:grid-cols-5 gap-12">
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-3 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input name="name" placeholder={t("contact.name")} value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-dark/30" />
              <input name="email" type="email" placeholder={t("contact.email")} value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-dark/30" />
            </div>
            <input name="company" placeholder={t("contact.company")} value={form.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-dark/30" />
            <textarea name="message" rows={5} placeholder={t("contact.message")} value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-dark/30 resize-none" />
            <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">{t("contact.send")}</Button>
          </motion.form>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="md:col-span-2 space-y-6 pt-2">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent-dark mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">{t("contact.emailLabel")}</p>
                <a href="mailto:contact@ultrametrix.fr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">contact@ultrametrix.fr</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent-dark mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">{t("contact.phoneLabel")}</p>
                <span className="text-sm text-muted-foreground">04 78 79 21 71</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent-dark mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">{t("contact.addressLabel")}</p>
                <span className="text-sm text-muted-foreground">6 rue du Méboud, 69120 Vaulx-en-Velin</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
