import { getPosts } from "../../sanity/sanity.query";
import { PostType } from "../../types";

export default async function Home() {
  const posts: PostType[] = await getPosts();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {posts && posts.map((post) => "hello")}
      </section>
    </main>
  );
}
