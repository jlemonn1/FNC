import "./ResultadoIA.css";

interface Props {
  imageUrl: string;
  onRetry: () => void;
}

export default function ResultadoIA({ imageUrl, onRetry }: Props) {
  const handleWhatsApp = () => {
    // Mensaje base + imagen
    const text = encodeURIComponent(
      "Mira esta imagen generada por IA 🔥\n\n" + imageUrl
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className="ri">
      <h3 className="ri__title">✨ Tu resultado está listo</h3>
      <p className="ri__subtitle">
        Así podría verse tu proyecto según la IA
      </p>

      <div className="ri__img-wrapper">
        <img src={imageUrl} alt="Resultado IA" className="ri__img" />
      </div>

      <div className="ri__actions">
        <button className="ri__btn ri__btn--retry" onClick={onRetry}>
          🔁 Reintentar
        </button>
        <button className="ri__btn ri__btn--whatsapp" onClick={handleWhatsApp}>
          💬 Enviar por WhatsApp
        </button>
      </div>
    </div>
  );
}
