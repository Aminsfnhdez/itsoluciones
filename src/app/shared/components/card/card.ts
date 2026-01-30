import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable card container component with hover effects and glow options.
 * 
 * @component
 * @description A styled card container with customizable padding, hover animations,
 * and optional glow effect. Used throughout the app for content grouping.
 * 
 * @example
 * ```html
 * <app-card [hover]="true" padding="md">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </app-card>
 * 
 * <app-card [glow]="true" padding="lg">
 *   <div>Content with glow effect</div>
 * </app-card>
 * ```
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styles: []
})
export class CardComponent {
  /** Whether card has hover animation @default true */
  @Input() hover = true;
  
  /** Card padding size @default 'md' */
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';
  
  /** Whether card has cyan glow effect @default false */
  @Input() glow = false;

  /**
   * Computes CSS classes for card based on current state and inputs.
   * 
   * @returns {string} Space-separated CSS class names
   */
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
