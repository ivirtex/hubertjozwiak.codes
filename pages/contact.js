import Head from "next/head";
import { BsDiscord, BsEnvelopeFill } from "react-icons/bs";

import Card from "../components/card";

export default function Contact() {
  return (
    <div className="max-w-2xl m-auto">
      <Head>
        <title>Contact</title>
      </Head>
      <div className="text-3xl font-bold">Contact</div>
      <div className="py-4 text-lg">Reach out to me:</div>
      <a href="https://discordapp.com/users/922104761120084039">
        <Card className="flex flex-row items-center">
          <BsDiscord size={25} />
          <span className="pl-4">Discord</span>
        </Card>
      </a>
      <Card className="flex flex-row items-center">
        <BsEnvelopeFill size={25} />
        <span className="pl-4">Email - soon</span>
      </Card>
    </div>
  );
}
