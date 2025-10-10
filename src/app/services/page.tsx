"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity.client";
import { groq } from "next-sanity";

type Procedure = {
  _id: string;
  title: string;
  slug: { current: string };
  department?: string;
};

type Department = {
  name: string;
  procedures: Procedure[];
};

export default function ServicesPage() {
  const [services, setServices] = useState<Department[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const allProcedures: Procedure[] = await client.fetch(
          groq`*[_type=="procedure"]{
            _id,
            title,
            slug,
            department
          }`
        );

        // ✅ Handle missing departments
        allProcedures.forEach((p) => {
          if (!p.department) p.department = "General";
        });

        // ✅ Sort alphabetically by title
        allProcedures.sort((a, b) => a.title.localeCompare(b.title));

        // ✅ Group by department
        const grouped: Record<string, Procedure[]> = {};
        allProcedures.forEach((proc) => {
          if (!grouped[proc.department!]) grouped[proc.department!] = [];
          grouped[proc.department!].push(proc);
        });

        // ✅ Convert to array and sort departments alphabetically
        const deptArray: Department[] = Object.keys(grouped)
          .sort((a, b) => a.localeCompare(b))
          .map((dept) => ({
            name: dept,
            procedures: grouped[dept],
          }));

        setServices(deptArray);
      } catch (error) {
        console.error("Error fetching procedures:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProcedures();
  }, []);

  // ✅ Filter by department or title
  const filteredServices = services.map((dept) => ({
    ...dept,
    procedures: dept.procedures.filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        dept.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  // ✅ Loading state
  if (loading) {
    return (
      <section className="py-20 bg-blue-900 text-white text-center">
        <p className="animate-pulse text-lg">Loading procedures...</p>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        {/* 🔍 Search bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search procedure or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg px-4 py-3 rounded-full bg-white/10 border border-white/30 
                       placeholder-white/70 focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* 🏥 Departments & Procedures */}
        <div className="space-y-12">
          {filteredServices.map(
            (dept, i) =>
              dept.procedures.length > 0 && (
                <div key={i}>
                  <h2 className="text-2xl font-semibold mb-6 border-b border-white/30 pb-2">
                    {dept.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {dept.procedures.map((p) => (
                      <Link
                        key={p._id}
                        href={`/services/${p.slug.current}`}
                        className="p-6 rounded-2xl border border-white/10 bg-white/5 
                                   hover:bg-white/15 hover:border-blue-400 transition 
                                   block text-center backdrop-blur-sm"
                      >
                        <h3 className="font-semibold text-lg">{p.title}</h3>
                      </Link>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
