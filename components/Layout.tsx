// @ts-check
import { Toaster } from "react-hot-toast";

import ColorCircles from "./ColorCircles";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div
      className={`flex min-h-screen flex-col ${
        props.showAnimatedBg && "overflow-hidden"
      }  bg-zinc-100 text-zinc-900 duration-150 ease-in-out dark:bg-gray-900 dark:text-zinc-100`}
    >
      <Toaster />
      {props.customHeader ?? <Header />}
      <main className="relative mx-auto flex w-full max-w-3xl flex-grow flex-col px-4 pt-32 sm:pt-40">
        {props.showAnimatedBg && <ColorCircles />}
        <div className="z-10">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
}
