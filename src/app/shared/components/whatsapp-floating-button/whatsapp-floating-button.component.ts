import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-floating-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-floating-button.component.html',
  styles: []
})
export class WhatsAppFloatingButtonComponent {
  constructor(private whatsappService: WhatsappService) {}

  openWhatsApp(): void {
    this.whatsappService.openWhatsApp(
      '¡Hola! Necesito información sobre sus servicios de IT Soluciones.'
    );
  }
}
