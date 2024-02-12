import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu';


const AboutPage: NextPage = () => {
    return (
      <div className="flex flex-row min-h-screen bg-base-100">
        <Menu />
        <div className="flex-grow">
          <div>
            <h1 className="text-3xl font-bold text-center">testing</h1>
            <p className="text-center mt-4">This is the content for the Deposit page.</p>
            <div className="text-center mt-4">
           
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutPage;