"use client";

// import { Metadata } from "next";
import { Post } from "../../../../../types";
import { getPostBySlug } from "../../../../../sanity/sanity.query";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import copy from "clipboard-copy"; // Import clipboard-copy

type Props = {
  params: {
    post: string;
  };
};

async function handleCopyClick(content: string) {
  try {
    await copy(content);
    alert("Code copied to clipboard!");
  } catch (error) {
    console.error("Error copying to clipboard:", error);
  }
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = params.post;
//   const post: Post = await getPostBySlug(slug);

//   return {
//     title: `${post.name} | VS Pattern Library`,
//     description: post.description,
//   };
// }

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post: Post = await getPostBySlug(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h2 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {post.name}
          </h2>
        </div>

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <p>{post.description}</p>
        </div>

        {post.codeBlocks && (
          <ul>
            {post.codeBlocks.map((block, i) => (
              <li key={i}>
                {block.styleType && (
                  <p className="mt-8 leading-7 text-teal-400">
                    {block.styleType.name}
                  </p>
                )}

                <div className="relative">
                  <button
                    className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-white rounded"
                    onClick={() => handleCopyClick(block.code.code)}
                  >
                    Copy
                  </button>

                  <SyntaxHighlighter language="jsx" style={dark}>
                    {block.code.code}
                  </SyntaxHighlighter>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
