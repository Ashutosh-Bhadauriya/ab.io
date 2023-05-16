import Image from "next/image";
import avatar from "./avatar.jpg";
export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div className="flex items-center">
        {/* <Image
          src={avatar}
          alt="ashutosh-avatar"
          className="rounded-full grayscale"
          placeholder="blur"
          width={100}
          height={100}
          priority
        /> */}
        <p className="text-3xl">Ashutosh Bhadauriya</p>
      </div>
    </div>
  );
}
