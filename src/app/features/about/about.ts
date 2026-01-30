import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

/**
 * About section displaying company information and key statistics.
 * 
 * @component
 * @description Shows company description, mission, and key performance metrics
 * in a visually engaging stats grid. Highlights experience, client satisfaction,
 * services completed, and quality guarantee.
 * 
 * @features
 * - Company value proposition
 * - 4 key statistics with icons
 * - Star icon for quality emphasis
 * - Responsive grid layout
 * 
 * @example
 * ```html
 * <app-about-section></app-about-section>
 * ```
 */
@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, LucideAngularModule],
  templateUrl: './about.html',
  styles: []
})
export class AboutSectionComponent {
  /** Lucide icons registry */
  readonly icons = { Star };
  
  /**
   * Company statistics and achievements.
   * Each stat includes a value and descriptive label.
   * Displayed in grid format for social proof.
   */
  stats = [
    { value: '4+', label: 'Años de Experiencia' },
    { value: '100+', label: 'Clientes Satisfechos' },
    { value: '500+', label: 'Servicios Realizados' },
    { value: '100%', label: 'Garantía de Calidad' }
  ];
}
