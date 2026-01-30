import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-clients-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './clients.html',
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
