import { PieChart, BarChart3, TrendingUp, PackageSearch } from "lucide-react";

export default function BusinessAnalytics() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">Procurement Intelligence</h1>
          <p className="text-gray-500">Track and analyze your procurement pipeline.</p>
        </div>
        <div className="px-3 py-1 bg-yellow-50 text-yellow-800 rounded-lg text-xs font-bold border border-yellow-200">
          Demo Analytics Workspace
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card !p-4">
          <div className="text-sm text-gray-500 mb-1">Active Requirements</div>
          <div className="text-2xl font-bold">1</div>
        </div>
        <div className="card !p-4">
          <div className="text-sm text-gray-500 mb-1">Matched Suppliers</div>
          <div className="text-2xl font-bold text-blue-600">3</div>
        </div>
        <div className="card !p-4">
          <div className="text-sm text-gray-500 mb-1">Pending Offers</div>
          <div className="text-2xl font-bold text-yellow-600">1</div>
        </div>
        <div className="card !p-4">
          <div className="text-sm text-gray-500 mb-1">Procurement Value</div>
          <div className="text-2xl font-bold text-[var(--color-brand-primary)]">₹10.2L</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card h-64 flex flex-col items-center justify-center text-center">
          <PieChart className="w-12 h-12 text-gray-300 mb-4" />
          <h3 className="font-bold text-gray-700">Procurement by Product</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">Not enough transaction data yet. Complete more orders to see distribution.</p>
        </div>
        <div className="card h-64 flex flex-col items-center justify-center text-center">
          <BarChart3 className="w-12 h-12 text-gray-300 mb-4" />
          <h3 className="font-bold text-gray-700">Monthly Spending</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">Not enough transaction data yet. Complete more orders to see trends.</p>
        </div>
      </div>
    </div>
  );
}
