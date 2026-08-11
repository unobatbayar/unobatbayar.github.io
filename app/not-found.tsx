import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <section className="space-y-3">
      <p className="cyber-text text-sm">// error</p>
      <h1 className="text-2xl text-term-fg">404 - page not found</h1>
      <p className="text-sm text-term-muted">
        Nothing here.{" "}
        <Link href="/" className="text-term-accent hover:underline">
          /
        </Link>
      </p>
    </section>
  );
}
