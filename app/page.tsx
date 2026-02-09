'use client';

// import Image from "next/image";
// import { socialLinks } from "./config";
import WorkProjectsSection from "./components/work-projects-section";
import PersonalProjectsSection from "./components/personal-projects-section";

export default function Page() {

  return (
    <section>
      <p className="text-2xl font-medium text-black dark:text-white mt-0 pt-0">
        Hello! I'm Uno 👋, a sofware engineer from <a className="text-blue-500" href="https://en.wikipedia.org/wiki/Ulaanbaatar">Ulaanbaatar, Mongolia</a>. Interested in privacy and security.
      </p>


      <div className="my-10">
        <PersonalProjectsSection />
      </div>
      <WorkProjectsSection />
    </section>
  );
}
