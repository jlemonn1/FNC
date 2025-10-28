// React Router configuration placeholder
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import  StudioIA  from "../pages/StudioIA";
import { Service } from "../pages/Service";
import { DetalleServicio } from "../pages/DetalleServicio";
// puedes añadir más páginas aquí:
// import { About } from "../pages/About";
// import { Contact } from "../pages/Contact";

export const AppRouter = () => {
  return (
    <Routes>
      {/* 🏠 Página principal */}
      <Route path="/" element={<Home />} />

      {/* 🧰 Servicios */}
      <Route path="/servicios" element={<Service />} />

      {/* 👇 Si quisieras tener rutas individuales para subservicios */}
      <Route path="/servicios/:slug" element={<Service />} />

      {/* ❌ Página no encontrada */}
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route path="/servicios/:categoria/:subcategoria" element={<DetalleServicio />} />

      <Route path="/studio-ia" element={<StudioIA />} />

    </Routes>
  );
};
