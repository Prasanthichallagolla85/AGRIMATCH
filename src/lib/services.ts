import { ProduceListing, Requirement, Offer, Order, SEED_LISTINGS, SEED_REQUIREMENTS } from './types';

// MOCK SERVICES FOR PROTOTYPE ARCHITECTURE
// These abstract the data layer to allow easy integration with real APIs later.

export async function createProduceListing(data: Partial<ProduceListing>): Promise<ProduceListing> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ ...SEED_LISTINGS[0], ...data, id: 'l2', createdAt: new Date().toISOString() } as ProduceListing);
    }, 500);
  });
}

export async function analyzeProduceImage(file: any): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        produceType: 'Mango',
        qualityIndicators: ['Good visible maturity', 'Relatively uniform', 'Low visible damage'],
        estimatedQualityClass: 'Grade A',
        confidence: 0.87,
        limitations: "This is an AI-assisted visual assessment based on the uploaded image. It does not replace professional quality inspection.",
        timestamp: new Date().toISOString()
      });
    }, 1500);
  });
}

export async function parseProcurementRequirement(text: string): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        product: 'Mango',
        quantity: 20,
        unit: 'tonnes',
        quality: 'Grade A',
        region: 'Andhra Pradesh',
        deadline: '10 days',
        confidence: 0.95,
      });
    }, 1200);
  });
}

export async function findMatchesForRequirement(requirementId: string): Promise<any[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { listing: SEED_LISTINGS[0], matchScore: 94, reasons: ['Same product', 'Required quality available', 'Quantity fits requirement', 'Same state', 'Verified prototype participant'] }
      ]);
    }, 800);
  });
}

export async function createOffer(data: Partial<Offer>): Promise<Offer> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 'o1',
        businessId: 'b1',
        farmerId: 'f1',
        listingId: 'l1',
        product: 'Mango',
        quantity: 20,
        price: 51,
        deliveryMode: 'pickup',
        paymentTerms: 'on_delivery',
        validUntil: '2026-10-10',
        message: 'We would like to source this lot for our processing facility.',
        status: 'PENDING',
        createdAt: new Date().toISOString()
      } as Offer);
    }, 800);
  });
}

export async function acceptOffer(offerId: string): Promise<Order> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 'AM-2026-0001',
        orderNumber: 'AM-2026-0001',
        offerId,
        businessId: 'b1',
        farmerId: 'f1',
        product: 'Mango',
        quantity: 20,
        agreedPrice: 51,
        totalValue: 1020000,
        status: 'OFFER_ACCEPTED',
        createdAt: new Date().toISOString()
      });
    }, 800);
  });
}
