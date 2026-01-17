# 📸 Guía para Configurar el Logo en Google y Redes Sociales

## 📋 Archivos que necesitas crear

Para que tu logo aparezca correctamente en Google, redes sociales y como favicon, necesitas crear los siguientes archivos y colocarlos en la carpeta `public/`:

### 1. Favicons (iconos del navegador)
- **`favicon-16x16.png`** - 16x16 píxeles (favicon pequeño)
- **`favicon-32x32.png`** - 32x32 píxeles (favicon estándar)
- **`apple-touch-icon.png`** - 180x180 píxeles (para iOS)
- **`android-chrome-192x192.png`** - 192x192 píxeles (para Android)
- **`android-chrome-512x512.png`** - 512x512 píxeles (para Android)

### 2. Imagen para Redes Sociales (Open Graph)
- **`og-image.png`** - 1200x630 píxeles (para Facebook, LinkedIn, Twitter, Google)

## 🎨 Especificaciones de las imágenes

### Favicons
- **Formato**: PNG con fondo transparente o sólido
- **Tamaños**: 
  - 16x16px (favicon-16x16.png)
  - 32x32px (favicon-32x32.png)
  - 180x180px (apple-touch-icon.png)
  - 192x192px (android-chrome-192x192.png)
  - 512x512px (android-chrome-512x512.png)

### Imagen Open Graph (og-image.png)
- **Tamaño**: 1200x630 píxeles (proporción 1.91:1)
- **Formato**: PNG o JPG
- **Peso máximo**: 8MB (recomendado menos de 1MB)
- **Contenido**: Debe incluir tu logo y texto "FNC Reformas" o similar
- **Importante**: Esta imagen aparecerá cuando compartas tu sitio en redes sociales

## 📁 Estructura de archivos

Una vez que tengas todas las imágenes, colócalas así:

```
public/
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── og-image.png
└── manifest.json (ya creado)
```

## 🛠️ Cómo generar las imágenes desde tu logo

### Opción 1: Herramientas online
1. **Favicon Generator**: https://realfavicongenerator.net/
   - Sube tu logo
   - Genera todos los tamaños automáticamente
   - Descarga el paquete completo

2. **Canva** o **Figma**:
   - Crea la imagen og-image.png de 1200x630px
   - Incluye tu logo y texto "FNC Reformas"

### Opción 2: Photoshop/GIMP
1. Abre tu logo
2. Redimensiona a cada tamaño necesario
3. Exporta como PNG

## ✅ Verificación

Una vez que subas los archivos:

1. **Verifica el favicon**: 
   - Abre `http://localhost:5173` (en desarrollo)
   - Deberías ver tu logo en la pestaña del navegador

2. **Verifica Open Graph**:
   - Usa: https://developers.facebook.com/tools/debug/
   - Ingresa: `https://fnc-reformas.es`
   - Deberías ver tu imagen og-image.png

3. **Verifica en Google**:
   - Usa: https://search.google.com/test/rich-results
   - Ingresa tu URL
   - Verifica que aparezca correctamente

## 🚀 Después de subir los archivos

1. Ejecuta `npm run build` para generar la versión de producción
2. Despliega los cambios
3. Espera 24-48 horas para que Google actualice la caché
4. Solicita nueva indexación en Google Search Console

## 📝 Notas importantes

- El logo debe ser legible incluso en tamaños pequeños (16x16px)
- La imagen og-image.png debe ser atractiva y representar tu marca
- Usa colores que contrasten bien
- Evita texto muy pequeño en og-image.png (debe leerse bien en redes sociales)

