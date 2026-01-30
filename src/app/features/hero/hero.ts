import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.html',
  styles: [`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
  `]
})
export class HeroComponent {
  contactPhone = environment.contactPhone;
  contactEmail = environment.contactEmail;

  constructor(private whatsappService: WhatsappService) {}

  contactWhatsApp() {
    this.whatsappService.openWhatsApp('¡Hola! Quisiera solicitar información sobre sus servicios.');
  }

  scrollToServices() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }
}
