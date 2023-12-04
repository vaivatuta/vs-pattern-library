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
  code: {
    code: string; // This allows accessing block.code.code
  };
};

export type StyleTypeReference = {
  _id: string;
  name: string;
};
