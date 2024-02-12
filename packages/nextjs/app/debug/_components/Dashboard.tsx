// components/Dashboard.tsx
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-200 shadow-xl p-4">
          <h2 className="card-title">Section 1</h2>
          <p>Content for section 1...</p>
        </div>
        <div className="card bg-base-200 shadow-xl p-4">
          <h2 className="card-title">Section 2</h2>
          <p>Content for section 2...</p>
        </div>
        <div className="card bg-base-200 shadow-xl p-4">
          <h2 className="card-title">Section 3</h2>
          <p>Content for section 3...</p>
        </div>
      </div>
      <footer className="text-center mt-8">
        <p>© 2024 Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;

