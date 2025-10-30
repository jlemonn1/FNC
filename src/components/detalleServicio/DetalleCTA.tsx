import { MessageCircle } from "lucide-react";
import "./DetalleCTA.css";

interface DetalleCTAProps {
  titulo?: string;
  subtitulo?: string;
  whatsappHref?: string;
  label?: string;
}

export const DetalleCTA = ({
  titulo = "¿Quieres tu presupuesto sin compromiso?",
  subtitulo = "Cuéntanos tu idea y te asesoramos personalmente.",
  whatsappHref = "https://wa.me/34642848354?text=Hola!%20Quiero%20pedir%20presupuesto",
  label = "Contactar por WhatsApp",
}: DetalleCTAProps) => {
  return (
    <section className="detalle-cta">
      <h2 className="detalle-cta-titulo">{titulo}</h2>
      <p className="detalle-cta-subtitulo">{subtitulo}</p>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp-detalle"
      >
        <MessageCircle size={20} />
        <span>{label}</span>
      </a>
    </section>
  );
};
