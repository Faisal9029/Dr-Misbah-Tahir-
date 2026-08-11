import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 text-white">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-white/70 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition"
        >
          Go to Homepage
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
