import { metaData } from "app/config";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="mt-14 block border-t border-term-border pt-5 text-sm text-term-muted lg:mt-20">
      <time>© {YEAR}</time> {metaData.name.toLowerCase()}
    </small>
  );
}
