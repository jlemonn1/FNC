import { useState } from "react";
import "./IdeaPrompt.css";

interface Props {
  prompt: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export default function IdeaPrompt({ prompt, onChange, maxLength = 250 }: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <div className={`ip ${focus ? "is-focus" : ""}`}>
      <h3 className="ip__title">🧠 Describe tu idea</h3>
      <p className="ip__subtitle">
        Cuéntale a la IA qué quieres conseguir. Sé breve y directo.
      </p>

      <textarea
        className="ip__textarea"
        placeholder="Ejemplo: Quiero paredes en tono beige, suelo de madera clara y una chimenea moderna blanca..."
        value={prompt}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        maxLength={maxLength}
      />

      <div className="ip__footer">
        <span className="ip__counter">
          {prompt.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}
