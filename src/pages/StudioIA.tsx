// Studio IA page
import { useState } from "react";
import TrabajoSelector from "../components/studioIA/TrabajoSelector";
import IdeaPrompt from "../components/studioIA/IdeaPrompt";
import ImagenUploader from "../components/studioIA/ImagenUploader";
import GenerarBoton from "../components/studioIA/GenerarBoton";
import { Navbar } from "../components/common/Navbar";

export default function StudioIA() {
    // 👉 Modo de negocio/UI (no IA): pintura | carpinteria
    const [mode, setMode] = useState<"pintura" | "carpinteria">("pintura");
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!prompt) return alert("Por favor, describe tu idea antes de generar.");
        setLoading(true);
        setResult(null);

        try {
            // 👉 El modo de IA depende SOLO de si hay imagen subida
            const aiMode: "txt2img" | "img2img" = image ? "img2img" : "txt2img";

            const body = {
                mode: aiMode,
                prompt,
                imageBase64: image ? await fileToBase64(image) : null,
                // (opcional): puedes enviar `categoria: mode` si luego quieres customizar prompts server
                // categoria: mode,
            };

            const res = await fetch("https://fnc-serverless.vercel.app/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await res.json();
            setResult(data.imageUrl || null);
        } catch (error) {
            console.error("Error al generar imagen IA:", error);
            alert("Hubo un error al generar la imagen.");
        } finally {
            setLoading(false);
        }
    };

    const fileToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });

    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                padding: "2rem 1rem 10rem",
            }}
        >
            {/* CTA + selector de negocio */}
            <TrabajoSelector
                mode={mode}
                onChangeMode={setMode}
                onContinue={() => console.log("Entrando al generador IA...")}
            />

            {/* Prompt */}
            <IdeaPrompt prompt={prompt} onChange={setPrompt} />

            {/* Uploader (opcional) */}
            <ImagenUploader onImageSelected={setImage} />

            {/* Botón principal */}
            <GenerarBoton loading={loading} onClick={handleGenerate} />

            {/* Resultado */}
            {result && (
                <div style={{ marginTop: "2rem",marginBottom: "8rem", textAlign: "center" }}>
                    <h3 style={{ color: "#3a2b22", marginBottom: "1rem" }}>
                        Resultado generado por IA
                    </h3>
                    <img
                        src={result}
                        alt="Resultado IA"
                        style={{
                            maxWidth: "90vw",
                            maxHeight: "60vh",
                            borderRadius: "16px",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                        }}
                    />
                </div>
            )}

            <Navbar />
        </main>
    );
}
