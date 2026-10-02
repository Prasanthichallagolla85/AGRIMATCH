const fs = require('fs');
const path = require('path');

const write = (filepath, content) => {
  const fullPath = path.join(process.cwd(), filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
};

// 1. Farmer Sell Page
write('src/app/farmer/sell/page.tsx', `
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, ArrowRight, Camera, CheckCircle2, AlertCircle } from "lucide-react";

export default function SellProduce() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [data, setData] = useState({ product: 'Mango', quantity: 20, state: 'Andhra Pradesh', district: 'Eluru' });

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(6);
    }, 2000);
  };

  const publish = () => {
    // In a real app, save to DB here
    setStep(7);
  };

  return (
    <div className="max-w-2xl mx-auto pb-20">
      <h1 className="text-2xl font-bold mb-6">List Your Produce</h1>
      
      {/* Progress Steps */}
      <div className="flex justify-between mb-8 px-2">
        {[1,2,3,4,5,6].map(s => (
          <div key={s} className={\`w-full h-2 mx-1 rounded-full \${step >= s ? 'bg-[var(--color-brand-primary)]' : 'bg-gray-200'}\`} />
        ))}
      </div>

      <div className="card">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">What are you selling?</h2>
            <select className="input-field" defaultValue="Mango">
              <option value="Mango">Mango</option>
              <option value="Rice">Rice</option>
              <option value="Cotton">Cotton</option>
              <option value="Tomato">Tomato</option>
            </select>
            <button onClick={() => setStep(2)} className="btn-primary w-full mt-4">Continue</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">How much do you have?</h2>
            <div className="flex gap-4">
              <input type="number" defaultValue="20" className="input-field flex-2" />
              <select className="input-field flex-1" defaultValue="tonnes">
                <option value="tonnes">Tonnes</option>
                <option value="kg">Kg</option>
              </select>
            </div>
            <button onClick={() => setStep(3)} className="btn-primary w-full mt-4">Continue</button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Where is the produce?</h2>
            <input type="text" defaultValue="Andhra Pradesh" className="input-field" placeholder="State" />
            <input type="text" defaultValue="Eluru" className="input-field" placeholder="District" />
            <button onClick={() => setStep(4)} className="btn-primary w-full mt-4">Continue</button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Add photos</h2>
            <div className="border-2 border-dashed border-[var(--color-border-subtle)] rounded-xl p-8 flex flex-col items-center justify-center bg-green-50/50 cursor-pointer hover:bg-green-50">
              <Camera className="w-10 h-10 text-[var(--color-brand-primary)] mb-2" />
              <p className="font-medium text-[var(--color-brand-primary)]">Tap to upload photos</p>
              <p className="text-xs text-gray-500 mt-2">Clear photos help AGRIMATCH provide better AI-assisted analysis.</p>
            </div>
            <button onClick={() => setStep(5)} className="btn-primary w-full mt-4">Continue</button>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6 text-center">
            <h2 className="text-xl font-bold">AI Analysis</h2>
            {!isAnalyzing ? (
              <div>
                <p className="text-gray-600 mb-6">Let AGRIMATCH AI analyze your photos to estimate quality and market context.</p>
                <button onClick={handleAnalyze} className="btn-primary w-full flex items-center justify-center gap-2">
                  <Leaf className="w-5 h-5" /> Analyze with AGRIMATCH AI
                </button>
              </div>
            ) : (
              <div className="py-8">
                <div className="w-12 h-12 border-4 border-[var(--color-brand-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="font-medium text-[var(--color-brand-primary)]">Analyzing your produce...</p>
                <ul className="text-sm text-left max-w-xs mx-auto mt-4 space-y-2 text-gray-600">
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500"/> Produce type</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500"/> Visual appearance</li>
                  <li className="flex gap-2 items-center animate-pulse"><AlertCircle className="w-4 h-4 text-gray-400"/> Quality indicators</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-bold text-lg text-green-900 flex items-center gap-2 mb-2">
                <Leaf className="w-5 h-5" /> AI-Assisted Analysis
              </h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-800">Quality Category:</span>
                <span className="font-bold text-green-900 text-lg px-3 py-1 bg-white rounded-lg shadow-sm">Grade A</span>
              </div>
              <p className="text-xs text-green-700 italic border-t border-green-200 pt-2">
                This is an AI-assisted visual assessment based on the uploaded image. It does not replace professional quality inspection.
              </p>
            </div>

            <div className="bg-white border border-[var(--color-border-subtle)] rounded-xl p-4">
              <h3 className="font-bold text-lg mb-2">Market Context</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Indicative Range:</span>
                <span className="font-bold text-xl text-[var(--color-text-primary)]">₹48–₹54 <span className="text-sm text-gray-500 font-normal">/ kg</span></span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Demand:</span>
                <span className="font-bold text-yellow-600">High in AP</span>
              </div>
            </div>

            <button onClick={publish} className="btn-primary w-full mt-4 text-lg py-4">Publish Listing</button>
          </div>
        )}

        {step === 7 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-[var(--color-brand-primary)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Listing Published!</h2>
            <p className="text-gray-600 mb-6">Your 20 tonnes of Mango is now live.</p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left rounded-r-xl mb-8">
              <p className="font-bold text-yellow-800">🔥 3 Matching Businesses Found</p>
              <p className="text-sm text-yellow-700 mt-1">AGRIMATCH found verified buyers looking for your exact produce.</p>
            </div>

            <div className="flex gap-4">
              <button onClick={() => router.push('/farmer/home')} className="btn-secondary flex-1">Home</button>
              <button onClick={() => router.push('/farmer/offers')} className="btn-primary flex-1">View Matches</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`);

// 2. Business Supply Page (Matches)
write('src/app/business/supply/page.tsx', `
import { Search, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function FindSupply() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">Find Supply</h1>
          <p className="text-gray-500">Discover and match with verified producers.</p>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
          <input type="text" placeholder="Search product, quality, or location..." className="input-field pl-10" />
        </div>
        <button className="btn-secondary px-6">Filters</button>
      </div>

      <h2 className="text-lg font-bold mb-4">Matching Supply (Based on your requirements)</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Match Card */}
        <div className="card overflow-hidden p-0 flex flex-col group hover:border-[var(--color-brand-primary)] transition-colors">
          <div className="h-40 bg-gray-100 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80')] bg-cover bg-center"></div>
            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-bold text-[var(--color-brand-primary)] shadow-sm">
              94% Match
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">Mango • Grade A</h3>
              <span className="font-bold text-gray-900">20T</span>
            </div>
            
            <div className="text-sm text-gray-600 flex items-center gap-1 mb-3">
              <MapPin className="w-4 h-4" /> Eluru, Andhra Pradesh
            </div>

            <div className="bg-gray-50 p-2 rounded-lg text-xs border border-gray-100 mb-4">
              <div className="flex items-center gap-1 text-green-700 font-medium mb-1">
                <CheckCircle className="w-3 h-3" /> Prototype Verified Farmer
              </div>
              <div className="text-gray-500">Ramesh Kumar</div>
            </div>

            <div className="mt-auto pt-4 flex gap-2">
              <Link href="/business/offers/new?listingId=l1" className="btn-primary flex-1 text-center py-2 text-sm">Make Offer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

// 3. Make Offer Page
write('src/app/business/offers/new/page.tsx', `
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function MakeOffer() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-20">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-[var(--color-brand-primary)]" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Offer Sent!</h2>
        <p className="text-gray-600 mb-8">Your offer of ₹51/kg for 20 tonnes of Mango has been sent to Ramesh Kumar.</p>
        <button onClick={() => router.push('/business/overview')} className="btn-primary">Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pb-12">
      <Link href="/business/supply" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Supply
      </Link>
      
      <h1 className="text-2xl font-bold mb-6">Make an Offer</h1>
      
      <div className="card mb-8 bg-gray-50">
        <h3 className="font-medium text-sm text-gray-500 mb-2">Listing Details</h3>
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-lg">Mango • Grade A</div>
            <div className="text-sm text-gray-600">Ramesh Kumar (Eluru, AP)</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg">20 Tonnes</div>
            <div className="text-xs text-[var(--color-brand-primary)]">Indicative: ₹48–54/kg</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Quantity</label>
            <input type="number" required defaultValue="20" className="input-field" disabled />
            <p className="text-xs text-gray-500 mt-1">Full lot selected</p>
          </div>
          <div>
            <label className="label">Offer Price (₹ / kg)</label>
            <input type="number" required defaultValue="51" className="input-field font-bold text-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Delivery/Pickup</label>
            <select className="input-field" defaultValue="pickup">
              <option value="pickup">Buyer Pickup</option>
              <option value="delivery">Seller Delivery</option>
            </select>
          </div>
          <div>
            <label className="label">Payment Terms</label>
            <select className="input-field" defaultValue="on_delivery">
              <option value="on_delivery">On Delivery</option>
              <option value="advance">Advance</option>
            </select>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex justify-between items-center font-bold text-lg text-yellow-900">
            <span>Total Offer Value</span>
            <span>₹10,20,000</span>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full text-lg py-4">Send Offer</button>
      </form>
    </div>
  );
}
`);

// 4. Farmer Offers Page (Accept Offer)
write('src/app/farmer/offers/page.tsx', `
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Shield, MapPin } from "lucide-react";

