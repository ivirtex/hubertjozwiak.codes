// @ts-check
import { Toaster } from "react-hot-toast";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col bg-zinc-100 text-zinc-900 duration-150 ease-in-out">
      <Toaster />
      <Header />
      <main className="flex-grow px-4 pt-32 sm:pt-40">{children}</main>
      <Footer />
    </div>
  );
}
