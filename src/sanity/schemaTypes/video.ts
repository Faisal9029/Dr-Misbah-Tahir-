import { defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    },
    ],
});
