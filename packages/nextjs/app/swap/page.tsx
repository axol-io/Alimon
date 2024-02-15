import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu'; // Ensure the import path is correct

const Swap: NextPage = () => {
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

          <h1 className="text-3xl font-bold pt-8">Swap</h1>
          <p className="mt-3">With this transaction you are locking in the current yield rate and buying for next month’s yield.</p>

          <div className="mt-4">
            <div>
              <div className="grid grid-cols-1 gap-4 my-4 mx-auto max-w-sm">
                <div>

                  {/* Pay */}
                  <div className="card bg-base-200 border-neutral border p-4 pb-0">
                    <p className="card-title mt-0">Pay</p>
                    <div className="flex flex-row justify-between items-end mb-4">
                      <input type="number" placeholder="0000" className="input input-lg input-ghost bg-transparent text-info border-none rounded-md px-0 mr-2 text-5xl w-full max-w-sm" />
                      <p className="text-bold">ETH</p>
                    </div>
                  </div>

                  {/* Graphic - half globe stick */}
                  <div className="leading-none">
                    <figure className="w-full"><img src="./swap1.png" className="w-6 my-0 mx-auto" /></figure>
                  </div>
                </div>

                {/* Swap button */}
                <div className="text-center">
                  <button className="btn btn-blast btn-sm my-2 text-2xl animate-bounce">Swap &darr;</button>
                </div>

                <div>
                  {/* Graphic - half globe stick */}
                  <div className="leading-none">
                    <figure className="w-full"><img src="./swap2.png" className="w-6 my-0 mx-auto" /></figure>
                  </div>

                  {/* Recieve */}
                  <div className="card bg-base-200 border-neutral border border-b-0 rounded-b-none p-4 pb-0">
                    <p className="card-title m-0">Receive</p>
                    <div className="flex flex-row justify-between items-end m-0">
                      <p className="text-5xl">0000</p>
                      <p className="text-bold">fETH</p>
                    </div>
                  </div>
                  <div className="card bg-base-300 border border-neutral border-t-0 rounded-t-none px-2">
                    <p className="text-center text-secondary text-base">1 ETH ~ 1.23 fETH</p>
                  </div>
                </div>
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

export default Swap;