import "./HeroServicios.css";

interface HeroServiciosProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  backgroundSrc?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const HeroServicios = ({
  title = "Nuestros Servicios",
  subtitle = "Soluciones integrales en pintura, carpintería y reparaciones.",
  tagline = "Profesionalismo, garantía y acabados impecables.",
  backgroundSrc = "/images/hero/servicios-hero.png",
  primaryCta = {
    label: "Solicitar presupuesto",
    href: "https://wa.me/34642848354?text=Hola!%20Quiero%20un%20presupuesto",
  },
  secondaryCta = {
    label: "Ver proyectos",
    href: "/proyectos",
    
  },
}: HeroServiciosProps) => {
  return (
    <section
      className="hero-servicios"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
      aria-label="Encabezado principal de Servicios ENC Reformas"
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
