// @ts-check
import { FaGithub } from "react-icons/fa";

export default function Footer({ className = "" }) {
  return (
    <footer className={`${className} w-full p-4 font-normal text-sm`}>
      <div className="flex">
        <p className="mx-auto px-4">
          Copyright © 2021 Hubert Jóźwiak. All rights reserved.
        </p>
        <div className="hover:opacity-75">
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
