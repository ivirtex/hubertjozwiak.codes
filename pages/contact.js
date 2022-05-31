// @ts-check
import splitbee from "@splitbee/web";
import copy from "copy-to-clipboard";
import { useTheme } from "next-themes";
import Head from "next/head";
import { toast } from "react-hot-toast";
import { BsDiscord, BsEnvelopeFill } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";

import InteractiveCard from "../components/InteractiveCard";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Contact() {
  const { theme } = useTheme();

  let handleCopyMail = () => {
    splitbee.track("contact", { type: "mail" });
    copy("ivirtex@ivirtex.dev");
    toast.success("Email copied to clipboard!", {
      style:
        theme === "dark"
          ? { background: "#1d2536", color: "#fff" }
          : { background: "#f0f0f0", color: "#000" },
    });
  };

  let handleCopyDiscord = () => {
    splitbee.track("contact", { type: "discord" });
  };

  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Title>Contact</Title>
      <div className="pb-4 text-lg">Reach out to me:</div>
      <address>
        <a
          href="https://discordapp.com/users/922104761120084039"
          onClick={handleCopyDiscord}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InteractiveCard className="flex flex-row items-center">
            <BsDiscord size={25} />
            <span className="pl-4">Discord</span>
          </InteractiveCard>
        </a>
        <button className="w-full" onClick={handleCopyMail}>
          <InteractiveCard className="flex flex-row items-center">
            <BsEnvelopeFill size={25} />
            <span className="pl-4">Email</span>
            <IoCopy size={25} className="ml-auto" />
          </InteractiveCard>
        </button>
      </address>
    </Layout>
  );
}
