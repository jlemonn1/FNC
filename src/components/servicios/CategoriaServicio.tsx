import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./CategoriaServicio.css";

interface Subcategoria {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  icono: string; // emoji o icono de lucide
  enlace?: string; // para ir al detalle
}

interface CategoriaServicioProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  subcategorias: Subcategoria[];
  ctaLabel?: string;
}

export const CategoriaServicio = ({
  titulo,
  descripcion,
  imagen,
  subcategorias,
  ctaLabel = "Solicitar este servicio",
}: CategoriaServicioProps) => {
  const [abierta, setAbierta] = useState<string | null>(null);

  return (
    <section className="categoria-servicio">
      <div className="categoria-hero">
        <img src={imagen} alt={titulo} className="categoria-img" />
      </div>

      <h2 className="categoria-titulo">{titulo}</h2>
      <p className="categoria-descripcion">{descripcion}</p>

      <div className="subcategorias-lista">
        {subcategorias.map((sub) => {
          const activa = abierta === sub.id;
          return (
            <div
              key={sub.id}
              className={`subcategoria-card ${activa ? "abierta" : ""}`}
            >
              <div
                className="subcategoria-header"
                onClick={() => setAbierta(activa ? null : sub.id)}
              >
                <div className="subcategoria-titulo">
                  <span className="subcategoria-icono">{sub.icono}</span>
                  {sub.titulo}
                </div>
                <span className="subcategoria-detalle">
                  {activa ? (
                    <>
                      Ocultar <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Detalles <ChevronDown size={16} />
                    </>
                  )}
                </span>
              </div>

              <div className="subcategoria-body">
                <img
                  src={sub.imagen}
                  alt={sub.titulo}
                  className="subcategoria-imagen"
                />
                <p>{sub.descripcion}</p>

                {sub.enlace && (
                  <a href={sub.enlace} className="subcategoria-link">
                    Ver más →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button className="btn-solicitar">{ctaLabel}</button>
    </section>
  );
};
