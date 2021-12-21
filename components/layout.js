import { Toaster } from "react-hot-toast";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen duration-150 ease-in-out bg-gray-850 text-zinc-200">
      <Toaster />
      <Header />
      <main className="flex-grow pt-20 px-4">{children}</main>
      <Footer />
    </div>
  );
}
