import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // 👈 apna project ID yahan likho
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01", // ya koi latest date (YYYY-MM-DD)
  useCdn: true, // CDN fast reads ke liye (true = production)
});
