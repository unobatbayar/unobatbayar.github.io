import Image from "next/image";
import { socialLinks } from "./config";
import DynamicText from "./components/dynamic-text";

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
        <DynamicText/>
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hello!👋 I'm Usukhbayar Batbayar, but you can call me Uno. I'm a software engineer with a passion for cybersecurity. Currently based in Japan, originally from Ulaanbaatar, Mongolia.
        </p>
        <p>
          I started my career focusing on mobile app development, and recently, I've been learning how to build web applications.
        </p>
        <p>
          I'm excited to deepen my skills and eventually create experiences that are not only functional but also secure, seamless, and impactful. 
        </p>
        <p>
          Please feel free to reach out or connect. </p>
      </div>
    </section>
  );
}
