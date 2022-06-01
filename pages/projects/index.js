// @ts-check
import Head from "next/head";
// import { SiDart, SiFlutter } from "react-icons/si";

// import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProjectTemplate from "../../components/ProjectTemplate";
import Title from "../../components/Title";
// @ts-ignore
import networkArchLogo from "../../public/networkarch/app_icon.png";

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
      {/* TODO: fix padding in this */}
      {/* <div className="flex space-x-2">
        <Card className="flex w-min items-center">
          <SiFlutter size={15} />
          <span className="pl-2">Flutter</span>
        </Card>
        <Card className="flex w-min items-center">
          <SiDart size={20} />
          <span className="pl-2">Dart</span>
        </Card>
      </div> */}
      <div className="w-full">
        <ProjectTemplate
          logoSrc={networkArchLogo}
          title="NetworkArch"
          description={networkArchDesc}
          website="/projects/networkarch"
          code="https://github.com/ivirtex/networkarch-flutter"
        />
        {/* <div className="my-8 mx-4 h-0.5 rounded-full bg-zinc-300" />
        <ProjectTemplate
          logoSrc={networkArchLogo}
          title="NetworkArch"
          description={networkArchDesc}
          website="/projects/networkarch"
          code="https://github.com/ivirtex/networkarch-flutter"
        /> */}
      </div>
    </Layout>
  );
}
