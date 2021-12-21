import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  const swiftUI = "https://developer.apple.com/xcode/swiftui/";
  const flutter = "https://flutter.dev/";
  const github = "https://github.com/ivirtex";

  return (
    <div className="max-w-2xl m-auto py-10">
      <Head>
        <title>About me</title>
      </Head>
      <div className="text-3xl font-bold">About me</div>
      <div className="py-4 text-lg">
        As you probably saw on the main page, my name is Hubert, but people on
        the Internet call me <b>ivirtex</b>.<br /> I am 18 years old software
        developer from Poland. <br /> I mostly work on mobile apps using{" "}
        <a href={swiftUI} target="_blank" rel="noreferrer" className="link">
          SwiftUI
        </a>{" "}
        and{" "}
        <a href={flutter} target="_blank" rel="noreferrer" className="link">
          Flutter
        </a>
        , but I am also interested in web development and reverse engineering.
        <br />I love open-source software and I am always looking for new
        projects to contribute to. Helping others with their programming
        problems brings me also a lot of joy and fun!
        <br />
        This website was originally created to host ToS and privacy policies for
        my apps, but I decided to make it a little more personal. <br /> Feel
        free to reach out to me on{" "}
        <Link href="/contact" passHref>
          <a className="link">/contact</a>
        </Link>{" "}
        Check out my{" "}
        <a href={github} target="_blank" rel="noreferrer" className="link">
          GitHub
        </a>{" "}
        profile to see what I am working on!
      </div>
    </div>
  );
}
