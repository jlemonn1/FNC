import { useState, useRef } from "react";
import "./ImagenUploader.css";

interface Props {
  onImageSelected: (file: File | null) => void;
}

export default function ImagenUploader({ onImageSelected }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
    onImageSelected(file);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div
      className="iu"
      onClick={() => inputRef.current?.click()}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {preview ? (
        <img src={preview} alt="preview" className="iu__img" />
      ) : (
        <div className="iu__placeholder">
          <span className="iu__icon">📷</span>
          <p className="iu__text">Arrastra o haz clic para subir una imagen base</p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files?.[0])}
        hidden
      />
    </div>
  );
}
