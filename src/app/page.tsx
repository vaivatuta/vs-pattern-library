import { getPosts } from "../../sanity/sanity.query";
import { Post } from "../../types";
import Link from "next/link";

export default async function Home() {
  // All posts
  const posts: Post[] = await getPosts();

  // Post types
  const components = posts.filter((post) => post.postType.name === "Component");
  const hooks = posts.filter((post) => post.postType.name === "Hook");

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex flex-col gap-20 lg:mt-32 mt-20 mb-16 items-center text-center">
        {[components, hooks].map((posts, i) => (
          <div>
            <h2 className="text-green-400 mb-4">
              {i === 0 ? "Components" : "Hooks"}
            </h2>
            <ul className="flex flex-col gap-1">
              {posts.map((post) => (
                <div key={post._id}>
                  <Link
                    href={`/${i === 0 ? "components" : "hooks"}/${
                      post.slug.current
                    }`}
                  >
                    {post.name}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
