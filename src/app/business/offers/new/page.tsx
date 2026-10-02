
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function MakeOffer() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-20">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-[var(--color-brand-primary)]" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Offer Sent!</h2>
        <p className="text-gray-600 mb-8">Your offer of ₹51/kg for 20 tonnes of Mango has been sent to Ramesh Kumar.</p>
        <button onClick={() => router.push('/business/overview')} className="btn-primary">Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pb-12">
      <Link href="/business/supply" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Supply
      </Link>
      
      <h1 className="text-2xl font-bold mb-6">Make an Offer</h1>
      
      <div className="card mb-8 bg-gray-50">
        <h3 className="font-medium text-sm text-gray-500 mb-2">Listing Details</h3>
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-lg">Mango • Grade A</div>
            <div className="text-sm text-gray-600">Ramesh Kumar (Eluru, AP)</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg">20 Tonnes</div>
            <div className="text-xs text-[var(--color-brand-primary)]">Indicative: ₹48–54/kg</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Quantity</label>
            <input type="number" required defaultValue="20" className="input-field" disabled />
            <p className="text-xs text-gray-500 mt-1">Full lot selected</p>
          </div>
          <div>
            <label className="label">Offer Price (₹ / kg)</label>
            <input type="number" required defaultValue="51" className="input-field font-bold text-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Delivery/Pickup</label>
            <select className="input-field" defaultValue="pickup">
              <option value="pickup">Buyer Pickup</option>
              <option value="delivery">Seller Delivery</option>
            </select>
          </div>
          <div>
            <label className="label">Payment Terms</label>
            <select className="input-field" defaultValue="on_delivery">
              <option value="on_delivery">On Delivery</option>
              <option value="advance">Advance</option>
            </select>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex justify-between items-center font-bold text-lg text-yellow-900">
            <span>Total Offer Value</span>
            <span>₹10,20,000</span>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full text-lg py-4">Send Offer</button>
      </form>
    </div>
  );
}
