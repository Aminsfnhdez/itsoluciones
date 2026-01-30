import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { ContactForm, EmailResponse } from '../models/contact.model';

/**
 * Service for handling contact form submissions via EmailJS.
 * 
 * @service
 * @description Manages email sending functionality using EmailJS API.
 * Initializes with public key from environment and sends contact form data
 * with automatic client reply functionality.
 * 
 * @requires @emailjs/browser
 * @requires environment.emailJsServiceId
 * @requires environment.emailJsTemplateId
 * @requires environment.emailJsPublicKey
 * 
 * @example
 * ```typescript
 * constructor(private contactService: ContactService) {}
 * 
 * submitForm() {
 *   this.contactService.sendContactForm(formData).subscribe({
 *     next: (response) => console.log('Email sent!'),
 *     error: (error) => console.error('Failed to send')
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  /**
   * Initializes the EmailJS service with the public key.
   * 
   * @param {HttpClient} http - Angular HTTP client (unused but available for future extensions)
   */
  constructor(private http: HttpClient) {
    emailjs.init(environment.emailJsPublicKey);
  }

  /**
   * Sends contact form data via EmailJS.
   * 
   * @param {ContactForm} formData - Contact form data containing user information and message
   * @returns {Observable<EmailResponse>} Observable that emits success/error response
   * 
   * @description
   * - Sends email to IT Soluciones with client request details
   * - Sends auto-reply confirmation to client's email
   * - Includes all form fields: name, email, phone, service type, message, urgency
   * 
   * @throws {EmailResponse} Returns error response with originalError on failure
   * 
   * @example
   * ```typescript
   * const formData: ContactForm = {
   *   name: 'Juan Pérez',
   *   email: 'juan@example.com',
   *   phone: '3001234567',
   *   serviceType: 'Reparación de PC',
   *   message: 'Mi computadora no enciende',
   *   preferredContact: 'email',
   *   urgency: true
   * };
   * 
   * this.contactService.sendContactForm(formData).subscribe({
   *   next: (response) => {
   *     console.log(response.message); // '¡Mensaje enviado exitosamente!'
   *   },
   *   error: (error) => {
   *     console.error(error.message);
   *     console.error(error.originalError);
   *   }
   * });
   * ```
   */
  sendContactForm(formData: ContactForm): Observable<EmailResponse> {
    return new Observable(observer => {
      emailjs.send(
        environment.emailJsServiceId,
        environment.emailJsTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          service_type: formData.serviceType,
          message: formData.message,
          preferred_contact: formData.preferredContact,
          urgency: formData.urgency,
          to_email: formData.email, // Required for auto-reply
          reply_to: formData.email // Standard practice
        }
      ).then(
        (response) => {
          observer.next({
            success: true,
            message: '¡Mensaje enviado exitosamente!'
          });
          observer.complete();
        },
        (error) => {
          console.error('🔴 RAW EMAILJS ERROR:', error);
          observer.error({
            success: false,
            message: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
            originalError: error
          });
        }
      );
    });
  }
}
