import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Usukhbayar Batbayar's Resume",
};

export default function Resume() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Resume</h1>
      <div className="w-full">
        <iframe
          src="/resume.pdf"
          width="100%"
          height="800px"
          className="border-0 rounded-lg shadow-lg"
          title="Resume PDF"
        />
        <div className="mt-4 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Open in New Tab
          </a>
        </div>
      </div>
    </section>
  );
}
