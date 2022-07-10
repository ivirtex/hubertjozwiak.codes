import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import AppStoreBadge from "../../../components/AppStoreBadge";
import InteractiveCard from "../../../components/InteractiveCard";
import Layout from "../../../components/Layout";
import PlayStoreBadge from "../../../components/PlayStoreBadge";
import networkArchLogo from "../../../public/networkarch/app_icon.png";

export default function NetworkArch() {
  return (
    <Layout showAnimatedBg>
      <Head>
        <title>NetworkArch</title>
        <link rel="shortcut icon" href="/public/networkarch/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="flex flex-col items-center md:flex-row-reverse md:items-start">
          <div className="max-w-sm py-4 px-10">
            <Image src={networkArchLogo} alt="App logo" />
            <Link href="/projects/networkarch/privacyPolicy" passHref>
              <button className="w-full py-2">
                <InteractiveCard className="flex justify-center">
                  Privacy Policy
                </InteractiveCard>
              </button>
            </Link>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
              <button className="w-full">
                <InteractiveCard className="flex justify-center">
                  Terms of Use
                </InteractiveCard>
              </button>
            </a>
          </div>
          <div className="m-auto flex flex-col place-content-center items-center md:items-start">
            <div className="flex flex-row">
              <span className="font-extrabold text-black text-4xl dark:text-white md:text-6xl">
                Network
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-extrabold text-transparent text-4xl md:text-6xl">
                Arch
              </span>
            </div>
            <div className="py-2 text-center text-xl font-inter md:text-left md:text-2xl">
              Open-source mobile app equipped with various useful utilities for
              network diagnostics
            </div>

            <div className="flex flex-col space-y-2 py-2 md:flex-row md:space-y-0 md:space-x-2">
              <PlayStoreBadge
                url={
                  "https://play.google.com/store/apps/details?id=com.hubertjozwiak.networkarch"
                }
                width={200}
              />
              <AppStoreBadge
                url={"https://apps.apple.com/us/app/networkarch/id1526690989"}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
