// @ts-check
import { useState } from "react";

import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

import HeaderButton from "./headerButton";
import ThemeChanger from "./themeChanger";

export default function Header() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-opacity-30 backdrop-blur-lg backdrop-filter dark:border-gray-700">
      <div className="mx-auto flex max-w-3xl items-center justify-between space-x-4 p-4">
        <Link href="/" passHref>
          <button className="h-min font-semibold text-2xl hover:text-zinc-600 dark:hover:text-zinc-300">
            ivirtex.dev
          </button>
        </Link>
        <button
          className="rounded-full bg-gray-200 p-3 dark:bg-gray-800 sm:hidden"
          onClick={() => setIsOpen(true)}
        >
          <MdMenu size={25} />
        </button>

        <div className="hidden font-light sm:flex">
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

        <ThemeChanger className="hidden sm:flex" />
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed top-4 right-4  rounded-lg bg-zinc-100 p-6 font-semibold text-gray-900 shadow-lg dark:bg-gray-900 dark:text-gray-400">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only ">Close navigation</span>
              <MdClose size={20} className="fill-red-700" />
            </button>
            <ul className="space-y-4">
              <li>
                <Link href="/about" passHref>
                  <HeaderButton>About</HeaderButton>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <HeaderButton>Contact</HeaderButton>
                </Link>
              </li>
              <li>
                <Link href="/projects" passHref>
                  <HeaderButton>Projects</HeaderButton>
                </Link>
              </li>
            </ul>
            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-200/10">
              <ThemeChanger extended />
            </div>
          </div>
        </Dialog>
      </div>
    </nav>
  );
}
