import "./TrabajoSelector.css";

type Mode = "pintura" | "carpinteria";

interface Props {
  mode: Mode;
  onChangeMode: (mode: Mode) => void;
  onContinue?: () => void;
}

export default function TrabajoSelector({ mode, onChangeMode, onContinue }: Props) {
  return (
    <section className="ts">
      {/* CTA de entrada */}
      <div className="ts__intro">
        <h1 className="ts__headline">✨ Imagina tu proyecto con IA</h1>
        <p className="ts__tagline">
          Describe tu idea o sube una imagen y nuestra IA generará una vista previa realista.
        </p>
        <button className="ts__cta-entry" onClick={onContinue}>
          <span className="ts__cta-glow"></span>
          <span>Comenzar ahora</span>
        </button>
      </div>

      <h2 className="ts__title">Elige el tipo de trabajo</h2>

      <div className="ts__options">
        <button
          onClick={() => onChangeMode("pintura")}
          className={`ts__card ${mode === "pintura" ? "is-active" : ""}`}
        >
          <span className="ts__icon">🎨</span>
          <span className="ts__text">
            <strong>Pintura y Decoración</strong>
            <small>Cambia colores, estilos y acabados</small>
          </span>
        </button>

        <button
          onClick={() => onChangeMode("carpinteria")}
          className={`ts__card ${mode === "carpinteria" ? "is-active" : ""}`}
        >
          <span className="ts__icon">🪵</span>
          <span className="ts__text">
            <strong>Montaje y Carpintería</strong>
            <small>Visualiza muebles y estructuras</small>
          </span>
        </button>
      </div>
    </section>
  );
}
