// @ts-check
import Link from "next/link";

import Button from "./button";

export default function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto flex max-w-3xl justify-between space-x-4 p-4">
        <Link href="/" passHref>
          <button className="font-semibold text-xl hover:text-zinc-700 sm:text-2xl">
            ivirtex.dev
          </button>
        </Link>
        <div className="grid grid-cols-2 gap-1 text-sm sm:flex">
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
