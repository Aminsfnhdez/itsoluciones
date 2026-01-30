import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { NavbarComponent } from "../navbar/navbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NavbarComponent],
  templateUrl: './header.html',
  styles: []
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Contacto', href: '#contact' }
  ];

  constructor(private whatsappService: WhatsappService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  contactWhatsApp() {
    this.whatsappService.openWhatsApp('Hola, quisiera solicitar una cotización para sus servicios.');
  }
}
