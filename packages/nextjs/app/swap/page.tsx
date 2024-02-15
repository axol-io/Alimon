import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu'; // Ensure the import path is correct

const Swap: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      <Menu /> 
      <div className="flex-grow">
        <div className="px-10 pt-10">
          <h1 className="text-3xl font-bold">Swap</h1>
          <div className="mt-4">
            <div className="">
              <div className="grid grid-cols-1 gap-4 my-4 mx-auto max-w-md">
                <div>
                  <div className="card bg-base-200 border-neutral border p-4">
                    <p className="card-title mt-0">Pay</p>
                    <div className="flex flex-row justify-between items-end mb-4">
                      <input type="number" placeholder="0000" className="input input-lg input-ghost bg-transparent text-info border-none rounded-md px-0 mr-2 text-7xl w-full max-w-sm" />
                      <p className="text-bold">ETH</p>
                    </div>
                  </div>
                  <div className="leading-none">
                    <figure className="w-full"><img src="./swap1.png" className="w-6 my-0 mx-auto" /></figure>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-blast btn-sm my-2 text-2xl">&darr;</button>
                </div>
                <div>
                  <div className="leading-none">
                    <figure className="w-full"><img src="./swap2.png" className="w-6 my-0 mx-auto" /></figure>
                  </div>
                  <div className="card bg-base-200 border-neutral border border-b-0 rounded-b-none p-4">
                    <p className="card-title m-0">Receive</p>
                    <div className="flex flex-row justify-between items-end m-0">
                      <p className="text-7xl">0000</p>
                      <p className="text-bold">fETH</p>
                    </div>
                  </div>
                  <div className="card bg-base-300 border border-neutral border-t-0 rounded-t-none px-2">
                    <p className="text-center text-secondary text-base">1 ETH ~ 1.23 fETH</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="mt-4 mx-auto max-w-md text-secondary text-sm">With this transaction, you are locking in the current yield rate and buying for next month’s yield.</p>
                <button className="btn btn-blast btn-wide my-4">Confirm swap</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;