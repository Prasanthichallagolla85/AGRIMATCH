"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Leaf, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function FarmerOnboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate completion and redirection for prototype
      router.push("/farmer/home");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-warm)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <Link href="/register" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to roles
        </Link>
        
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] overflow-hidden shadow-sm">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
                Farmer Registration
              </h1>
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${step >= 1 ? "bg-[var(--color-brand-primary)]" : "bg-gray-200"}`}></div>
                <div className={`w-2.5 h-2.5 rounded-full ${step >= 2 ? "bg-[var(--color-brand-primary)]" : "bg-gray-200"}`}></div>
                <div className={`w-2.5 h-2.5 rounded-full ${step >= 3 ? "bg-[var(--color-brand-primary)]" : "bg-gray-200"}`}></div>
              </div>
            </div>

            <form onSubmit={handleNext}>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Step 1: Choose Language</h2>
                    <div className="grid gap-3">
                      <label className="flex items-center justify-between p-4 border border-[var(--color-brand-primary)] rounded-xl bg-green-50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input type="radio" name="lang" defaultChecked className="w-4 h-4 text-[var(--color-brand-primary)] focus:ring-[var(--color-brand-primary)]" />
                          <span className="font-medium text-[var(--color-text-primary)]">English</span>
                        </div>
                      </label>
                      <label className="flex items-center justify-between p-4 border border-[var(--color-border-subtle)] hover:border-gray-300 rounded-xl cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input type="radio" name="lang" className="w-4 h-4 text-[var(--color-brand-primary)] focus:ring-[var(--color-brand-primary)]" />
                          <span className="font-medium text-[var(--color-text-primary)] font-[var(--font-noto-sans)]">తెలుగు (Telugu)</span>
                        </div>
                      </label>
                      <label className="flex items-center justify-between p-4 border border-[var(--color-border-subtle)] hover:border-gray-300 rounded-xl cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input type="radio" name="lang" className="w-4 h-4 text-[var(--color-brand-primary)] focus:ring-[var(--color-brand-primary)]" />
                          <span className="font-medium text-[var(--color-text-primary)] font-[var(--font-noto-sans)]">हिन्दी (Hindi)</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="text-lg font-semibold mb-2">Step 2: Farm Details</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Full Name</label>
                      <input type="text" required placeholder="Ramesh Kumar" className="input-field" />
                    </div>
                    <div>
                      <label className="label">Phone Number</label>
                      <input type="text" required placeholder="+91 9876543210" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="label">State</label>
                    <select className="input-field bg-white" required defaultValue="AP">
                      <option value="">Select State</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="TS">Telangana</option>
                      <option value="MH">Maharashtra</option>
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">District</label>
                      <input type="text" required placeholder="Eluru" className="input-field" defaultValue="Eluru" />
                    </div>
                    <div>
                      <label className="label">Farm Size (Acres)</label>
                      <input type="number" required placeholder="5" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="label">Primary Crops</label>
                    <input type="text" required placeholder="Mango, Paddy" className="input-field" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold mb-2">Step 3: Verification</h2>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl mb-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Prototype Mode:</strong> For this demo, your account will be auto-verified instantly to demonstrate the platform.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl flex items-center justify-between opacity-50">
                      <div>
                        <div className="font-medium">Identity Document (Aadhaar)</div>
                        <div className="text-sm text-[var(--color-text-secondary)]">Required for trust scoring</div>
                      </div>
                      <div className="text-[var(--color-brand-primary)] text-sm font-medium">Auto-filled</div>
                    </div>
                    <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl flex items-center justify-between opacity-50">
                      <div>
                        <div className="font-medium">Land Document (Pattadar Passbook)</div>
                        <div className="text-sm text-[var(--color-text-secondary)]">Verifies producer status</div>
                      </div>
                      <div className="text-[var(--color-brand-primary)] text-sm font-medium">Auto-filled</div>
                    </div>
                    <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl flex items-center justify-between opacity-50">
                      <div>
                        <div className="font-medium">Bank Details (UPI / Account)</div>
                        <div className="text-sm text-[var(--color-text-secondary)]">Required for receiving payments</div>
                      </div>
                      <div className="text-[var(--color-brand-primary)] text-sm font-medium">Auto-filled</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] flex justify-between items-center">
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(step - 1)} className="btn-secondary py-2 px-4">
                    Back
                  </button>
                ) : <div></div>}
                <button type="submit" className="btn-primary py-2 px-6">
                  {step === 3 ? "Complete & Enter App" : "Continue"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
