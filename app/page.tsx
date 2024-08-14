// max width wrapper 
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// links 
import Link from "next/link";

// components
import MainTiles from "@/components/MainTiles";

export default function Home() {
  return (
    <>
    {/* app_main */}
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center mex-w-3xl sm:py-32 ">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Find the right freelance <br /> sevice,{" "}
          <span className="text-blue-600">right away</span>.
        </h1>
        <p className="mt-4 text-lg max-w-prose font-semibold text-muted-foreground sm:mt-6">
          Welcome to Decentralized Fiverr, the <br /> next-generation freelance
          marketplace <br /> built on the Solana blockchain.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Link href="/">
            <button
              className="text-lg font-semibold text-white border-2 rounded-lg bg-blue-600 py-2
            px-4"
            >
              Get Started
            </button>
          </Link>
          <button className="text-lg font-semibold border-2 rounded-lg bg-slate-10 py-2 px-4">Explore &rarr;</button>
        </div>
      </div>
    </MaxWidthWrapper>

    {/* app_section */}
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="flex">
          <MainTiles/>
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}
