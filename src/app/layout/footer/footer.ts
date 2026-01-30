import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  contactPhone = environment.contactPhone;
  contactEmail = environment.contactEmail;
  whatsappLink = `https://wa.me/${environment.whatsappNumber}`;

  quickLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Contacto', href: '#contact' }
  ];
}
