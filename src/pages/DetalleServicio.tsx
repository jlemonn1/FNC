import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "../components/common/Navbar";
import { DetalleCTA } from "../components/detalleServicio/DetalleCTA";
import { DetalleGaleria } from "../components/detalleServicio/DetalleGaleria";
import { DetalleHero } from "../components/detalleServicio/DetalleHero";
import { DetalleIncluye } from "../components/detalleServicio/DetalleIncluye";
import { DetalleProceso } from "../components/detalleServicio/DetalleProceso";
import { serviciosData } from "../data/serviciosData";

export const DetalleServicio = () => {
  const { categoria, subcategoria } = useParams();

  // Buscar la categoría principal
  const cat = serviciosData.find((c) => c.categoriaId === categoria);
  // Buscar la subcategoría dentro de ella
  const sub = cat?.subcategorias.find((s) => s.id === subcategoria);

  // Si no se encuentra, redirige a /servicios
  if (!cat || !sub) return <Navigate to="/servicios" replace />;

  return (
    <main>
      {/* HERO */}
      <DetalleHero
        categoria={cat.categoriaNombre}
        nombre={sub.nombre}
        descripcion={sub.descripcion}
        icono={sub.icono}
        imagen={sub.imagen}
      />

      {/* INCLUYE */}
      <DetalleIncluye
        descripcion={sub.incluye.descripcion}
        items={sub.incluye.items}
      />

      {/* PROCESO */}
      <DetalleProceso pasos={sub.proceso} />

      {/* GALERÍA */}
      <DetalleGaleria titulo="Antes y después" imagenes={sub.galeria} />

      {/* CTA FINAL */}
      <DetalleCTA />

      {/* NAVBAR FIJA */}
      <Navbar />
    </main>
  );
};
