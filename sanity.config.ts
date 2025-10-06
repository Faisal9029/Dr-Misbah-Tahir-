import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./src/sanity/schema";

// Debug ke liye
console.log('Sanity Project ID:', process.env.SANITY_STUDIO_PROJECT_ID);

export default defineConfig({
  name: "default",
  title: "My Project",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  plugins: [deskTool()],
  schema,
});