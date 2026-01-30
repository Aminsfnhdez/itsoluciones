import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

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
  @Input() id = '';
  @Input() label = '';
  @Input() type: 'text' | 'email' | 'tel' | 'number' | 'textarea' = 'text';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() error = '';
  @Input() hint = '';
  @Input() rows = 4;
  
  value = '';
  touched = false;
  
  onChange: any = () => {};
  onTouched: any = () => {};

  get inputClasses(): string {
    const baseClasses = 'w-full px-4 py-3 rounded-lg bg-bg-dark border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-300';
    const errorClass = this.error && this.touched ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-primary-cyan focus:ring-primary-cyan/50';
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    return `${baseClasses} ${errorClass} ${disabledClass}`;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
