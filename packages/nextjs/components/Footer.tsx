import React from "react";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState((state) => state.nativeCurrencyPrice);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  // Example static progress value
  const progressValue = 50; // 50%

  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0 bg-base-100">
      <div>
        <div className="fixed flex justify-between w-full z-10 p-4 bottom-0 left-0 pointer-events-none bg-transparent">
          <div className="flex flex-col md:flex-row gap-2 pointer-events-auto items-center w-full justify-between pr-4">           
            <div className="sm:order-2 order-1">
              <img src="/built-on-blast-logo.svg" className="w-16 md:w-28 pt-2 my-0" />
            </div>
            {nativeCurrencyPrice > 0 && (
              <div>
                <div className="btn btn-primary btn-sm font-normal gap-1 cursor-auto">
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <span>{nativeCurrencyPrice}</span>
                </div>
              </div>
            )}
            {isLocalNetwork && (
              <>
                {/* <Faucet />
                <Link href="/blockexplorer" passHref className="btn btn-primary btn-sm font-normal gap-1">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  <span>Block Explorer</span>
                </Link> */}

                {/* Adjusted Progress Bar with "Maturity Rate" text */}
                <div className="maturity sm:order-1 md:order-2 w-72 h-5 bg-gray-200 rounded-full overflow-hidden ml-2 flex relative"> 
                  <div className="bg-[#FCFC03] h-full rounded-full" style={{ width: `${progressValue}%` }}></div>
                  <span className="absolute w-full text-center text-base-100 text-sm">Maturity Rate</span>
                </div>

              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
         
        </ul>
      </div>
    </div>
  );
};

