// Hero section (Home)
import "./HeroCTA.css";
import { Instagram } from "lucide-react";

interface HeroCTAProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  backgroundSrc?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const HeroCTA = ({
  title = "FNC Reformas",
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
      aria-label="Encabezado principal de FNC Reformas"
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
        <div className="hero-social">
          <a
            href="https://www.instagram.com/fnc.reformas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Síguenos en Instagram"
          >
            <Instagram size={24} />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@fnc.reformas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Síguenos en TikTok"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
};
