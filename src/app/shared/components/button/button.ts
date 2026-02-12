import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable button component with multiple variants and sizes.
 * 
 * @component
 * @description A flexible button component supporting multiple variants (primary, secondary, outline, ghost),
 * sizes (sm, md, lg), loading states, and full-width option. Includes hover animations and disabled states.
 * 
 * @example
 * ```html
 * <!-- Primary button -->
 * <app-button variant="primary" (clicked)="handleClick()">Enviar</app-button>
 * 
 * <!-- Loading state -->
 * <app-button [loading]="isLoading" [disabled]="isLoading">Procesando...</app-button>
 * 
 * <!-- Full width button -->
 * <app-button [fullWidth]="true" variant="outline">Continuar</app-button>
 * ```
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styles: []
})
export class ButtonComponent {
  /** Button visual style variant @default 'primary' */
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' = 'primary';
  
  /** Button size @default 'md' */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  
  /** Whether button is disabled @default false */
  @Input() disabled = false;
  
  /** Whether button is in loading state @default false */
  @Input() loading = false;
  
  /** HTML button type @default 'button' */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  
  /** Whether button should take full width of container @default false */
  @Input() fullWidth = false;
  
  /** Emits when button is clicked */
  @Output() clicked = new EventEmitter<Event>();

  /**
   * Computes CSS classes for button based on current state and inputs.
   * 
   * @returns {string} Space-separated CSS class names
   */
  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-gradient-to-r from-primary-blue to-primary-cyan text-white hover:shadow-lg hover:shadow-primary-blue/50 hover:scale-105',
      secondary: 'bg-bg-card text-white border border-slate-700 hover:border-primary-cyan hover:bg-bg-dark',
      outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
      ghost: 'text-primary-cyan hover:bg-primary-cyan/10',
      whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp-dark hover:shadow-lg hover:shadow-whatsapp/50 hover:scale-105'
    };
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    
    const widthClass = this.fullWidth ? 'w-full' : '';
    
    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${widthClass}`;
  }

  /**
   * Handles button click events.
   * Only emits if button is not disabled or loading.
   * 
   * @param {Event} event - DOM click event
   * @returns {void}
   */
  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}
