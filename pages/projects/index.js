// @ts-check
import Head from "next/head";
import Link from "next/link";

import Card from "../../components/card";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Projects() {
  return (
    <Layout>
      <div className="m-auto max-w-3xl">
        <Head>
          <title>Projects</title>
        </Head>
        <Title>My projects</Title>
        <Link href="/projects/networkarch" passHref>
          <button className="w-full">
            <Card>
              <p className="font-medium text-lg">NetworkArch</p>
              <p className="font-normal text-base">
                Flutter app for wireless networks diagnostics
              </p>
            </Card>
          </button>
        </Link>
      </div>
    </Layout>
  );
}
