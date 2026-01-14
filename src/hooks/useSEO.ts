import { useEffect } from 'react';

const SITE_URL = 'https://enc-reformas.es';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

export const useSEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ENC Reformas - Reformas y Reparaciones Profesionales`
      : 'ENC Reformas - Reformas y Reparaciones Profesionales';
    const fullDescription =
      description ||
      'Servicios profesionales de pintura, carpintería y reparaciones. Reformas integrales con garantía y acabados de calidad en toda España.';
    const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
    const fullImage = image ? `${SITE_URL}${image}` : `${SITE_URL}/og-image.png`;

    // Actualizar título
    document.title = fullTitle;

    // Función helper para actualizar o crear meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta tags básicos
    updateMetaTag('description', fullDescription);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', fullDescription, 'property');
    updateMetaTag('og:image', fullImage, 'property');
    updateMetaTag('og:url', fullUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'ENC Reformas', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', fullDescription);
    updateMetaTag('twitter:image', fullImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [title, description, image, url, type, keywords]);
};

