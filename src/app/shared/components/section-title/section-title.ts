import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-12">
      <p *ngIf="subtitle" class="text-primary-cyan text-sm font-semibold uppercase tracking-wider mb-2">
        {{ subtitle }}
      </p>
      <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-4">
        {{ title }}
      </h2>
      <p *ngIf="description" class="text-slate-400 text-lg max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>
  `,
  styles: []
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
}
