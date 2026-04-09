const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ultrametrix. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
