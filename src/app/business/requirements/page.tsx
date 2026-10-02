"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Filter, MoreHorizontal, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { REQUIREMENTS, PRODUCTS } from "@/lib/demo-data";

export default function Requirements() {
  const [activeTab, setActiveTab] = useState("Active");

  const tabs = ["Active", "Draft", "Paused", "Fulfilled", "Past"];

  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] mb-2">Procurement Requirements</h1>
          <p className="text-gray-500">Manage your supply requirements and track matches.</p>
        </div>
        <Link href="/business/requirements/new" className="px-5 py-2.5 bg-[#176B3A] text-white font-bold rounded-xl flex items-center gap-2 hover:bg-[#125c31] transition-colors shadow-sm shrink-0">
          <Plus className="w-5 h-5" /> Create Requirement
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {/* TABS */}
        <div className="border-b border-gray-200 overflow-x-auto hide-scrollbar">
          <div className="flex px-2">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab ? "border-[#176B3A] text-[#176B3A]" : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 bg-gray-50">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search requirements..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176B3A] text-sm"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50 shrink-0">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* REQUIREMENTS LIST */}
        <div className="p-4 md:p-6 space-y-4 bg-gray-50/50">
          {activeTab !== "Active" ? (
            <div className="text-center py-12 text-gray-500">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Search className="w-8 h-8" />
              </div>
              <p className="font-medium text-gray-900 mb-1">No {activeTab.toLowerCase()} requirements</p>
              <p className="text-sm">You don't have any {activeTab.toLowerCase()} requirements at the moment.</p>
            </div>
          ) : (
            REQUIREMENTS.map(req => {
              const product = PRODUCTS.find(p => p.id === req.productId);
              if (!product) return null;
              
              return (
                <div key={req.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-[#176B3A]/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 bg-gray-100 rounded-lg shrink-0 overflow-hidden hidden sm:block">
                        <img src={product.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
                          <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase">Active</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
                          <span className="font-bold text-gray-900">{req.quantity} {req.unit}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" /> {req.location}</span>
                          <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-gray-400" /> {req.deadline}</span>
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium">{req.quality}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 shrink-0 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                      <div className="text-center md:text-right">
                        <div className="text-2xl font-bold text-[#176B3A]">{req.matchCount}</div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Matches</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link href="/business/find-supply" className="px-4 py-2 bg-[#176B3A] text-white text-sm font-bold rounded-lg hover:bg-[#125c31] transition-colors whitespace-nowrap text-center">
                          View Matches
                        </Link>
                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-50 transition-colors">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
