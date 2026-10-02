import Link from "next/link";
import { ArrowLeft, MapPin, CheckCircle2, ShieldCheck, Sparkles, AlertTriangle, Truck, Share2, Bookmark, Scale, FileText } from "lucide-react";
import { LISTINGS, PRODUCTS, SUPPLIERS } from "@/lib/demo-data";
import { notFound } from "next/navigation";

export default function SupplyDetail({ params }: { params: { id: string } }) {
  const listing = LISTINGS.find(l => l.id === params.id);
  if (!listing) return notFound();

  const product = PRODUCTS.find(p => p.id === listing.productId);
  const supplier = SUPPLIERS.find(s => s.id === listing.supplierId);
  
  if (!product || !supplier) return notFound();

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <Link href="/business/find-supply" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Supply Marketplace
      </Link>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Gallery Placeholder */}
        <div className="h-64 sm:h-96 w-full bg-gray-100 relative group">
          <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
          {listing.organic && (
            <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm uppercase">
              Organic Certified
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)]">{product.name}</h1>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-bold px-3 py-1 bg-gray-100 rounded-lg text-gray-700">{listing.quality}</span>
                  <span className="flex items-center gap-1 text-gray-600"><MapPin className="w-4 h-4" /> {listing.location}</span>
                  <span className="text-[var(--color-brand-primary)] font-bold bg-green-50 px-2 py-1 rounded-md">{listing.quantity} {listing.unit} Available</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-4">
                <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-2">Indicative Pricing</h3>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-extrabold text-[var(--color-brand-primary)]">{listing.priceRange}</span>
                  <span className="text-sm text-gray-500 mb-1">Estimated market range</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b border-gray-100 pb-2">AI Sourcing Explanation</h3>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-blue-800 font-bold mb-3">
                    <Sparkles className="w-5 h-5" /> Why this matches your requirements
                  </div>
                  <ul className="space-y-2 text-sm text-blue-900">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Product precisely matches active requirement</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Grade quality meets or exceeds criteria</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Verified producer in preferred region</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Available quantity can fulfill 100% of order</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b border-gray-100 pb-2">Logistics & Availability</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Truck className="w-5 h-5 text-gray-500 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Pickup/Delivery</div>
                      <div className="font-bold text-sm text-gray-900">Buyer pickup preferred</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <AlertTriangle className="w-5 h-5 text-gray-500 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Availability</div>
                      <div className="font-bold text-sm text-gray-900">{listing.availability}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-80 space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Supplier Information</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img src={supplier.image} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" alt={supplier.name} />
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">{supplier.name}</h4>
                    <div className="text-xs text-gray-500">Since {supplier.since}</div>
                  </div>
                </div>
                {supplier.verified && (
                  <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-2 rounded-lg border border-green-100 font-medium mb-4">
                    <ShieldCheck className="w-4 h-4" /> Verified Producer
                  </div>
                )}
                <div className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {supplier.description}
                </div>
                <Link href={`/business/suppliers/${supplier.id}`} className="block w-full text-center py-2 text-sm font-bold text-[#176B3A] bg-white border border-[#176B3A] rounded-xl hover:bg-green-50 transition-colors">
                  View Full Profile
                </Link>
              </div>

              <div className="space-y-3">
                <Link href={`/business/offers/new?listingId=${listing.id}`} className="block w-full py-4 text-center rounded-xl text-white font-bold bg-[#176B3A] hover:bg-[#125c31] transition-colors shadow-sm">
                  Make an Offer
                </Link>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 flex items-center justify-center gap-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <Bookmark className="w-4 h-4" /> Save
                  </button>
                  <button className="flex-1 py-3 flex items-center justify-center gap-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
