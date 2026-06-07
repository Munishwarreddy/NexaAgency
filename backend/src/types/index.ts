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

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
