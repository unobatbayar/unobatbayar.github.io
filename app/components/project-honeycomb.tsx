import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "../projects/project-data";
import { workProjects, personalProjects } from "../projects/project-data";

const POSITIONS = [
  { top: "47%", left: "50%", size: "h-24 w-24", iconPadding: "p-2.5", zIndex: 40 },
  { top: "17%", left: "52%", size: "h-16 w-16", iconPadding: "p-1.5", zIndex: 12 },
  { top: "30%", left: "70%", size: "h-24 w-24", iconPadding: "p-2.5", zIndex: 28 },
  { top: "52%", left: "82%", size: "h-[3.75rem] w-[3.75rem]", iconPadding: "p-1.5", zIndex: 14 },
  { top: "72%", left: "68%", size: "h-24 w-24", iconPadding: "p-2.5", zIndex: 26 },
  { top: "82%", left: "50%", size: "h-14 w-14", iconPadding: "p-1.5", zIndex: 12 },
  { top: "71%", left: "30%", size: "h-24 w-24", iconPadding: "p-2.5", zIndex: 24 },
  { top: "52%", left: "18%", size: "h-16 w-16", iconPadding: "p-1.5", zIndex: 14 },
  { top: "30%", left: "29%", size: "h-[3.25rem] w-[3.25rem]", iconPadding: "p-1", zIndex: 12 },
] as const;

function featuredProjects(): Project[] {
  const candidates = [
    workProjects[0],
    personalProjects[0],
    workProjects[2],
    personalProjects[1],
    workProjects[1],
    personalProjects[2],
    workProjects[3],
    personalProjects[3],
    personalProjects[4],
  ];
  return candidates.filter((p): p is Project => Boolean(p)).slice(0, 9);
}

// Keyframes are injected via a <style> tag below so they ship with the
// component and can't be stripped by a stale CSS build or HMR hiccup.
// Names are deliberately unique (`uhc-` prefix) to avoid any collision.
const KEYFRAMES = `
@keyframes uhc-float-a {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
  50%      { transform: translate3d(0, -26px, 0) rotate(0deg) scale(1.015); }
}
@keyframes uhc-float-b {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg) scale(1); }
  50%      { transform: translate3d(12px, -22px, 0) rotate(3deg) scale(1.02); }
}
@keyframes uhc-float-c {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(2deg) scale(1); }
  50%      { transform: translate3d(-12px, -20px, 0) rotate(-3deg) scale(1.02); }
}
@keyframes uhc-shadow {
  0%, 100% { box-shadow: var(--uhc-shadow-rest); }
  50%      { box-shadow: var(--uhc-shadow-float); }
}
.uhc-orbit {
  display: block;
  position: relative;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}
.uhc-shell {
  --uhc-shadow-rest: 0 18px 42px rgba(15, 23, 42, 0.12);
  --uhc-shadow-float: 0 34px 52px rgba(15, 23, 42, 0.18);
  will-change: box-shadow;
}
.dark .uhc-shell {
  --uhc-shadow-rest: 0 18px 42px rgba(0, 0, 0, 0.45);
  --uhc-shadow-float: 0 32px 54px rgba(0, 0, 0, 0.3);
}
.uhc-cell:hover .uhc-orbit {
  animation-play-state: paused !important;
}
.uhc-cell:hover .uhc-shell {
  animation-play-state: paused !important;
}
`;

// Nine recipes, three keyframes, all desynced on duration + delay so no two
// cells ever move together. Same structure as Mario Duarte's CodePen float.
const ANIMATIONS = [
  { name: "uhc-float-a", duration: "5.8s", delay: "0.0s" },
  { name: "uhc-float-b", duration: "7.0s", delay: "0.6s" },
  { name: "uhc-float-c", duration: "6.4s", delay: "1.2s" },
  { name: "uhc-float-b", duration: "7.6s", delay: "0.3s" },
  { name: "uhc-float-a", duration: "6.1s", delay: "1.5s" },
  { name: "uhc-float-c", duration: "7.2s", delay: "0.9s" },
  { name: "uhc-float-c", duration: "6.7s", delay: "1.8s" },
  { name: "uhc-float-a", duration: "7.2s", delay: "0.4s" },
  { name: "uhc-float-b", duration: "6.1s", delay: "1.1s" },
] as const;

type CellProps = {
  project: Project;
  animation: (typeof ANIMATIONS)[number];
  sizeClass: string;
  iconPaddingClass: string;
  zIndex: number;
};

function HoneyCell({
  project,
  animation,
  sizeClass,
  iconPaddingClass,
  zIndex,
}: CellProps) {
  const orbitStyle: CSSProperties = {
    animation: `${animation.name} ${animation.duration} ease-in-out ${animation.delay} infinite`,
    animationFillMode: "both",
    zIndex,
  };
  const shellStyle: CSSProperties = {
    animation: `uhc-shadow ${animation.duration} ease-in-out ${animation.delay} infinite`,
    animationFillMode: "both",
  };
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      title={project.title}
      aria-label={project.title}
      className="uhc-cell group block"
      style={{ zIndex }}
    >
      <span className="uhc-orbit" style={orbitStyle}>
        <span
          className={`uhc-shell relative block ${sizeClass} overflow-hidden rounded-full border border-neutral-200/80 bg-white transition-transform duration-300 ease-out group-hover:scale-110 dark:border-neutral-800 dark:bg-neutral-900`}
          style={shellStyle}
        >
          <Image
            src={project.img}
            alt=""
            width={56}
            height={56}
            className={`h-full w-full object-contain ${iconPaddingClass}`}
            style={{ transform: `scale(${project.imgScale ?? 1.35})` }}
          />
        </span>
      </span>
    </a>
  );
}

export default function ProjectHoneycomb() {
  const projects = featuredProjects().slice(0, POSITIONS.length);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      <div
        className="relative h-[28rem] w-[25rem] 2xl:h-[30rem] 2xl:w-[27rem]"
        aria-label="Selected projects"
        role="group"
      >
        {projects.map((project, index) => {
          const position = POSITIONS[index];
          const animation = ANIMATIONS[index % ANIMATIONS.length];

          return (
            <div
              key={project.title}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: position.top, left: position.left }}
            >
              <HoneyCell
                project={project}
                animation={animation}
                sizeClass={position.size}
                iconPaddingClass={position.iconPadding}
                zIndex={position.zIndex}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
