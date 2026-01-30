import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Home, Laptop } from 'lucide-angular';
import { CardComponent } from '../../../shared/components/card/card';

@Component({
  selector: 'app-service-modes',
  standalone: true,
  imports: [CommonModule, CardComponent, LucideAngularModule],
  templateUrl: './service-modes.html',
  styles: []
})
export class ServiceModesComponent {
  readonly icons = { Home, Laptop };
}
