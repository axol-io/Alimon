import Link from "next/link";
import type { NextPage } from "next";

const Menu: NextPage = () => {
    return (
      <div className="flex flex-row min-h-screen bg-base-100">

        {/* Menu */}
        <div className="w-64 bg-base-200 p-5">
          <h2 className="text-xl font-bold mb-5">Menu</h2>
          <ul className="flex flex-col gap-4">
          <Link href="/overview" className="hover:text-primary">
                Overview
              </Link>
            <li>
              <Link href="/deposit" className="hover:text-primary">
                Deposits
              </Link>
            </li>
            <li>
              <Link href="/pool" className="hover:text-primary">
                Pool
              </Link>
            </li>
            <li>
            
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Menu;
