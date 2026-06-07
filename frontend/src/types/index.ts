export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PricingPackage {
  name: string;
  price: number;
  period: string;
  features: string[];
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  website?: string;
  businessType: string;
  phone: string;
  services: string;
  funded: string;
  teamSize: string;
  role: string;
}
