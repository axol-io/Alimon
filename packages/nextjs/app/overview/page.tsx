import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../../components/Menu';


const AboutPage: NextPage = () => {
    return (
        <div className="flex flex-row min-h-screen bg-base-100">
          <Menu /> 
          <div className="flex-grow">
            <div className="px-5 pt-10">
              <h1 className="text-3xl font-bold text-center">Overview</h1>
              <p className="text-center mt-4">Overview</p>
            </div>
          </div>
        </div>
      );
    };

export default AboutPage;