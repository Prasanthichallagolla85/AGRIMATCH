import { Shield, CheckCircle2, FileText, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function TrustCenter() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="bg-green-900 text-white p-8 rounded-2xl mb-8 flex flex-col md:flex-row gap-8 items-center">
        <Shield className="w-24 h-24 text-green-300 shrink-0" />
        <div>
          <h1 className="text-3xl font-bold mb-2">AGRIMATCH Trust Center</h1>
          <p className="text-green-100 text-lg">Building a verified, transparent, and safe ecosystem for agricultural commerce.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-[var(--color-brand-primary)]" /> Verified Identity
          </h2>
          <p className="text-gray-600 mb-4">Every participant on AGRIMATCH goes through a verification process to ensure authenticity.</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm">Farmers provide Pattadar Passbook and Aadhaar.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm">Businesses provide GSTIN and FSSAI (if applicable).</span>
            </li>
          </ul>
          <Link href="/farmer/profile" className="text-[var(--color-brand-primary)] font-medium hover:underline">View my verification status →</Link>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="text-blue-600" /> Transparent Transactions
          </h2>
          <p className="text-gray-600 mb-4">All offers and orders are logged immutably, ensuring both parties have a clear record of the agreement.</p>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="text-sm text-blue-900">
              <strong>Prototype Note:</strong> In this demo environment, verification and transactions are simulated. Do not share real sensitive documents.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
