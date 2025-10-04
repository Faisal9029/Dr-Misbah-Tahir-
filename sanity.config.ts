import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  name: "default",
  title: "My Project",
  projectId: "w0fodn6b",
  dataset: "production",
  plugins: [deskTool()],
  schema,
});
