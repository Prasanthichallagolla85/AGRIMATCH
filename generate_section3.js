const fs = require('fs');
const path = require('path');

const write = (filepath, content) => {
  const fullPath = path.join(process.cwd(), filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
};

// 1. Farmer AI Assistant
write('src/app/farmer/ai/page.tsx', `
"use client";
import { useState } from "react";
import { Bot, Send, Mic } from "lucide-react";

export default function FarmerAIAssistant() {
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Hello Ramesh. I am AGRIMATCH AI. How can I help you with your 20 tonnes of mangoes today?' }]);
  const [input, setInput] = useState('');
  
  const handleSend = (e) => {
    e.preventDefault();
    if (!input) return;
    setMessages([...messages, { role: 'user', text: input }, { role: 'ai', text: 'Based on your active listings, ABC Foods has matched your requirement. The current market context for Mango is ₹48-54/kg. Your current offer of ₹51 is within the range.' }]);
    setInput('');
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-100px)]">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Bot className="text-[var(--color-brand-primary)]" /> Ask AGRIMATCH
      </h1>
      
      <div className="flex-1 bg-white rounded-xl border border-[var(--color-border-subtle)] p-4 overflow-y-auto mb-4 flex flex-col gap-4">
        {messages.map((msg, i) => (
          <div key={i} className={\`p-3 rounded-xl max-w-[80%] \${msg.role === 'ai' ? 'bg-green-50 self-start text-green-900' : 'bg-gray-100 self-end text-gray-900'}\`}>
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <button type="button" className="p-3 bg-gray-100 text-gray-500 rounded-xl hover:bg-gray-200">
          <Mic className="w-5 h-5" />
        </button>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about prices, buyers, or your listings..." 
          className="input-field flex-1" 
        />
        <button type="submit" className="p-3 bg-[var(--color-brand-primary)] text-white rounded-xl hover:bg-green-800">
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
`);

// 2. Business AI Procurement
write('src/app/business/ai-procurement/page.tsx', `
"use client";
import { useState } from "react";
import { Bot, Send, Search } from "lucide-react";

export default function BusinessAI() {
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Welcome to your Procurement Copilot. I can help you find suppliers, analyze market trends, or track your orders.' }]);
  const [input, setInput] = useState('');
  
  const handleSend = (e) => {
    e.preventDefault();
    if (!input) return;
    setMessages([...messages, { role: 'user', text: input }, { role: 'ai', text: 'I found 3 verified suppliers for Mango in Andhra Pradesh. The top match is Ramesh Kumar with 20 tonnes of Grade A. Would you like me to draft an offer?' }]);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[80vh]">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Bot className="text-blue-600" /> Procurement Copilot
      </h1>
      
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-y-auto mb-4 flex flex-col gap-4">
        {messages.map((msg, i) => (
          <div key={i} className={\`p-4 rounded-xl max-w-[70%] \${msg.role === 'ai' ? 'bg-blue-50 self-start text-blue-900' : 'bg-gray-100 self-end text-gray-900'}\`}>
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Find mango suppliers in AP..." 
          className="input-field flex-1" 
        />
        <button type="submit" className="px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium">
          Send
        </button>
      </form>
    </div>
  );
}
`);

// 3. Admin / Demo Mode
write('src/app/admin/page.tsx', `
"use client";
import { useState } from "react";
import { Trash2, RotateCcw, Play } from "lucide-react";

export default function AdminDemoCenter() {
  const [status, setStatus] = useState("System Ready");

  const handleReset = () => {
    setStatus("Resetting Demo Data...");
    setTimeout(() => setStatus("Demo Data Successfully Reset to Start State."), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="bg-red-50 text-red-800 px-4 py-2 rounded-lg font-bold text-sm mb-6 inline-block">
        DEMO WORKSPACE — ADMIN ONLY
      </div>
      
      <h1 className="text-3xl font-bold mb-8">Admin Control Center</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Demo Control</h2>
          <p className="text-gray-600 text-sm mb-6">Use these controls to safely reset or simulate the hackathon flow.</p>
          
          <div className="space-y-3">
            <button onClick={handleReset} className="w-full btn-secondary text-red-600 border-red-200 hover:bg-red-50 flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4" /> Reset Demo State (Clear Orders/Offers)
            </button>
            <button className="w-full btn-secondary flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> Simulate Buyer Payment
            </button>
            <button className="w-full btn-secondary flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> Simulate Logistics Transit
            </button>
          </div>

          <div className="mt-6 p-3 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">
            Status: {status}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Platform Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-900">1</div>
              <div className="text-sm text-green-700">Farmers</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-900">1</div>
              <div className="text-sm text-blue-700">Businesses</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-900">1</div>
              <div className="text-sm text-yellow-700">Listings</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-900">1</div>
              <div className="text-sm text-purple-700">Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

console.log('Section 3 pages generated.');
