"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Globe2 } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button 
        className="lg:hidden p-2 text-gray-600" 
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
      >
        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
        <div className="w-6 h-0.5 bg-current"></div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/25 z-[60] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[70] shadow-2xl transition-transform duration-250 ease-out flex flex-col lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-bold text-xl tracking-tight text-[#17231C]">AGRIMATCH</span>
          <button 
            className="p-2 text-gray-400 hover:text-gray-600" 
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-6 overflow-y-auto">
          <nav className="flex flex-col gap-4 text-base font-bold text-gray-700">
            <Link href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link>
            <Link href="#farmers" onClick={() => setIsOpen(false)}>For Farmers</Link>
            <Link href="#businesses" onClick={() => setIsOpen(false)}>For Businesses</Link>
            <Link href="#ai" onClick={() => setIsOpen(false)}>AI Intelligence</Link>
            <Link href="/trust" onClick={() => setIsOpen(false)}>Trust</Link>
          </nav>

          <div className="w-full h-px bg-gray-100"></div>

          <div className="flex items-center gap-2 text-sm font-medium p-3 bg-gray-50 rounded-xl border border-gray-100">
            <Globe2 className="w-5 h-5 text-gray-500" /> English ▾
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <Link href="/login" className="w-full py-3 text-center rounded-[12px] font-bold text-gray-700 bg-white border border-gray-200" onClick={() => setIsOpen(false)}>
              Log in
            </Link>
            <Link href="/login" className="w-full py-3 text-center rounded-[12px] font-bold text-white bg-[#176B3A]" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
