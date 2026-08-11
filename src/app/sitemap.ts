import type { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity.client";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/blog",
    "/videos",
    "/reviews",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  let procedureRoutes: MetadataRoute.Sitemap = [];
  try {
    const slugs: string[] = await client.fetch(
      groq`*[_type == "procedure" && defined(slug.current)][].slug.current`
    );
    procedureRoutes = slugs.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: new Date(),
    }));
  } catch {
    // Sanity unreachable at build time — ship the static routes only.
  }

  return [...staticRoutes, ...procedureRoutes];
}
