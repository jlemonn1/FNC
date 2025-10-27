import "./DetalleGaleria.css";

interface DetalleGaleriaProps {
  titulo?: string;
  imagenes: string[];
}

export const DetalleGaleria = ({
  titulo = "Antes y después",
  imagenes,
}: DetalleGaleriaProps) => {
  return (
    <section className="detalle-galeria">
      <h2 className="detalle-galeria-titulo">{titulo}</h2>

      <div className="galeria-scroll">
        {imagenes.map((img, index) => (
          <div className="galeria-item" key={index}>
            <img src={img} alt={`Ejemplo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
