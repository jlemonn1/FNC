import { NavLink, useLocation, useNavigate } from "react-router-dom";
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

  // 👇 Subir arriba cada vez que cambia la ruta
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // 👇 Función más robusta para subir arriba
  const scrollToTop = () => {
    // soporta todos los navegadores
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge
  };

  // 👇 Clic en icono: siempre sube arriba y navega
  const handleNavClick = (path: string) => {
    console.log("AQUI"); // se verá SIEMPRE
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
