import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { ContactForm, EmailResponse } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {
    emailjs.init(environment.emailJsPublicKey);
  }

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
