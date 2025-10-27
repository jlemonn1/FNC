// Hero section (Home)
import "./HeroCTA.css";

interface HeroCTAProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  backgroundSrc?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const HeroCTA = ({
  title = "FNC Pintura y Reparaciones",
  subtitle = "Interiores, exteriores y carpintería con acabados duraderos y estilo artesanal.",
  tagline = "Transformamos tus espacios con precisión y calidez.",
  backgroundSrc = "/assets/images/hero/home-hero.jpg",
  primaryCta = {
    label: "Contactar por WhatsApp",
    href: "https://wa.me/",
  },
  secondaryCta = { label: "Ver servicios", href: "/servicios" },
}: HeroCTAProps) => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
      aria-label="Encabezado principal de FNC Pintura y Reparaciones"
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        {tagline && <p className="hero-tagline">{tagline}</p>}
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-buttons">
          <a
            href={primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {primaryCta.label}
          </a>
          {secondaryCta && (
            <a href={secondaryCta.href} className="btn btn-secondary">
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
