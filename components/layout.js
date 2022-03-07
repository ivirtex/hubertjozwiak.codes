// @ts-check
import { Toaster } from "react-hot-toast";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-850 text-zinc-200 duration-150 ease-in-out">
      <Toaster />
      <Header />
      <main className="flex-grow py-40 px-4 sm:py-32">{children}</main>
      <Footer />
    </div>
  );
}
