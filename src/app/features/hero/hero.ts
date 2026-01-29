import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 tech-pattern opacity-10"></div>
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-transparent to-primary-cyan/20"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- Content -->
          <div class="text-center lg:text-left">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span class="gradient-text">Soluciones Tecnológicas</span>
              <br>
              <span class="text-white">Profesionales en Apartadó</span>
            </h1>
            
            <p class="text-xl text-slate-300 mb-8 max-w-2xl">
              Soporte técnico, reparación y venta de equipos de cómputo e impresoras. 
              Servicio a domicilio y remoto en toda la zona de Urabá.
            </p>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <app-button 
                (clicked)="contactWhatsApp()"
                variant="primary"
                size="lg">
                💬 Solicitar Servicio
              </app-button>
              <app-button 
                (clicked)="scrollToServices()"
                variant="outline"
                size="lg">
                Ver Servicios
              </app-button>
            </div>

            <!-- Contact Info -->
            <div class="flex flex-wrap gap-6 justify-center lg:justify-start text-slate-400">
              <a [href]="'tel:+57' + contactPhone" class="flex items-center hover:text-primary-cyan transition-colors">
                <span class="mr-2">☎️</span> {{ contactPhone }}
              </a>
              <a [href]="'mailto:' + contactEmail" class="flex items-center hover:text-primary-cyan transition-colors">
                <span class="mr-2">📧</span> {{ contactEmail }}
              </a>
              <div class="flex items-center">
                <span class="mr-2">📍</span> Apartadó, Antioquia
              </div>
            </div>
          </div>

          <!-- Illustration -->
          <div class="hidden lg:block">
            <div class="relative">
              <!-- Placeholder for illustration - replace with actual image -->
              <div class="aspect-square bg-gradient-to-br from-primary-blue/20 to-primary-cyan/20 rounded-3xl flex items-center justify-center glass p-8">
                <img src="itsolucoinesico3.png" alt="IT Soluciones Logo" class="w-full h-full object-contain drop-shadow-2xl animate-float">
              </div>
              
              <!-- Floating elements -->
              <div class="absolute top-10 -left-10 animate-float">
                <div class="bg-primary-cyan/20 p-4 rounded-xl backdrop-blur-sm border border-primary-cyan/30">
                  <span class="text-4xl">🛠️</span>
                </div>
              </div>
              <div class="absolute bottom-10 -right-10 animate-float" style="animation-delay: 1s;">
                <div class="bg-primary-blue/20 p-4 rounded-xl backdrop-blur-sm border border-primary-blue/30">
                  <span class="text-4xl">🖨️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" (click)="scrollToServices()">
        <svg class="w-6 h-6 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  `,
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
