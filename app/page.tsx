'use client';

// import Image from "next/image";
// import { socialLinks } from "./config";
import WorkProjectsSection from "./components/work-projects-section";
import PersonalProjectsSection from "./components/personal-projects-section";

export default function Page() {

  return (
    <section>
      <p className="text-2xl font-medium text-black dark:text-white mt-0 pt-0">
        Hello! I’m Uno 👋, a software engineer from Ulaanbaatar, Mongolia. I’m interested in privacy and security.
      </p>


      <WorkProjectsSection className="mt-10" />
      <PersonalProjectsSection />
    </section>
  );
}
