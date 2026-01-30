import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/**
 * Service for managing SEO meta tags and page title.
 * 
 * @service
 * @description Provides centralized management of HTML meta tags for SEO optimization.
 * Updates page title, description, Open Graph tags, and Twitter Card tags dynamically.
 * 
 * @requires @angular/platform-browser
 * 
 * @example
 * ```typescript
 * constructor(private metaService: MetaService) {}
 * 
 * ngOnInit() {
 *   this.metaService.updateMetaTags({
 *     title: 'IT Soluciones - Contacto',
 *     description: 'Contáctanos para soporte técnico',
 *     image: 'https://example.com/image.jpg',
 *     url: 'https://example.com/contacto'
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class MetaService {
  /**
   * Initializes the MetaService with Angular's Meta and Title services.
   * 
   * @param {Meta} meta - Angular Meta service for managing meta tags
   * @param {Title} title - Angular Title service for managing page title
   */
  constructor(private meta: Meta, private title: Title) {}

  /**
   * Updates all SEO-related meta tags for the current page.
   * 
   * @param {Object} config - Configuration object for meta tags
   * @param {string} config.title - Page title (shown in browser tab and search results)
   * @param {string} config.description - Page description for SEO and social sharing
   * @param {string} [config.image] - Optional image URL for social media preview
   * @param {string} [config.url] - Optional canonical URL of the page
   * @returns {void}
   * 
   * @description
   * Updates the following meta tags:
   * - Browser title (document.title)
   * - Meta description
   * - Open Graph tags (og:title, og:description, og:image, og:url)
   * - Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
   * 
   * @example
   * ```typescript
   * // Basic usage
   * this.metaService.updateMetaTags({
   *   title: 'IT Soluciones - Soporte Técnico',
   *   description: 'Expertos en reparación de computadoras e impresoras'
   * });
   * 
   * // With image and URL for social sharing
   * this.metaService.updateMetaTags({
   *   title: 'IT Soluciones - Nuevo Servicio',
   *   description: 'Ahora ofrecemos instalación de redes empresariales',
   *   image: 'https://itsoluciones.co/assets/service-preview.jpg',
   *   url: 'https://itsoluciones.co/servicios/redes'
   * });
   * ```
   */
  updateMetaTags(config: { title: string; description: string; image?: string; url?: string }) {
    // Set Title
    this.title.setTitle(config.title);

    // Standard Meta
    this.meta.updateTag({ name: 'description', content: config.description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }
  }
}
