import { defineType, defineField } from "sanity";

export default defineType({
  name: "procedure",
  title: "Procedure",
  type: "document",
  fields: [
    // 🩺 Basic Fields
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
    }),

    // 📖 Content Fields
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "content",
      title: "Detailed Content",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Procedure Image",
      type: "image",
      options: { hotspot: true },
    }),

    // 🟢 Extra Fields
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "text",
    }),
    defineField({
      name: "preparation",
      title: "Preparation",
      type: "text",
    }),
    defineField({
      name: "recovery",
      title: "Recovery",
      type: "text",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
    }),
    defineField({
      name: "anesthesia",
      title: "Anesthesia",
      type: "string",
    }),

    // ✅ Array Fields
    defineField({
      name: "indications",
      title: "Indications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "risks",
      title: "Risks",
      type: "array",
      of: [{ type: "string" }],
    }),

    // ❓ FAQs Array of Objects
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "faq",
          title: "FAQ Item",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text" }),
          ],
        }),
      ],
    }),

    // 🧠 SEO Object
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
        defineField({
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        }),
      ],
    }),
  ],
});
