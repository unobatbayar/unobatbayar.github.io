'use client';

// import Image from "next/image";
// import { socialLinks } from "./config";
import DynamicText from "./components/dynamic-text";
import { personalProjects, workProjects } from "./projects/project-data";

export default function Page() {

  return (
    <section>
      <p className="text-2xl font-medium text-black dark:text-white mt-0 pt-0">
        Hello! I'm Uno 👋, a software engineer from Ulaanbaatar, Mongolia 🇲🇳. I like <DynamicText/>.
      </p>


      <h1 className="mb-2 mt-10 text-2xl font-medium tracking-tight">Work Projects</h1>
      <p className="prose prose-neutral dark:prose-invert mb-6 mt-0 pt-0 text-neutral-600 dark:text-neutral-400">
        Apps and software I worked on during my career and employment.
      </p>
      <div className="space-y-6 mb-12">
        {workProjects.length > 0 ? (
          workProjects.map((project, index) => (
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
          ))
        ) : (
          <p className="text-neutral-600 dark:text-neutral-400">
            Work projects will be displayed here.
          </p>
        )}
      </div>

      <h1 className="mb-2 text-2xl font-medium tracking-tight">Personal Projects</h1>
      <p className="prose prose-neutral dark:prose-invert mb-6 mt-0 pt-0 text-neutral-600 dark:text-neutral-400">
        Things I've done in my free time for fun and learning.
      </p>
      <div className="space-y-6">
        {personalProjects.map((project, index) => (
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
