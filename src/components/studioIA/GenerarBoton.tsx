import "./GenerarBoton.css";

interface Props {
  loading: boolean;
  onClick: () => void;
}

export default function GenerarBoton({ loading, onClick }: Props) {
  return (
    <button
      className={`gb ${loading ? "is-loading" : ""}`}
      onClick={!loading ? onClick : undefined}
      disabled={loading}
    >
      <span className="gb__glow"></span>
      {loading ? (
        <div className="gb__spinner">
          <div className="gb__dot"></div>
          <div className="gb__dot"></div>
          <div className="gb__dot"></div>
        </div>
      ) : (
        <span>⚡ Generar con IA</span>
      )}
    </button>
  );
}
