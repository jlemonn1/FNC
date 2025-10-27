// Services page
import { Navbar } from "../components/common/Navbar";
import { ContactoResumen } from "../components/home/ContactoResumen";
import { OpinionesPreview } from "../components/common/OpinionesPreview";
import { CategoriaServicio } from "../components/servicios/CategoriaServicio";
import { HeroServicios } from "../components/servicios/HeroServicios";

export const Service = () => {
  return (
    <>
      {/* Hero principal */}
      <HeroServicios />

      {/* 🔹 Bloque 1 - Pintura */}
      <CategoriaServicio
        titulo="Pintura profesional"
        descripcion="Aplicamos pintura plástica, esmaltes y efectos decorativos tanto en interiores como exteriores. Eliminamos gotelé y protegemos cada detalle para un acabado duradero."
        imagen="/assets/servicios/pintura/cover.jpg"
        subcategorias={[
          {
            id: "int",
            titulo: "Interiores",
            descripcion:
              "Preparación de superficies, sellado y terminación prolija en livings, dormitorios y pasillos.",
            imagen: "/assets/servicios/pintura/interiores.jpg",
            icono: "🏠",
            enlace: "/servicios/pintura/interiores",
          },
          {
            id: "ext",
            titulo: "Exteriores",
            descripcion:
              "Tratamientos para clima, restauración de fachadas e impermeabilización con color duradero.",
            imagen: "/assets/servicios/pintura/exteriores.jpg",
            icono: "🏡",
            enlace: "/servicios/pintura/exteriores",
          },
          {
            id: "dec",
            titulo: "Decorativos",
            descripcion:
              "Efectos artísticos, microcemento fino, estuco y muros con paleta cálida.",
            imagen: "/assets/servicios/pintura/decorativos.jpg",
            icono: "✨",
            enlace: "/servicios/pintura/decorativos",
          },
        ]}
        ctaLabel="Solicitar este servicio"
      />

      {/* 🔹 Bloque 2 - Montaje y Carpintería */}
      <CategoriaServicio
        titulo="Montaje y Carpintería"
        descripcion="Diseñamos, fabricamos e instalamos muebles, puertas y soluciones de almacenamiento. Trabajamos con materiales de primera y cuidamos cada detalle."
        imagen="/assets/servicios/carpinteria/cover.jpg"
        subcategorias={[
          {
            id: "fab",
            titulo: "Fabricación a medida",
            descripcion:
              "Armarios, alacenas, muebles TV y estanterías adaptadas a tu espacio.",
            imagen: "/assets/servicios/carpinteria/fabricacion.jpg",
            icono: "🪚",
            enlace: "/servicios/carpinteria/fabricacion",
          },
          {
            id: "mont",
            titulo: "Montaje e instalación",
            descripcion:
              "Puertas, zócalos, tarimas y herrajes con precisión y limpieza.",
            imagen: "/assets/servicios/carpinteria/montaje.jpg",
            icono: "🔧",
            enlace: "/servicios/carpinteria/montaje",
          },
          {
            id: "rep",
            titulo: "Reparaciones y mantenimiento",
            descripcion:
              "Ajustes, bisagras, cajones y restauraciones de muebles.",
            imagen: "/assets/servicios/carpinteria/reparaciones.jpg",
            icono: "🪵",
            enlace: "/servicios/carpinteria/reparaciones",
          },
        ]}
        ctaLabel="Pedir presupuesto"
      />

      {/* 🔹 Bloque 3 - Reparaciones de techos y paredes */}
      <CategoriaServicio
        titulo="Reparación de paredes y techos"
        descripcion="Reparamos grietas, fisuras y humedades, devolviendo a tus paredes su aspecto original con terminación pareja y duradera."
        imagen="/assets/servicios/reparaciones/cover.jpg"
        subcategorias={[
          {
            id: "gri",
            titulo: "Grietas y fisuras",
            descripcion:
              "Apertura, malla, sellado y masilla para reparaciones invisibles.",
            imagen: "/assets/servicios/reparaciones/grietas.jpg",
            icono: "🧱",
            enlace: "/servicios/reparaciones/grietas",
          },
          {
            id: "hum",
            titulo: "Humedades y filtraciones",
            descripcion:
              "Tratamientos antihumedad, barreras impermeables y repintado total.",
            imagen: "/assets/servicios/reparaciones/humedades.jpg",
            icono: "💧",
            enlace: "/servicios/reparaciones/humedades",
          },
          {
            id: "aca",
            titulo: "Acabados y revestimientos",
            descripcion:
              "Terminaciones finales, revoques finos, pinturas y selladores.",
            imagen: "/assets/servicios/reparaciones/acabados.jpg",
            icono: "🎨",
            enlace: "/servicios/reparaciones/acabados",
          },
        ]}
        ctaLabel="Contactar ahora"
      />

      {/* 🔹 Opiniones y contacto */}
      <OpinionesPreview />
      <ContactoResumen />

      {/* Navbar fija */}
      <Navbar />
    </>
  );
};
