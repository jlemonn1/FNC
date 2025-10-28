// Services preview block
import { useEffect, useRef } from "react";
import "./PreviewServicios.css";

interface ServicioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
  href: string;
}

export const PreviewServicios = () => {
  const servicesRef = useRef<HTMLAnchorElement[]>([]);

  const servicios: ServicioItem[] = [
    {
      id: "pintura",
      title: "Pintura",
      description:
        "Interiores y exteriores con acabados finos, protección y color duradero.",
      image: "/images/servicios/pintura-cover.png", // ✅ desde public/images
      tag: "Calidad",
      href: "/servicios#pintura",
    },
    {
      id: "carpinteria",
      title: "Carpintería",
      description:
        "Muebles a medida, instalación y restauración con toque artesanal.",
      image: "/images/servicios/carpinteria-cover.png", // ✅ nueva imagen generada
      tag: "Precisión",
      href: "/servicios#carpinteria",
    },
    {
      id: "reparaciones",
      title: "Reparaciones",
      description:
        "Grietas, humedades y soluciones rápidas con terminación prolija.",
      image: "/images/servicios/reparaciones-cover.png", // ✅ desde public/images
      tag: "Profesional",
      href: "/servicios#reparacion",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    servicesRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="preview-servicios" aria-labelledby="servicios-title">
      <div className="preview-header">
        <h2 id="servicios-title" className="preview-title">
          Servicios
        </h2>
        <a href="/servicios" className="preview-ver-todos">
          Ver todos
        </a>
      </div>

      <div className="servicios-grid">
        {servicios.map((servicio, i) => (
          <a
            key={servicio.id}
            href={servicio.href}
            aria-label={`Abrir detalle de ${servicio.title}`}
            className="servicio-card"
            ref={(el) => {
              if (el) {
                servicesRef.current[i] = el;
                el.style.setProperty("--delay", `${i * 0.12}s`); // animación escalonada
              }
            }}
          >
            <div className="servicio-image-container">
              <img
                src={servicio.image}
                alt={`Imagen del servicio ${servicio.title}`}
                className="servicio-image"
              />
            </div>

            <div className="servicio-info">
              {servicio.tag && (
                <span className="servicio-tag">{servicio.tag}</span>
              )}
              <h3 className="servicio-title">{servicio.title}</h3>
              <p className="servicio-description">{servicio.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
