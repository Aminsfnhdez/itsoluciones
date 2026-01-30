import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styles: []
})
export class CardComponent {
  @Input() hover = true;
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';
  @Input() glow = false;

  get cardClasses(): string {
    const baseClasses = 'rounded-xl bg-bg-card backdrop-blur-sm border border-slate-700 transition-all duration-300';
    const hoverClass = this.hover ? 'hover:border-primary-cyan hover:scale-105 hover:shadow-lg' : '';
    const glowClass = this.glow ? 'glow-cyan' : '';
    
    const paddingClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };
    
    return `${baseClasses} ${hoverClass} ${glowClass} ${paddingClasses[this.padding]}`;
  }
}
