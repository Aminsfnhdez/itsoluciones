import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

/**
 * Service for handling WhatsApp integration and messaging.
 * 
 * @service
 * @description Provides methods to open WhatsApp chats and generate WhatsApp links
 * with pre-filled messages. Uses the phone number configured in environment variables.
 * 
 * @example
 * ```typescript
 * constructor(private whatsappService: WhatsappService) {}
 * 
 * openChat() {
 *   this.whatsappService.openWhatsApp('Necesito soporte técnico');
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  /**
   * WhatsApp phone number from environment configuration
   * @private
   * @readonly
   * @type {string}
   */
  private readonly phoneNumber = environment.whatsappNumber;

  /**
   * Opens WhatsApp in a new browser tab with a pre-filled message.
   * 
   * @param {string} [message] - Optional custom message. If not provided, uses default greeting.
   * @returns {void}
   * 
   * @example
   * ```typescript
   * // With custom message
   * this.whatsappService.openWhatsApp('Necesito información sobre reparación de impresoras');
   * 
   * // With default message
   * this.whatsappService.openWhatsApp();
   * ```
   */
  openWhatsApp(message?: string): void {
    const defaultMessage = '¡Hola! Quisiera información sobre sus servicios de IT Soluciones.';
    const text = encodeURIComponent(message || defaultMessage);
    const url = `https://wa.me/${this.phoneNumber}?text=${text}`;
    window.open(url, '_blank');
  }

  /**
   * Generates a WhatsApp URL with a pre-filled message without opening it.
   * 
   * @param {string} [message] - Optional custom message. If not provided, uses default greeting.
   * @returns {string} WhatsApp URL with encoded message
   * 
   * @example
   * ```typescript
   * const link = this.whatsappService.getWhatsAppLink('Consulta sobre precios');
   * // Returns: 'https://wa.me/573217865558?text=Consulta%20sobre%20precios'
   * ```
   */
  getWhatsAppLink(message?: string): string {
    const defaultMessage = '¡Hola! Quisiera información sobre sus servicios.';
    const text = encodeURIComponent(message || defaultMessage);
    return `https://wa.me/${this.phoneNumber}?text=${text}`;
  }
}
