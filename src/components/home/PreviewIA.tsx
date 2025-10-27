// IA preview block
import { useRef, useState, useEffect } from "react";
import "./PreviewIA.css";

export const PreviewIA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const newPos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, newPos)));
  };

  useEffect(() => {
    const stop = () => setDragging(false);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    return () => {
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  });

  return (
    <section className="previewIA-section">
      <div className="ia-texto">
        <h2>Prueba el antes y después con IA</h2>
        <p>
          Visualiza colores y acabados antes de decidirte.  
          Sube una foto y explora opciones.
        </p>
        
      </div>

      <div
        className="ia-slider-container"
        ref={containerRef}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
      >
        <img
          src="/assets/images/ia/despues.jpg"
          className="ia-img"
          alt="Resultado IA"
        />
        <div
          className="ia-overlay"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src="/assets/images/ia/antes.jpg"
            className="ia-img"
            alt="Foto original"
          />
        </div>
        <div
          className="ia-divider"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="ia-handle" />
        </div>

        
      </div>
      <a href="/studio-ia" className="btn-ia">Abrir Studio IA</a>
    </section>
  );
};
