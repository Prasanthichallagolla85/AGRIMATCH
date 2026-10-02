"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, MapPin, 
  Calendar, Clock, AlertTriangle, ChevronRight, X
} from "lucide-react";

export default function Offers() {
  const [activeTab, setActiveTab] = useState("new");
  const [selectedOffer, setSelectedOffer] = useState<any>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  // Demo Offers
  const offers = [
    {
      id: "OFF-AM-26-001",
      business: "ABC Foods",
      verified: true,
      produce: "Mango",
      grade: "Grade A",
      qty: "20 tonnes",
      pricePerKg: 51,
      total: 1020000,
      delivery: "Buyer pickup",
      payment: "On delivery",
      validUntil: "10 Oct 2026",
      expiresIn: "2 days",
      match: 92,
      status: "new",
      message: "We are very interested in your Grade A Mangoes. We can arrange logistics directly from your farm."
    },
    {
      id: "OFF-AM-26-002",
      business: "Sri Agro Foods",
      verified: true,
      produce: "Rice",
      grade: "Grade A",
      qty: "8 tonnes",
      pricePerKg: 33,
      total: 264000,
      delivery: "Farmer delivery",
      payment: "Net 15",
      validUntil: "14 Oct 2026",
      expiresIn: "6 days",
      match: 84,
      status: "new",
      message: "Looking forward to working with you. Please confirm delivery capabilities."
    }
  ];

  const handleAccept = () => {
    setIsAccepted(true);
    setTimeout(() => {
      // In a real app, this would route to orders
      window.location.href = "/farmer/orders";
    }, 1500);
  };

  if (selectedOffer) {
    return (
      <div className="px-6 md:px-10 pb-24 pt-6">
        <button onClick={() => setSelectedOffer(null)} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#17231C] mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Offers
        </button>
        
        <div className="bg-white rounded-[24px] border border-[#E3EAE4] shadow-sm overflow-hidden mb-8">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold text-[#17231C]">{selectedOffer.business}</h1>
                {selectedOffer.verified && <ShieldCheck className="w-5 h-5 text-[#176B3A]" />}
              </div>
              <div className="text-sm font-medium text-gray-500">Offer ID: {selectedOffer.id}</div>
            </div>
            <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-[12px] border border-orange-100 flex items-center gap-2 text-sm font-bold">
              <Clock className="w-4 h-4" /> Expires in {selectedOffer.expiresIn}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Produce Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Item</div>
                    <div className="font-bold text-lg text-[#17231C]">{selectedOffer.produce} <span className="text-sm font-medium text-gray-500">({selectedOffer.grade})</span></div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Quantity Requested</div>
                    <div className="font-bold text-lg text-[#17231C]">{selectedOffer.qty}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Financials</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Price per kg</div>
                    <div className="font-bold text-lg text-[#17231C]">₹{selectedOffer.pricePerKg}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Total Value</div>
                    <div className="font-extrabold text-2xl text-[#176B3A]">₹{selectedOffer.total.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-[16px] p-6 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Logistics & Terms</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Delivery</div>
                  <div className="font-bold text-sm">{selectedOffer.delivery}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Payment</div>
                  <div className="font-bold text-sm">{selectedOffer.payment}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Match Score</div>
                  <div className="font-bold text-sm text-[#176B3A] flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> {selectedOffer.match}%</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Message from Buyer</h3>
              <div className="bg-white border border-gray-200 rounded-[12px] p-4 text-sm text-gray-600 italic">
                "{selectedOffer.message}"
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-4 rounded-[12px] font-bold hover:bg-gray-50 transition-colors">
            Reject Offer
          </button>
          <button 
            onClick={() => setShowConfirm(true)}
            className="flex-1 bg-[#176B3A] text-white py-4 rounded-[12px] font-bold hover:bg-[#125c31] transition-colors shadow-sm"
          >
            Accept Offer
          </button>
        </div>

        {/* Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-[24px] max-w-md w-full p-8 shadow-2xl relative">
              {!isAccepted ? (
                <>
                  <button onClick={() => setShowConfirm(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"><X className="w-5 h-5"/></button>
                  <h2 className="text-2xl font-bold text-[#17231C] mb-2">Accept this offer?</h2>
                  <p className="text-gray-500 mb-6">This will create a legally binding order with the buyer.</p>
                  
                  <div className="bg-gray-50 rounded-[12px] p-4 mb-8 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Produce</span>
                      <span className="font-bold text-[#17231C] text-sm">{selectedOffer.produce} ({selectedOffer.qty})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Price</span>
                      <span className="font-bold text-[#17231C] text-sm">₹{selectedOffer.pricePerKg}/kg</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200 flex justify-between">
                      <span className="font-bold text-gray-700">Total Value</span>
                      <span className="font-extrabold text-[#176B3A]">₹{selectedOffer.total.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <button onClick={handleAccept} className="w-full bg-[#176B3A] text-white py-4 rounded-[12px] font-bold hover:bg-[#125c31] transition-colors shadow-sm mb-3">
                    Confirm Acceptance
                  </button>
                  <button onClick={() => setShowConfirm(false)} className="w-full bg-white text-gray-500 py-3 rounded-[12px] font-bold hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 text-[#176B3A] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#17231C] mb-2">Offer Accepted!</h2>
                  <p className="text-gray-500">Order AM-2026-0001 has been created. Redirecting to your orders...</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10 pb-24 pt-6 md:pt-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#17231C] mb-2 tracking-tight">Offers</h1>
        <p className="text-[#66736B] text-lg">Review and manage offers from verified businesses.</p>
      </div>

      {/* Top Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-[#E3EAE4] p-5 rounded-[16px] shadow-sm">
          <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">New Offers</div>
          <div className="text-3xl font-extrabold text-[#17231C]">3</div>
        </div>
        <div className="bg-white border border-[#176B3A] p-5 rounded-[16px] shadow-sm bg-green-50/30">
          <div className="text-sm font-bold text-[#176B3A] uppercase tracking-wider mb-1">Potential Value</div>
          <div className="text-3xl font-extrabold text-[#176B3A]">₹10,20,000</div>
        </div>
        <div className="bg-white border border-orange-200 p-5 rounded-[16px] shadow-sm bg-orange-50/30">
          <div className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-1 flex items-center gap-2">Expiring Soon <AlertTriangle className="w-4 h-4"/></div>
          <div className="text-3xl font-extrabold text-orange-700">1</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button onClick={()=>setActiveTab("new")} className={`pb-4 px-4 font-bold text-sm transition-colors relative ${activeTab === 'new' ? 'text-[#176B3A]' : 'text-gray-500 hover:text-gray-700'}`}>
          New (3)
          {activeTab === 'new' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#176B3A]"></div>}
        </button>
        <button onClick={()=>setActiveTab("active")} className={`pb-4 px-4 font-bold text-sm transition-colors relative ${activeTab === 'active' ? 'text-[#176B3A]' : 'text-gray-500 hover:text-gray-700'}`}>
          Active
          {activeTab === 'active' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#176B3A]"></div>}
        </button>
        <button onClick={()=>setActiveTab("past")} className={`pb-4 px-4 font-bold text-sm transition-colors relative ${activeTab === 'past' ? 'text-[#176B3A]' : 'text-gray-500 hover:text-gray-700'}`}>
          Past
          {activeTab === 'past' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#176B3A]"></div>}
        </button>
      </div>

      {/* Offers List */}
      <div className="space-y-4">
        {activeTab === "new" ? (
          offers.map((offer) => (
            <div key={offer.id} className="bg-white border border-[#E3EAE4] rounded-[16px] p-6 shadow-sm hover:shadow-md hover:border-[#176B3A] transition-all cursor-pointer group" onClick={() => setSelectedOffer(offer)}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#17231C]">{offer.business}</h3>
                  {offer.verified && <ShieldCheck className="w-4 h-4 text-[#176B3A]" />}
                </div>
                <div className="bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1 rounded-full border border-orange-100 flex items-center gap-1 w-fit">
                  <Clock className="w-3 h-3" /> Expires in {offer.expiresIn}
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Produce</div>
                  <div className="font-bold text-sm text-[#17231C]">{offer.produce} ({offer.qty})</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Price</div>
                  <div className="font-bold text-sm text-[#17231C]">₹{offer.pricePerKg}/kg</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total Value</div>
                  <div className="font-bold text-sm text-[#176B3A]">₹{offer.total.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Match</div>
                  <div className="font-bold text-sm text-[#176B3A] flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> {offer.match}%</div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500 truncate max-w-lg">{offer.message}</div>
                <div className="text-[#176B3A] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Review offer <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-[16px] border border-gray-100 border-dashed">
            <p className="text-gray-500 font-medium">No offers in this section.</p>
          </div>
        )}
      </div>
    </div>
  );
}
