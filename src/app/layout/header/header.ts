import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button';
import { WhatsappService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <header 
      [class.scrolled]="isScrolled"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="isScrolled ? 'bg-bg-darker/95 backdrop-blur-md shadow-lg' : 'bg-transparent'">
      
      <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="text-2xl font-bold gradient-text">IT Soluciones</div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a *ngFor="let item of navItems" 
             [href]="item.href"
             class="text-slate-300 hover:text-primary-cyan transition-colors duration-300">
            {{ item.label }}
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <app-button (clicked)="contactWhatsApp()" variant="primary">
            Solicitar Cotización
          </app-button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          (click)="toggleMobileMenu()"
          class="md:hidden text-white p-2">
          <svg *ngIf="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg *ngIf="mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div 
        *ngIf="mobileMenuOpen"
        class="md:hidden bg-bg-darker border-t border-slate-800">
        <div class="container mx-auto px-4 py-4 space-y-4">
          <a *ngFor="let item of navItems"
             [href]="item.href"
             (click)="closeMobileMenu()"
             class="block text-slate-300 hover:text-primary-cyan py-2">
            {{ item.label }}
          </a>
          <app-button (clicked)="contactWhatsApp()" variant="primary" [fullWidth]="true">
            Solicitar Cotización
          </app-button>
        </div>
      </div>
    </header>
  `,
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
