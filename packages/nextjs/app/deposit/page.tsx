import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu'; // Make sure this path matches your file structure

const Deposits: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      <Menu />
      <div className="flex-grow">
        <div className="px-10 pt-10">
          <h1 className="text-3xl font-bold">Deposit</h1>
          <p className="mt-3">In making this deposit, you are locking your funds for the remainder of the duration of maturity.</p>

          <div className="text-center mt-4">
            {/* Additional content or links can go here */}
          </div>

          {/* Updated grid setting to always have 1 column */}
          <div className="py-8">
            <div className="grid grid-cols-1 my-0 mx-auto max-w-2xl">
              <div className="card bg-base-200 border border-neutral border-b-0 rounded-b-none p-4">
                <p className="card-title">Available</p>
                <div className="flex flex-row justify-between items-end border-neutral border-b-2 mb-4 pb-3">
                  <p className="text-7xl">XXXX</p>
                  <p className="text-bold">ETH</p>
                </div>
                <p className="text-xl text-bold">Deposit</p>
                <div className="flex flex-row justify-between items-end">
                  <p className="text-7xl">XXXX</p>
                  <p className="text-bold">ETH</p>
                </div>
              </div>

              <div className="card bg-base-300 border border-neutral border-t-0 rounded-t-none px-4 py-6">
                <div className="my-0 mx-auto text-center">
                  <div className="flex flex-row bg-white w-full rounded-full pr-4">
                    <input type="number" placeholder="ETH amount" className="input bg-white w-full max-w-xs" />
                    <button className="btn btn-sm rounded-md border-0 my-2">Max</button>
                  </div>
                  <button className="btn btn-blast btn-wide my-4">Deposit Now</button>
                </div>
                
                <div className="flex flex-row justify-between items-end">
                  <p className="text-secondary">You will gain</p>
                  <p className="text-secondary">fETH</p>
                </div>
                <p className="text-secondary">Alimon statistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;