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
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className={className}
    >
      <FaRegEnvelope className={iconClassName} aria-hidden="true" />
    </button>
  );
}
