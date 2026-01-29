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
  template: `
    <section id="contact" class="py-20 bg-bg-darker relative overflow-hidden">
      <!-- Background Effect -->
      <div class="absolute inset-0 bg-primary-blue/5 skew-y-3 transform origin-bottom-right"></div>

      <div class="container mx-auto px-4 relative z-10">
        <app-section-title
          subtitle="Contáctanos"
          title="Solicita tu Cotización"
          description="Cuéntanos qué necesitas y nos pondremos en contacto contigo lo antes posible.">
        </app-section-title>

        <div class="max-w-3xl mx-auto">
          <div class="glass rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              
              <!-- Name & Email -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <app-input
                  id="name"
                  type="text"
                  label="Nombre Completo"
                  placeholder="Tu nombre"
                  [required]="true"
                  formControlName="name"
                  [error]="getErrorMessage('name')">
                </app-input>

                <app-input
                  id="email"
                  type="email"
                  label="Correo Electrónico"
                  placeholder="ejemplo@correo.com"
                  [required]="true"
                  formControlName="email"
                  [error]="getErrorMessage('email')">
                </app-input>
              </div>

              <!-- Phone & Service -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <app-input
                  id="phone"
                  type="tel"
                  label="Teléfono / Celular"
                  placeholder="300 000 0000"
                  [required]="true"
                  formControlName="phone"
                  [error]="getErrorMessage('phone')">
                </app-input>

                <div class="w-full">
                  <label for="serviceType" class="block text-sm font-medium text-slate-300 mb-2">
                    Tipo de Servicio <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceType"
                    formControlName="serviceType"
                    class="w-full px-4 py-3 rounded-lg bg-bg-dark border border-slate-700 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-colors"
                    [class.border-red-500]="contactForm.get('serviceType')?.invalid && contactForm.get('serviceType')?.touched">
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option *ngFor="let type of serviceTypes" [value]="type.value">
                      {{ type.label }}
                    </option>
                  </select>
                  <p *ngIf="contactForm.get('serviceType')?.invalid && contactForm.get('serviceType')?.touched" class="mt-1 text-sm text-red-500">
                    Selecciona un servicio
                  </p>
                </div>
              </div>

              <!-- Message -->
              <app-input
                id="message"
                type="textarea"
                label="Mensaje / Describe tu problema"
                placeholder="¿En qué podemos ayudarte?"
                [required]="true"
                formControlName="message"
                [rows]="4"
                [error]="getErrorMessage('message')">
              </app-input>

              <!-- Checkbox Urgency -->
              <div class="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="urgency" 
                  formControlName="urgency"
                  class="rounded border-slate-700 bg-bg-dark text-primary-cyan focus:ring-primary-cyan">
                <label for="urgency" class="text-sm text-slate-300">
                  Es una urgencia (Servicio Prioritario)
                </label>
              </div>

              <!-- Submit Button -->
              <div class="pt-4">
                <app-button
                  type="submit"
                  variant="primary"
                  [fullWidth]="true"
                  size="lg"
                  [loading]="submitting"
                  [disabled]="contactForm.invalid || submitting">
                  Enviar Mensaje
                </app-button>
              </div>

              <!-- Status Messages -->
              <div *ngIf="submitSuccess" class="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 text-center animate-fade-in">
                ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </div>

              <div *ngIf="submitError" class="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-center animate-fade-in">
                ❌ Error al enviar. Por favor intenta de nuevo o escríbenos por WhatsApp.
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  `,
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
          console.error(err);
          this.submitting = false;
          this.submitError = true;
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
