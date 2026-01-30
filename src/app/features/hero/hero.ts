import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { environment } from '../../../environments/environment';

/**
 * Hero section component - Main landing page call-to-action.
 * 
 * @component
 * @description Primary above-the-fold section with headline, value proposition,
 * contact information, and CTA buttons for WhatsApp contact and service browsing.
 * Includes fade-in animation on load.
 * 
 * @features
 * - Prominent headline and subheadline
 * - WhatsApp direct contact button
 * - Smooth scroll to services section
 * - Contact phone and email display from environment
 * - Fade-in entrance animation
 * 
 * @example
 * ```html
 * <app-hero></app-hero>
 * ```
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.html',
  styles: [`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
  `]
})
export class HeroComponent {
  /** Contact phone from environment configuration */
  contactPhone = environment.contactPhone;
  
  /** Contact email from environment configuration */
  contactEmail = environment.contactEmail;

  /**
   * Initializes component with WhatsApp service.
   * 
   * @param {WhatsappService} whatsappService - Service for WhatsApp integration
   */
  constructor(private whatsappService: WhatsappService) {}

  /**
   * Opens WhatsApp with predefined service inquiry message.
   * 
   * @returns {void}
   */
  contactWhatsApp() {
    this.whatsappService.openWhatsApp('¡Hola! Quisiera solicitar información sobre sus servicios.');
  }

  /**
   * Smoothly scrolls to services section.
   * 
   * @returns {void}
   */
  scrollToServices() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }
}
