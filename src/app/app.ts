import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MetaService } from './core/services/meta.service';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';
import { HeroComponent } from './features/hero/hero';
import { ServicesSectionComponent } from './features/services/services-section/services-section';
import { ServiceModesComponent } from './features/services/service-modes/service-modes';
import { AboutSectionComponent } from './features/about/about';
import { ClientsSectionComponent } from './features/clients/clients';
import { CoverageSectionComponent } from './features/coverage/coverage';
import { ContactFormComponent } from './features/contact/contact-form/contact-form';
import { CtaComponent } from './features/cta/cta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ServicesSectionComponent,
    ServiceModesComponent,
    AboutSectionComponent,
    ClientsSectionComponent,
    CoverageSectionComponent,
    ContactFormComponent,
    CtaComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private metaService: MetaService) {
    this.metaService.updateMetaTags({
      title: 'IT Soluciones - Soporte Técnico y Tecnología en Urabá',
      description: 'Soluciones tecnológicas profesionales en Apartadó y Urabá. Mantenimiento, reparación, venta de equipos y soporte técnico especializado.',
      image: 'assets/og-image.jpg', // Placeholder
      url: 'https://itsoluciones.com.co' // Placeholder
    });
  }
}
