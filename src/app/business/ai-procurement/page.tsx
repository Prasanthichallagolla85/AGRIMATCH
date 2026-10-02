
"use client";
import { useState } from "react";
import { Bot, Send, Search } from "lucide-react";

export default function BusinessAI() {
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Welcome to your Procurement Copilot. I can help you find suppliers, analyze market trends, or track your orders.' }]);
  const [input, setInput] = useState('');
  
  const handleSend = (e: React.FormEvent) => {
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
          <div key={i} className={`p-4 rounded-xl max-w-[70%] ${msg.role === 'ai' ? 'bg-blue-50 self-start text-blue-900' : 'bg-gray-100 self-end text-gray-900'}`}>
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
