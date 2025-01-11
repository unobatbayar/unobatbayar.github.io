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
          Hello! 👋 I'm Usukhbayar Batbayar, but you can call me Uno. I'm a software engineer based in Japan, originally from Ulaanbaatar, Mongolia.
        </p>
        <p>
          I started my career focusing on mobile app development, and recently, I've been learning how to build web applications.
        </p>
        <p>
          I'm excited to deepen my skills and eventually create experiences that are not only functional but also enjoyable, seamless, and impactful.
        </p>
        {/* <p>
          Growing up, I spent countless hours with classic handhelds like the Game Boy Advance and PlayStation 2, as well as immersing myself in worlds like World of Warcraft: Wrath of the Lich King and League of Legends. After becoming an engineer, I came to appreciate the immense effort and dedication that went into developing these games.
        </p> */}
        <p>
          Please feel free to reach out if you'd like to connect.
        </p>
      </div>
    </section>
  );
}
