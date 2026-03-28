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
  "/projects": { name: "Projects" },
  "/blog": { name: "Blog" },
  "/resume": { name: "Resume" },
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
    <nav className="mb-10 py-5 lg:mb-14">
      <div className="glass-panel flex flex-col justify-between gap-6 rounded-[1.75rem] px-5 py-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <Link href="/" className="text-3xl font-semibold tracking-tight text-black dark:text-white">
            {metaData.name}
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
        <div className="flex flex-row items-center gap-4 md:ml-auto md:mt-0">
          {Object.entries(navItems).map(([path, item]) => (
            ("external" in item) ? (
              <a
                key={path}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center text-base text-neutral-700 transition-all hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={path}
                href={path}
                className="relative flex items-center text-base text-neutral-700 transition-all hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                {item.name}
              </Link>
            )
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
