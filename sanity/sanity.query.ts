import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      name,
      slug,
      postType->,
      description,
      codeBlocks[]{
        styleType->,
        code
      }
    }`
  );
}
