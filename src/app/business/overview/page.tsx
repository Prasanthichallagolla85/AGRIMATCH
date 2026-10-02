"use client";

import { ArrowRight, FileText, Search, Sparkles, TrendingUp, Users, Truck, DollarSign, ChevronRight, ChevronLeft, PackagePlus, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function BusinessOverview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-12 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] mb-2">Good morning, Priya</h1>
        <p className="text-[var(--color-text-secondary)] font-medium">Procurement Overview <span className="ml-2 text-xs font-bold uppercase bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Prototype Data</span></p>
      </div>
      
      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Requirements</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">08</div>
          <div className="text-[10px] font-bold text-gray-400 mt-auto">Active</div>
        </div>
        <div className="bg-[#f0fdf4] p-4 rounded-2xl border border-[#bbf7d0] shadow-sm flex flex-col">
          <div className="text-xs font-bold text-[#166534] uppercase tracking-wider mb-2">Matching Supply</div>
          <div className="text-2xl font-bold text-[#166534] mb-1">32</div>
          <div className="text-[10px] font-bold text-[#166534] mt-auto">New matches today</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Offers</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">06</div>
          <div className="text-[10px] font-bold text-yellow-600 mt-auto">Pending</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Active Orders</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">14</div>
          <div className="text-[10px] font-bold text-blue-600 mt-auto">Processing</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Suppliers</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">48</div>
          <div className="text-[10px] font-bold text-gray-400 mt-auto">Discovered</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Deliveries</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">03</div>
          <div className="text-[10px] font-bold text-purple-600 mt-auto">Upcoming</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:col-span-2 lg:col-span-1">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Spend</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">₹8.4L</div>
          <div className="text-[10px] font-bold text-gray-400 mt-auto">This month</div>
        </div>
      </div>

      {/* BANNERS */}
      <div className="relative group">
        <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 z-10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 hidden md:flex">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 z-10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 hidden md:flex">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory">
          
          <div className="shrink-0 w-[300px] sm:w-[350px] h-[180px] rounded-2xl relative overflow-hidden snap-start group/banner">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80')] bg-cover bg-center transition-transform duration-700 group-hover/banner:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 w-fit px-2.5 py-1 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" /> AI SOURCING
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Find the right agricultural supply faster.</h3>
                <Link href="/business/ai-procurement" className="inline-flex items-center gap-1 text-sm font-bold text-white group-hover/banner:gap-2 transition-all">
                  Explore Matches <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-[300px] sm:w-[350px] h-[180px] rounded-2xl relative overflow-hidden snap-start group/banner">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80')] bg-cover bg-center transition-transform duration-700 group-hover/banner:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-800/30"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 w-fit px-2.5 py-1 rounded-lg backdrop-blur-sm">
                <TrendingUp className="w-3.5 h-3.5" /> SEASONAL DEMAND
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Mango demand is rising across Andhra Pradesh.</h3>
                <Link href="/business/find-supply" className="inline-flex items-center gap-1 text-sm font-bold text-white group-hover/banner:gap-2 transition-all">
                  View Demand <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-[300px] sm:w-[350px] h-[180px] rounded-2xl relative overflow-hidden snap-start group/banner">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627914872658-00624a0d8ff0?q=80')] bg-cover bg-center transition-transform duration-700 group-hover/banner:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#176B3A]/90 to-[#176B3A]/40"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 w-fit px-2.5 py-1 rounded-lg backdrop-blur-sm">
                <PackagePlus className="w-3.5 h-3.5" /> NEW SUPPLY
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">12 tonnes of Grade A Mango just matched your requirement.</h3>
                <Link href="/business/find-supply" className="inline-flex items-center gap-1 text-sm font-bold text-white group-hover/banner:gap-2 transition-all">
                  View Supplier <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-[300px] sm:w-[350px] h-[180px] rounded-2xl relative overflow-hidden snap-start bg-gray-900 group/banner">
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-300 bg-white/10 w-fit px-2.5 py-1 rounded-lg">
                <Search className="w-3.5 h-3.5" /> PROCUREMENT INTELLIGENCE
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Turn your requirements into supplier matches with AI.</h3>
                <Link href="/business/ai-procurement" className="inline-flex items-center gap-1 text-sm font-bold text-[var(--color-brand-primary)] group-hover/banner:gap-2 transition-all">
                  Try AI Procurement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-[300px] sm:w-[350px] h-[180px] rounded-2xl relative overflow-hidden snap-start group/banner">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80')] bg-cover bg-center transition-transform duration-700 group-hover/banner:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/40"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 w-fit px-2.5 py-1 rounded-lg backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED SUPPLIERS
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Discover verified producers across agricultural categories.</h3>
                <Link href="/business/suppliers" className="inline-flex items-center gap-1 text-sm font-bold text-white group-hover/banner:gap-2 transition-all">
                  Find Supply <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Requirements</h2>
              <Link href="/business/requirements" className="text-[var(--color-brand-primary)] text-sm font-bold hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex justify-between items-center hover:border-gray-200 transition-colors cursor-pointer">
                <div>
                  <div className="font-bold text-gray-900">Grade A Mango - 20T</div>
                  <div className="text-sm text-gray-500">Needed by Oct 15 • Andhra Pradesh</div>
                </div>
                <div className="text-right">
                  <div className="text-[#176B3A] font-bold">12 Matches</div>
                  <div className="text-xs text-gray-500 font-medium">Active</div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex justify-between items-center hover:border-gray-200 transition-colors cursor-pointer">
                <div>
                  <div className="font-bold text-gray-900">Sona Masoori Rice - 50T</div>
                  <div className="text-sm text-gray-500">Needed by Oct 20 • South India</div>
                </div>
                <div className="text-right">
                  <div className="text-[#176B3A] font-bold">5 Matches</div>
                  <div className="text-xs text-gray-500 font-medium">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/business/requirements/new" className="bg-gray-50 border border-gray-100 hover:border-[#176B3A] p-4 rounded-xl text-left transition-all group">
                <div className="w-10 h-10 bg-green-100 text-[#176B3A] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm text-gray-900">New Requirement</div>
                <div className="text-[10px] text-gray-500 mt-1">Use AI assistant</div>
              </Link>
              <Link href="/business/find-supply" className="bg-gray-50 border border-gray-100 hover:border-blue-600 p-4 rounded-xl text-left transition-all group">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Search className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm text-gray-900">Find Supply</div>
                <div className="text-[10px] text-gray-500 mt-1">Search marketplace</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
