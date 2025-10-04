import { defineType, defineField } from "sanity";

export default defineType({
  name: "review",
  title: "Patient Review",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Patient Name",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Review Text",
      type: "text",
    }),
    defineField({
      name: "media",
      title: "Media (Image/Video/Audio)",
      type: "file",
      options: {
        accept: "image/*,video/*,audio/*", // ✅ allow all
      },
    }),
  ],
});
