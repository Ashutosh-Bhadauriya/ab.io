import { merriweather_sans } from "@/lib/font";

export const metadata = {
  title: "Creations",
  description: "Ashutosh Bhadauriya's projects",
}

export default function Home() {
  return (
    <div className="mx-10">
      <div>
        <h2
          className={`text-4xl sm:text-6xl ${merriweather_sans.className} font-extrabold mb-6`}
        >
          My creations
        </h2>
        <p>In progress..</p>
        <p></p>
      </div>
    </div>
  );
}
5;
