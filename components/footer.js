// @ts-check
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-4 text-sm ">
      <div className="mx-auto flex max-w-3xl justify-between ">
        Copyright © 2022 Hubert Jóźwiak. All rights reserved.
        <div className="ml-4 hover:opacity-75">
          <a
            href="https://github.com/ivirtex"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to my GitHub profile"
          >
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
