export const metaData = {
  baseUrl: "https://unobatbayar.github.io/",
  title: "Usukhbayar Batbayar | Software Engineer",
  name: "Usukhbayar Batbayar",
  ogImage: "/opengraph-image.png",
  description:
    "Software engineer at ODIN Tech Lab. Web, mobile, and backend projects.",
  keywords:
    "Usukhbayar Batbayar, software engineer, portfolio, full stack developer, web development, mobile development, backend development, Next.js, React, TypeScript, FastAPI, iOS, Android",
  author: "Usukhbayar Batbayar",
  twitterHandle: "",
};

export const socialLinks = {
  // Base64 of "unobatbayar@protonmail.com" - decoded client-side on click
  // so the literal address never appears in rendered HTML.
  emailEncoded: "dW5vYmF0YmF5YXJAcHJvdG9ubWFpbC5jb20=",
  appstore: "https://apps.apple.com/developer/usukhbayar-batbayar/id1532655863",
  github: "https://github.com/unobatbayar",
  stackoverflow: "https://stackoverflow.com/users/12330629",
  linkedin: "https://www.linkedin.com/in/rytx88jz24dm",
};

export const homeContent = {
  name: "Usukhbayar Batbayar",
  headline: "Hi, I'm Usukhbayar.",
  intro:
    "I currently work at ODIN Tech Lab, building web products.",
  about:
    "Before this, I worked on electronic music instrument apps at Yamaha. Interested in electronic music, digital products, and sports.",
};

export const contact = {
  phoneE164: "+97688856211",
  phoneDisplay: "+976 8885 6211",
};

export const freelanceServices = [
  {
    id: "websites",
    name: "Websites",
    price: "from ₮7M",
    detail: "Business sites and landing pages",
  },
  {
    id: "apps",
    name: "Apps",
    price: "from ₮10M",
    detail: "iOS, Android, or both",
  },
  {
    id: "systems",
    name: "Systems",
    price: "from ₮8M",
    detail: "Internal tools and dashboards",
  },
] as const;
