// @ts-check
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SiFlutter, SiDart } from "react-icons/si";

import Button from "../../../components/button";
import Card from "../../../components/card";
import Footer from "../../../components/footer";
// @ts-ignore
import appLogo from "../../../public/networkarch/app_icon.png";

export default function NetworkArch() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-zinc-200 duration-150 ease-in-out">
      <Head>
        <title>NetworkArch</title>
        <link rel="shortcut icon" href="/public/networkarch/favicon.ico" />
      </Head>
      <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg">
        <div className="flex flex-col items-center space-y-1 p-4 sm:flex-row">
          <Link href="/" passHref>
            <button className="text-2xl font-semibold hover:text-zinc-400">
              ivirtex.dev
            </button>
          </Link>
          <span className="grow"></span>
          <div className="flex space-x-2 ">
            <a
              href="https://github.com/ivirtex/networkarch-flutter"
              rel="noreferrer"
            >
              <Button>GitHub</Button>
            </a>
            <Link href="/contact" passHref>
              <Button>Contact</Button>
            </Link>
            <Link href="networkarch/privacyPolicy" passHref>
              <Button>Privacy policy</Button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="m-auto max-w-3xl flex-grow py-40 px-4 font-inter">
        <div className="flex flex-col md:flex-row-reverse ">
          <div className="py-4 px-10">
            <Image src={appLogo} alt="App logo" placeholder="blur" />
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
            <div className="py-2 text-center font-inter text-xl md:text-left md:text-2xl">
              Open-source mobile app equipped with various useful utilities for
              network diagnostics
            </div>
            <div className="flex flex-row space-x-2">
              <Card className="flex w-min items-center bg-neutral-800 hover:bg-neutral-900">
                <SiFlutter size={20} />
                <span className="pl-2">Flutter</span>
              </Card>
              <Card className="flex w-min items-center bg-neutral-800 hover:bg-neutral-900">
                <SiDart size={20} />
                <span className="pl-2">Dart</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
