import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpeg"
          alt="Profile photo"
          className="rounded-md bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
          unoptimized
          height={200}
          width={228}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        I like building things!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
      <p>
        Hello!👋 I'm Usukhbayar Batbayar, but you can call me Uno. I'm a software engineer based in Japan, originally from Ulaanbaatar, Mongolia. 
      </p>
      <p>
        I started my career focusing on mobile app development, and recently, I've been learning how to build web applications. I've also developed an interest in quantitative trading and have been exploring it as a hobby in my free time. 
      </p>
<p>
I'm excited to deepen my skills in both software engineering and quantitative trading. 
</p>

      <p>
        Please feel free to reach out or connect. 
      </p>
    </div>
    </section>
  );
}
