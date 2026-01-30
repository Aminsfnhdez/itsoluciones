import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Standardized section title component for consistent headings across the app.
 * 
 * @component
 * @description Displays a section title with optional subtitle and description.
 * Provides consistent styling and structure for section headers throughout the landing page.
 * 
 * @example
 * ```html
 * <!-- With all fields -->\n * <appection-title
 *   subtitle="Nuestros Servicios"
 *   title="Soluciones Tecnológicas Completas"
 *   description="Ofrecemos una amplia gama de servicios para todas tus necesidades tecnológicas"
 * ></app-section-title>
 * 
 * <!-- Title only -->
 * <app-section-title title="Contacto"></app-section-title>
 * ```
 */
@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.html',
  styles: []
})
export class SectionTitleComponent {
  /** Main section title */
  @Input() title = '';
  
  /** Optional small subtitle displayed above title */
  @Input() subtitle = '';
  
  /** Optional description text displayed below title */
  @Input() description = '';
}
