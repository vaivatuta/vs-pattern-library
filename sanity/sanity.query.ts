import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      name,
      "slug": slug.current,
      postType->,
      description,
      codeBlocks[]{
        styleType->,
        code
      }
    }`
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      name,
      postType->,
      description,
      codeBlocks[]{
        styleType->,
        code
      }
    }`,
    { slug }
  );
}
