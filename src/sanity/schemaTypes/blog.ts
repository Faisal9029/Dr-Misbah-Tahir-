import { defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "posterImage",
      title: "Poster Image",
      type: "image",
      options: {
        hotspot: true, // cropping option
      },
    },
  ],
});
