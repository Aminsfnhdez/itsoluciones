import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Globe } from 'lucide-angular';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-coverage-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, LucideAngularModule],
  templateUrl: './coverage.html',
  styles: []
})
export class CoverageSectionComponent {
  readonly icons = { MapPin, Globe };
}
