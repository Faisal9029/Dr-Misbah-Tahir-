import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./src/sanity/schema";

// Netlify compatible environment variables
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId) {
  throw new Error('Missing Sanity project ID environment variables');
}

export default defineConfig({
  name: "default",
  title: "My Project",
  projectId: projectId,
  dataset: dataset || "production",
  plugins: [deskTool()],
  schema,
});