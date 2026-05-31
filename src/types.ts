/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Used to import lucide icon dynamically
  category: 'management' | 'property' | 'services' | 'finance' | 'admin';
  benefits: string[];
  features: string[];
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface QuoteSimulation {
  servicesChosen: string[];
  companyType?: string;
  revenueBracket?: string;
  additionalInfo?: string;
  fullName: string;
  email: string;
  phone: string;
  dateCreated: string;
  estimatedTime: string;
  id: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  dateCreated: string;
}
