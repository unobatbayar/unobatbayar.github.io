import { personalProjects } from "../projects/project-data";

export default function PersonalProjectsSection() {
  return (
    <>
      <h1 className="mb-2 text-2xl font-medium tracking-tight">Personal Projects</h1>
      <p className="prose prose-neutral dark:prose-invert mb-6 mt-0 pt-0 text-neutral-600 dark:text-neutral-400">
        Personal projects I build to explore ideas and sharpen my skills.
      </p>
      <div className="space-y-6">
        {personalProjects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-16 h-16 rounded-lg object-contain flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="ml-4 flex-1 min-w-0">
                    <h3 className="text-lg font-medium tracking-tight text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-neutral-500 dark:text-neutral-400 tabular-nums text-sm mt-1 block">
                      {project.year}
                    </span>
                  </div>
                </div>
                <p className="prose prose-neutral dark:prose-invert text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-blue-500 dark:text-blue-400 text-xs font-medium pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  {project.tools}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

