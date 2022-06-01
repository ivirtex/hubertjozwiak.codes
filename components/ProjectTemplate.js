import Image from "next/image";
import Link from "next/link";

export default function ProjectTemplate({
  logoSrc,
  title,
  description,
  website,
  code,
}) {
  return (
    <div className="flex flex-col justify-between pb-4 sm:flex-row-reverse ">
      <div className="max-w-xs pb-2 sm:basis-44 sm:py-4">
        <Image alt={`${title} logo`} src={logoSrc} />
      </div>
      <div className="sm:basis-96">
        <p className="pb-1 text-xl font-bold">{title}</p>
        <p className="text-lg">{description}</p>
        <div className="flex space-x-2 pt-8 ">
          <Link href={website} passHref>
            <button>
              <p className="rounded-lg bg-zinc-200 bg-opacity-60 p-3 duration-150 ease-in-out hover:bg-zinc-300 dark:bg-gray-800 dark:bg-opacity-50 dark:hover:bg-gray-700">
                View project
              </p>
            </button>
          </Link>
          <a href={code}>
            <button>
              <p className="rounded-lg bg-zinc-200 bg-opacity-60 p-3 duration-150 ease-in-out hover:bg-zinc-300 dark:bg-gray-800 dark:bg-opacity-50 dark:hover:bg-gray-700">
                View code
              </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
