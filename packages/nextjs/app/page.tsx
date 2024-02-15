import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      {/* Sidebar */}
      <div className="w-60 bg-base-100 p-5 border-neutral border-r">
        <ul className="flex flex-col pt-5 gap-4">
          <li>
            <Link href="/deposit" className="hover:text-primary">
              01.  Deposit
            </Link>
          </li>
          <li>
            <Link href="/swap" className="hover:text-primary">
              02.  Swap
            </Link>
          </li>
          <li>
            <Link href="/pool" className="hover:text-primary">
              03.  Pool
            </Link>
          </li>
          <li>
            <Link href="/overview" className="hover:text-primary">
              04.  Overview
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-grow">
        <div className="px-10 pt-10">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Alimon</span>
          </h1>
        </div>
        <div className="container mx-auto px-4 py-8">
        
          <footer className="text-center mt-8"></footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
