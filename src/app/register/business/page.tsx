"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Building2 } from "lucide-react";

export default function BusinessOnboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Simulate completion and redirection for prototype
      router.push("/business/overview");
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
                Business Registration
              </h1>
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${step >= 1 ? "bg-[var(--color-brand-primary)]" : "bg-gray-200"}`}></div>
                <div className={`w-2.5 h-2.5 rounded-full ${step >= 2 ? "bg-[var(--color-brand-primary)]" : "bg-gray-200"}`}></div>
              </div>
            </div>

            <form onSubmit={handleNext}>
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[var(--color-brand-primary)]" />
                    Company Details
                  </h2>
                  
                  <div>
                    <label className="label">Company Name</label>
                    <input type="text" required placeholder="ABC Foods Pvt Ltd" className="input-field" />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Business Type</label>
                      <select className="input-field bg-white" required>
                        <option value="">Select Type</option>
                        <option value="processing">Food Processing</option>
                        <option value="retail">Retail / Supermarket</option>
                        <option value="exporter">Exporter</option>
                        <option value="restaurant">Restaurant / Hotel</option>
                        <option value="manufacturer">Agro Manufacturer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">GSTIN / Registration No.</label>
                      <input type="text" required placeholder="29XXXXX0000X1Z5" className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="label">Headquarters Location</label>
                    <input type="text" required placeholder="Vijayawada, Andhra Pradesh" className="input-field" />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Contact Person</label>
                      <input type="text" required placeholder="Priya Sharma" className="input-field" />
                    </div>
                    <div>
                      <label className="label">Work Email</label>
                      <input type="email" required placeholder="priya@abcfoods.com" className="input-field" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold mb-2">Step 2: Business Verification</h2>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl mb-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Prototype Mode:</strong> For this demo, your business account will be auto-verified instantly to grant access to procurement tools.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl flex items-center justify-between opacity-50">
                      <div>
                        <div className="font-medium">Company Registration (CIN)</div>
                        <div className="text-sm text-[var(--color-text-secondary)]">Verifies legal entity</div>
                      </div>
                      <div className="text-[var(--color-brand-primary)] text-sm font-medium">Auto-filled</div>
                    </div>
                    <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl flex items-center justify-between opacity-50">
                      <div>
                        <div className="font-medium">GST Verification</div>
                        <div className="text-sm text-[var(--color-text-secondary)]">Required for compliance</div>
                      </div>
                      <div className="text-[var(--color-brand-primary)] text-sm font-medium">Auto-filled</div>
                    </div>
                    <div className="p-4 border border-[var(--color-border-subtle)] rounded-xl flex items-center justify-between opacity-50">
                      <div>
                        <div className="font-medium">Bank Details</div>
                        <div className="text-sm text-[var(--color-text-secondary)]">Required for making payments</div>
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
                  {step === 2 ? "Complete & Enter Workspace" : "Continue"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
