import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Home, Laptop } from 'lucide-angular';
import { CardComponent } from '../../../shared/components/card/card';

/**
 * Service delivery modes section (on-site vs remote).
 * 
 * @component
 * @description Displays two service delivery options: on-site home/office service
 * and remote online support. Explains benefits and availability of each mode.
 * Helps users understand service flexibility.
 * 
 * @features
 * - On-site service card (Home icon)
 * - Remote service card (Laptop icon)
 * - Clear explanations of each mode
 * - Visual differentiation with icons
 * 
 * @example
 * ```html
 * <app-service-modes></app-service-modes>
 * ```
 */
@Component({
  selector: 'app-service-modes',
  standalone: true,
  imports: [CommonModule, CardComponent, LucideAngularModule],
  templateUrl: './service-modes.html',
  styles: []
})
export class ServiceModesComponent {
  /** Lucide icons for service modes */
  readonly icons = { Home, Laptop };
}
