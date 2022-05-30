// @ts-check
import Link from "next/link";

import HeaderButton from "./headerButton";
import ThemeChanger from "./themeChanger";

export default function Header() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-opacity-30 backdrop-blur-lg backdrop-filter dark:border-gray-700">
      <div className="mx-auto flex max-w-3xl items-center justify-between space-x-4 p-4">
        <Link href="/" passHref>
          <button className="h-min text-xl font-semibold hover:text-zinc-600 dark:hover:text-zinc-300 sm:text-2xl">
            ivirtex.dev
          </button>
        </Link>
        <div className="grid grid-cols-2 gap-2 font-light sm:flex">
          <Link href="/about" passHref>
            <HeaderButton>About</HeaderButton>
          </Link>
          {/* <Link href="/blog" passHref>
            <HeaderButton>Blog</HeaderButton>
          </Link> */}
          <Link href="/projects" passHref>
            <HeaderButton>Projects</HeaderButton>
          </Link>
          <Link href="/contact" passHref>
            <HeaderButton>Contact</HeaderButton>
          </Link>
        </div>
        <ThemeChanger />
      </div>
    </nav>
  );
}
