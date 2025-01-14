import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Joaniks Market</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Joanik</span> Market
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://joanikmarket.sellpass.io"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Shop →</h3>
              <div className="text-lg">
               Just the main shop where all of our products will be held,
               aswell as more information and reviews!
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://discord.gg/Sv9yu8JCY7"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Discord →</h3>
              <div className="text-lg">
                Learn more about our community and account we also offer custom accounts on discord,
                and also have even more reviews!
              </div>
            </Link>
          </div>
          <p className="text-2xl text-white">
            Thank you for choosing Us!
          </p>
        </div>
      </main>
    </>
  );
}
