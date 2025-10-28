import os

# Lista de rutas de imágenes
paths = [
    "assets/images/hero/home-hero.jpg",
    "assets/images/home/about-cover.jpg",
    "assets/images/servicios/pintura-cover.jpg",
    "assets/images/servicios/carpinteria-cover.jpg",
    "assets/images/servicios/reparaciones-cover.jpg",
    "assets/images/ia/antes.jpg",
    "assets/images/ia/despues.jpg",
]

# Crear las carpetas y archivos
for path in paths:
    full_path = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w") as f:
        f.write("")  # archivo vacío
    print(f"✅ Creado: {full_path}")

print("\n🎨 Todos los archivos y carpetas han sido generados correctamente.")
