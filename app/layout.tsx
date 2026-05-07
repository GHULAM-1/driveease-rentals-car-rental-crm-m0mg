import './globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: "DriveEase Rentals CRM",
  description: "A modern car rental customer relationship management system for DriveEase Rentals.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 font-inter">
        <Sidebar />
        <main className="pl-240px py-6 px-8">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;