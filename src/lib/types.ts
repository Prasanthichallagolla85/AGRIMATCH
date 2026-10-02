export type ProduceListing = {
  id: string;
  farmerId: string;
  product: string;
  quantity: number;
  unit: string;
  state: string;
  district: string;
  availableFrom: string;
  images: string[];
  quality: string;
  marketContext: MarketContext;
  status: 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'SOLD';
  createdAt: string;
};

export type MarketContext = {
  lowRange: number;
  highRange: number;
  demandLevel: 'Low' | 'Medium' | 'High';
  source: 'DEMO';
  updatedAt: string;
};

export type Requirement = {
  id: string;
  businessId: string;
  product: string;
  quantity: number;
  unit: string;
  quality: string;
  region: string;
  requiredBy: string;
  deliveryMode: string;
  status: 'ACTIVE' | 'FULFILLED' | 'CANCELLED';
  createdAt: string;
};

export type Offer = {
  id: string;
  businessId: string;
  farmerId: string;
  listingId: string;
  product: string;
  quantity: number;
  price: number;
  deliveryMode: string;
  paymentTerms: string;
  validUntil: string;
  message: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: string;
};

export type Order = {
  id: string;
  orderNumber: string;
  offerId: string;
  businessId: string;
  farmerId: string;
  product: string;
  quantity: number;
  agreedPrice: number;
  totalValue: number;
  status: 'OFFER_ACCEPTED' | 'PAYMENT_PENDING' | 'PICKUP_SCHEDULED' | 'DELIVERED';
  createdAt: string;
};

export type UserProfile = {
  id: string;
  role: 'FARMER' | 'BUSINESS';
  name: string;
  location: string;
  verified: boolean;
};

// Seed Data
export const DEMO_FARMER: UserProfile = {
  id: 'f1',
  role: 'FARMER',
  name: 'Ramesh Kumar',
  location: 'Eluru, Andhra Pradesh',
  verified: true,
};

export const DEMO_BUSINESS: UserProfile = {
  id: 'b1',
  role: 'BUSINESS',
  name: 'ABC Foods',
  location: 'Vijayawada, Andhra Pradesh',
  verified: true,
};

export const SEED_LISTINGS: ProduceListing[] = [
  {
    id: 'l1',
    farmerId: 'f1',
    product: 'Mango',
    quantity: 20,
    unit: 'tonnes',
    state: 'Andhra Pradesh',
    district: 'Eluru',
    availableFrom: '2026-10-10',
    images: ['/demo-mango.jpg'],
    quality: 'Grade A',
    marketContext: {
      lowRange: 48,
      highRange: 54,
      demandLevel: 'High',
      source: 'DEMO',
      updatedAt: new Date().toISOString()
    },
    status: 'ACTIVE',
    createdAt: new Date().toISOString()
  }
];

export const SEED_REQUIREMENTS: Requirement[] = [
  {
    id: 'r1',
    businessId: 'b1',
    product: 'Mango',
    quantity: 20,
    unit: 'tonnes',
    quality: 'Grade A',
    region: 'Andhra Pradesh',
    requiredBy: '2026-10-15',
    deliveryMode: 'Buyer pickup',
    status: 'ACTIVE',
    createdAt: new Date().toISOString()
  }
];
