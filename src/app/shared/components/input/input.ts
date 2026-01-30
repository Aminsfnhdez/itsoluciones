import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

/**
 * Form input component compatible with Angular Reactive Forms.
 * 
 * @component
 * @implements {ControlValueAccessor}
 * @description A versatile input component supporting text, email, tel, number, and textarea types.
 * Includes error handling, validation display, hints, and full integration with Angular forms via ControlValueAccessor.
 * 
 * @example
 * ```html
 * <!-- Text input with validation -->
 * <app-input
 *   id="name"
 *   label="Nombre completo"
 *   type="text"
 *   placeholder="Ingrese su nombre"
 *   [required]="true"
 *   [error]="nameError"
 *   [touched]="nameTouched"
 * ></app-input>
 * 
 * <!-- Textarea -->
 * <app-input
 *   type="textarea"
 *   label="Mensaje"
 *   [rows]="5"
 *   placeholder="Escriba su mensaje aquí"
 * ></app-input>
 * ```
 */
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }],
  templateUrl: './input.html',
  styles: []
})
export class InputComponent implements ControlValueAccessor {
  /** Unique HTML id for the input element */
  @Input() id = '';
  
  /** Label text displayed above the input */
  @Input() label = '';
  
  /** Input type @default 'text' */
  @Input() type: 'text' | 'email' | 'tel' | 'number' | 'textarea' = 'text';
  
  /** Placeholder text */
  @Input() placeholder = '';
  
  /** Whether field is required @default false */
  @Input() required = false;
  
  /** Whether input is disabled @default false */
  @Input() disabled = false;
  
  /** Error message to display */
  @Input() error = '';
  
  /** Hint text displayed below input */
  @Input() hint = '';
  
  /** Number of rows for textarea @default 4 */
  @Input() rows = 4;
  
  /** Current value of the input */
  value = '';
  
  /** Whether input has been touched/focused */
  touched = false;
  
  /** Callback function for value changes (ControlValueAccessor) */
  onChange: any = () => {};
  
  /** Callback function for touch events (ControlValueAccessor) */
  onTouched: any = () => {};

  /**
   * Computes CSS classes for input based on current state.
   * 
   * @returns {string} Space-separated CSS class names
   */
  get inputClasses(): string {
    const baseClasses = 'w-full px-4 py-3 rounded-lg bg-bg-dark border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-300';
    const errorClass = this.error && this.touched ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-primary-cyan focus:ring-primary-cyan/50';
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    return `${baseClasses} ${errorClass} ${disabledClass}`;
  }

  /**
   * Handles input events and propagates value changes.
   * 
   * @param {Event} event - DOM input event
   * @returns {void}
   */
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  /**
   * Writes value to the component (ControlValueAccessor interface).
   * 
   * @param {any} value - Value to set
   * @returns {void}
   */
  writeValue(value: any): void {
    this.value = value || '';
  }

  /**
   * Registers onChange callback (ControlValueAccessor interface).
   * 
   * @param {any} fn - Callback function
   * @returns {void}
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers onTouched callback (ControlValueAccessor interface).
   * 
   * @param {any} fn - Callback function
   * @returns {void}
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Sets disabled state (ControlValueAccessor interface).
   * 
   * @param {boolean} isDisabled - Whether component should be disabled
   * @returns {void}
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
