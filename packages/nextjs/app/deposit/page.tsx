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
            <div className="grid grid-cols-1 my-0 mx-auto max-w-xl">

            {/* <div className="join max-w-md rounded-2xl shadow-sm rounded-b-none">
              <input className="join-item btn w-1/2" type="radio" name="options" aria-label="Stake" checked/>
              <input className="join-item btn w-1/2" type="radio" name="options" aria-label="Unstake" />
            </div> */}

            <div className="inline-flex max-w-md rounded-lg shadow-sm rounded-b-none" role="group">
              <button type="button" className="inline-flex justify-center px-4 py-3 w-full rounded-s-2xl rounded-bl-none text-md border dark:border-neutral dark:text-primary dark:hover:text-white dark:hover:bg-neutral dark:focus:text-secondary dark:focus:bg-base-300">
                <img src="./stake-icon.svg" className="w-8 pr-3" />
                Stake
              </button>
              <button type="button" className="inline-flex justify-center px-4 py-3 w-full rounded-e-2xl rounded-br-none text-md border dark:border-neutral dark:text-primary dark:hover:text-white dark:hover:bg-neutral dark:focus:text-secondary dark:focus:bg-base-300">
                <img src="./unstake-icon.svg" className="w-11 pr-3" />
                Unstake
              </button>
            </div>


              <div className="card flex sm:flex-col md:flex-row justify-around bg-base-200 border border-neutral border-b-0 rounded-none max-w-md px-4">
                <div className="flex flex-col">
                  <p className="card-title text-sm mb-0 max-w-xs mx-auto">Available</p>
                  <div className="flex flex-row justify-between items-end border-neutral sm:border-b-2 md:border-b-0 max-w-xs mx-auto">
                    <p className="text-4xl pr-2 leading-none">XXXX</p>
                    <p className="text-bold text-sm">ETH</p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="text-sm text-bold mb-0 max-w-xs mx-auto">Deposit</p>
                  <div className="flex flex-row justify-between items-end max-w-xs mx-auto">
                    <p className="text-4xl pr-2 leading-none">XXXX</p>
                    <p className="text-bold text-sm">ETH</p>
                  </div>
                </div>
              </div>

              <div className="card bg-base-300 border border-neutral border-t-0 rounded-t-none max-w-md px-4 py-6">
                <div className="my-0 mx-auto text-center w-full">
                  <div className="flex flex-row bg-white rounded-full pr-4 mx-auto w-full max-w-sm">
                    <input type="number" placeholder="ETH amount" className="input bg-white w-full" />
                    <button className="btn btn-sm rounded-md border-0 my-2">Max</button>
                  </div>
                  <button className="btn btn-blast btn-block max-w-sm my-4">Deposit Now</button>
                </div>
                
                <div className="flex flex-row justify-between items-end mx-auto w-full max-w-sm">
                  <p className="text-secondary text-base">You will gain</p>
                  <p className="text-secondary text-base">cETH</p>
                </div>
                <div className="flex flex-row justify-between items-end mx-auto w-full max-w-sm">
                  <p className="text-secondary text-base">You will gain</p>
                  <p className="text-secondary text-base">fETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;