import React from "react";
import type { Metadata } from "next";
import WorkProjectsSection from "../components/work-projects-section";
import PersonalProjectsSection from "../components/personal-projects-section";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Personal and Work Projects",
};

export default function Projects() {
  return (
    <section>
      <WorkProjectsSection />
      <PersonalProjectsSection />
    </section>
  );
}
