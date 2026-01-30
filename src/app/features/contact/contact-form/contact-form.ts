import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../../core/services/contact.service';
import { InputComponent } from '../../../shared/components/input/input';
import { ButtonComponent } from '../../../shared/components/button/button';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { ContactForm, ServiceType } from '../../../core/models/contact.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent, SectionTitleComponent],
  templateUrl: './contact-form.html',
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.3s ease-out forwards;
    }
  `]
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitting = false;
  submitSuccess = false;
  submitError = false;

  serviceTypes: { value: ServiceType, label: string }[] = [
    { value: 'maintenance', label: 'Mantenimiento de Equipos' },
    { value: 'computer-repair', label: 'Reparación de Computadoras' },
    { value: 'printer-repair', label: 'Reparación de Impresoras' },
    { value: 'software-installation', label: 'Instalación de Software' },
    { value: 'engineering-software', label: 'Programas de Ingeniería' },
    { value: 'network-cabling', label: 'Cableado Estructurado' },
    { value: 'toner-refill', label: 'Recarga de Tóner' },
    { value: 'sales', label: 'Venta de Insumos/Equipos' },
    { value: 'other', label: 'Otro Servicio' }
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\s\-\+]{7,15}$/)]],
      serviceType: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      urgency: [false],
      preferredContact: ['whatsapp'] // Default hidden field or handled by logic
    });
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);
    if (control?.hasError('required')) return 'Este campo es obligatorio';
    if (control?.hasError('email')) return 'Ingresa un correo válido';
    if (control?.hasError('minlength')) return `Mínimo ${control.errors?.['minlength'].requiredLength} caracteres`;
    if (control?.hasError('pattern')) return 'Formato inválido';
    return '';
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      const formData: ContactForm = {
        ...this.contactForm.value,
        urgency: this.contactForm.value.urgency ? 'urgent' : 'normal',
        preferredContact: 'whatsapp' // Default priority
      };

      this.contactService.sendContactForm(formData).subscribe({
        next: (response) => {
          this.submitting = false;
          if (response.success) {
            this.submitSuccess = true;
            this.contactForm.reset();
            // Reset state after 5 seconds
            setTimeout(() => this.submitSuccess = false, 5000);
          } else {
            this.submitError = true;
          }
        },
        error: (err) => {
          console.error('EmailJS Error Details:', JSON.stringify(err));
          if (err && err.text) {
             console.error('Error Message:', err.text);
          }
          this.submitting = false;
          this.submitError = true;
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
