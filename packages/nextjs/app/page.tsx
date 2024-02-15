import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      {/* Sidebar */}
      <div className="w-60 bg-base-100 p-5 border-neutral border-r">
        <ul className="flex flex-col pt-5 gap-4">
          <li>
            <Link href="/deposit" className="hover:text-white focus:text-accent">
              01.  Deposit
            </Link>
          </li>
          <li>
            <Link href="/swap" className="hover:text-white focus:text-accent">
              02.  Swap
            </Link>
          </li>
          <li>
            <Link href="/pool" className="hover:text-white focus:text-accent">
              03.  Pool
            </Link>
          </li>
          <li>
            <Link href="/overview" className="hover:text-white focus:text-accent">
              04.  Overview
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-grow splash">
        <div className="px-10 pt-10">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Alimon</span>
          </h1>
          <div className="grid grid-cols-12 gap my-8">
            <div className="card col-span-2">
              <figure className="w-full"><img src="./illustration-planet-pie-half-left.webp" className="w-28 my-0 mx-auto" /></figure>
            </div>
            <div className="card p-4 col-span-8 text-center">
              <p>Alimon.io, issues fixed yield swaps for yield-generating assets without overcollateralization, capitalizing on Blast’s native yield rebase.</p>
            </div>
            <div className="card col-span-2">
              <figure className="w-full"><img src="./illustration-planet-pie-half-right.webp" className="w-28 my-0 mx-auto" /></figure>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <footer className="text-center mt-8"></footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
