// @ts-check
import { Toaster } from "react-hot-toast";

import Background from "./background";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-zinc-100 text-zinc-900 duration-150 ease-in-out">
      <Toaster />
      <Header />
      <main className="relative mx-auto flex w-full max-w-3xl flex-grow flex-col px-4 pt-32 sm:pt-40">
        <Background />
        <div className="z-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
