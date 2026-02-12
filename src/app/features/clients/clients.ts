import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { Client } from '../../core/models/client.model';

/**
 * Clients showcase section for social proof.
 * 
 * @component
 * @description Displays notable clients and customer categories served by IT Soluciones.
 * Uses business logos for visual interest. Provides credibility through client references.
 * 
 * @features
 * - Featured business clients with official logos
 * - Individual clients category
 * - High-quality WEBP images
 * - Responsive grid layout
 * 
 * @example
 * ```html
 * <app-clients-section></app-clients-section>
 * ```
 */
@Component({
  selector: 'app-clients-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './clients.html',
  styles: []
})
export class ClientsSectionComponent {
  /**
   * List of notable clients and customer segments.
   * Each entry includes company name, logo path, and descriptive alt text.
   */
  clients: Client[] = [
    { 
      name: 'Supermotos del Golfo', 
      logo: '/supermotos_del_golfo.webp',
      alt: 'Logo de Supermotos del Golfo Onda'
    },
    { 
      name: 'Nuevo Récord', 
      logo: '/nuevo_record.webp',
      alt: 'Logo de Almacén Nuevo Récord'
    },
    { 
      name: 'Cerámicas El Rodeo', 
      logo: '/el_rodeo.webp',
      alt: 'Logo de Cerámicas El Rodeo'
    },
    { 
      name: 'Clientes Particulares', 
      logo: '/all_clients.webp',
      alt: 'Icono representativo de clientes particulares'
    }
  ];
}
