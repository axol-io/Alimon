import Link from "next/link";
import type { NextPage } from "next";

const Menu: NextPage = () => {
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
      </div>
    );
  };
  
  export default Menu;
