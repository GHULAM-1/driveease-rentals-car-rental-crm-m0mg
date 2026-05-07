import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Badge } from '@/components/Badge';
import mockData from '@/lib/mockData';

const CustomerManagementPage = () => {
  const customerItems = mockData.customers.map((customer, index) => (
    <tr key={index} className="text-slate-300">
      <td className="p-4">{customer.name}</td>
      <td className="p-4">{customer.email}</td>
      <td className="p-4">{customer.phone}</td>
      <td className="p-4"><Badge status={customer.status} /></td>
    </tr>
  ));

  return (
    <div className="bg-slate-950 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center">
          <h1 className="text-slate-100 text-3xl font-bold">Customer Management</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add New Customer</button>
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
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {customerItems.length > 0 ? customerItems : (
              <tr>
                <td className="text-center p-4 text-slate-500" colSpan={4}>No customers to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerManagementPage;
