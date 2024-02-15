import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu'; // Make sure this path matches your file structure

const Overview: NextPage = () => {
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

          <h1 className="text-3xl font-bold pt-8">Overview</h1>
          
          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-8">
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">cETH Deposited</p>
                <p className="text-7xl">XXXX</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="btn btn-blast btn-wide my-4">Deposit Now</button>
              </div>
            </div>
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">ETH Balance</p>
                <p className="text-7xl">XXXX</p>
              </div>
            </div>
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">APY</p>
                <p className="text-7xl">XXXX</p>
              </div>
            </div>
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">fETH</p>
                <p className="text-7xl">XXXX</p>
              </div>
            </div>
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">Rewards this epoch</p>
                <p className="text-7xl">XXXX</p>
              </div>
            </div>
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">APY</p>
                <p className="text-7xl">XXXX</p>
              </div>
              <div className="w-full flex justify-center">
                <button className="btn btn-blast btn-wide my-4">Claim Yield</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom graphic */}
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

export default Overview;