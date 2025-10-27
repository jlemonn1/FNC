import "./DetalleProceso.css";

interface PasoProceso {
  icono: string;
  titulo: string;
  descripcion: string;
  incluido?: boolean;
}

interface DetalleProcesoProps {
  pasos: PasoProceso[];
}

export const DetalleProceso = ({ pasos }: DetalleProcesoProps) => {
  return (
    <section className="detalle-proceso">
      <h2 className="detalle-proceso-titulo">Detalles del proceso</h2>

      <div className="detalle-proceso-lista">
        {pasos.map((paso, index) => (
          <div key={index} className="detalle-paso">
            <div className="detalle-paso-header">
              <div className="detalle-paso-titulo">
                <span className="detalle-paso-icono">{paso.icono}</span>
                {paso.titulo}
              </div>
              {paso.incluido && (
                <span className="detalle-paso-tag">Incluido</span>
              )}
            </div>

            <p className="detalle-paso-descripcion">{paso.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
