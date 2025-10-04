import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity/lib/sanity.client";

// Image builder banate hain
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
