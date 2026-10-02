
import { Leaf } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="card text-center py-20">
        <Leaf className="w-12 h-12 text-[var(--color-brand-primary)] mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Orders</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">This page is part of the AGRIMATCH structural shell.</p>
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
