import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription?: string;
  benefits?: string[];
  features?: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}