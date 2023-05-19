import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import avatar from "./avatar.jpg";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { nunito_sans } from "@/lib/font";

export const metadata = {
  title: "Ashutosh Bhadauriya",
  description: "Ashutosh Bhadauriya's personal website",
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-slate-50 dark:bg-[#0B1120] dark:text-gray-200  ${nunito_sans.className} tracking-wide max-w-5xl mx-auto`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className=" py-10 px-4">
            <header className="mb-16">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  {" "}
                  <Link href="/">
                    <Image
                      src={avatar}
                      alt="ashutosh-avatar"
                      className="rounded-full grayscale"
                      placeholder="blur"
                      width={50}
                      priority
                    />
                  </Link>
                  <nav className="sm:text-sm text-xs font-medium sm:space-x-6 space-x-3 ml-4 sm:ml-8">
                    <Link href="/creations">Creations</Link>
                    <Link href="/posts">Writings</Link>
                  </nav>
                </div>
                <ModeToggle />
              </div>
            </header>
          </div>
          <main>{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
