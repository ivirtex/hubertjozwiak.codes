// @ts-check
import Head from "next/head";

import Layout from "../../components/Layout";
import ProjectTemplate from "../../components/ProjectTemplate";
import Title from "../../components/Title";
import networkArchSS from "../../public/networkarch/screenshot.png";

export default function Projects() {
  const networkArchDesc = (
    <>
      Flutter Android/iOS app for wireless network diagnostics built with
      layered, clean architecture and Bloc design pattern. <br /> <br />
      Features tools like: Wi-Fi/Cellular connection details, ping, Wake on LAN,
      LAN scanner, IP geolocation, Whois, DNS Lookup.
    </>
  );

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Title>My projects</Title>
      <div className="w-full">
        <ProjectTemplate
          logoSrc={networkArchSS}
          title="NetworkArch"
          description={networkArchDesc}
          website="/projects/networkarch"
          code="https://github.com/ivirtex/networkarch-flutter"
        />
      </div>
    </Layout>
  );
}
