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
    { id: "home", label: "Inicio", icon: <Home size={22} />, path: "/" },
    { id: "servicios", label: "Servicios", icon: <Hammer size={22} />, path: "/servicios" },
    { id: "studioIA", label: "Studio IA", icon: <Sparkles size={22} />, path: "/studio-ia" },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  const handleNavClick = (path: string) => {
    scrollToTop();
    navigate(path);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Navegación principal">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${pathname === item.path ? "active" : ""}`}
          onClick={() => handleNavClick(item.path)}
          aria-label={`Ir a ${item.label}`}
          aria-current={pathname === item.path ? "page" : undefined}
        >
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-indicator" />
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
