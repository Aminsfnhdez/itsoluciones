export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  message: string;
  preferredContact: ContactMethod;
  urgency: UrgencyLevel;
}

export type ServiceType = 
  | 'maintenance'
  | 'computer-repair'
  | 'printer-repair'
  | 'software-installation'
  | 'engineering-software'
  | 'sales'
  | 'network-cabling'
  | 'toner-refill'
  | 'other';

export type ContactMethod = 'whatsapp' | 'email' | 'phone';
export type UrgencyLevel = 'normal' | 'urgent';

export interface EmailResponse {
  success: boolean;
  message: string;
}
