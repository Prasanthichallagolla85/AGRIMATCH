import Link from "next/link";
import { LayoutDashboard, Search, FileText, Bell, ListOrdered, Users, BarChart3, Bot, Building2, Leaf } from "lucide-react";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-bg-warm)] flex flex-col md:flex-row">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-[var(--color-border-subtle)] fixed h-full z-10">
        <div className="p-6 border-b border-[var(--color-border-subtle)] flex items-center gap-2">
          <Leaf className="w-6 h-6 text-[var(--color-brand-primary)]" />
          <span className="font-bold text-xl tracking-tight text-[var(--color-brand-primary)]">
            AGRIMATCH
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <div className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2 px-4">Procurement</div>
            <nav className="space-y-1">
              <Link href="/business/overview" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[var(--color-brand-primary)] text-white font-medium">
                <LayoutDashboard className="w-5 h-5" /> Overview
              </Link>
              <Link href="/business/find-supply" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-warm)] hover:text-[var(--color-text-primary)] font-medium transition-colors">
                <Search className="w-5 h-5" /> Find Supply
              </Link>
              <Link href="/business/requirements" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-warm)] hover:text-[var(--color-text-primary)] font-medium transition-colors">
                <FileText className="w-5 h-5" /> Requirements
              </Link>
            </nav>
          </div>
          
          <div className="mb-6">
            <div className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2 px-4">Transactions</div>
            <nav className="space-y-1">
              <Link href="/business/offers" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-warm)] hover:text-[var(--color-text-primary)] font-medium transition-colors">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5" /> Offers
                </div>
                <span className="bg-gray-100 text-[var(--color-text-primary)] text-xs font-bold px-2 py-0.5 rounded-full">6</span>
              </Link>
              <Link href="/business/orders" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-warm)] hover:text-[var(--color-text-primary)] font-medium transition-colors">
                <ListOrdered className="w-5 h-5" /> Orders
              </Link>
              <Link href="/business/suppliers" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-warm)] hover:text-[var(--color-text-primary)] font-medium transition-colors">
                <Users className="w-5 h-5" /> Suppliers
              </Link>
            </nav>
          </div>
          
          <div>
            <div className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2 px-4">Intelligence & Setup</div>
            <nav className="space-y-1">
              <Link href="/business/analytics" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-warm)] hover:text-[var(--color-text-primary)] font-medium transition-colors">
                <BarChart3 className="w-5 h-5" /> Analytics
              </Link>
              <Link href="/business/ai" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-warm)] hover:text-[var(--color-text-primary)] font-medium transition-colors">
                <Bot className="w-5 h-5" /> AI Procurement
              </Link>
              <Link href="/business/company" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-warm)] hover:text-[var(--color-text-primary)] font-medium transition-colors">
                <Building2 className="w-5 h-5" /> Company
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="p-4 border-t border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold">
              ABC
            </div>
            <div>
              <div className="font-medium text-sm">ABC Foods</div>
              <div className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
                Priya Sharma
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-[var(--color-border-subtle)] p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-[var(--color-brand-primary)]" />
            <span className="font-bold text-lg text-[var(--color-brand-primary)]">AGRIMATCH Business</span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
            ABC
          </div>
        </header>

        <div className="flex-1 p-4 md:p-8 pb-24 md:pb-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation - Simplified for Business */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[var(--color-border-subtle)] flex justify-around p-2 z-20 pb-safe">
        <Link href="/business/overview" className="flex flex-col items-center p-2 text-[var(--color-brand-primary)]">
          <LayoutDashboard className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Overview</span>
        </Link>
        <Link href="/business/find-supply" className="flex flex-col items-center p-2 text-[var(--color-text-secondary)]">
          <Search className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Find</span>
        </Link>
        <Link href="/business/offers" className="flex flex-col items-center p-2 text-[var(--color-text-secondary)] relative">
          <Bell className="w-6 h-6 mb-1" />
          <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-gray-400 rounded-full border-2 border-white"></span>
          <span className="text-[10px] font-medium">Offers</span>
        </Link>
        <Link href="/business/orders" className="flex flex-col items-center p-2 text-[var(--color-text-secondary)]">
          <ListOrdered className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Orders</span>
        </Link>
      </nav>
    </div>
  );
}
