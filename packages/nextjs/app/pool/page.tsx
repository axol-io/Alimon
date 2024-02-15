// Import necessary components and types from Next.js and your project
import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu'; // Adjust the import path as necessary

// Define the type for the data to be displayed in the table
type TableRowData = {
  id: number;
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
};

// Sample data for the table
const tableData: TableRowData[] = [
  { id: 1, column1: 'Row 1, Col 1', column2: 'Row 1, Col 2', column3: 'Row 1, Col 3', column4: 'Row 1, Col 4', column5: 'Row 1, Col 5' },
  { id: 2, column1: 'Row 2, Col 1', column2: 'Row 2, Col 2', column3: 'Row 2, Col 3', column4: 'Row 2, Col 4', column5: 'Row 2, Col 5' },
  { id: 3, column1: 'Row 3, Col 1', column2: 'Row 3, Col 2', column3: 'Row 3, Col 3', column4: 'Row 3, Col 4', column5: 'Row 3, Col 5' },
];

// The AboutPage component
const AboutPage: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-base-100">
      <Menu /> {/* Sidebar Menu */}
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

          <h1 className="text-3xl font-bold pt-8">Pool</h1>

          {/* fETh status */}
          <div className="w-full">
            <div className="w-full max-w-3xl my-0 mx-auto pb-8">
              <div className="card grid grid-cols-1 md:grid-cols-2 gap-12 my-8 bg-base-200 border border-neutral p-4">
                <div>
                  <div>
                    <p className="card-title">fETH price</p>
                    <p className="text-7xl text-secondary">XXXX</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="card-title">Maturation in</p>
                    <p className="text-7xl text-accent">00:00:00</p>
                  </div>
                </div>
              </div>


              <h2 className="pt-8">Your Pools</h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 my-8">
                <div className="card sm:col-span-12 md:col-span-4 bg-base-200 border-neutral border p-4">

                  {/* Pool info */}
                  <div>
                    <p className="m-0">fETH</p>
                    <p className="text-sm mt-0">Pool #1</p>
                    <div className="overflow-x-auto">
                      <table className="table max-w-xs">
                        <thead></thead>
                        <tbody>
                          {/* row 1 */}
                          <tr className="text-info">
                            <th>APR</th>
                            <td className="text-right">0%</td>
                          </tr>
                          {/* row 2 */}
                          <tr className="text-info">
                            <th>TVL</th>
                            <td className="text-right">17.9k</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Liquidity */}
                <div className="card sm:col-span-12 md:col-span-8 bg-base-200 border-neutral border p-4">
                  <p className="card-title m-0">My Liquidity</p>
                  <div className="join mx-auto py-4">
                    <div>
                      <div>
                        <input className="input join-item text-sm" placeholder="Liquidity" type="number" />
                      </div>
                    </div>
                    <select className="select select-bordered border-y-0 border-r-0 join-item">
                      <option selected>Add</option>
                      <option>Remove</option>
                    </select>
                    <div className="indicator">
                      <button className="btn join-item text-sm">Run</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto mt-6 mb-8">
            <h2 className="pb-8">Discover Pools</h2>
            <div className="overflow-x-auto">
              <table className="table table-pin-rows">
                {/* head */}
                <thead>
                  <tr className="text-sm text-secondary">
                    <th></th>
                    <th>Yield %</th>
                    <th>Volume (24h)</th>
                    <th>Liquidity</th>
                    <th>APR</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="border-none">
                    <th  className="text-secondary">ETH</th>
                    <td>0.05%</td>
                    <td>$21,473,785,881</td>
                    <td>$47,504,632</td>
                    <td>39%</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-none">
                    <th className="text-secondary">BTC</th>
                    <th>0.10%</th>
                    <td>$42,687,370,063</td>
                    <td>$78,342,678</td>
                    <td>56%</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th className="text-secondary">SOL</th>
                    <td>0.012%</td>
                    <td>$3,233,259,689</td>
                    <td>$10,459,345</td>
                    <td>15%</td>
                  </tr>
                </tbody>
              </table>
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

export default AboutPage;