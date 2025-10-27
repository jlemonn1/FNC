import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./DetalleHero.css";

interface DetalleHeroProps {
  categoria: string;
  nombre: string;
  descripcion: string;
  icono?: string;
  imagen: string;
}

export const DetalleHero = ({
  categoria,
  nombre,
  descripcion,
  icono = "🏠",
  imagen,
}: DetalleHeroProps) => {
  const navigate = useNavigate();

  return (
    <header className="detalle-hero">
      {/* Botón volver */}
      <button
        className="detalle-volver"
        onClick={() => navigate(-1)}
        aria-label="Volver atrás"
      >
        <ArrowLeft size={22} />
      </button>

      {/* Imagen + overlay */}
      <div
        className="detalle-hero-img"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="detalle-overlay" />

        <div className="detalle-hero-content">
          <span className="detalle-categoria">{categoria}</span>
          <h1 className="detalle-titulo">
            {icono} {nombre}
          </h1>
          <p className="detalle-descripcion">{descripcion}</p>
        </div>
      </div>
    </header>
  );
};