export default function FarmerOffers() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-[var(--color-brand-primary)]" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Offer Accepted!</h2>
        <p className="text-gray-600 mb-8">Order #AM-2026-0001 has been created successfully.</p>
        <button onClick={() => router.push('/farmer/orders/AM-2026-0001')} className="btn-primary">View Order Tracker</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">New Offers</h1>
      
      <div className="card border-[var(--color-brand-primary)] shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-brand-primary)]"></div>
        
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">ABC</div>
              <div>
                <h3 className="font-bold text-lg">ABC Foods</h3>
                <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                  <Shield className="w-3 h-3" /> Verified Business
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <div className="text-gray-500">Produce</div>
                <div className="font-bold">Mango (20 Tonnes)</div>
              </div>
              <div>
                <div className="text-gray-500">Offer Price</div>
                <div className="font-bold text-lg text-[var(--color-brand-primary)]">₹51/kg</div>
              </div>
              <div>
                <div className="text-gray-500">Logistics</div>
                <div className="font-medium">Buyer Pickup</div>
              </div>
              <div>
                <div className="text-gray-500">Payment</div>
                <div className="font-medium">On Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl flex flex-col justify-center items-center text-center shrink-0 min-w-[200px]">
            <div className="text-sm text-green-800 mb-1">Total Value</div>
            <div className="text-2xl font-bold text-green-950 mb-4">₹10,20,000</div>
            <button onClick={() => setAccepted(true)} className="btn-primary w-full mb-2">Accept Offer</button>
            <button className="text-xs font-medium text-gray-500 hover:text-gray-800">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

