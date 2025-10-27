import "./DetalleIncluye.css";

interface DetalleIncluyeItem {
  label: string;
  value: string;
}

interface DetalleIncluyeProps {
  descripcion: string;
  items: DetalleIncluyeItem[];
}

export const DetalleIncluye = ({ descripcion, items }: DetalleIncluyeProps) => {
  return (
    <section className="detalle-incluye">
      <h2 className="detalle-incluye-titulo">Qué incluye</h2>
      <p className="detalle-incluye-descripcion">{descripcion}</p>

      <div className="detalle-incluye-grid">
        {items.map((item, i) => (
          <div className="detalle-chip" key={i}>
            <span className="chip-label">{item.label}</span>
            <span className="chip-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
