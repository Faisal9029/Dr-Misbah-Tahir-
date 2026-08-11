"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 text-white">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-white/70 max-w-md mb-8">
        An unexpected error occurred. Please try again, or contact us on WhatsApp if the problem continues.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
}
