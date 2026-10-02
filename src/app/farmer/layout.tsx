"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, PackagePlus, ListOrdered, User, Leaf, Bell } from "lucide-react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { TRANSLATIONS, LangCode } from "@/lib/translations";

const LANGUAGES = [
  { code: "EN", name: "English" },
  { code: "HI", name: "हिंदी" },
  { code: "TE", name: "తెలుగు" },
];

const NAV_ITEMS = [
  { name: "Home", href: "/farmer/home", icon: Home },
  { name: "Sell Produce", href: "/farmer/sell", icon: PackagePlus, mobileName: "Sell" },
  { name: "Offers", href: "/farmer/offers", icon: Bell },
  { name: "Orders", href: "/farmer/orders", icon: ListOrdered },
  { name: "Profile", href: "/farmer/profile", icon: User },
];

export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState<LangCode>("EN");
  const t = TRANSLATIONS[lang];

  const NAV_ITEMS_TRANSLATED = [
    { name: t.navHome, href: "/farmer/home", icon: Home },
    { name: t.navSell, href: "/farmer/sell", icon: PackagePlus, mobileName: t.navSellMobile },
    { name: t.navOffers, href: "/farmer/offers", icon: Bell },
    { name: t.navOrders, href: "/farmer/orders", icon: ListOrdered },
    { name: t.navProfile, href: "/farmer/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-warm)] flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 fixed h-full z-20" style={{ background: "linear-gradient(180deg, #0d1f12 0%, #112417 60%, #0a1a0e 100%)" }}>
        <div className="p-6 border-b border-white/10 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white">AGRIMATCH</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {NAV_ITEMS_TRANSLATED.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className={`flex items-center justify-between px-3 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-white/15 text-white border border-white/10 shadow-sm" 
                    : "text-gray-400 hover:text-white hover:bg-white/8"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    isActive ? "bg-emerald-500/30 text-emerald-300" : "text-gray-500"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{item.name}</span>
                </div>
                {item.name === t.navOffers && (
                  <span className="bg-orange-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full">3</span>
                )}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/8 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
              R
            </div>
            <div>
              <div className="font-bold text-sm text-white">Ramesh Farms</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Verified
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen overflow-x-hidden">
        
        {/* Desktop Header */}
        <header className="hidden md:flex bg-white border-b border-gray-200 px-6 py-3 justify-end items-center sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <span>{lang}</span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    {LANGUAGES.map((l) => (
                      <button key={l.code} onClick={(e) => { e.stopPropagation(); setLang(l.code as LangCode); setLangOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${lang === l.code ? 'text-[#176B3A] bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                        {l.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#176B3A] to-green-500 text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-green-100 cursor-pointer hover:scale-105 transition-transform">
              R
            </div>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-[#176B3A]" />
            <span className="font-extrabold text-lg text-[#112417] tracking-tight">AGRIMATCH</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <span>{lang}</span>
                <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    {LANGUAGES.map((l) => (
                      <button key={l.code} onClick={(e) => { e.stopPropagation(); setLang(l.code as LangCode); setLangOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${lang === l.code ? 'text-[#176B3A] bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                        {l.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#176B3A] to-green-500 text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-green-100">
              R
            </div>
          </div>
        </header>

        <LanguageContext.Provider value={{ lang, t }}>
          <div className="flex-1 pb-24">
            {children}
          </div>
        </LanguageContext.Provider>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] flex justify-around items-center px-2 py-3 z-50">
        {NAV_ITEMS_TRANSLATED.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center flex-1 group relative">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-1 group-active:scale-95 transition-all ${
                isActive ? "bg-green-50 text-green-700" : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
              }`}>
                <Icon className="w-5 h-5" />
                {item.name === "Offers" && (
                  <span className="absolute top-1 right-1/2 -mr-3.5 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white animate-pulse"></span>
                )}
              </div>
              <span className={`text-[10px] font-bold ${isActive ? "text-green-700" : "text-gray-500 group-hover:text-gray-700"}`}>
                {item.mobileName || item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
