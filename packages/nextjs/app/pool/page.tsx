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
        <div className="px-10 pt-10">
          <h1 className="">Pool</h1>

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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
                <div className="card bg-base-200 border-neutral border p-4">
                  <div>
                    <p className="text-right m-0">ETH/fETH</p>
                    <p className="text-right text-sm mt-0">Pool #321</p>
                    <div className="overflow-x-auto">
                      <table className="table">
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
                          {/* row 3 */}
                          <tr className="text-info">
                            <th>My Liquidity</th>
                            <td className="text-right">$0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="card bg-base-200 border-neutral border p-4">
                  <p className="card-title">XXXX</p>
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
      </div>
    </div>
  );
};

export default AboutPage;