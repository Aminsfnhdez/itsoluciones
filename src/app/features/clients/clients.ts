import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-clients-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="clients" class="py-20 bg-bg-darker">
      <div class="container mx-auto px-4">
        <app-section-title
          subtitle="Confían en Nosotros"
          title="Nuestros Clientes y Aliados"
          description="Empresas destacadas de Urabá que han optimizado su tecnología con nosotros.">
        </app-section-title>

        <div class="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-75">
          <div *ngFor="let client of clients" 
               class="group relative bg-bg-card p-6 rounded-xl border border-slate-800 hover:border-primary-cyan/50 transition-all duration-300 hover:-translate-y-1 w-48 h-32 flex items-center justify-center">
             
             <!-- Placeholder for logos -->
             <div class="text-center group-hover:scale-110 transition-transform">
               <span class="text-4xl mb-2 block">{{ client.icon }}</span>
               <span class="text-sm font-medium text-slate-300 group-hover:text-primary-cyan">{{ client.name }}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ClientsSectionComponent {
  clients = [
    { name: 'Supermotos del Golfo', icon: '🏍️' },
    { name: 'Nuevo Récord', icon: '🏢' },
    { name: 'Cerámicas El Rodeo', icon: '🏗️' },
    { name: 'Clientes Particulares', icon: '👥' }
  ];
}
