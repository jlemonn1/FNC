import { MessageCircle, ClipboardList, CheckCircle2, Hammer, ShieldCheck, Search } from "lucide-react";
import "./ComoTrabajamos.css";

export const ComoTrabajamos = () => {
  const pasos = [
    { icon: <MessageCircle size={26} />, titulo: "Contacto", desc: "Nos escribes y coordinamos." },
    { icon: <Search size={26} />, titulo: "Evaluación", desc: "Analizamos el espacio." },
    { icon: <ClipboardList size={26} />, titulo: "Presupuesto", desc: "Claro y sin sorpresas." },
    { icon: <Hammer size={26} />, titulo: "Ejecución", desc: "Trabajo profesional." },
    { icon: <ShieldCheck size={26} />, titulo: "Garantía", desc: "Revisión y soporte final." },
  ];

  return (
    <section className="como-trabajamos" aria-labelledby="como-title">
      <h2 id="como-title" className="como-title">Cómo trabajamos</h2>
      <p className="como-subtitle">
        Proceso claro, eficiente y con seguimiento personal.
      </p>

      <div className="pasos-grid">
        {pasos.map((p, i) => (
          <div key={i} className="paso-card">
            <div className="paso-icon">{p.icon}</div>
            <h3 className="paso-titulo">{p.titulo}</h3>
            <p className="paso-desc">{p.desc}</p>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/34XXXXXXXXX?text=Hola!%20Quiero%20pedir%20presupuesto"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        Hablar por WhatsApp
      </a>
    </section>
  );
};
