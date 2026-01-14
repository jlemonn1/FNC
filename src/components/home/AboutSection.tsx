// About section
import "./AboutSection.css";

interface AboutSectionProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  tags?: string[];
}

export const AboutSection = ({
  imageSrc = "/assets/images/home/about-cover.jpg",
  title = "Sobre nosotros",
  description = "En ENC Reformas somos especialistas en transformar hogares, oficinas y locales. Trabajamos con acabados duraderos y prolijos, cuidando cada detalle para que tu espacio se vea impecable y acogedor.",
  tags = ["Interiores", "Exteriores", "Reparaciones", "Garantía de calidad"],
}: AboutSectionProps) => {
  return (
    <section className="about-section" aria-labelledby="about-title">

      <div className="about-content">
        <h2 id="about-title" className="about-title">
          {title}
        </h2>
        <p className="about-description">{description}</p>

        <div className="about-tags">
          {tags.map((tag) => (
            <span key={tag} className="about-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
