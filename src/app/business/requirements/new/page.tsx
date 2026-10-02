"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bot, CheckCircle2, FileText, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CreateRequirement() {
  const router = useRouter();
  const [mode, setMode] = useState('ai');
  const [aiText, setAiText] = useState("");
  const [isParsing, setIsParsing] = useState(false);
  const [parsed, setParsed] = useState(false);
  const [formData, setFormData] = useState({ product: '', quantity: '', quality: '', region: '', deadline: '' });

  const handleParse = () => {
    if (!aiText) return;
    setIsParsing(true);
    setTimeout(() => {
      setFormData({
        product: 'Mango',
        quantity: '20 tonnes',
        quality: 'Grade A',
        region: 'Andhra Pradesh',
        deadline: '10 days'
      });
      setIsParsing(false);
      setParsed(true);
    }, 1500);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/business/find-supply');
  };

  return (
    <div className="max-w-2xl mx-auto pb-12">
      <h1 className="text-2xl font-bold mb-6">Create Procurement Requirement</h1>

      <div className="flex bg-white p-1 rounded-xl mb-6 shadow-sm border border-[var(--color-border-subtle)] w-full max-w-sm">
        <button onClick={() => setMode('ai')} className={\`flex-1 py-2 text-sm font-medium rounded-lg flex items-center justify-center gap-2 \${mode === 'ai' ? 'bg-blue-50 text-blue-700' : 'text-gray-500'}\`}>
          <Sparkles className="w-4 h-4" /> Use AI
        </button>
        <button onClick={() => setMode('manual')} className={\`flex-1 py-2 text-sm font-medium rounded-lg flex items-center justify-center gap-2 \${mode === 'manual' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}\`}>
          <FileText className="w-4 h-4" /> Manual Form
        </button>
      </div>

      {mode === 'ai' && !parsed && (
        <div className="card border-blue-100 shadow-sm">
          <label className="label text-blue-900 font-bold mb-2">Describe what you need</label>
          <p className="text-sm text-gray-500 mb-4">AGRIMATCH AI will extract your requirement automatically.</p>
          <textarea 
            className="input-field min-h-[120px] mb-4" 
            placeholder="e.g., I need 20 tonnes of Grade A mangoes in Andhra Pradesh within 10 days."
            value={aiText}
            onChange={(e) => setAiText(e.target.value)}
          ></textarea>
          
          <button 
            onClick={handleParse} 
            disabled={isParsing || !aiText}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {isParsing ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Bot className="w-5 h-5" />}
            {isParsing ? 'Parsing Requirement...' : 'Understand with AI'}
          </button>
        </div>
      )}

      {(mode === 'manual' || parsed) && (
        <form onSubmit={handleConfirm} className="card space-y-5 animate-in fade-in slide-in-from-bottom-4">
          {parsed && (
            <div className="bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded-lg text-sm font-medium flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4" /> AI understood your requirement. Please confirm below.
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="label">Product</label>
              <input type="text" defaultValue={formData.product} required className="input-field" placeholder="Mango" />
            </div>
            <div>
              <label className="label">Quantity</label>
              <input type="text" defaultValue={formData.quantity} required className="input-field" placeholder="20 tonnes" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="label">Quality Requirement</label>
              <input type="text" defaultValue={formData.quality} required className="input-field" placeholder="Grade A" />
            </div>
            <div>
              <label className="label">Region</label>
              <input type="text" defaultValue={formData.region} required className="input-field" placeholder="Andhra Pradesh" />
            </div>
          </div>
          <div>
            <label className="label">Required By</label>
            <input type="text" defaultValue={formData.deadline} className="input-field" placeholder="e.g. 10 days" />
          </div>

          <div className="pt-4 border-t border-[var(--color-border-subtle)]">
            <button type="submit" className="btn-primary w-full text-lg py-4">Confirm Requirement & Find Supply</button>
          </div>
        </form>
      )}
    </div>
  );
}
