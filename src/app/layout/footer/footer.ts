import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

/**
 * Application footer with contact information and quick navigation.
 * 
 * @component
 * @description Footer component displaying company information, contact details,
 * quick navigation links, business hours, and copyright notice.
 * Contact information is dynamically loaded from environment configuration.
 * 
 * @features
 * - Dynamic current year for copyright
 * - Environment-based contact information
 * - Quick navigation links
 * - Social media links (WhatsApp)
 * - Business hours display
 * 
 * @example
 * ```html
 * <app-footer></app-footer>
 * ```
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styles: []
})
export class FooterComponent {
  /** Current year for copyright notice - auto-updated */
  currentYear = new Date().getFullYear();
  
  /** Contact phone number from environment */
  contactPhone = environment.contactPhone;
  
  /** Contact email from environment */
  contactEmail = environment.contactEmail;
  
  /** WhatsApp direct message link */
  whatsappLink = `https://wa.me/${environment.whatsappNumber}`;

  /** Quick navigation links array */
  quickLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Contacto', href: '#contact' }
  ];
}
