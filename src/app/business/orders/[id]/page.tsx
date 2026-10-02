import { CheckCircle2, Truck, CreditCard, Box } from "lucide-react";
import Link from "next/link";

export default async function BusinessOrderTracking({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="max-w-3xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order #{id}</h1>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Active</span>
      </div>

      <div className="card mb-8">
        <div className="flex justify-between border-b border-gray-100 pb-4 mb-4">
          <div>
            <div className="text-gray-500 text-sm">Supplier</div>
            <div className="font-bold">Ramesh Kumar (Verified)</div>
            <Link href="/business/suppliers/f1" className="text-sm text-[var(--color-brand-primary)] hover:underline">View Profile</Link>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-sm">Total Value</div>
            <div className="font-bold text-xl text-[var(--color-brand-primary)]">₹10,20,000</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-gray-500 text-sm">Produce</div>
            <div className="font-medium">Mango • Grade A • 20 Tonnes</div>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-sm">Terms</div>
            <div className="font-medium">Buyer Pickup • On Delivery</div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">Transaction Timeline</h2>
      <div className="card p-6">
        <div className="relative border-l-2 border-green-200 ml-4 space-y-8">
          
          <div className="relative">
            <div className="absolute -left-[25px] bg-green-500 rounded-full p-1 text-white border-4 border-white">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-gray-900">Offer Accepted</h3>
              <p className="text-sm text-gray-500">Order created between you and Ramesh Kumar.</p>
              <span className="text-xs text-gray-400 mt-1 block">Today, 10:15 AM</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[25px] bg-[var(--color-brand-accent)] rounded-full p-1 text-white border-4 border-white">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-gray-900">Payment Action Required</h3>
              <p className="text-sm text-gray-500 mb-2">Please initiate the payment to proceed.</p>
              <button className="btn-primary py-2 text-sm">Initiate Payment</button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[25px] bg-gray-200 rounded-full p-1 text-gray-500 border-4 border-white">
              <Truck className="w-5 h-5" />
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-gray-400">Pickup Scheduled</h3>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[25px] bg-gray-200 rounded-full p-1 text-gray-500 border-4 border-white">
              <Box className="w-5 h-5" />
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-gray-400">Completed</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
