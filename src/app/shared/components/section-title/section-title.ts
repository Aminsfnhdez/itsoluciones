import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.html',
  styles: []
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
}
