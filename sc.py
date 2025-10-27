import os
from pathlib import Path

# Define base path (adjust if needed)
BASE = Path("src")

# Folder structure definition
folders = [
    "assets/images/hero",
    "assets/images/servicios",
    "assets/images/ia",
    "assets/images/clientes",
    "assets/icons",
    "styles",
    "hooks",
    "components/common",
    "components/home",
    "components/servicios",
    "components/ia",
    "pages",
    "router"
]

# Files to create with placeholder comments
files = {
    "main.tsx": "// Entry point",
    "App.tsx": "// Root App component",
    "styles/globals.css": "/* Global styles */",
    "styles/variables.css": "/* CSS variables (colors, fonts) */",
    "styles/animations.css": "/* Shared animations */",
    "hooks/useScrollToSection.ts": "// Hook for smooth scrolling",
    "hooks/useImagePreview.ts": "// Hook for image preview logic",
    "hooks/useExpand.ts": "// Hook for expanding/collapsing details",
    "hooks/useIntersectionFade.ts": "// Hook for fade-in on scroll",
    "router/index.tsx": "// React Router configuration placeholder",
    "pages/Home.tsx": "// Home page",
    "pages/Servicios.tsx": "// Servicios page",
    "pages/StudioIA.tsx": "// Studio IA page",
}

# Component placeholders
components = {
    # Common
    "components/common/Navbar.tsx": "// Bottom navigation bar",
    "components/common/WhatsAppFab.tsx": "// Floating WhatsApp button",
    "components/common/CTAButton.tsx": "// Reusable CTA button",
    "components/common/SectionTitle.tsx": "// Section title component",
    "components/common/OpinionesCarousel.tsx": "// Testimonials carousel",
    "components/common/Timeline.tsx": "// Timeline component",
    "components/common/ImageCard.tsx": "// Generic image card component",

    # Home
    "components/home/HeroCTA.tsx": "// Hero section (Home)",
    "components/home/AboutSection.tsx": "// About section",
    "components/home/PreviewServicios.tsx": "// Services preview block",
    "components/home/PreviewIA.tsx": "// IA preview block",
    "components/home/OpinionesPreview.tsx": "// Short testimonial preview",
    "components/home/ContactoResumen.tsx": "// Contact summary section",

    # Servicios
    "components/servicios/HeroServicios.tsx": "// Hero section for Servicios",
    "components/servicios/BloqueServicio.tsx": "// Generic service block",
    "components/servicios/SubcategoriaCard.tsx": "// Subcategory thumbnail card",
    "components/servicios/ServicioDetalle.tsx": "// Expandable detail block",
    "components/servicios/CTAContacto.tsx": "// CTA for WhatsApp contact",
    "components/servicios/PreviewIA.tsx": "// IA preview block (Servicios)",
    "components/servicios/ServiciosWrapper.tsx": "// Handles transitions between blocks",

    # Studio IA
    "components/ia/HeroIA.tsx": "// Header section for Studio IA",
    "components/ia/IASelector.tsx": "// Type of work selector",
    "components/ia/IAForm.tsx": "// Form for image upload and description",
    "components/ia/IALoading.tsx": "// Loading animation",
    "components/ia/IAResult.tsx": "// Result image section",
    "components/ia/CTAWhatsAppAnimado.tsx": "// Animated WhatsApp CTA",
    "components/ia/TipsIA.tsx": "// Tips section for better results",
}

# Create folders
for folder in folders:
    path = BASE / folder
    path.mkdir(parents=True, exist_ok=True)
    print(f"[DIR] Created: {path}")

# Create files
for file_path, content in {**files, **components}.items():
    path = BASE / file_path
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists():
        with open(path, "w", encoding="utf-8") as f:
            f.write(content + "\n")
        print(f"[FILE] Created: {path}")
    else:
        print(f"[SKIP] Already exists: {path}")

print("\n✅ Project structure created successfully!")
