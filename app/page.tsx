import { merriweather_sans } from "@/lib/font";
import { TwitterIcon } from "@/components/icons/twitter";
import { GithubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-10">
      <div className="max-w-2xl sm:mt-8 mt-4">
        <h2
          className={`text-4xl sm:text-6xl ${merriweather_sans.className} font-extrabold`}
        >
          Ashutosh Bhadauriya
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">
          In process of building cool shit ✨
        </p>
        <p className="mt-6 text-base">
          Hi! I&apos;m Ashutosh, currently dwelling at the intersection of
          curiosity and creativity - laughing, learning, and passionately
          building things I love.
        </p>
      </div>
      <div className="flex items-center gap-x-4 mt-10">
        <Link href="https://twitter.com/b__ashutosh" target="_blank">
          <TwitterIcon className="dark:fill-zinc-400" />
        </Link>
        <Link href="https://github.com/Ashutosh-Bhadauriya" target="_blank">
          <GithubIcon className="dark:fill-zinc-400" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ashutosh-bhadauriya-b117431a9/"
          target="_blank"
        >
          <LinkedInIcon className="dark:fill-zinc-400" />
        </Link>
      </div>
    </div>
  );
}
5;
