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
  title = "ENC Pintura y Reparaciones",
  subtitle = "Pintura de interiores y exteriores, montaje de mobiliario, servicio de manitas y carpintería en general.",
  tagline = "Transformamos tus espacios con calidad y precision.",
  backgroundSrc = "/images/hero/home-hero.png", // ✅ ruta desde /public
  primaryCta = {
    label: "Contactar por WhatsApp",
    href: "https://wa.me/34642848354",
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
