import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private readonly phoneNumber = environment.whatsappNumber;

  openWhatsApp(message?: string): void {
    const defaultMessage = '¡Hola! Quisiera información sobre sus servicios de IT Soluciones.';
    const text = encodeURIComponent(message || defaultMessage);
    const url = `https://wa.me/${this.phoneNumber}?text=${text}`;
    window.open(url, '_blank');
  }

  getWhatsAppLink(message?: string): string {
    const defaultMessage = '¡Hola! Quisiera información sobre sus servicios.';
    const text = encodeURIComponent(message || defaultMessage);
    return `https://wa.me/${this.phoneNumber}?text=${text}`;
  }
}
