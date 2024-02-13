import Link from "next/link";
import type { NextPage } from "next";

const Menu: NextPage = () => {
    return (
      <div className="flex flex-row min-h-screen bg-base-100">

        {/* Menu */}
        <div className="w-64 bg-base-100 p-5 border-neutral border-r">
          {/* <h2 className="text-xl font-bold mb-5">Menu</h2> */}
          <ul className="flex flex-col pt-10 gap-4">
          <Link href="/overview" className="hover:text-primary">
                Overview
              </Link>
            <li>
              <Link href="/deposit" className="hover:text-primary">
                Deposit
              </Link>
            </li>
            <li>
              <Link href="/pool" className="hover:text-primary">
                Pool
              </Link>
            </li>
            <li>
              <Link href="/swap" className="hover:text-primary">
                Swap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Menu;
