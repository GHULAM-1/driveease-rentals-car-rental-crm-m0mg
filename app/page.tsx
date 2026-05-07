import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { StatCard } from '@/components/StatCard';
import { Badge } from '@/components/Badge';
import mockData from '@/lib/mockData';

const DashboardPage = () => {
  const statCards = mockData.stats.map((stat, index) => (
    <StatCard key={index} title={stat.title} number={stat.number} icon={stat.icon} />
  ));

  const recentActivity = mockData.recentActivity.slice(0, 5).map((activity, index) => (
    <div key={index} className="py-2">
      <div className="text-slate-300 font-medium">{activity.description}</div>
      <div className="text-slate-500 text-sm">{activity.date}</div>
    </div>
  ));

  const actionPoints = mockData.actionPoints.map((action, index) => (
    <div key={index} className="flex justify-between items-center py-2">
      <div className="text-slate-300">{action.name}</div>
      <Badge status={action.status} />
    </div>
  ));

  return (
    <div className="bg-slate-950 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <header>
          <h1 className="text-slate-100 text-4xl font-bold">DriveEase Dashboard</h1>
          <p className="text-slate-400 text-lg">Welcome to your car rental management dashboard</p>
        </header>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {statCards}
        </div>

        <div className="mt-12">
          <h2 className="text-slate-100 text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-slate-800 p-4 rounded-md">
            {recentActivity}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-slate-100 text-2xl font-bold mb-4">Action Points Progress</h2>
          <div className="bg-slate-800 p-4 rounded-md">
            {actionPoints}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
