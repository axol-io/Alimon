// Dashboard.tsx
import React from "react";

interface DashboardProps {
  // Define any props here if needed, for example, user information or data to be displayed
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="drawer drawer-mobile h-full">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Header */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Dashboard</div>
        </div>
        {/* Content */}
        <div className="p-4">Welcome to your Dashboard, here you can manage your application's data and settings.</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a className="active">Dashboard</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
