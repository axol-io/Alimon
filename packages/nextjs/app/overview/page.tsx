import type { NextPage } from 'next';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">testing</h1>
      <p className="text-center mt-4">This is the content for the overview page.</p>
      <div className="text-center mt-4">
        <Link href="/">
        </Link>
           <h1 className="text-3xl font-bold text-center mb-4"></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow-xl p-4">
              <h2 className="card-title">Section 1</h2>
              <p>Content for section 1...</p>
            </div>
            <div className="card bg-base-200 shadow-xl p-4">
              <h2 className="card-title">Section 2</h2>
              <p>Content for section 2...</p>
            </div>
            <div className="card bg-base-200 shadow-xl p-4">
              <h2 className="card-title">Section 3</h2>
              <p>Content for section 3....</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutPage;