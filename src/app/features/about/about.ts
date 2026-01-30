import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, LucideAngularModule],
  templateUrl: './about.html',
  styles: []
})
export class AboutSectionComponent {
  readonly icons = { Star };
  stats = [
    { value: '4+', label: 'Años de Experiencia' },
    { value: '100+', label: 'Clientes Satisfechos' },
    { value: '500+', label: 'Servicios Realizados' },
    { value: '100%', label: 'Garantía de Calidad' }
  ];
}
