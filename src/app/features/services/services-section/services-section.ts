import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Wrench, Laptop, Printer, Download, Cpu, ShoppingCart, Network, Droplet } from 'lucide-angular';
import { CardComponent } from '../../../shared/components/card/card';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { Service } from '../../../core/models/service.model';

/**
 * Services catalog section component.
 * 
 * @component
 * @description Displays the complete catalog of services offered by IT Soluciones.
 * Shows 8 service cards in a responsive grid with icons, titles, and descriptions.
 * Icons are provided by Lucide Angular.
 * 
 * @services
 * 1. Mantenimiento de Equipos
 * 2. Reparación de Computadoras
 * 3. Reparación de Impresoras
 * 4. Instalación de Programas
 * 5. Programas de Ingeniería
 * 6. Venta de Insumos
 * 7. Cableado Estructurado
 * 8. Recarga de Tóner
 * 
 * @example
 * ```html
 * <app-services-section></app-services-section>
 * ```
 */
@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    SectionTitleComponent,
    LucideAngularModule
  ],
  templateUrl: './services-section.html',
  styles: []
})
export class ServicesSectionComponent {
  /**
   * Lucide icon registry for service icons.
   * Maps icon names to Lucide icon components.
   */
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

  /**
   * Array of service offerings with details.
   * Each service includes id, title, description, and associated icon.
   * This data populates the service cards in the template.
   */
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
