import { Metadata } from "next";
import { Post } from "../../../../types";
import { getPostBySlug } from "../../../../sanity/sanity.query";

type Props = {
  params: {
    post: string;
  };
};

// Dynamic metadata for SEO
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

          {/* <a
            href={post.postUrl}
            rel="noreferrer noopener"
            className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
          >
            Explore
          </a> */}
        </div>

        {/* <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={post.description} />
        </div> */}
      </div>
    </main>
  );
}
