"use client";

import Link from "next/link";
import { Leaf, Store, Sparkles, ShieldCheck, BarChart3, LineChart, Route } from "lucide-react";

const PILLS = [
  { label: "Direct farmer access", icon: Leaf, href: "#farmers" },
  { label: "Business procurement", icon: Store, href: "#businesses" },
  { label: "AI matching", icon: Sparkles, href: "#ai" },
  { label: "Transparent offers", icon: ShieldCheck, href: "#trust" },
  { label: "Procurement tools", icon: BarChart3, href: "#businesses" },
  { label: "AI market intelligence", icon: LineChart, href: "/farmer/market" },
  { label: "End-to-end order tracking", icon: Route, href: "#trust" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-6 relative overflow-hidden flex flex-col justify-center">
      {/* Edge Fades for visual depth */}
      <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render 3 sets to ensure it covers very wide screens securely */}
        {[...PILLS, ...PILLS, ...PILLS].map((pill, i) => {
          const Icon = pill.icon;
          return (
            <Link 
              href={pill.href} 
              key={i}
              className="shrink-0 flex items-center gap-2.5 bg-white px-5 md:px-6 py-3.5 mx-2 rounded-full shadow-sm border border-[#E3EAE4] text-sm font-semibold text-[#17231C] hover:-translate-y-[1px] hover:shadow-md hover:border-[#176B3A] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:ring-offset-2"
            >
              <Icon className="w-4 h-4 text-[#176B3A]" /> {pill.label}
            </Link>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none !important; }
        }
      `}} />
    </section>
  );
}
