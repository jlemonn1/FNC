// Contact summary section
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import "./ContactoResumen.css";

export const ContactoResumen = () => {
  return (
    <section className="contacto-resumen">
      <h2 className="contacto-titulo">¿Hablamos de tu proyecto?</h2>
      <p className="contacto-subtitulo">
        Cuéntanos qué necesitas y te asesoramos sin compromiso.
      </p>

      <div className="contacto-grid">
        <div className="contacto-item">
          <Phone size={22} />
          <span>+34 600 123 456</span>
        </div>
        <div className="contacto-item">
          <Mail size={22} />
          <span>contacto@fnc.com</span>
        </div>
        <div className="contacto-item">
          <MapPin size={22} />
          <span>Madrid y alrededores</span>
        </div>
        <div className="contacto-item">
          <Clock size={22} />
          <span>Lun a Sáb · 9 a 18h</span>
        </div>
      </div>

      <a
        href="https://wa.me/34600123456?text=Hola!%20Quiero%20pedir%20presupuesto"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp-contacto"
      >
        <MessageCircle size={20} />
        <span>Contactar por WhatsApp</span>
      </a>
    </section>
  );
};
