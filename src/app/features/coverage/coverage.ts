import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Globe } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-coverage-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, LucideAngularModule],
  template: `
    <section class="py-20 bg-bg-dark relative overflow-hidden">
      <!-- Background Map Effect -->
      <div class="absolute inset-0 opacity-5 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" stroke-width="0.5" class="text-primary-blue"/>
        </svg>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto bg-bg-card/80 backdrop-blur-md rounded-2xl border border-slate-700 p-8 md:p-12 text-center">
          
          <app-section-title
            title="Zona de Cobertura"
            description="Llevamos soluciones tecnológicas a donde las necesites.">
          </app-section-title>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="flex flex-col items-center">
              <div class="p-4 bg-primary-blue/20 rounded-full text-primary-cyan mb-4 animate-pulse-glow">
                <lucide-icon [img]="icons.MapPin" [size]="48"></lucide-icon>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Presencial</h3>
              <ul class="text-slate-400 space-y-2">
                <li>✅ Apartadó (Sede Principal)</li>
                <li>✅ Carepa</li>
                <li>✅ Chigorodó</li>
                <li>✅ Turbo</li>
              </ul>
            </div>

            <div class="flex flex-col items-center border-t md:border-t-0 md:border-l border-slate-700 pt-8 md:pt-0">
              <div class="p-4 bg-primary-cyan/20 rounded-full text-primary-blue mb-4">
                <lucide-icon [img]="icons.Globe" [size]="48"></lucide-icon>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Remoto</h3>
              <p class="text-slate-400">
                Atendemos solicitudes de soporte remoto en 
                <strong>toda Colombia</strong>. 
                <br>
                <span class="text-sm italic">(Requiere conexión a internet estable)</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CoverageSectionComponent {
  readonly icons = { MapPin, Globe };
}
