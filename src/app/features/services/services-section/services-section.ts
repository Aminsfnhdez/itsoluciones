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
  templateUrl: './services-section.html',
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
