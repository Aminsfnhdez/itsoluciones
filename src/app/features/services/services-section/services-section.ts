import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Wrench, Laptop, Printer, Download, Cpu, ShoppingCart, Network, Droplet } from 'lucide-angular';
import { CardComponent } from '../../../shared/components/card/card';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { Service } from '../../../core/models/service.model';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    SectionTitleComponent,
    LucideAngularModule
  ],
  template: `
    <section id="services" class="py-20 bg-bg-dark">
      <div class="container mx-auto px-4">
        <app-section-title
          subtitle="Nuestros Servicios"
          title="Soluciones Integrales"
          description="Ofrecemos una amplia gama de servicios profesionales para cubrir todas tus necesidades tecnológicas.">
        </app-section-title>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <app-card 
            *ngFor="let service of services"
            [hover]="true"
            class="h-full">
            <div class="flex flex-col h-full">
              <div class="mb-4 p-3 rounded-lg bg-primary-blue/10 w-fit text-primary-cyan">
                <lucide-icon [img]="icons[service.icon]" [size]="32" [strokeWidth]="2"></lucide-icon>
              </div>
              
              <h3 class="text-xl font-bold mb-2 text-white group-hover:text-primary-cyan transition-colors">
                {{ service.title }}
              </h3>
              
              <p class="text-slate-400 text-sm flex-grow">
                {{ service.description }}
              </p>
            </div>
          </app-card>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesSectionComponent {
  // Register icons for this component
  readonly icons: Record<string, any> = { 
    wrench: Wrench, 
    laptop: Laptop, 
    printer: Printer, 
    download: Download, 
    cpu: Cpu, 
    'shopping-cart': ShoppingCart, 
    network: Network, 
    droplet: Droplet 
  };

  services: Service[] = [
    {
      id: '1',
      title: 'Mantenimiento de Equipos',
      description: 'Mantenimiento preventivo y correctivo para computadoras e impresoras, asegurando su óptimo funcionamiento.',
      icon: 'wrench'
    },
    {
      id: '2',
      title: 'Reparación de Computadoras',
      description: 'Diagnóstico experto y reparación de fallas de hardware y software en todo tipo de computadoras.',
      icon: 'laptop'
    },
    {
      id: '3',
      title: 'Reparación de Impresoras',
      description: 'Servicio técnico especializado para impresoras de todas las marcas y modelos.',
      icon: 'printer'
    },
    {
      id: '4',
      title: 'Instalación de Programas',
      description: 'Instalación y configuración de software, Office, antivirus y herramientas esenciales.',
      icon: 'download'
    },
    {
      id: '5',
      title: 'Programas de Ingeniería',
      description: 'Instalación de software especializado como AutoCAD, Lumion, Revit y más.',
      icon: 'cpu'
    },
    {
      id: '6',
      title: 'Venta de Insumos',
      description: 'Venta de repuestos, componentes y accesorios para tus equipos tecnológicos.',
      icon: 'shopping-cart'
    },
    {
      id: '7',
      title: 'Cableado Estructurado',
      description: 'Diseño e instalación de redes profesionales para empresas y oficinas.',
      icon: 'network'
    },
    {
      id: '8',
      title: 'Recarga de Tóner',
      description: 'Recarga profesional de cartuchos y tóner para todo tipo de impresoras láser.',
      icon: 'droplet'
    }
  ];
}
