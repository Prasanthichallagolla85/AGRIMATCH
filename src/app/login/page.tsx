"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Leaf } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState<"farmer" | "business">("farmer");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for prototype
    if (role === "farmer") {
      router.push("/farmer/home");
    } else {
      router.push("/business/overview");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-warm)] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          <Leaf className="w-8 h-8 text-[var(--color-brand-primary)]" />
          <span className="font-bold text-2xl tracking-tight text-[var(--color-brand-primary)]">
            AGRIMATCH
          </span>
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-[var(--color-text-primary)]">
          Welcome back
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-2xl border border-[var(--color-border-subtle)] sm:px-10">
          
          <div className="flex bg-[var(--color-bg-warm)] p-1 rounded-xl mb-8">
            <button
              onClick={() => setRole("farmer")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                role === "farmer" 
                  ? "bg-white text-[var(--color-text-primary)] shadow-sm" 
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              Farmer Login
            </button>
            <button
              onClick={() => setRole("business")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                role === "business" 
                  ? "bg-white text-[var(--color-text-primary)] shadow-sm" 
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              Business Login
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="phone" className="label">
                Phone Number / Email
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  placeholder={role === "farmer" ? "+91 9876543210" : "company@email.com"}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label flex justify-between">
                <span>Password</span>
                <a href="#" className="text-sm font-medium text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)]">
                  Forgot password?
                </a>
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="p-3 bg-yellow-50 text-yellow-800 text-sm rounded-lg border border-yellow-200">
              <span className="font-semibold">Prototype Mode:</span> Enter any details to log in as {role === "farmer" ? "Ramesh (Farmer)" : "Priya (Business)"}.
            </div>

            <div>
              <button type="submit" className="w-full btn-primary">
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-border-subtle)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[var(--color-text-secondary)]">
                  Don't have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/register"
                className="w-full btn-secondary flex justify-center items-center"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
