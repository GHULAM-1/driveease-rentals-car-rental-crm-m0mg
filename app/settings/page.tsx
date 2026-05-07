import React from 'react';
import { Sidebar } from '@/components/Sidebar';

const SettingsPage = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-slate-100 text-3xl font-bold mb-6">Settings</h1>

        <section className="mb-8">
          <h2 className="text-slate-100 text-2xl mb-4">Profile</h2>
          <div className="bg-slate-800 p-4 rounded-md">
            <p className="text-slate-300">Profile settings form will go here.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-100 text-2xl mb-4">Branches</h2>
          <div className="bg-slate-800 p-4 rounded-md">
            <p className="text-slate-300">Branches list and management form will go here.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-100 text-2xl mb-4">Notifications</h2>
          <div className="bg-slate-800 p-4 rounded-md">
            <p className="text-slate-300">Notification settings form will go here.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
