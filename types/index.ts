import { Slug } from "sanity";

export type Post = {
  _id: string;
  name: string;
  slug: Slug;
  postType: PostTypeReference;
  description: string;
  codeBlocks: CodeBlock[];
};

export type PostTypeReference = {
  _id: string;
  name: string;
};

export type CodeBlock = {
  styleType: StyleTypeReference;
  code: string;
};

export type StyleTypeReference = {
  _id: string;
  name: string;
};
