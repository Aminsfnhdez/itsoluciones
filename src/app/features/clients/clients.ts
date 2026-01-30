import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

/**
 * Clients showcase section for social proof.
 * 
 * @component
 * @description Displays notable clients and customer categories served by IT Soluciones.
 * Uses emoji icons for visual interest. Provides credibility through client references.
 * 
 * @features
 * - Featured business clients
 * - Individual clients category
 * - Emoji-based visual icons
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
   * Each entry includes company/category name and emoji icon.
   */
  clients = [
    { name: 'Supermotos del Golfo', icon: '🏍️' },
    { name: 'Nuevo Récord', icon: '🏢' },
    { name: 'Cerámicas El Rodeo', icon: '🏗️' },
    { name: 'Clientes Particulares', icon: '👥' }
  ];
}
