import type { NextPage } from 'next';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">testing</h1>
      <p className="text-center mt-4">This is the content for the Pool page.</p>
      <div className="text-center mt-4">
        <Link href="/">
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;