// 5. Order Tracking Page
write('src/app/farmer/orders/[id]/page.tsx', `
import { CheckCircle2, Truck, CreditCard, Box } from "lucide-react";
import Link from "next/link";

export default function OrderTracking({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-3xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order #{params.id}</h1>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Active</span>
      </div>

      <div className="card mb-8">
        <div className="flex justify-between border-b border-gray-100 pb-4 mb-4">
          <div>
            <div className="text-gray-500 text-sm">Buyer</div>
            <div className="font-bold">ABC Foods (Verified)</div>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-sm">Total Value</div>
            <div className="font-bold text-xl text-[var(--color-brand-primary)]">₹10,20,000</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-gray-500 text-sm">Produce</div>
            <div className="font-medium">Mango • Grade A • 20 Tonnes</div>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-sm">Terms</div>
            <div className="font-medium">Buyer Pickup • On Delivery</div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">Transaction Timeline</h2>
      <div className="card p-6">
        <div className="relative border-l-2 border-green-200 ml-4 space-y-8">
          
          <div className="relative">
            <div className="absolute -left-[25px] bg-green-500 rounded-full p-1 text-white border-4 border-white">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-gray-900">Offer Accepted</h3>
              <p className="text-sm text-gray-500">Order created between you and ABC Foods.</p>
              <span className="text-xs text-gray-400 mt-1 block">Today, 10:15 AM</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[25px] bg-gray-200 rounded-full p-1 text-gray-500 border-4 border-white">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-gray-400">Payment Initiated</h3>
              <p className="text-sm text-gray-400">Waiting for buyer to initiate payment via platform.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[25px] bg-gray-200 rounded-full p-1 text-gray-500 border-4 border-white">
              <Truck className="w-5 h-5" />
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-gray-400">Pickup Scheduled</h3>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[25px] bg-gray-200 rounded-full p-1 text-gray-500 border-4 border-white">
              <Box className="w-5 h-5" />
            </div>
            <div className="ml-6">
              <h3 className="font-bold text-lg text-gray-400">Completed</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
`);

console.log("Section 2 demo flows generated.");
