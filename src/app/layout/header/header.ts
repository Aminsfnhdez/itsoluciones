import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { NavbarComponent } from "../navbar/navbar";

/**
 * Application header with navigation and sticky behavior.
 * 
 * @component
 * @description Main navigation header that becomes sticky on scroll.
 * Includes desktop navigation, mobile hamburger menu, logo, and WhatsApp CTA button.
 * Responds to scroll events to toggle sticky styling.
 * 
 * @features
 * - Sticky header on scroll
 * - Responsive mobile menu
 * - Smooth scroll navigation links
 * - WhatsApp integration for direct contact
 * 
 * @example
 * ```html
 * <app-header></app-header>
 * ```
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NavbarComponent],
  templateUrl: './header.html',
  styles: []
})
export class HeaderComponent {
  /** Whether header is in scrolled/sticky state */
  isScrolled = false;
  
  /** Whether mobile menu is open */
  mobileMenuOpen = false;

  /** Navigation menu items with labels and anchor links */
  navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Contacto', href: '#contact' }
  ];

  /**
   * Initializes component with WhatsApp service.
   * 
   * @param {WhatsappService} whatsappService - Service for WhatsApp integration
   */
  constructor(private whatsappService: WhatsappService) {}

  /**
   * Listens to window scroll events to toggle sticky header state.
   * 
   * @returns {void}
   */
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  /**
   * Toggles mobile menu open/closed state.
   * 
   * @returns {void}
   */
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  /**
   * Closes mobile menu (called after navigation link click).
   * 
   * @returns {void}
   */
  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  /**
   * Opens WhatsApp with predefined quotation request message.
   * 
   * @returns {void}
   */
  contactWhatsApp() {
    this.whatsappService.openWhatsApp('Hola, quisiera solicitar una cotización para sus servicios.');
  }
}
