import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        I like building things.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hello! I'm Usukhbayar Batbayar, but you can call me Uno. I'm a software engineer based in Japan, originally from Mongolia.
        </p>
        <p>
          I started my career focusing on mobile app development, but recently, I've expanded into building dynamic web applications. Now, I'm committed to creating experiences that are not only functional but also enjoyable, seamless, and impactful.
        </p>
        <p>
          Growing up, I spent countless hours with classic handhelds like the Game Boy Advance and PlayStation 2, as well as diving into immersive worlds like <i>World of Warcraft: Wrath of the Lich King</i> and <i>League of Legends</i>. After growing up and becoming an engineer, I realized just how many countless hours and how much hard work went into creating these games. It's this appreciation for craftsmanship that inspires my own work and drives my passion today.
        </p>
        <p>
          When I'm not coding, you'll find me challenging my mind with a game of chess, where strategy and patience come into play.
        </p>
        <p>
          Feel free to reach out if you'd like to connect. I'm always excited to collaborate or have a chat.
        </p>
      </div>
    </section>
  );
}
