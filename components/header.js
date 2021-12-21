import Link from "next/link";

import Button from "./button";

export default function Header() {
  return (
    <nav className="fixed top-0 inset-x-0 backdrop-blur bg-gray-950 bg-opacity-75">
      <div className="flex flex-row gap-2 p-4">
        <Link href="/" passHref>
          <button className="text-2xl font-semibold hover:text-zinc-400">
            ivirtex
          </button>
        </Link>
        <div className="grow"></div>
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
    </nav>
  );
}
