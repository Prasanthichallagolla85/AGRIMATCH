"use client";

import Link from "next/link";
import { useRef } from "react";
import { 
  CheckCircle2, Plus, Search, FileText, TrendingUp, Sparkles, MapPin, 
  ShieldCheck, Package, AlertTriangle, Mic, Bell, BarChart3, ArrowUpRight,
  Star, Zap
} from "lucide-react";
import { LISTINGS, PRODUCTS, REQUIREMENTS, BUYERS, OFFERS, ORDERS } from "@/lib/demo-data";
import { useLang } from "@/contexts/LanguageContext";

export default function FarmerHome() {
  const bannerScrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const myListings = LISTINGS.filter(l => l.supplierId === "s-1");

  return (
    <div className="min-h-screen pb-24 overflow-x-hidden" style={{ background: "linear-gradient(160deg, #f0faf2 0%, #f8faf7 60%, #f0f4ff 100%)" }}>
      
      {/* ══ MARKET TICKER ══ */}
      <div className="bg-[#0d1f12] text-white overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] items-center gap-10 py-2.5 text-[10px] font-bold tracking-widest uppercase">
          {[
            { label: "Mango (Grade A)", price: "₹52,000/t", up: true },
            { label: "Sona Masoori Rice", price: "₹34,000/t", up: true },
            { label: "Tomato", price: "₹12,000/t", up: false },
            { label: "Cotton", price: "₹68,000/t", up: true },
            { label: "Groundnut", price: "₹51,000/t", up: false },
          ].concat([
            { label: "Mango (Grade A)", price: "₹52,000/t", up: true },
            { label: "Sona Masoori Rice", price: "₹34,000/t", up: true },
            { label: "Tomato", price: "₹12,000/t", up: false },
          ]).map((item, i) => (
            <span key={i} className="flex items-center gap-2 shrink-0">
              <span className={item.up ? "text-emerald-400" : "text-red-400"}>{item.up ? "▲" : "▼"}</span>
              <span className="text-gray-300">{item.label}</span>
              <span className="text-white font-extrabold">{item.price}</span>
              <span className="w-px h-3 bg-white/20 ml-2"/>
            </span>
          ))}
          <span className="flex items-center gap-1.5 text-yellow-300 shrink-0 ml-4">
            <Sparkles className="w-3 h-3" /> AI ALERT: MANGO DEMAND SURGING IN AP
          </span>
        </div>
      </div>

      <div className="px-4 md:px-10 pt-5 md:pt-8 space-y-6 md:space-y-8">

        {/* ══ HERO GREETING ══ */}
        <section className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #112417 0%, #1a3d20 50%, #1e4726 100%)" }}>
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #2F8F46, transparent)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #F2C94C, transparent)" }} />
          
          <div className="relative z-10 p-5 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" /> {t.verified}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                    <MapPin className="w-3 h-3" /> Eluru, AP
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 md:mb-3 leading-tight">
                  {t.greeting} <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">👋</span>
                </h1>
                <p className="text-green-200/80 text-xs sm:text-sm md:text-base font-medium max-w-lg leading-relaxed">
                  {t.greetingSubtitle} <span className="text-yellow-300 font-bold">{t.activeBuyers}</span> {t.greetingEnd}
                </p>
              </div>

              {/* Stats pills */}
              <div className="flex flex-row md:flex-col gap-2 md:gap-3 shrink-0 w-full md:w-auto overflow-x-auto hide-scrollbar pb-1 md:pb-0">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 flex flex-col justify-center min-w-[110px] md:min-w-0 md:text-center shrink-0">
                  <div className="text-lg md:text-2xl font-black text-white">₹4.2L</div>
                  <div className="text-[9px] md:text-[10px] font-bold text-green-300 uppercase tracking-widest mt-0.5">This Month</div>
                </div>
                <div className="flex gap-2 md:gap-3 shrink-0">
                  <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-xl px-4 py-3 md:px-3 md:py-2 flex flex-col justify-center items-center min-w-[90px] md:min-w-0">
                    <div className="text-lg md:text-base font-black text-yellow-300">8</div>
                    <div className="text-[9px] font-bold text-yellow-400/80 uppercase mt-0.5 md:mt-0">Interested</div>
                  </div>
                  <div className="bg-emerald-400/20 border border-emerald-400/30 rounded-xl px-4 py-3 md:px-3 md:py-2 flex flex-col justify-center items-center min-w-[90px] md:min-w-0">
                    <div className="text-lg md:text-base font-black text-emerald-300">3</div>
                    <div className="text-[9px] font-bold text-emerald-400/80 uppercase mt-0.5 md:mt-0">Offers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile progress bar */}
            <div className="mt-5 md:mt-6 flex items-center gap-3 md:gap-4">
              <span className="text-[9px] md:text-[10px] font-extrabold text-gray-400 uppercase tracking-widest shrink-0">{t.profile}</span>
              <div className="flex-1 bg-white/10 rounded-full h-1.5 md:h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-400 to-green-300 h-full rounded-full w-[85%] relative">
                  <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite] -skew-x-12" />
                </div>
              </div>
              <span className="text-sm font-extrabold text-emerald-300">85%</span>
              <Link href="/farmer/profile" className="text-[10px] font-bold text-green-300 hover:text-white transition-colors underline underline-offset-2">
                Complete →
              </Link>
            </div>
          </div>
        </section>

        {/* ══ QUICK ACTIONS ══ */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.quickActionsTitle}</h2>
          </div>
          <div className="flex md:grid md:grid-cols-4 gap-3 overflow-x-auto hide-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            <Link href="/farmer/sell" className="shrink-0 w-36 md:w-auto group relative bg-gradient-to-br from-[#176B3A] to-[#0e4a27] text-white p-3.5 md:p-5 rounded-[20px] shadow-lg flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-white/20 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5" />
              </div>
              <div className="font-bold text-sm mb-0.5">{t.sellProduce}</div>
              <div className="text-[10px] text-white/70">{t.sellProduceDesc}</div>
            </Link>

            <Link href="#demand" className="shrink-0 w-36 md:w-auto group bg-white border border-gray-100 p-3.5 md:p-5 rounded-[20px] shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all duration-200">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-blue-50 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <div className="font-bold text-sm text-gray-900 mb-0.5">{t.buyerDemand}</div>
              <div className="text-[10px] text-gray-400">{t.buyerDemandDesc}</div>
            </Link>

            <Link href="/farmer/offers" className="shrink-0 w-36 md:w-auto group bg-white border border-gray-100 p-3.5 md:p-5 rounded-[20px] shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all duration-200 relative">
              <span className="absolute top-2.5 right-2.5 text-[9px] font-extrabold bg-orange-500 text-white px-1.5 py-0.5 rounded-full z-10">3</span>
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-orange-50 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                <Bell className="w-5 h-5 text-orange-500" />
              </div>
              <div className="font-bold text-sm text-gray-900 mb-0.5">{t.offers}</div>
              <div className="text-[10px] text-gray-400">{t.offersDesc}</div>
            </Link>

            <Link href="/farmer/orders" className="shrink-0 w-36 md:w-auto group bg-white border border-gray-100 p-3.5 md:p-5 rounded-[20px] shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-1 active:scale-95 transition-all duration-200">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-purple-50 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                <Package className="w-5 h-5 text-purple-600" />
              </div>
              <div className="font-bold text-sm text-gray-900 mb-0.5">{t.orders}</div>
              <div className="text-[10px] text-gray-400">{t.ordersDesc}</div>
            </Link>
          </div>
        </section>

        {/* ══ AGRIMATCH AI ══ */}
        <section className="relative rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #176B3A 0%, #1a7d44 40%, #1e4726 100%)" }}>
          <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #F2C94C, transparent)" }} />
          <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full blur-2xl opacity-10" style={{ background: "radial-gradient(circle, #60efff, transparent)" }} />
          
          <div className="relative z-10 p-6">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-7 h-7 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </div>
              <h2 className="font-extrabold text-xl text-white tracking-tight">{t.aiTitle}</h2>
            </div>
            <p className="text-green-200/80 text-xs mb-5">{t.aiSubtitle}</p>
            
            <div className="relative mb-5">
              <input 
                type="text" 
                placeholder={t.aiPlaceholder}
                className="w-full h-14 pl-5 pr-14 bg-white/10 border border-white/20 rounded-2xl text-sm text-white placeholder:text-green-200/60 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all backdrop-blur-sm shadow-inner"
              />
              <button className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-gradient-to-br from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95">
                <Mic className="w-4 h-4 text-yellow-950" />
              </button>
            </div>

            <div className="flex overflow-x-auto gap-2.5 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-1">
              {[t.aiChip1, t.aiChip2, t.aiChip3, t.aiChip4].map((chip, i) => (
                <button key={i} className="whitespace-nowrap px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-full text-xs font-semibold text-white/90 transition-all shrink-0 shadow-sm backdrop-blur-sm">
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TWO-COLUMN LAYOUT ══ */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* LEFT - 2 cols */}
          <div className="md:col-span-2 space-y-6">
            
            {/* BUSINESSES DEMAND */}
            <section id="demand">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.businessDemand}</h2>
                <Link href="/farmer/market" className="text-xs font-bold text-[#176B3A] hover:underline">{t.viewAllDemand}</Link>
              </div>
              <div className="space-y-3">
                {REQUIREMENTS.slice(0, 2).map(req => {
                  const product = PRODUCTS.find(p => p.id === req.productId);
                  const buyer = BUYERS.find(b => b.id === req.buyerId);
                  if (!product || !buyer) return null;
                  return (
                    <div key={req.id} className="group bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-all relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-l-2xl" />
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <span className="font-bold text-gray-900">{product.name}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-600">{req.quantity} {req.unit}</span>
                            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> 92% match
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 font-medium">{buyer.name} · {req.location}</div>
                          <div className="flex gap-2 mt-2">
                            <span className="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-1 rounded-lg font-medium">{req.quality}</span>
                          </div>
                        </div>
                        <Link href="/farmer/market" className="shrink-0 flex items-center gap-1 text-xs font-bold text-white bg-[#112417] hover:bg-[#176B3A] px-3 py-2 rounded-xl transition-colors">
                          View <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* YOUR PRODUCE */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.yourProduce}</h2>
                <Link href="/farmer/sell" className="text-xs font-bold text-[#176B3A] hover:underline">{t.viewAllListings}</Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {myListings.slice(0, 2).map(listing => {
                  const product = PRODUCTS.find(p => p.id === listing.productId);
                  if (!product) return null;
                  return (
                    <div key={listing.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
                      <div className="h-36 relative overflow-hidden bg-gray-100">
                        <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-3 right-3 bg-emerald-400 text-emerald-900 text-[9px] font-extrabold px-2 py-1 rounded-full uppercase tracking-wider">Active</div>
                        <div className="absolute bottom-3 left-3">
                          <div className="text-white font-extrabold text-lg leading-tight">{product.name}</div>
                          <div className="text-white/80 text-xs">{listing.quality} · {listing.quantity} {listing.unit}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-blue-50 rounded-xl p-2.5 border border-blue-100">
                            <div className="text-[9px] font-extrabold text-blue-600 uppercase flex items-center gap-1 mb-1"><Sparkles className="w-2.5 h-2.5" /> AI Grade</div>
                            <div className="text-sm font-bold text-gray-900">{listing.quality}</div>
                            <div className="text-[9px] text-gray-400">{listing.aiConfidence}% confidence</div>
                          </div>
                          <div className="bg-yellow-50 rounded-xl p-2.5 border border-yellow-100">
                            <div className="text-[9px] font-extrabold text-yellow-700 uppercase flex items-center gap-1 mb-1"><TrendingUp className="w-2.5 h-2.5" /> Market</div>
                            <div className="text-sm font-bold text-gray-900">{listing.priceRange}</div>
                            <div className="text-[9px] text-emerald-600 font-bold">High Demand</div>
                          </div>
                        </div>
                        <Link href="/farmer/sell" className="block w-full text-center py-2.5 bg-gray-900 hover:bg-[#176B3A] text-white text-xs font-bold rounded-xl transition-colors">
                          Manage Listing →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* LATEST OFFERS */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.latestOffers}</h2>
                <Link href="/farmer/offers" className="text-xs font-bold text-[#176B3A] hover:underline">{t.viewAllOffers}</Link>
              </div>
              {OFFERS.slice(0, 1).map(offer => {
                const req = REQUIREMENTS.find(r => r.id === offer.requirementId);
                const buyer = BUYERS.find(b => b.id === req?.buyerId);
                const product = PRODUCTS.find(p => p.id === req?.productId);
                if (!req || !buyer || !product) return null;
                return (
                  <div key={offer.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          <div className="w-9 h-9 rounded-full bg-[#176B3A] text-white text-sm font-extrabold flex items-center justify-center">
                            {buyer.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-sm">{buyer.name}</div>
                            <div className="text-xs text-gray-400">{product.name} · {offer.quantity} tonnes</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          <span className="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-1 rounded-lg">{offer.logistics}</span>
                          <span className="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-1 rounded-lg">{offer.payment}</span>
                        </div>
                      </div>
                      <div className="flex items-center sm:flex-col sm:items-end gap-3">
                        <div className="text-2xl font-extrabold text-[#176B3A]">{offer.price}</div>
                        <Link href="/farmer/offers" className="whitespace-nowrap px-5 py-2.5 bg-[#112417] hover:bg-[#176B3A] text-white text-xs font-bold rounded-xl transition-colors">
                          Review Offer →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>

          {/* RIGHT - 1 col */}
          <div className="space-y-5">
            
            {/* AI INSIGHT */}
            <section className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-4 h-4 text-emerald-700" />
                </div>
                <h3 className="font-bold text-emerald-900 text-sm">{t.nextBestAction}</h3>
              </div>
              <p className="text-sm text-green-800 font-medium leading-snug mb-4">
                A buyer is looking for Grade A mangoes in Andhra Pradesh. Your listing matches <strong>92%</strong> of their criteria.
              </p>
              <Link href="/farmer/market" className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors">
                Review Buyer Demand <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </section>

            {/* ATTENTION */}
            <section className="bg-orange-50 border border-orange-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="font-bold text-orange-900 text-sm">{t.needsAttention}</h3>
              </div>
              <div className="bg-white rounded-xl border border-orange-100 p-3 flex justify-between items-center">
                <span className="text-sm text-gray-700 font-medium">{t.offersWaiting}</span>
                <Link href="/farmer/offers" className="text-xs font-bold text-orange-600 hover:text-orange-800">{t.review}</Link>
              </div>
            </section>

            {/* MARKET PRICES */}
            <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.marketIntelligence}</h3>
                <BarChart3 className="w-4 h-4 text-gray-300" />
              </div>
              <div className="space-y-3">
                {[
                  { crop: "Mango", price: "₹48–₹56", unit: "/kg", trend: "+12%", up: true },
                  { crop: "Rice", price: "₹31–₹34", unit: "/kg", trend: "+4%", up: true },
                  { crop: "Tomato", price: "₹8–₹12", unit: "/kg", trend: "-18%", up: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-gray-900">{item.crop}</div>
                      <div className="text-xs text-gray-400">{item.price}<span className="text-gray-300">{item.unit}</span></div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.up ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
                      {item.trend}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* FARM PERFORMANCE */}
            <section className="bg-[#0d1f12] rounded-2xl p-5 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.farmPerformance}</h3>
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: t.activeListings, value: "2", color: "text-white" },
                  { label: t.buyerInterest, value: "8", color: "text-yellow-300" },
                  { label: t.offersReceived, value: "3", color: "text-orange-300" },
                  { label: t.completedSales, value: "6", color: "text-emerald-400" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3">
                    <div className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>

    </div>
  );
}
