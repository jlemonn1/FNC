import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, Hammer, Sparkles } from "lucide-react";
import "./Navbar.css";
import type { JSX } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: JSX.Element;
  path: string;
}

export const Navbar = () => {
  const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: <Home size={22} />, path: "/" },
    { id: "servicios", label: "Servicios", icon: <Hammer size={22} />, path: "/servicios" },
    { id: "studioIA", label: "Studio IA", icon: <Sparkles size={22} />, path: "/studio-ia" },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 🔹 Función universal para subir arriba en cualquier layout
  const scrollToTop = () => {
    // 1️⃣ Intenta hacer scroll en window
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 2️⃣ Fuerza scroll en document (por compatibilidad)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 3️⃣ Busca cualquier contenedor que esté scrolleando
    const scrollable = Array.from(document.querySelectorAll("*")).find(
      (el) => el.scrollHeight > el.clientHeight && getComputedStyle(el).overflowY !== "visible"
    );
    if (scrollable) (scrollable as HTMLElement).scrollTo({ top: 0, behavior: "smooth" });
  };

  // 👇 Subir arriba cuando cambia la ruta
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // 👇 Siempre sube arriba al hacer clic en un icono
  const handleNavClick = (path: string) => {
    scrollToTop();
    navigate(path);
  };

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${pathname === item.path ? "active" : ""}`}
          onClick={() => handleNavClick(item.path)}
          aria-label={`Ir a ${item.label}`}
        >
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-indicator" />
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
};
