import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../core/services/whatsapp.service';

/**
 * Floating WhatsApp contact button - persistent across all pages.
 * 
 * @component
 * @description Fixed-position floating action button in bottom-right corner
 * that opens WhatsApp chat with predefined message. Features pulse animation
 * and glow effect for visibility. Always visible for easy customer contact.
 * 
 * @features
 * - Fixed bottom-right positioning
 * - Pulse and glow animations
 * - WhatsApp brand colors (#25D366)
 * - Predefined contact message
 * - Mobile and desktop responsive
 * 
 * @example
 * ```html
 * <app-whatsapp-floating-button></app-whatsapp-floating-button>
 * ```
 */
@Component({
  selector: 'app-whatsapp-floating-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-floating-button.component.html',
  styles: []
})
export class WhatsAppFloatingButtonComponent {
  /**
   * Initializes component with WhatsApp service.
   * 
   * @param {WhatsappService} whatsappService - Service for WhatsApp integration
   */
  constructor(private whatsappService: WhatsappService) {}

  /**
   * Opens WhatsApp chat with predefined service inquiry message.
   * 
   * @returns {void}
   */
  openWhatsApp(): void {
    this.whatsappService.openWhatsApp(
      '¡Hola! Necesito información sobre sus servicios de IT Soluciones.'
    );
  }
}
