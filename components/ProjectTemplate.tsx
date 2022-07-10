import Image from "next/image";
import Link from "next/link";

import InteractiveCard from "./InteractiveCard";

export default function ProjectTemplate({
  logoSrc,
  title,
  description,
  website,
  code,
}) {
  return (
    <div className=" ">
      <div className="flex h-min flex-col justify-between pb-4 sm:flex-row-reverse">
        <div className="max-w-xs pb-2 sm:basis-56">
          <Image alt={`${title} logo`} src={logoSrc} className="rounded-xl" />
        </div>
        <div className="h-max flex-col justify-between sm:basis-96">
          <div>
            <p className="pb-1 text-xl font-bold">{title}</p>
            <p className="text-lg">{description}</p>
          </div>
          <div className="space-x-2 justify-self-end pt-2">
            <Link href={website} passHref>
              <button>
                <InteractiveCard>View project</InteractiveCard>
              </button>
            </Link>
            <a href={code}>
              <button>
                <InteractiveCard>View code</InteractiveCard>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
