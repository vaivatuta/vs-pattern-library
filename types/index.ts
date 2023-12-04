export type Post = {
  _id: string;
  name: string;
  slug: string;
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
