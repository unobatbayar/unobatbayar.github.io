import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData, socialLinks } from "../config";
import {
  FaAppStore,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa6";

const navItems = {
  "/blog": { name: "Blog" },
  "/resume": { name: "Resume", external: true, href: "https://unobatbayar.github.io/resume.pdf" },
  // "/projects": { name: "Projects" },
};

function SocialLink({ href, icon: Icon, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors duration-200 ${className}`}
      aria-label={href}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
          <div className="flex items-center gap-3 text-lg">
            <SocialLink 
              href={socialLinks.linkedin} 
              icon={FaLinkedinIn} 
              className="text-[#0077b5] hover:text-[#005885] dark:text-[#0077b5] dark:hover:text-[#0a66c2]"
            />
            <SocialLink 
              href={socialLinks.github} 
              icon={FaGithub} 
              className="text-[#181717] hover:text-[#000000] dark:text-[#f5f5f5] dark:hover:text-[#ffffff]"
            />
            <SocialLink 
              href={socialLinks.stackoverflow} 
              icon={FaStackOverflow} 
              className="text-[#f48024] hover:text-[#d66a1a] dark:text-[#f48024] dark:hover:text-[#ff9a4d]"
            />
            <SocialLink 
              href={socialLinks.appstore} 
              icon={FaAppStore} 
              className="text-[#007AFF] hover:text-[#0051D5] dark:text-[#0a84ff] dark:hover:text-[#409cff]"
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name, external, href }]) => (
            external ? (
              <a
                key={path}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
              >
                {name}
              </a>
            ) : (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
              >
                {name}
              </Link>
            )
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
