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
      nombre: "Javier M.",
      foto: "/images/opiniones/1.jpg",
      texto:
        "Buen trabajo, muy responsables y cuidadosos, las puertas renovadas y los armarios bien presentados os recomiendo",
      estrellas: 5,
    },
    {
      nombre: "María R.",
      foto: "/images/opiniones/2.jpg",
      texto:
        "He quedado muy contenta y agradecida. el pintado del piso excelente, previamente muy bien protegidos los ambientes. Se nota la experiencia y la seriedad",
      estrellas: 5,
    },
    {
      nombre: "Laura P.",
      foto: "/images/opiniones/4.jpg",
      texto:
        "Profesionales y detallistas. Los llamaría nuevamente sin dudarlo. Nos encanto a toda la familia",
      estrellas: 4,
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
