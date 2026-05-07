import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Badge } from '@/components/Badge';
import mockData from '@/lib/mockData';

const BookingSystemPage = () => {
  const bookingItems = mockData.bookings.map((booking, index) => (
    <tr key={index} className="text-slate-300">
      <td className="p-4">{booking.customer}</td>
      <td className="p-4">{booking.vehicle}</td>
      <td className="p-4">{booking.dateRange}</td>
      <td className="p-4"><Badge status={booking.status} /></td>
    </tr>
  ));

  return (
    <div className="bg-slate-950 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center">
          <h1 className="text-slate-100 text-3xl font-bold">Booking System</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add New Booking</button>
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
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Date Range</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingItems.length > 0 ? bookingItems : (
              <tr>
                <td className="text-center p-4 text-slate-500" colSpan={4}>No bookings to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingSystemPage;
