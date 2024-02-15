import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu'; // Make sure this path matches your file structure

const Deposits: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      <Menu />
      <div className="flex-grow">
        <div className="px-10">

          {/* Top graphic */}
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

          <h1 className="text-3xl font-bold pt-8">Deposit</h1>
          <p className="mt-3">In making this deposit, you are locking your funds for the remainder of the duration of maturity.</p>

          <div className="py-8">
            <div className="grid grid-cols-1 my-0 mx-auto max-w-xl">

              {/* Another option for the stake/unstake toggle buttons */}
              {/* <div className="join max-w-md rounded-2xl shadow-sm rounded-b-none">
                <input className="join-item btn w-1/2" type="radio" name="options" aria-label="Stake" checked/>
                <input className="join-item btn w-1/2" type="radio" name="options" aria-label="Unstake" />
              </div> */}

              {/* Stake/unstake toggle buttons */}
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

              {/* Status */}
              <div className="card flex sm:flex-col md:flex-row justify-around bg-base-200 border border-neutral border-b-0 rounded-none max-w-md px-4">
                <div className="flex flex-col">
                  <p className="card-title text-sm mb-0 max-w-xs mx-auto">Available</p>
                  <div className="flex flex-row justify-between items-end border-neutral sm:border-b-2 md:border-b-0 max-w-xs mx-auto">
                    <p className="text-4xl pr-2 leading-none">XXXX</p>
                    <p className="text-bold text-sm">ETH</p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="text-sm text-bold mb-0 max-w-xs mx-auto">Deposited</p>
                  <div className="flex flex-row justify-between items-end max-w-xs mx-auto">
                    <p className="text-4xl pr-2 leading-none">XXXX</p>
                    <p className="text-bold text-sm">ETH</p>
                  </div>
                </div>
              </div>

              {/* Make a deposit */}
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
                  <p className="text-secondary text-base">XX cETH</p>
                </div>
                <div className="flex flex-row justify-between items-end mx-auto w-full max-w-sm">
                  <p className="text-secondary text-base">You will gain</p>
                  <p className="text-secondary text-base">XX fETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom graphic */}
        <div className="container mx-auto px-8 pt-4">
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

      </div>
    </div>
  );
};

export default Deposits;