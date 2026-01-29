export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  image?: string;
}

export interface ServiceMode {
  id: string;
  title: string;
  description: string;
  icon: string;
}
