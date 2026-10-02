"use client";

import Link from "next/link";
import { 
  ShieldCheck, MapPin, Edit3, Home, Leaf, 
  Settings, CheckCircle2, ChevronRight, LogOut, 
  FileCheck, Globe, History, Activity, FileBarChart, Users
} from "lucide-react";
import { SUPPLIERS, LISTINGS, PRODUCTS, REQUIREMENTS, BUYERS, OFFERS, ORDERS } from "@/lib/demo-data";

export default function Profile() {
  const supplier = SUPPLIERS.find(s => s.id === "s-1"); // Assuming Ramesh Farms
  const myListings = LISTINGS.filter(l => l.supplierId === "s-1");
  const productIds = myListings.map(l => l.productId);
  const relevantRequirements = REQUIREMENTS.filter(r => productIds.includes(r.productId));

  if (!supplier) return null;

  return (
    <div className="bg-[#F8FAF7] min-h-screen pb-24">
      {/* Mobile Header - hidden on desktop (desktop uses layout sidebar) */}
      <header className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-4 py-4 shadow-sm flex items-center justify-between">
        <Link href="/farmer/home" className="text-gray-600 hover:bg-gray-100 p-2 rounded-xl transition-colors flex items-center gap-1">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="text-sm font-bold">Back</span>
        </Link>
        <div className="font-extrabold text-[#112417] text-lg tracking-tight">Profile</div>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>

      <main className="px-6 md:px-10 py-8 space-y-6 max-w-4xl">
        
        {/* Header Profile Card - Premium Edition */}
        <div className="bg-gradient-to-br from-white to-green-50/50 rounded-3xl border border-green-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
          {/* Ambient Background Elements */}
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-green-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gray-100 border-4 border-white shadow-md overflow-hidden shrink-0 relative z-10">
                  {/* Using a better face avatar instead of the hero image */}
                  <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm z-20">
                  <div className="bg-green-100 p-1 rounded-full"><ShieldCheck className="w-4 h-4 text-green-700" /></div>
                </div>
              </div>
              
              <div className="flex-1">
                <h1 className="text-2xl font-extrabold text-[#112417] tracking-tight leading-none mb-1">
                  Ramesh Kumar
                </h1>
                <h2 className="text-sm font-bold text-gray-500 mb-3">{supplier.name}</h2>
                <p className="text-gray-500 text-xs font-medium mb-3 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md w-fit border border-gray-100">
                  <MapPin className="w-3.5 h-3.5 text-gray-400"/> {supplier.location}
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Completeness</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-[#176B3A] w-[85%] relative">
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12 translate-x-[-100%]"></div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#176B3A]">85%</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all flex items-center justify-center gap-2">
              <Edit3 className="w-4 h-4" /> Edit Profile Details
            </button>
          </div>
        </div>

        {/* Farm Details */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
            <Home className="w-4 h-4 text-gray-300"/> Farm Details
          </h2>
          <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-sm">
            <div>
              <div className="text-[10px] text-gray-400 uppercase mb-1 font-bold">Farmer Name</div>
              <div className="font-bold text-gray-900 text-base">Ramesh Kumar</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 uppercase mb-1 font-bold">Producer Since</div>
              <div className="font-bold text-gray-900 text-base">{supplier.since}</div>
            </div>
            <div className="col-span-2 pt-2 border-t border-gray-50">
              <div className="text-[10px] text-gray-400 uppercase mb-2 font-bold">Primary Crops</div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-xl text-xs font-bold">Mango</span>
                <span className="bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-xl text-xs font-bold">Rice</span>
                <span className="bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-xl text-xs font-bold">Cotton</span>
              </div>
            </div>
          </div>
        </div>

        {/* Your Produce */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
            <Leaf className="w-4 h-4 text-green-400"/> Active Produce
          </h2>
          <div className="space-y-3">
            {myListings.map(listing => {
              const p = PRODUCTS.find(prod => prod.id === listing.productId);
              return (
                <div key={listing.id} className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition-colors p-3 rounded-2xl border border-gray-100/50">
                  <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden shrink-0 shadow-sm border border-gray-200/50">
                    <img src={p?.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-gray-900 text-sm">{p?.name}</div>
                    <div className="text-[11px] font-medium text-gray-500 mt-0.5">{listing.quantity} {listing.unit} • {listing.quality}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              )
            })}
          </div>
          <Link href="/farmer/sell" className="block text-center mt-5 text-[#176B3A] font-bold text-sm hover:underline">Manage Listings →</Link>
        </div>

        {/* Business Demand / Interests */}
        <div className="bg-gradient-to-b from-[#f0fdf4] to-white rounded-3xl border border-[#bbf7d0] p-6 shadow-sm">
          <h2 className="text-[11px] font-extrabold text-[#166534] uppercase tracking-widest mb-5 flex items-center gap-2">
            <Activity className="w-4 h-4"/> Buyer Demand Alerts
          </h2>
          <div className="space-y-3">
            {relevantRequirements.slice(0, 2).map(req => {
              const p = PRODUCTS.find(prod => prod.id === req.productId);
              const b = BUYERS.find(buyer => buyer.id === req.buyerId);
              return (
                <div key={req.id} className="bg-white p-4 rounded-2xl shadow-sm border border-[#bbf7d0]/50 flex flex-col gap-2 hover:border-[#bbf7d0] transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="font-extrabold text-gray-900 text-sm">{p?.name}</div>
                    <div className="text-[10px] font-bold text-[#166534] bg-[#dcfce7] px-2 py-1 rounded-md border border-[#bbf7d0]">Match</div>
                  </div>
                  <div className="text-xs font-medium text-gray-600">{b?.name}</div>
                  <div className="text-[11px] font-bold text-gray-500 bg-gray-50 w-fit px-2 py-1 rounded-md">{req.quantity} {req.unit}</div>
                </div>
              )
            })}
          </div>
          <Link href="/farmer/market" className="block text-center mt-5 text-[#166534] font-bold text-sm hover:underline">View All Buyer Demand →</Link>
        </div>

        {/* Quality Reports */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
            <FileBarChart className="w-4 h-4 text-blue-400"/> Quality Reports
          </h2>
          <div className="space-y-3">
            {myListings.slice(0, 2).map(listing => {
              const p = PRODUCTS.find(prod => prod.id === listing.productId);
              return (
                <div key={'q-'+listing.id} className="flex justify-between items-center bg-gray-50 p-3.5 rounded-2xl border border-gray-100/50">
                  <div>
                    <div className="font-bold text-sm text-gray-900">{p?.name}</div>
                    <div className="text-[11px] font-medium text-gray-500 mt-0.5">{listing.quality}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-blue-600">{listing.aiConfidence}%</div>
                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">AI Confidence</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-[10px] font-medium text-gray-400 text-center mt-4">Prototype AI Assessment Records</div>
        </div>

        {/* Sales & Buyer History */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
            <History className="w-4 h-4 text-purple-400"/> Sales History
          </h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100/50 flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div>
                <div className="font-bold text-sm text-gray-900">Mango • 20 tonnes</div>
                <div className="text-[11px] font-medium text-gray-500 mt-0.5">ABC Foods</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-extrabold text-gray-900">₹10,20k</div>
                <div className="text-[9px] text-green-600 font-bold uppercase tracking-wider mt-0.5 flex items-center justify-end gap-1"><CheckCircle2 className="w-3 h-3"/> Done</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100/50 flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div>
                <div className="font-bold text-sm text-gray-900">Rice • 10 tonnes</div>
                <div className="text-[11px] font-medium text-gray-500 mt-0.5">Sri Agro Foods</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-extrabold text-gray-900">₹3,40k</div>
                <div className="text-[9px] text-green-600 font-bold uppercase tracking-wider mt-0.5 flex items-center justify-end gap-1"><CheckCircle2 className="w-3 h-3"/> Done</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h3 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-4">Previous Buyers</h3>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              <div className="bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-3 shrink-0 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">A</div>
                <div>
                  <div className="font-bold text-xs text-gray-900">ABC Foods</div>
                  <div className="text-[10px] text-gray-500">Mango</div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-3 shrink-0 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">S</div>
                <div>
                  <div className="font-bold text-xs text-gray-900">Sri Agro Foods</div>
                  <div className="text-[10px] text-gray-500">Rice</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          <Link href="#" className="flex items-center justify-between p-4 px-5 border-b border-gray-50 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center"><Globe className="w-4 h-4 text-gray-500" /></div>
              <span className="font-bold text-sm text-gray-700">Language</span>
            </div>
            <div className="flex items-center gap-2"><span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md">EN</span> <ChevronRight className="w-4 h-4 text-gray-300"/></div>
          </Link>
          <Link href="#" className="flex items-center justify-between p-4 px-5 border-b border-gray-50 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center"><Settings className="w-4 h-4 text-gray-500" /></div>
              <span className="font-bold text-sm text-gray-700">Preferences</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300"/>
          </Link>
          <button className="flex items-center justify-between p-4 px-5 hover:bg-red-50 w-full text-left text-red-600 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 group-hover:bg-red-100 flex items-center justify-center transition-colors"><LogOut className="w-4 h-4" /></div>
              <span className="font-bold text-sm">Log Out</span>
            </div>
          </button>
        </div>

      </main>
    </div>
  );
}
