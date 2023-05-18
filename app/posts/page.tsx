import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { merriweather_sans } from "@/lib/font";

export const metadata = {
  title: "Posts",
  description: "All the blog posts"
}

export default function Posts() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-12">
        <h2
          className={`text-6xl font- mb-6 ${merriweather_sans.className} font-extrabold`}
        >
          My 2 cents
        </h2>
        <p>
          Collection of my writings on software, design and whatever I learn in
          the way
        </p>
      </div>
      <div className="border-l border-zinc-200 dark:border-zinc-800 pl-6">
        {allPosts.map((post) => (
          <article
            key={post._id}
            className="my-8 md:grid md:grid-cols-4 md:items-baseline"
          >
            <div className="md:col-span-3 group relative flex flex-col items-start hover:bg-zinc-100 dark:hover:bg-[#070c1a] p-6 rounded-2xl ">
              <Link href={post.slug}>
                <h2 className="font-bold text-xl mb-1">{post.title}</h2>
                {post.description && (
                  <p className="text-zinc-600 dark:text-zinc-400">{post.description}</p>
                )}
              </Link>
            </div>
            <div className="mt-1 md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-600 dark:text-zinc-400">
              {post.date && <p>{formatDate(post.date)}</p>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}