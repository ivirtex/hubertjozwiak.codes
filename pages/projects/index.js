// @ts-check
import Head from "next/head";
import Link from "next/link";

import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Title from "../../components/Title";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Title>My projects</Title>
      <Link href="/projects/networkarch" passHref>
        <button className="w-full">
          <Card>
            <p className="text-lg font-medium">NetworkArch</p>
            <p className="font-normal text-base">
              Flutter app for wireless networks diagnostics
            </p>
          </Card>
        </button>
      </Link>
    </Layout>
  );
}
