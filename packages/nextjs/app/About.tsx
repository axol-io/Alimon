// pages/about.tsx
import type { NextPage } from 'next';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">About Page</h1>
      <p className="text-center mt-4">This is the content for the About page.</p>
      <div className="text-center mt-4">
        <Link href="/">
          <a className="text-blue-500">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;

