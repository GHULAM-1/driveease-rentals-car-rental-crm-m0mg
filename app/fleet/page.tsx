import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Badge } from '@/components/Badge';
import mockData from '@/lib/mockData';

const FleetManagementPage = () => {
  const fleetItems = mockData.fleet.map((car, index) => (
    <tr key={index} className="text-slate-300">
      <td className="p-4">{car.registration}</td>
      <td className="p-4">{car.model}</td>
      <td className="p-4">{car.year}</td>
      <td className="p-4">{car.location}</td>
      <td className="p-4"><Badge status={car.status} /></td>
      <td className="p-4">{car.serviceHistory}</td>
    </tr>
  ));

  return (
    <div className="bg-slate-950 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center">
          <h1 className="text-slate-100 text-3xl font-bold">Fleet Management</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add New Vehicle</button>
        </header>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-md bg-slate-800 text-slate-300 focus:outline-none"
          />
        </div>

        <table className="min-w-full mt-6 bg-slate-800 rounded-md">
          <thead>
            <tr className="text-slate-100">
              <th className="p-4 text-left">Registration</th>
              <th className="p-4 text-left">Model</th>
              <th className="p-4 text-left">Year</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Service History</th>
            </tr>
          </thead>
          <tbody>
            {fleetItems.length > 0 ? fleetItems : (
              <tr>
                <td className="text-center p-4 text-slate-500" colSpan={6}>No vehicles to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FleetManagementPage;
