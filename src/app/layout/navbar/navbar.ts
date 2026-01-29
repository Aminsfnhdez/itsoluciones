import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="hidden md:flex items-center space-x-8">
      <a *ngFor="let item of navItems" 
         [href]="item.href"
         class="text-slate-300 hover:text-primary-cyan transition-colors duration-300">
        {{ item.label }}
      </a>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Contacto', href: '#contact' }
  ];
}
