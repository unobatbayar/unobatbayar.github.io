'use client';

// import Image from "next/image";
// import { socialLinks } from "./config";
import DynamicText from "./components/dynamic-text";
import { projects } from "./projects/project-data";
import { useState } from 'react';

export default function Page() {
  // const [showMore, setShowMore] = useState(false);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        <DynamicText/>
      </h1>

    <div className="prose prose-neutral dark:prose-invert mb-2">
      <p>
        Hello! I’m Uno 👋, a software engineer and beginner judoka 🥋 from Ulaanbaatar, Mongolia 🇲🇳.
      </p>

      {/* Hidden until clicked TODO */}
      {/* {showMore && (
        <p>
        </p>
      )} */}

      {/* Toggle Button */}
      {/* <button
        onClick={() => setShowMore(!showMore)}
        className="text-sm text-blue-500 hover:underline focus:outline-none"
      >
        {showMore ? 'Show less' : 'Read more'}
      </button> */}
    </div>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <div className="flex items-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    width="32"
                    height="32"
                    className="mr-2 rounded-lg"
                  />
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {project.title}
                  </span>
                </div>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
              <p className="pt-3 text-blue-500 dark:text-blue-400 text-sm">
                {project.tools}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
