"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, MapPin, 
  Package, Truck, CreditCard, ChevronRight, FileText, Phone
} from "lucide-react";

export default function Orders() {
  const [activeTab, setActiveTab] = useState("active");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  // Demo Orders
  const orders = [
    {
      id: "AM-2026-0001",
      business: "ABC Foods",
      verified: true,
      produce: "Mango",
      qty: "20 tonnes",
      pricePerKg: 51,
      total: 1020000,
      status: "payment_pending",
      dateCreated: "10 Oct 2026",
      timeline: [
        { label: "Offer accepted", completed: true, date: "10 Oct 2026" },
        { label: "Order created", completed: true, date: "10 Oct 2026" },
        { label: "Payment", completed: false, date: "Pending" },
        { label: "Pickup scheduled", completed: false, date: "Not scheduled" },
        { label: "Delivery", completed: false, date: "Not started" }
      ],
      businessDetails: {
        contact: "Rajesh Kumar",
        phone: "+91 98765 43210",
        address: "Hyderabad, Telangana"
      }
    }
  ];

  if (selectedOrder) {
    return (
      <div className="px-6 md:px-10 pb-24 pt-6">
        <button onClick={() => setSelectedOrder(null)} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#17231C] mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Orders
        </button>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#17231C] tracking-tight mb-2">Order {selectedOrder.id}</h1>
            <div className="flex items-center gap-2 text-[#66736B]">
              <span>Created {selectedOrder.dateCreated}</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-bold text-[#17231C]"><Package className="w-4 h-4"/> {selectedOrder.produce} ({selectedOrder.qty})</span>
            </div>
          </div>
          <div className="bg-yellow-50 text-yellow-700 border border-yellow-200 px-4 py-2 rounded-[12px] font-bold text-sm flex items-center gap-2 shadow-sm">
            <CreditCard className="w-4 h-4" /> Payment Pending
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Timeline */}
            <div className="bg-white rounded-[24px] border border-[#E3EAE4] p-6 md:p-8 shadow-sm">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Order Status Timeline</h2>
              <div className="space-y-6">
                {selectedOrder.timeline.map((step: any, idx: number) => (
                  <div key={idx} className="flex gap-4 relative">
                    {idx !== selectedOrder.timeline.length - 1 && (
                      <div className={`absolute left-3 top-8 bottom-[-24px] w-0.5 ${step.completed ? 'bg-[#176B3A]' : 'bg-gray-200'}`}></div>
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${step.completed ? 'bg-[#176B3A] text-white' : 'bg-gray-100 border-2 border-gray-200 text-gray-400'}`}>
                      {step.completed ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-gray-300"></div>}
                    </div>
                    <div>
                      <div className={`font-bold text-sm ${step.completed ? 'text-[#17231C]' : 'text-gray-500'}`}>{step.label}</div>
                      <div className={`text-xs ${step.completed ? 'text-gray-500' : 'text-gray-400'}`}>{step.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-[24px] border border-[#E3EAE4] p-6 md:p-8 shadow-sm">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Order Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Produce</span>
                  <span className="font-bold text-[#17231C] text-sm">{selectedOrder.produce}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Quantity</span>
                  <span className="font-bold text-[#17231C] text-sm">{selectedOrder.qty}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Agreed Price</span>
                  <span className="font-bold text-[#17231C] text-sm">₹{selectedOrder.pricePerKg}/kg</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-bold text-gray-700">Total Value</span>
                  <span className="font-extrabold text-xl text-[#176B3A]">₹{selectedOrder.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Business Details */}
            <div className="bg-white rounded-[24px] border border-[#E3EAE4] p-6 shadow-sm">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Buyer Details</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-[12px] flex items-center justify-center font-bold text-xl shrink-0">
                  {selectedOrder.business.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#17231C] flex items-center gap-1">{selectedOrder.business} {selectedOrder.verified && <ShieldCheck className="w-4 h-4 text-[#176B3A]"/>}</div>
                  <div className="text-xs text-gray-500">Verified Business</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-600">{selectedOrder.businessDetails.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-600">{selectedOrder.businessDetails.phone}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-gray-50 text-[#17231C] border border-gray-200 py-3 rounded-[12px] font-bold hover:bg-gray-100 transition-colors text-sm flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Download Invoice (Draft)
              </button>
            </div>

            {/* Logistics summary */}
            <div className="bg-[#17231C] text-white rounded-[24px] p-6 shadow-lg">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Logistics</h2>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-[#F2C94C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold mb-1">Buyer Pickup</div>
                  <p className="text-sm text-gray-300">The buyer is responsible for arranging transport from your farm. Waiting for schedule.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10 pb-24 pt-6 md:pt-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#17231C] mb-2 tracking-tight">Orders</h1>
        <p className="text-[#66736B] text-lg">Track and manage your active transactions.</p>
      </div>

      {/* Top Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-[#E3EAE4] p-5 rounded-[16px] shadow-sm">
          <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-2"><Package className="w-4 h-4 text-blue-500"/> Active Orders</div>
          <div className="text-3xl font-extrabold text-[#17231C]">1</div>
        </div>
        <div className="bg-white border border-[#E3EAE4] p-5 rounded-[16px] shadow-sm">
          <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-2"><CreditCard className="w-4 h-4 text-green-500"/> Total Order Value</div>
          <div className="text-3xl font-extrabold text-[#176B3A]">₹10,20,000</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button onClick={()=>setActiveTab("all")} className={`pb-4 px-4 font-bold text-sm transition-colors relative ${activeTab === 'all' ? 'text-[#176B3A]' : 'text-gray-500 hover:text-gray-700'}`}>
          All
          {activeTab === 'all' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#176B3A]"></div>}
        </button>
        <button onClick={()=>setActiveTab("active")} className={`pb-4 px-4 font-bold text-sm transition-colors relative ${activeTab === 'active' ? 'text-[#176B3A]' : 'text-gray-500 hover:text-gray-700'}`}>
          Active (1)
          {activeTab === 'active' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#176B3A]"></div>}
        </button>
        <button onClick={()=>setActiveTab("completed")} className={`pb-4 px-4 font-bold text-sm transition-colors relative ${activeTab === 'completed' ? 'text-[#176B3A]' : 'text-gray-500 hover:text-gray-700'}`}>
          Completed
          {activeTab === 'completed' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#176B3A]"></div>}
        </button>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {(activeTab === "all" || activeTab === "active") ? (
          orders.map((order) => (
            <div key={order.id} className="bg-white border border-[#E3EAE4] rounded-[16px] p-6 shadow-sm hover:shadow-md hover:border-[#176B3A] transition-all cursor-pointer group" onClick={() => setSelectedOrder(order)}>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider">Order {order.id}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#17231C]">{order.produce}</span>
                    <span className="text-xl font-bold text-gray-300">•</span>
                    <span className="text-xl font-bold text-[#17231C]">{order.qty}</span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Total Value</div>
                  <div className="font-extrabold text-2xl text-[#176B3A]">₹{order.total.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-[12px] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center font-bold text-[#17231C]">{order.business.charAt(0)}</div>
                  <div className="font-bold text-sm text-[#17231C] flex items-center gap-1">{order.business} {order.verified && <ShieldCheck className="w-3 h-3 text-[#176B3A]"/>}</div>
                </div>

                {/* Mini timeline */}
                <div className="flex items-center gap-1 w-full md:w-auto">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#176B3A]"></div>
                    <div className="text-[9px] font-bold text-gray-500 uppercase">Offer</div>
                  </div>
                  <div className="h-0.5 w-8 bg-[#176B3A]"></div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#176B3A]"></div>
                    <div className="text-[9px] font-bold text-gray-500 uppercase">Order</div>
                  </div>
                  <div className="h-0.5 w-8 bg-gray-300"></div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                    <div className="text-[9px] font-bold text-gray-500 uppercase">Pay</div>
                  </div>
                  <div className="h-0.5 w-8 bg-gray-300"></div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                    <div className="text-[9px] font-bold text-gray-500 uppercase">Ship</div>
                  </div>
                </div>

                <div className="text-[#176B3A] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  View order <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-[16px] border border-[#E3EAE4] shadow-sm">
            <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-[#17231C] text-lg mb-2">No completed orders yet</h3>
            <p className="text-gray-500">Your accepted offers and active orders will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
