import Link from "next/link";
import { ArrowLeft, MapPin, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, History, Shield, Calendar, Search } from "lucide-react";
import { SUPPLIERS, LISTINGS, PRODUCTS, REQUIREMENTS, BUYERS } from "@/lib/demo-data";
import { notFound } from "next/navigation";

export default async function SupplierProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supplier = SUPPLIERS.find(s => s.id === id);
  if (!supplier) return notFound();

  // Get current produce listings for this supplier
  const supplierListings = LISTINGS.filter(l => l.supplierId === supplier.id);

  // Get matching requirements for the supplier's products
  const productIds = supplierListings.map(l => l.productId);
  const relevantRequirements = REQUIREMENTS.filter(r => productIds.includes(r.productId));

  return (
    <div className="max-w-5xl mx-auto pb-12 space-y-6">
      <Link href="/business/find-supply" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Directory
      </Link>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="h-40 sm:h-56 w-full bg-[#176B3A] relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="px-6 md:px-10 pb-8 relative">
          <div className="flex flex-col md:flex-row gap-6 md:items-end -mt-16 md:-mt-20 mb-8">
            <div className="relative inline-block shrink-0">
              <img src={supplier.image} alt={supplier.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md object-cover bg-white" />
              {supplier.verified && (
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-0.5 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] mb-2">{supplier.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {supplier.location}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Producer since {supplier.since}</span>
                {supplier.verified && (
                  <span className="flex items-center gap-1 text-green-700 font-medium bg-green-50 px-2 py-0.5 rounded-md"><ShieldCheck className="w-4 h-4" /> Verified Producer</span>
                )}
              </div>
            </div>
            
            <div className="pb-2 flex shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 border border-gray-200 px-3 py-1.5 rounded-lg bg-gray-50">Prototype Profile</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-10">
              {/* ABOUT */}
              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-100 pb-2">About</h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {supplier.description} 
                  <br/><br/>
                  <em className="text-xs text-gray-400">Note: This is prototype data used to demonstrate the AGRIMATCH B2B Supplier Profile functionality.</em>
                </p>
              </section>

              {/* CURRENT PRODUCE */}
              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-100 pb-2 flex justify-between items-end">
                  Current Produce <span className="text-sm font-normal text-gray-500">{supplierListings.length} Active Listings</span>
                </h2>
                
                {supplierListings.length === 0 ? (
                  <div className="p-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <p className="text-gray-500">No active produce listings at the moment.</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {supplierListings.map(listing => {
                      const product = PRODUCTS.find(p => p.id === listing.productId);
                      if (!product) return null;
                      return (
                        <div key={listing.id} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col hover:border-[var(--color-brand-primary)] transition-colors shadow-sm">
                          <div className="flex gap-4 mb-4">
                            <img src={product.image} className="w-16 h-16 rounded-lg object-cover bg-gray-100 shrink-0" />
                            <div>
                              <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                              <div className="text-xs text-gray-500 mb-1">{listing.quality}</div>
                              <div className="font-bold text-[var(--color-brand-primary)] text-sm">{listing.quantity} {listing.unit}</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                            <span className="text-xs font-medium text-gray-600">{listing.priceRange}</span>
                            <Link href={`/business/supply/${listing.id}`} className="text-xs font-bold text-[#176B3A] hover:underline">View Details →</Link>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </section>

              {/* BUSINESS DEMAND */}
              <section>
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-6">
                  <h2 className="text-xl font-bold mb-4 text-[#166534] flex items-center gap-2">
                    <Search className="w-5 h-5" /> What Businesses Are Looking For
                  </h2>
                  <p className="text-sm text-[#166534] mb-6 opacity-90">
                    Active procurement requirements matching {supplier.name}'s produce categories.
                  </p>

                  <div className="space-y-3">
                    {relevantRequirements.map(req => {
                      const product = PRODUCTS.find(p => p.id === req.productId);
                      const buyer = BUYERS.find(b => b.id === req.buyerId);
                      if (!product || !buyer) return null;

                      return (
                        <div key={req.id} className="bg-white rounded-xl p-4 border border-[#bbf7d0] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <div className="text-xs font-bold text-gray-500 mb-1">{buyer.name}</div>
                            <h3 className="font-bold text-gray-900">{product.name} • {req.quantity} {req.unit}</h3>
                            <div className="text-xs text-gray-600 mt-1">Required by: {req.deadline} • Region: {req.location}</div>
                          </div>
                          <button className="whitespace-nowrap px-4 py-2 bg-white text-[#166534] font-bold text-sm border border-[#166534] rounded-lg hover:bg-[#f0fdf4] transition-colors shrink-0">
                            View Requirement
                          </button>
                        </div>
                      )
                    })}
                    {relevantRequirements.length === 0 && (
                      <div className="text-sm text-gray-500 italic">No exact matching active demand right now.</div>
                    )}
                  </div>
                </div>
              </section>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              {/* QUALITY HISTORY */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-brand-primary)]" /> Quality History
                </h3>
                <div className="space-y-4">
                  {supplierListings.slice(0, 3).map(listing => {
                     const product = PRODUCTS.find(p => p.id === listing.productId);
                     return (
                       <div key={`qh-${listing.id}`} className="flex justify-between items-center text-sm">
                         <div>
                           <div className="font-medium text-gray-900">{product?.name}</div>
                           <div className="text-xs text-gray-500">{listing.quality}</div>
                         </div>
                         <div className="text-right">
                           <div className="font-bold text-[var(--color-brand-primary)]">{listing.aiConfidence}%</div>
                           <div className="text-[10px] text-gray-400">AI Confidence</div>
                         </div>
                       </div>
                     )
                  })}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500">
                  <em>AI-assisted visual assessment. Does not replace professional inspection.</em>
                </div>
              </div>

              {/* TRUST INDICATORS */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                  <Shield className="w-4 h-4 text-[var(--color-brand-primary)]" /> Farmer Trust
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Identity Verification</span>
                    {supplier.verified ? <span className="font-bold text-green-700">Verified ✓</span> : <span className="font-bold text-gray-500">Pending</span>}
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Profile Completeness</span>
                    <span className="font-bold text-gray-900">95%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Response Status</span>
                    <span className="font-bold text-gray-900">Usually 24h</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500 flex justify-between">
                  <span>Marketplace Rating</span>
                  <span className="font-bold text-[var(--color-brand-primary)]">4.8 / 5.0 (Prototype)</span>
                </div>
              </div>

              {/* TRANSACTION HISTORY */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                  <History className="w-4 h-4 text-[var(--color-brand-primary)]" /> Transaction History
                </h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Successful Orders</span>
                    <span className="font-bold text-gray-900">14 (Prototype)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>On-time Delivery</span>
                    <span className="font-bold text-gray-900">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
