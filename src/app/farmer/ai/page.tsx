
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
          <div key={i} className={`p-3 rounded-xl max-w-[80%] ${msg.role === 'ai' ? 'bg-green-50 self-start text-green-900' : 'bg-gray-100 self-end text-gray-900'}`}>
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
