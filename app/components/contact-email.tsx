"use client";

import { FaRegEnvelope } from "react-icons/fa6";

type Props = {
  // Base64-encoded email address. The raw address never appears in rendered
  // HTML, which makes it significantly harder for scrapers to harvest.
  encoded: string;
  label?: string;
  className?: string;
  iconClassName?: string;
};

export default function ContactEmail({
  encoded,
  label = "Email me",
  className = "",
  iconClassName = "h-5 w-5",
}: Props) {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    const address = window.atob(encoded);
    window.location.href = `mailto:${address}`;
  };

  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        aria-label={label}
        title={label}
        className={className}
      >
        <FaRegEnvelope className={iconClassName} aria-hidden="true" />
      </button>
      <span
        role="tooltip"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-neutral-100 dark:text-neutral-900"
      >
        {label}
      </span>
    </span>
  );
}
