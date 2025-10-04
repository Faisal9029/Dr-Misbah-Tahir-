import { type SchemaTypeDefinition } from "sanity";
import video from "./schemaTypes/video";
import procedure from "./schemaTypes/procedure";
import blog from "./schemaTypes/blog";
import review from "./schemaTypes/review";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [video,blog,review,procedure],
};
