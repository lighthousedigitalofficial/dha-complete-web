import React from "react";
import { FaBell, FaMapSigns, FaHardHat, FaBullhorn, FaUserFriends, FaHome } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-primary-700">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Important Notices Widget */}
        <div className="bg-white p-6 rounded-lg shadow-sm shadow-primary-100 flex items-center">
          <FaBell className="text-4xl text-primary-700 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-1 text-primary-700">Important Notices</h2>
            <p className="text-gray-700">Total Notices: 120</p>
          </div>
        </div>

        {/* Phases Widget */}
        <div className="bg-white p-6 rounded-lg shadow-sm shadow-primary-100 flex items-center">
          <FaMapSigns className="text-4xl text-primary-700 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-1 text-primary-700">Phases</h2>
            <p className="text-gray-700">Total Phases: 8</p>
          </div>
        </div>

        {/* Engineers Widget */}
        <div className="bg-white p-6 rounded-lg shadow-sm shadow-primary-100 flex items-center">
          <FaHardHat className="text-4xl text-primary-700 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-1 text-primary-700">Engineers</h2>
            <p className="text-gray-700">Total Engineers: 35</p>
          </div>
        </div>

        {/* Announcements Widget */}
        <div className="bg-white p-6 rounded-lg shadow-sm shadow-primary-100 flex items-center">
          <FaBullhorn className="text-4xl text-primary-700 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-1 text-primary-700">Announcements</h2>
            <p className="text-gray-700">Upcoming Meeting: 15th Oct</p>
          </div>
        </div>

        {/* Users Widget */}
        <div className="bg-white p-6 rounded-lg shadow-sm shadow-primary-100 flex items-center">
          <FaUserFriends className="text-4xl text-primary-700 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-1 text-primary-700">Users</h2>
            <p className="text-gray-700">Total Users: 2</p>
          </div>
        </div>

        {/* Properties Widget */}
        <div className="bg-white p-6 rounded-lg shadow-sm shadow-primary-100 flex items-center">
          <FaHome className="text-4xl text-primary-700 mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-1 text-primary-700">Properties</h2>
            <p className="text-gray-700">Registered Properties: 15</p>
            <p className="text-gray-700">Purchased Properties: 24</p>
            <p className="text-gray-700">Sold Properties: 24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;