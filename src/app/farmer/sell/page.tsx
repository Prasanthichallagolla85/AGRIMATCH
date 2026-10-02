"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, Check, CheckCircle2, Image as ImageIcon, MapPin, 
  Sparkles, UploadCloud, Calendar as CalendarIcon, Info, Search, TrendingUp
} from "lucide-react";

const PRODUCE_OPTIONS = [
  { id: "mango", icon: "🥭", label: "Mango" },
  { id: "rice", icon: "🌾", label: "Rice" },
  { id: "cotton", icon: "🌿", label: "Cotton" },
  { id: "tomato", icon: "🍅", label: "Tomato" },
  { id: "vegetables", icon: "🥕", label: "Vegetables" },
  { id: "flowers", icon: "🌻", label: "Flowers" },
  { id: "other", icon: "🌱", label: "Other" },
];

export default function SellProduce() {
  const [step, setStep] = useState(1);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  // Form State
  const [produce, setProduce] = useState("mango");
  const [qty, setQty] = useState("20");
  const [unit, setUnit] = useState("tonnes");
  const [availability, setAvailability] = useState("window");
  const [pickup, setPickup] = useState(true);

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);
    }, 1500);
  };

  if (isPublished) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 text-center">
        <div className="w-20 h-20 bg-green-100 text-[#176B3A] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#17231C] mb-4">Your produce is now visible to matching businesses.</h1>
        <p className="text-gray-500 mb-8">We've successfully published your {qty} {unit} of {PRODUCE_OPTIONS.find(p => p.id === produce)?.label || 'produce'}.</p>
        
        <div className="bg-white border border-[#E3EAE4] rounded-[16px] p-6 mb-8 text-left shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><Sparkles className="w-5 h-5"/></div>
            <div>
              <h3 className="font-bold text-[#17231C]">3 potential matches found!</h3>
              <p className="text-sm text-gray-500">Businesses are looking for exactly what you listed.</p>
            </div>
          </div>
          <Link href="/farmer/home#demand" className="block w-full bg-[#176B3A] text-white text-center py-3 rounded-[12px] font-bold hover:bg-[#125c31] transition-colors">
            View matches →
          </Link>
        </div>
        
        <Link href="/farmer/home" className="text-gray-500 hover:text-[#17231C] font-bold transition-colors">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10 pb-24 pt-6 md:pt-10">
      <div className="mb-8">
        <Link href="/farmer/home" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#17231C] mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
          <span>Step {step} of 6</span>
          <span className="text-[#176B3A]">
            {step === 1 && "Produce"}
            {step === 2 && "Quantity"}
            {step === 3 && "Availability"}
            {step === 4 && "Location"}
            {step === 5 && "Photos & AI"}
            {step === 6 && "Review"}
          </span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`h-full flex-1 border-r border-white/20 last:border-0 ${i <= step ? 'bg-[#176B3A]' : 'bg-transparent'}`} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[24px] border border-[#E3EAE4] p-6 md:p-10 shadow-sm min-h-[400px] flex flex-col">
        
        {/* STEP 1 */}
        {step === 1 && (
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#17231C] mb-6">What are you selling?</h2>
            
            <div className="relative mb-6">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
              <input type="text" placeholder="Search produce..." className="w-full bg-gray-50 border border-gray-200 rounded-[12px] py-3 pl-12 pr-4 focus:outline-none focus:border-[#176B3A] focus:ring-1 focus:ring-[#176B3A]" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {PRODUCE_OPTIONS.map((opt) => (
                <button 
                  key={opt.id}
                  onClick={() => setProduce(opt.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-[16px] border-2 transition-all ${produce === opt.id ? 'border-[#176B3A] bg-green-50 shadow-sm' : 'border-[#E3EAE4] hover:border-gray-300 bg-white'}`}
                >
                  <span className="text-4xl mb-2">{opt.icon}</span>
                  <span className={`text-sm font-bold ${produce === opt.id ? 'text-[#176B3A]' : 'text-[#17231C]'}`}>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#17231C] mb-6">How much do you have available?</h2>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">Quantity</label>
                <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} className="w-full border border-gray-300 rounded-[12px] p-4 text-lg focus:outline-none focus:border-[#176B3A] focus:ring-1 focus:ring-[#176B3A]" placeholder="e.g. 20" />
              </div>
              <div className="w-1/3">
                <label className="block text-sm font-bold text-gray-700 mb-2">Unit</label>
                <select value={unit} onChange={(e)=>setUnit(e.target.value)} className="w-full border border-gray-300 rounded-[12px] p-4 text-lg focus:outline-none focus:border-[#176B3A] focus:ring-1 focus:ring-[#176B3A] bg-white">
                  <option value="kg">kg</option>
                  <option value="quintal">quintal</option>
                  <option value="tonnes">tonnes</option>
                  <option value="boxes">boxes</option>
                </select>
              </div>
            </div>
            
            {unit === "tonnes" && qty && !isNaN(Number(qty)) && (
              <div className="bg-blue-50 text-blue-800 p-4 rounded-[12px] flex items-start gap-3 text-sm">
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <p>Helper: <strong>{qty} tonnes</strong> is approximately <strong>{(Number(qty) * 1000).toLocaleString()} kg</strong>.</p>
              </div>
            )}
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#17231C] mb-6">When will your produce be ready?</h2>
            
            <div className="space-y-4 mb-8">
              <label className={`flex items-center gap-4 p-4 border rounded-[16px] cursor-pointer transition-all ${availability === 'now' ? 'border-[#176B3A] bg-green-50' : 'border-[#E3EAE4] hover:bg-gray-50'}`}>
                <input type="radio" name="availability" checked={availability === 'now'} onChange={() => setAvailability('now')} className="w-5 h-5 accent-[#176B3A]" />
                <span className="font-bold text-[#17231C]">Ready now</span>
              </label>
              
              <label className={`flex items-center gap-4 p-4 border rounded-[16px] cursor-pointer transition-all ${availability === 'date' ? 'border-[#176B3A] bg-green-50' : 'border-[#E3EAE4] hover:bg-gray-50'}`}>
                <input type="radio" name="availability" checked={availability === 'date'} onChange={() => setAvailability('date')} className="w-5 h-5 accent-[#176B3A]" />
                <span className="font-bold text-[#17231C]">Ready on a specific date</span>
              </label>

              <label className={`flex items-center gap-4 p-4 border rounded-[16px] cursor-pointer transition-all ${availability === 'window' ? 'border-[#176B3A] bg-green-50' : 'border-[#E3EAE4] hover:bg-gray-50'}`}>
                <input type="radio" name="availability" checked={availability === 'window'} onChange={() => setAvailability('window')} className="w-5 h-5 accent-[#176B3A]" />
                <span className="font-bold text-[#17231C]">Harvest window (Date range)</span>
              </label>
            </div>

            {availability === 'window' && (
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Available from</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input type="text" defaultValue="10 Oct 2026" className="w-full border border-gray-300 rounded-[12px] p-3 pl-10 focus:border-[#176B3A] focus:ring-1 focus:ring-[#176B3A]" />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Available until</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input type="text" defaultValue="20 Oct 2026" className="w-full border border-gray-300 rounded-[12px] p-3 pl-10 focus:border-[#176B3A] focus:ring-1 focus:ring-[#176B3A]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#17231C] mb-6">Where is the produce located?</h2>
            <div className="space-y-5 mb-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">State</label>
                <input type="text" defaultValue="Andhra Pradesh" className="w-full border border-gray-300 rounded-[12px] p-3 focus:border-[#176B3A] focus:ring-1 focus:ring-[#176B3A]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">District</label>
                <input type="text" defaultValue="Eluru" className="w-full border border-gray-300 rounded-[12px] p-3 focus:border-[#176B3A] focus:ring-1 focus:ring-[#176B3A]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Village / Town</label>
                <input type="text" defaultValue="Dwarakatirumala" className="w-full border border-gray-300 rounded-[12px] p-3 focus:border-[#176B3A] focus:ring-1 focus:ring-[#176B3A]" />
              </div>
            </div>

            <label className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-[12px] cursor-pointer">
              <input type="checkbox" checked={pickup} onChange={(e)=>setPickup(e.target.checked)} className="w-5 h-5 accent-[#176B3A] rounded" />
              <div>
                <div className="font-bold text-[#17231C]">Pickup available from farm</div>
                <div className="text-sm text-gray-500">Buyers can arrange logistics to collect directly from your location.</div>
              </div>
            </label>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#17231C] mb-2">Show buyers what you're selling</h2>
            <p className="text-gray-500 mb-6">Our AI will automatically analyze your photos to suggest quality grades.</p>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-[#176B3A]/30 bg-[#176B3A]/5 rounded-[16px] p-8 text-center mb-6 hover:bg-[#176B3A]/10 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#176B3A]">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="font-bold text-[#17231C] mb-1">Upload produce photos</p>
              <p className="text-sm text-gray-500">Support for front view, close-up, and detail</p>
            </div>

            {/* AI Result Simulation */}
            <div className="bg-[#17231C] text-white rounded-[16px] p-6 shadow-lg">
              <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider mb-4"><Sparkles className="w-4 h-4"/> AI-Assisted Visual Assessment</div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <div className="text-gray-400 text-xs mb-1">Detected</div>
                    <div className="font-bold text-lg">Mango</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-400 text-xs mb-1">Preliminary visual class</div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-3xl text-white">Grade A</span>
                      <span className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-xs font-bold">87% confidence</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-[12px] p-4">
                  <div className="text-xs font-bold text-gray-300 uppercase mb-2">Why this grade?</div>
                  <ul className="space-y-2 text-sm text-gray-300 mb-4">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5"/> Good visible maturity indicators</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5"/> Consistent appearance</li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5"/> Limited visible damage</li>
                  </ul>
                  <div className="text-[10px] text-gray-500 italic border-t border-white/10 pt-2">
                    Limitations: Visual assessment only. Professional inspection may still be required by buyers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#17231C] mb-6">Review & Publish</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-[12px] overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=200&auto=format&fit=crop" alt="Produce" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#17231C] capitalize">{produce}</h3>
                  <p className="text-[#66736B]">{qty} {unit} • Eluru, Andhra Pradesh</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-green-50 text-[#176B3A] px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><Sparkles className="w-3 h-3"/> Grade A (87%)</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">{pickup ? 'Farm pickup' : 'No pickup'}</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">10 Oct – 20 Oct</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-100 rounded-[12px] p-4 flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#17231C] text-sm">Market Context</div>
                  <div className="text-sm text-gray-600">Current indicative range for Grade A {produce} is <span className="font-bold">₹48–₹56/kg</span>. Demand is High in your region.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
          {step > 1 ? (
            <button onClick={prevStep} className="px-6 py-3 font-bold text-gray-500 hover:text-[#17231C] transition-colors">Back</button>
          ) : (
            <div></div> // Spacer
          )}
          
          <div className="flex items-center gap-4">
            {step === 6 && (
              <button className="px-6 py-3 font-bold text-gray-500 hover:text-[#17231C] transition-colors">Save draft</button>
            )}
            
            {step < 6 ? (
              <button 
                onClick={nextStep}
                className="bg-[#176B3A] text-white px-8 py-3 rounded-[12px] font-bold hover:bg-[#125c31] transition-colors flex items-center gap-2 shadow-sm"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={handlePublish}
                disabled={isPublishing}
                className="bg-[#176B3A] text-white px-8 py-3 rounded-[12px] font-bold hover:bg-[#125c31] transition-colors flex items-center gap-2 shadow-sm disabled:opacity-70"
              >
                {isPublishing ? 'Publishing...' : 'Publish listing'}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
