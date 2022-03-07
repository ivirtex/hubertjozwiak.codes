// @ts-check
import Head from "next/head";
import Link from "next/link";

import Card from "../../components/card";
import Layout from "../../components/layout";

export default function Projects() {
  return (
    <Layout>
      <div className="m-auto max-w-2xl">
        <Head>
          <title>Projects</title>
        </Head>
        <div className="pb-4 text-3xl font-bold">My projects</div>
        <Link href="/projects/networkarch" passHref>
          <button className="w-full">
            <Card>
              <p className="text-lg font-medium">NetworkArch</p>
              <p className="text-base font-normal">
                Flutter app for wireless networks diagnostics
              </p>
            </Card>
          </button>
        </Link>
      </div>
    </Layout>
  );
}
