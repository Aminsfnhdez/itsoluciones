import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Globe } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

/**
 * Geographic coverage section showing service areas.
 * 
 * @component
 * @description Displays service coverage areas with interactive Antioquia map,
 * on-site service cities, and remote support information. Features animated
 * location marker on Apartadó and lists covered municipalities.
 * 
 * @features
 * - Interactive SVG map of Antioquia with Urabá highlighted
 * - Animated pulse marker on Apartadó location
 * - List of on-site service cities
 * - Remote service availability notice
 * - MapPin and Globe icons
 * 
 * @example
 * ```html
 * <app-coverage-section></app-coverage-section>
 * ```
 */
@Component({
  selector: 'app-coverage-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, LucideAngularModule],
  templateUrl: './coverage.html',
  styles: []
})
export class CoverageSectionComponent {
  /** Lucide icons for location markers */
  readonly icons = { MapPin, Globe };
}
