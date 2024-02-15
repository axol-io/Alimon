import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      {/* Menu Sidebar */}
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

      <div className="flex-grow pt-4">

        {/* Top graphic */}
        <div className="container mx-auto px-8 pt-8 pb-6">
          <div className="w-full">
            <svg className="w-full" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
              <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path>
              <circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle>
              <circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle>
              <circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle>
              <path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" stroke-width="1.5"></path>
            </svg>
          </div>
        </div>

        {/* Main content */}
        <div className="splash max-w-6xl">
          <div className="px-10 pt-10 pb-8">
            <h1 className="text-center mb-8">
              <span className="block mb-2">Alimon</span>
            </h1>
            <div className="grid grid-cols-12 gap-1 my-8">
              <div className="card col-span-2">
                <figure className="w-full"><img src="./illustration-planet-pie-half-left.webp" className="w-28 my-0 mx-auto" /></figure>
              </div>
              <div className="card p-1 col-span-8 text-center">
                <p className="text-2xl">Alimon.io, issues fixed yield swaps for yield-generating assets without overcollateralization, capitalizing on Blast’s native yield rebase.</p>
              </div>
              <div className="card col-span-2">
                <figure className="w-full"><img src="./illustration-planet-pie-half-right.webp" className="w-28 my-0 mx-auto" /></figure>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom graphic */}
        <div className="container mx-auto px-8 py-8">
          <div className="w-full">
            <svg className="w-full" fill="none" height="15" width="1177" xmlns="http://www.w3.org/2000/svg">
              <path d="M653.476 7.969h29.202v6.489h-29.202zM.918 7.969H30.12v6.489H.918zM701.334 7.969h29.202v6.489h-29.202zM48.776 7.969h29.202v6.489H48.776zM511 7.965h138.691v6.489H511zM1077.49 7.965h64v6.489h-64zM944.612 7.969h29.202v6.489h-29.202zM690.465 7.969h3.082v6.489h-3.082zM37.907 7.969h3.082v6.489h-3.082zM751.303 7.969h3.082v6.489h-3.082zM98.745 7.969h3.082v6.489h-3.082zM756.333 7.969h3.082v6.489h-3.082zM103.774 7.969h3.082v6.489h-3.082zM868.686 7.969h3.082v6.489h-3.082zM873.715 7.965h3.082v6.489h-3.082zM1145.94 7.965h3.082v6.489h-3.082zM1159.67 7.965h3.082v6.489h-3.082zM1173.41 7.965h3.082v6.489h-3.082zM937.744 7.969h3.082v6.489h-3.082zM821.226 7.969h3.082v6.489h-3.082zM168.668 7.969h3.082v6.489h-3.082z" fill="currentColor"></path>
              <circle cx="843.128" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="916.059" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="979.06" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="847.995" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="920.926" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="983.927" cy="11.374" fill="currentColor" r="1.46"></circle>
              <circle cx="852.862" cy="11.37" fill="currentColor" r="1.46"></circle>
              <circle cx="925.794" cy="11.37" fill="currentColor" r="1.46"></circle>
              <circle cx="988.794" cy="11.37" fill="currentColor" r="1.46"></circle>
              <path d="M1176 1 0 1.01M458.489 1l-12.5 12.5h-230.5" stroke="currentColor" stroke-width="1.5"></path>
            </svg>
          </div>
          <footer className="text-center mt-8"></footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
