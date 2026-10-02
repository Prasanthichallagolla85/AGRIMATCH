const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'src/app/about/page.tsx', name: 'About' },
  { path: 'src/app/how-it-works/page.tsx', name: 'How It Works' },
  { path: 'src/app/for-farmers/page.tsx', name: 'For Farmers' },
  { path: 'src/app/for-businesses/page.tsx', name: 'For Businesses' },
  { path: 'src/app/ai-intelligence/page.tsx', name: 'AI Intelligence' },
  { path: 'src/app/trust/page.tsx', name: 'Trust' },
  { path: 'src/app/farmer/sell/page.tsx', name: 'Sell Produce' },
  { path: 'src/app/farmer/offers/page.tsx', name: 'Buyer Offers' },
  { path: 'src/app/farmer/orders/page.tsx', name: 'My Orders' },
  { path: 'src/app/farmer/profile/page.tsx', name: 'My Profile' },
  { path: 'src/app/business/supply/page.tsx', name: 'Find Supply' },
  { path: 'src/app/business/requirements/page.tsx', name: 'Procurement Requirements' },
  { path: 'src/app/business/offers/page.tsx', name: 'Offers' },
  { path: 'src/app/business/orders/page.tsx', name: 'Orders' },
  { path: 'src/app/business/suppliers/page.tsx', name: 'Suppliers' },
  { path: 'src/app/business/analytics/page.tsx', name: 'Analytics' },
  { path: 'src/app/business/ai-procurement/page.tsx', name: 'AI Procurement' },
  { path: 'src/app/business/company/page.tsx', name: 'Company Profile' },
];

const template = (name) => `
import { Leaf } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="card text-center py-20">
        <Leaf className="w-12 h-12 text-[var(--color-brand-primary)] mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">${name}</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">This page is part of the AGRIMATCH structural shell.</p>
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
`;

pages.forEach(p => {
  const fullPath = path.join(process.cwd(), p.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, template(p.name));
});

console.log("Pages generated successfully.");
