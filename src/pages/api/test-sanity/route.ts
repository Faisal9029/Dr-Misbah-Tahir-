// src/pages/api/test-sanity.ts
import { sanityClient } from "@/sanity.client";

export default async function handler(req, res) {
  try {
    const data = await sanityClient.fetch(`*[_type == "post"]{title}`);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
