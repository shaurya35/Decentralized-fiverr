"use client"
// max width wrapper
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// links
import Link from "next/link";

// components
import MainTiles from "@/components/MainTiles";

// icons
import {
  LaptopMinimal,
  Palette,
  CircleDollarSign,
  Languages,
  Video,
  Brain,
  Music,
  Handshake,
} from "lucide-react";

// logic for icons
const icons = [
  {
    Icon: LaptopMinimal,
    content: "Programming & Tech",
  },
  {
    Icon: Palette,
    content: "Graphic & Design",
  },
  {
    Icon: CircleDollarSign,
    content: "Digital Marketing",
  },
  {
    Icon: Languages,
    content: "Writing & Translation",
  },
  {
    Icon: Video,
    content: "Video & Animation",
  },
  {
    Icon: Brain,
    content: "AI Service",
  },
  {
    Icon: Music,
    content: "Music & Audio",
  },
  {
    Icon: Handshake,
    content: "Business",
  },
];

export default function Home() {
  return (
    <>
      {/* app_main */}
      <MaxWidthWrapper>
        <div className="pt-24 mx-auto text-center flex flex-col items-center mex-w-3xl sm:pt-40">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Find the right freelance <br /> sevice,{" "}
            <span className="text-blue-600">right away</span>.
          </h1>
          <p className="mt-4 text-lg max-w-prose font-semibold text-muted-foreground sm:mt-6">
            Welcome to Decentralized Fiverr, the <br /> next-generation
            freelance marketplace <br /> built on the Solana blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link href="/sign-up">
              <button
                className="text-lg font-semibold text-white border-2 rounded-lg bg-blue-600 py-2
            px-4"
              >
                Get Started
              </button>
            </Link>
            <button className="text-lg font-semibold border-2 rounded-lg bg-slate-100 py-2 px-4">
              Explore &rarr;
            </button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* app_section */}
      <section className="sm:pt-32 pt-14">
        <MaxWidthWrapper>
          <div className="flex flex-row gap-3 flex-wrap justify-center">
            {icons.map(({ Icon, content }) => (
              <MainTiles key={content} Icon={Icon} content={content} />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
