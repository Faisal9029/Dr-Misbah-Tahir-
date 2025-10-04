// studio/schemas/procedure.ts
import { defineType } from "sanity";

export default defineType({
  name: "procedure",
  title: "Procedure",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "department", title: "Department", type: "string" },
  ],
});
