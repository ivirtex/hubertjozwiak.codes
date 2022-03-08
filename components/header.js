// @ts-check
import Link from "next/link";

import Button from "./button";

export default function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gray-950 bg-opacity-75 backdrop-blur">
      <div className="flex flex-row p-4">
        <Link href="/" passHref>
          <button className="text-2xl font-semibold hover:text-zinc-400">
            ivirtex.dev
          </button>
        </Link>
        <div className="grow"></div>
        <div className="grid grid-cols-2 gap-2 sm:flex">
          <Link href="/about" passHref>
            <Button>About</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button>Blog</Button>
          </Link>
          <Link href="/projects" passHref>
            <Button>Projects</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
