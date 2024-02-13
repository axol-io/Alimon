import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu'; // Make sure this path matches your file structure

const Overview: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      <Menu />
      <div className="flex-grow">
        <div className="px-10 pt-10">
          <h1 className="text-3xl font-bold">Overview</h1>
          {/* <div className="text-center mt-4"> */}
            {/* Correctly use Link component with content */}
            {/* <Link href="/"
              className="text-blue-500 hover:underline">Go Back Home
            </Link> */}
          {/* </div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">ETH Deposited</p>
                <p className="text-7xl">XXXX</p>
              </div>
              <button className="btn btn-blast btn-wide my-4">Deposit Now</button>
            </div>
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">ROI</p>
                <p className="text-7xl">XXXX</p>
              </div>
            </div>
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">ROI</p>
                <p className="text-7xl">XXXX</p>
              </div>
            </div>
            <div>
              <div className="card bg-base-200 border-neutral border p-4">
                <p className="card-title">Rewards this epoch</p>
                <p className="text-7xl">XXXX</p>
              </div>
              <button className="btn btn-blast btn-wide my-4">Claim Yield</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;