import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { merriweather_sans } from "@/lib/font";
import { compareDesc } from "date-fns";

export const metadata = {
  title: "Writings",
  description: "All the blog posts",
};

export default function Posts() {
  const posts = allPosts
    .filter((post) => post.date)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-12 mx-10 sm:mx-0">
        <h2
          className={`text-4xl sm:text-6xl mb-6 ${merriweather_sans.className} font-extrabold`}
        >
          My 2 cents
        </h2>
        <p>
          Collection of my writings on software, design and whatever I learn in
          the way
        </p>
      </div>
      <div className="border-l border-zinc-200 dark:border-zinc-800 pl-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="my-8 md:grid md:grid-cols-4 md:items-baseline"
          >
            <div className="md:col-span-3 group relative flex flex-col items-start hover:bg-zinc-100 dark:hover:bg-[#070c1a] p-6 rounded-2xl ">
              <Link href={post.slug}>
                <h2 className="font-bold text-xl mb-1">{post.title}</h2>
                {post.description && (
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {post.description}
                  </p>
                )}
              </Link>
              <div className="mt-1 md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400">
                {post.date && <p>{formatDate(post.date)}</p>}
              </div>
            </div>
            <div className="mt-1 hidden md:block relative z-10 order-first mb-3 text-sm text-zinc-400">
              {post.date && <p>{formatDate(post.date)}</p>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
