import Head from "next/head";

import Hedgehog from "../public/marta/hedgehog.svg";
import Letter from "../public/marta/letter.svg";

export default function Marta() {
  return (
    <div className="m-auto w-max">
      <Head>
        <title>luv u bish!!</title>
      </Head>
      <div className="flex-col ">
        <Hedgehog className="mb-12" />
        <Letter className="mb-6" />
      </div>
    </div>
  );
}
