// @ts-check
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SiFlutter, SiDart } from "react-icons/si";

import Footer from "../../../components/Footer";
import HeaderButton from "../../../components/HeaderButton";
import InteractiveCard from "../../../components/InteractiveCard";
// @ts-ignore
import networkArchLogo from "../../../public/networkarch/app_icon.png";
// @ts-ignore
import playStoreBadge from "../../../public/play_store_badge.png";

export default function NetworkArch() {
  return (
    <div className="flex min-h-screen flex-col bg-[#101010] text-zinc-200 duration-150 ease-in-out">
      <Head>
        <title>NetworkArch</title>
        <link rel="shortcut icon" href="/public/networkarch/favicon.ico" />
      </Head>
      <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg">
        <div className="flex flex-col items-center space-y-1 p-4 sm:flex-row sm:space-y-0">
          <Link href="/" passHref>
            <button className="h-min text-xl font-semibold hover:text-zinc-300 sm:text-2xl">
              ivirtex.dev
            </button>
          </Link>
          <span className="grow"></span>
          <div className="flex space-x-2">
            <a
              href="https://github.com/ivirtex/networkarch-flutter"
              rel="noreferrer"
            >
              <HeaderButton className="hover:bg-neutral-800 dark:hover:bg-neutral-800">
                GitHub
              </HeaderButton>
            </a>
            <Link href="/contact" passHref>
              <HeaderButton className="hover:bg-neutral-800 dark:hover:bg-neutral-800">
                Contact
              </HeaderButton>
            </Link>
            <Link href="networkarch/privacyPolicy" passHref>
              <HeaderButton className="hover:bg-neutral-800 dark:hover:bg-neutral-800">
                Privacy policy
              </HeaderButton>
            </Link>
          </div>
        </div>
      </nav>
      <div className="m-auto max-w-3xl flex-grow py-40 px-4 font-inter">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="py-4 px-10">
            <Image src={networkArchLogo} alt="App logo" />
          </div>
          <div className="m-auto flex flex-col items-center justify-center md:items-start md:justify-start">
            <div className="flex flex-row">
              <span className="font-extrabold text-white text-4xl md:text-6xl">
                Network
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-extrabold text-transparent text-4xl md:text-6xl">
                Arch
              </span>
            </div>
            <div className="py-2 text-center text-xl font-inter md:text-left md:text-2xl">
              Open-source mobile app equipped with various useful utilities for
              network diagnostics
            </div>
            <div className="flex flex-row space-x-2">
              <InteractiveCard className="flex w-min items-center bg-neutral-800 bg-opacity-100 dark:bg-neutral-800">
                <SiFlutter size={20} />
                <span className="pl-2">Flutter</span>
              </InteractiveCard>
              <InteractiveCard className="flex w-min items-center bg-neutral-800 bg-opacity-100 dark:bg-neutral-800">
                <SiDart size={20} />
                <span className="pl-2">Dart</span>
              </InteractiveCard>
            </div>
            <Image src={playStoreBadge} alt="Google Play badge" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
