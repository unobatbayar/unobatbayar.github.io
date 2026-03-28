import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Usukhbayar Batbayar, software engineer working across web, mobile, and backend.",
};

export default function Resume() {
  return (
    <section className="space-y-12">
      <div className="glass-panel glass-panel-strong rounded-[2.25rem] px-6 py-9 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
              Resume
            </p>
            <h1 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl">
              View resume in-site.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-700 dark:text-neutral-200">
              Fitted to the screen for quick reading, with the option to open the PDF in a separate tab.
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
          >
            Open in new tab
          </a>
        </div>
      </div>

      <div className="glass-panel overflow-hidden rounded-[2rem] p-2 sm:p-3">
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&zoom=page-width"
          title="Resume PDF"
          className="h-[82vh] w-full rounded-[1.25rem] border-0 bg-white sm:h-[86vh] xl:h-[88vh]"
        />
      </div>
    </section>
  );
}
