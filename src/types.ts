export interface ProductItem {
  id: string;
  name: string;
  category: 'cones' | 'beverages' | 'bakery' | 'disposables' | 'plates' | 'other';
  categoryLabel: string;
  description: string;
  image: string;
  highlights: string[];
  bestFor: string;
  availability: 'In Stock (Wholesale & Retail)' | 'Available for Bulk & Retail';
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  orderType: 'Wholesale' | 'Retail' | 'Bulk Function / Event';
  product: string;
  message: string;
}

export interface ClientCategory {
  title: string;
  iconName: string;
  description: string;
  suitableFor: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  iconName: string;
}
