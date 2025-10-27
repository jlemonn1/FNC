import "./OpinionesPreview.css";

interface Opinion {
  nombre: string;
  foto: string;
  texto: string;
  estrellas: number;
}

export const OpinionesPreview = () => {
  const opiniones: Opinion[] = [
    {
      nombre: "María R.",
      foto: "/assets/images/opiniones/maria.jpg",
      texto:
        "Excelente trabajo, muy prolijos. El living quedó como nuevo y cumplieron los plazos.",
      estrellas: 5,
    },
    {
      nombre: "Javier M.",
      foto: "/assets/images/opiniones/javier.jpg",
      texto:
        "Paredes reparadas y pintadas con mucha dedicación. Muy buena atención y carpintería impecable.",
      estrellas: 5,
    },
    {
      nombre: "Laura P.",
      foto: "/assets/images/opiniones/laura.jpg",
      texto:
        "Profesionales y detallistas. Los llamaría nuevamente sin dudarlo.",
      estrellas: 5,
    },
  ];

  return (
    <section className="opiniones-preview" id="opiniones">
      <h2 className="opiniones-titulo">Lo que opinan nuestros clientes</h2>

      <div className="opiniones-scroll">
        {opiniones.map((op, index) => (
          <article key={index} className="opinion-card">
            <div className="opinion-header">
              <img src={op.foto} alt={op.nombre} className="opinion-avatar" />
              <h3 className="opinion-nombre">{op.nombre}</h3>
            </div>

            <p className="opinion-texto">{op.texto}</p>

            <div className="opinion-estrellas">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`estrella ${i < op.estrellas ? "activa" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
