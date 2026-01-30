import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MessageCircle, Phone, Mail } from 'lucide-angular';
import { ButtonComponent } from '../../shared/components/button/button';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LucideAngularModule],
  templateUrl: './cta.html',
  styles: []
})
export class CtaComponent {
  readonly icons = { MessageCircle, Phone, Mail };
  contactPhone = environment.contactPhone;

  constructor(private whatsappService: WhatsappService) {}

  contactWhatsApp() {
    this.whatsappService.openWhatsApp('Hola, estoy interesado en sus servicios.');
  }

  callNow() {
    window.location.href = `tel:+57${this.contactPhone}`;
  }
}
