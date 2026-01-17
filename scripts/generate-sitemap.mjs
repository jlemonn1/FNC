import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://fnc-reformas.es';

// Leer el archivo de servicios
const serviciosPath = resolve(__dirname, '../src/data/serviciosData.ts');
const serviciosContent = readFileSync(serviciosPath, 'utf-8');

// Extraer las rutas de servicios usando regex básico
const categoriaMatches = serviciosContent.matchAll(/categoriaId:\s*"([^"]+)"/g);
const subcategoriaMatches = serviciosContent.matchAll(/id:\s*"([^"]+)"/g);

const categorias = Array.from(categoriaMatches).map(m => m[1]);
const subcategorias = Array.from(subcategoriaMatches).map(m => m[1]);

// URLs estáticas principales
const staticUrls = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/servicios', changefreq: 'weekly', priority: '0.9' },
  { loc: '/studio-ia', changefreq: 'monthly', priority: '0.8' },
];

// Generar URLs dinámicas de servicios basadas en las rutas del router
// Formato: /servicios/:categoria/:subcategoria
const serviceUrls = [];

// Pintura
serviceUrls.push(
  { loc: '/servicios/pintura/interiores', changefreq: 'monthly', priority: '0.8' },
  { loc: '/servicios/pintura/decorativos', changefreq: 'monthly', priority: '0.8' }
);

// Carpintería
serviceUrls.push(
  { loc: '/servicios/carpinteria/montaje-instalacion', changefreq: 'monthly', priority: '0.8' },
  { loc: '/servicios/carpinteria/fabricacion', changefreq: 'monthly', priority: '0.8' },
  { loc: '/servicios/carpinteria/montaje', changefreq: 'monthly', priority: '0.8' }
);

// Reparaciones (si existen en el futuro)
// serviceUrls.push(
//   { loc: '/servicios/reparaciones/grietas', changefreq: 'monthly', priority: '0.8' },
//   { loc: '/servicios/reparaciones/humedades', changefreq: 'monthly', priority: '0.8' },
//   { loc: '/servicios/reparaciones/acabados', changefreq: 'monthly', priority: '0.8' }
// );

// Combinar todas las URLs
const allUrls = [...staticUrls, ...serviceUrls];

// Generar XML del sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${SITE_URL}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Escribir el sitemap
const outputPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generado exitosamente en: ${outputPath}`);
console.log(`📊 Total de URLs: ${allUrls.length}`);

