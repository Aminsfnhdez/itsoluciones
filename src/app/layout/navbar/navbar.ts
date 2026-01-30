import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Navigation bar component for main site navigation.
 * 
 * @component
 * @description Simple navigation component with smooth scroll links to main sections.
 * Used within HeaderComponent for both desktop and mobile navigation.
 * 
 * @features
 * - 5 main navigation links
 * - Anchor-based smooth scrolling
 * - Reusable across header contexts
 * 
 * @example
 * ```html
 * <app-navbar></app-navbar>
 * ```
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styles: []
})
export class NavbarComponent {
  /** Navigation menu items with labels and section anchors */
  navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Contacto', href: '#contact' }
  ];
}
