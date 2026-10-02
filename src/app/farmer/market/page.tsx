import { TrendingUp, Activity, BarChart2 } from "lucide-react";

export default function FarmerMarketIntelligence() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <h1 className="text-2xl font-bold mb-6">Market Intelligence</h1>
      
      <div className="card mb-8 bg-gradient-to-br from-green-50 to-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Mango • Grade A</h2>
            <div className="text-sm text-gray-500">Andhra Pradesh</div>
          </div>
          <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium shadow-sm">
            Prototype Market Context
          </span>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-gray-500 mb-1">Indicative Range</div>
            <div className="text-3xl font-bold text-[var(--color-brand-primary)]">₹48-54<span className="text-lg text-gray-400">/kg</span></div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Current Demand</div>
            <div className="text-lg font-bold text-yellow-600 flex items-center gap-1">
              <TrendingUp className="w-5 h-5" /> High
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Last Updated</div>
            <div className="text-lg font-medium text-gray-900">Today, 09:00 AM</div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Indicative context only. Actual transaction prices may differ based on quality, quantity, location, timing, and negotiated terms.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold mb-4 flex items-center gap-2"><Activity className="w-5 h-5" /> Demand Signals</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-sm">Mango (Grade A)</span>
              <span className="text-sm font-bold text-green-600">High</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-sm">Rice (Sona Masuri)</span>
              <span className="text-sm font-bold text-gray-600">Stable</span>
            </li>
            <li className="flex justify-between items-center pb-2">
              <span className="text-sm">Cotton</span>
              <span className="text-sm font-bold text-yellow-600">Rising</span>
            </li>
          </ul>
        </div>
        
        <div className="card flex flex-col items-center justify-center text-center p-8">
          <BarChart2 className="w-12 h-12 text-gray-300 mb-4" />
          <h3 className="font-bold text-gray-700 mb-2">Detailed Analytics</h3>
          <p className="text-sm text-gray-500">More historical charts and predictive modeling will appear here as you log more transactions.</p>
        </div>
      </div>
    </div>
  );
}
