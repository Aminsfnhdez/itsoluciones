import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styles: []
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;
  @Output() clicked = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-gradient-to-r from-primary-blue to-primary-cyan text-white hover:shadow-lg hover:shadow-primary-blue/50 hover:scale-105',
      secondary: 'bg-bg-card text-white border border-slate-700 hover:border-primary-cyan hover:bg-bg-dark',
      outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
      ghost: 'text-primary-cyan hover:bg-primary-cyan/10'
    };
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    
    const widthClass = this.fullWidth ? 'w-full' : '';
    
    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${widthClass}`;
  }

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}
