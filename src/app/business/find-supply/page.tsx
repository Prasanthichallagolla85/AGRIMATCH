"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, CheckCircle, Sparkles, Filter, CheckCircle2, ChevronDown, Calendar, Package } from "lucide-react";
import { LISTINGS, PRODUCTS, SUPPLIERS, CATEGORIES } from "@/lib/demo-data";

export default function FindSupply() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Find Agricultural Supply</h1>
          <p className="text-gray-500">Discover verified agricultural producers matched to your procurement needs.</p>
        </div>
      </div>

      {/* SEARCH AND FILTERS */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search mangoes, rice, cotton, tomatoes..." 
              className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
            />
          </div>
          <button className="h-12 px-6 flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition-colors shrink-0">
            <Filter className="w-4 h-4" /> All Filters
          </button>
          <div className="hidden lg:flex items-center gap-2 h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700">
            <span className="text-sm font-medium">Sort:</span>
            <select className="bg-transparent border-none focus:outline-none text-sm font-bold cursor-pointer">
              <option>Best Match</option>
              <option>Newest</option>
              <option>Largest Supply</option>
              <option>Nearest</option>
              <option>Quality</option>
              <option>Indicative Price</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
          <button 
            onClick={() => setActiveCategory("All")}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${activeCategory === "All" ? "bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)]" : "bg-white text-gray-600 border-gray-200 hover:border-[var(--color-brand-primary)]"}`}
          >
            All Categories
          </button>
          {CATEGORIES.map(c => (
            <button 
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${activeCategory === c ? "bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)]" : "bg-white text-gray-600 border-gray-200 hover:border-[var(--color-brand-primary)]"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
          <span className="px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-medium cursor-pointer hover:bg-green-100">Verified producer ✓</span>
          <span className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium cursor-pointer hover:bg-blue-100">AI assessed ✦</span>
          <span className="px-3 py-1.5 bg-gray-50 text-gray-700 border border-gray-200 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-100">Organic</span>
          <span className="px-3 py-1.5 bg-gray-50 text-gray-700 border border-gray-200 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-100">Available now</span>
          <span className="px-3 py-1.5 bg-gray-50 text-gray-700 border border-gray-200 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-100">Ready for pickup</span>
        </div>
      </div>

      <div className="flex justify-between items-center px-1">
        <h2 className="font-bold text-lg text-gray-800">Matching Supply</h2>
        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Prototype Data</span>
      </div>
      
      {/* SUPPLY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {LISTINGS.filter(l => {
          if (activeCategory === "All") return true;
          const p = PRODUCTS.find(p => p.id === l.productId);
          return p?.category === activeCategory;
        }).map(listing => {
          const product = PRODUCTS.find(p => p.id === listing.productId);
          const supplier = SUPPLIERS.find(s => s.id === listing.supplierId);
          if (!product || !supplier) return null;

          return (
            <div key={listing.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="h-48 relative bg-gray-100 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-bold text-[#176B3A] shadow-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {Math.floor(Math.random() * 15 + 85)}% Match
                </div>
                {listing.organic && (
                  <div className="absolute top-3 right-3 bg-green-100 text-green-800 px-2 py-1 rounded-lg text-[10px] font-bold shadow-sm uppercase">
                    Organic
                  </div>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight line-clamp-1">{product.name}</h3>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-1 bg-gray-100 rounded-md text-gray-700">{listing.quality}</span>
                  <span className="text-xs font-bold text-gray-900 bg-gray-50 px-2 py-1 rounded-md border border-gray-200">{listing.quantity} {listing.unit}</span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="truncate">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="truncate">{listing.availability}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-2 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Indicative Price</span>
                    <span className="font-bold text-gray-900">{listing.priceRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Sparkles className="w-3 h-3 text-[var(--color-brand-primary)]" /> AI Quality</span>
                    <span className="font-bold text-[var(--color-brand-primary)] text-xs">{listing.quality} ({listing.aiConfidence}%)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden shrink-0">
                    <img src={supplier.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs text-gray-700 font-medium truncate flex-1">{supplier.name}</div>
                  {supplier.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <Link href={`/business/supply/${listing.id}`} className="py-2.5 text-center rounded-xl text-sm font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    View Supply
                  </Link>
                  <Link href={`/business/offers/new?listingId=${listing.id}`} className="py-2.5 text-center rounded-xl text-sm font-bold text-white bg-[#176B3A] hover:bg-[#125c31] transition-colors">
                    Make Offer
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
