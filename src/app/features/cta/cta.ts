import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MessageCircle, Phone, Mail } from 'lucide-angular';
import { ButtonComponent } from '../../shared/components/button/button';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { environment } from '../../../environments/environment';

/**
 * Final call-to-action section before footer.
 * 
 * @component
 * @description Prominent CTA section encouraging user to contact via multiple channels.
 * Displays contact methods (WhatsApp, Phone, Email) with clear action buttons.
 * Last conversion opportunity before footer.
 * 
 * @features
 * - WhatsApp contact button
 * - Click-to-call phone button
 * - Multiple contact channel icons
 * - Compelling headline and copy
 * - Gradient background
 * 
 * @example
 * ```html
 * <app-cta-section></app-cta-section>
 * ```
 */
@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LucideAngularModule],
  templateUrl: './cta.html',
  styles: []
})
export class CtaComponent {
  /** Lucide icons for contact methods */
  readonly icons = { MessageCircle, Phone, Mail };
  
  /** Contact phone from environment */
  contactPhone = environment.contactPhone;

  /**
   * Initializes component with WhatsApp service.
   * 
   * @param {WhatsappService} whatsappService - Service for WhatsApp integration
   */
  constructor(private whatsappService: WhatsappService) {}

  /**
   * Opens WhatsApp with predefined interest message.
   * 
   * @returns {void}
   */
  contactWhatsApp() {
    this.whatsappService.openWhatsApp('Hola, estoy interesado en sus servicios.');
  }

  /**
   * Initiates phone call to business number.
   * Uses tel: protocol to trigger device's phone app.
   * 
   * @returns {void}
   */
  callNow() {
    window.location.href = `tel:+57${this.contactPhone}`;
  }
}
