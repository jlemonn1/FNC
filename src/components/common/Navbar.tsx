// Bottom navigation bar
import { NavLink } from "react-router-dom";
import { Home, Hammer, Sparkles } from "lucide-react"; // iconos de lucide-react
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

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          aria-label={`Ir a ${item.label}`}
        >
          <div className="nav-icon">{item.icon}</div>
          {/* Indicador entre icono y texto */}
          <div className="nav-indicator" />
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};
