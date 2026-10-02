
"use client";
import { useState } from "react";
import { Trash2, RotateCcw, Play } from "lucide-react";

export default function AdminDemoCenter() {
  const [status, setStatus] = useState("System Ready");

  const handleReset = () => {
    setStatus("Resetting Demo Data...");
    setTimeout(() => setStatus("Demo Data Successfully Reset to Start State."), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="bg-red-50 text-red-800 px-4 py-2 rounded-lg font-bold text-sm mb-6 inline-block">
        DEMO WORKSPACE — ADMIN ONLY
      </div>
      
      <h1 className="text-3xl font-bold mb-8">Admin Control Center</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Demo Control</h2>
          <p className="text-gray-600 text-sm mb-6">Use these controls to safely reset or simulate the hackathon flow.</p>
          
          <div className="space-y-3">
            <button onClick={handleReset} className="w-full btn-secondary text-red-600 border-red-200 hover:bg-red-50 flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4" /> Reset Demo State (Clear Orders/Offers)
            </button>
            <button className="w-full btn-secondary flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> Simulate Buyer Payment
            </button>
            <button className="w-full btn-secondary flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> Simulate Logistics Transit
            </button>
          </div>

          <div className="mt-6 p-3 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">
            Status: {status}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Platform Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-900">1</div>
              <div className="text-sm text-green-700">Farmers</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-900">1</div>
              <div className="text-sm text-blue-700">Businesses</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-900">1</div>
              <div className="text-sm text-yellow-700">Listings</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-900">1</div>
              <div className="text-sm text-purple-700">Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
