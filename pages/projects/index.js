import Head from "next/head";

import Card from "../../components/card";

export default function Projects() {
  return (
    <div className="max-w-2xl m-auto">
      <Head>
        <title>Projects</title>
      </Head>
      <div className="font-bold text-3xl pb-4">My projects</div>
      <button className="w-full">
        <Card>
          <p className="text-lg font-medium">NetworkArch</p>
          <p>TBA</p>
        </Card>
      </button>
    </div>
  );
}
