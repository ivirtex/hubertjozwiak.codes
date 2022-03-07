// @ts-check
import splitbee from "@splitbee/web";
import copy from "copy-to-clipboard";
import Head from "next/head";
import { toast } from "react-hot-toast";
import { BsDiscord, BsEnvelopeFill } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";

import Card from "../components/card";
import Layout from "../components/layout";

export default function Contact() {
  let handleCopyMail = () => {
    splitbee.track("contact", { type: "mail" });
    copy("ivirtex@ivirtex.dev");
    toast.success("Email copied to clipboard!", {
      style: { background: "#0a0f18", color: "#fff" },
    });
  };

  let handleCopyDiscord = () => {
    splitbee.track("contact", { type: "discord" });
  };

  return (
    <Layout>
      <div className="m-auto max-w-2xl">
        <Head>
          <title>Contact</title>
        </Head>
        <div className="text-3xl font-bold">Contact</div>
        <div className="py-4 text-lg">Reach out to me:</div>
        <address>
          <a
            href="https://discordapp.com/users/922104761120084039"
            onClick={handleCopyDiscord}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-row items-center">
              <BsDiscord size={25} />
              <span className="pl-4">Discord</span>
            </Card>
          </a>
          <button className="w-full" onClick={handleCopyMail}>
            <Card className="flex flex-row items-center">
              <BsEnvelopeFill size={25} />
              <span className="pl-4">Email</span>
              <IoCopy size={25} className="ml-auto" />
            </Card>
          </button>
        </address>
      </div>
    </Layout>
  );
}
