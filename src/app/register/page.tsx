import Link from "next/link";
import { Leaf, TrendingUp, ArrowRight } from "lucide-react";

export default function RegisterRoleSelection() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-warm)] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <Leaf className="w-8 h-8 text-[var(--color-brand-primary)]" />
          <span className="font-bold text-2xl tracking-tight text-[var(--color-brand-primary)]">
            AGRIMATCH
          </span>
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-[var(--color-text-primary)]">
          Join AGRIMATCH
        </h2>
        <p className="mt-2 text-center text-sm text-[var(--color-text-secondary)]">
          Choose your role to get started
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="grid md:grid-cols-2 gap-6 px-4 sm:px-0">
          
          {/* Farmer Card */}
          <Link href="/register/farmer" className="card hover:border-[var(--color-brand-primary)] hover:shadow-md transition-all group block relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-brand-secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 bg-[var(--color-bg-warm)] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 flex items-center justify-between">
                Farmer
                <ArrowRight className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-primary)] transition-colors" />
              </h3>
              <p className="text-[var(--color-text-secondary)] flex-grow mb-6">
                Sell agricultural produce directly to verified businesses. Get AI-powered market insights and secure payments.
              </p>
              <div className="text-[var(--color-brand-primary)] font-medium text-sm">
                Create Farmer Account
              </div>
            </div>
          </Link>

          {/* Business Card */}
          <Link href="/register/business" className="card hover:border-[var(--color-brand-primary)] hover:shadow-md transition-all group block relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-brand-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 bg-[var(--color-bg-warm)] rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 flex items-center justify-between">
                Business
                <ArrowRight className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-primary)] transition-colors" />
              </h3>
              <p className="text-[var(--color-text-secondary)] flex-grow mb-6">
                Source agricultural produce directly from verified producers. Use AI matching to fulfill procurement needs instantly.
              </p>
              <div className="text-[var(--color-brand-primary)] font-medium text-sm">
                Create Business Account
              </div>
            </div>
          </Link>

        </div>
        
        <div className="mt-8 text-center text-sm text-[var(--color-text-secondary)]">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)]">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}
