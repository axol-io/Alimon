// pages/option1.tsx
import type { NextPage } from 'next';
import Link from 'next/link';

const Option1Page: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Option 1 Page</h1>
      <p className="text-center mt-4">This is the content for Option 1.</p>
      <div className="text-center mt-4">
        <Link href="/">
          <a className="text-blue-500">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Option1Page;

