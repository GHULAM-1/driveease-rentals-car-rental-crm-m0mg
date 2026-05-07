import { usePathname } from 'next/navigation';
import { Home, Car, Calendar, Users, DollarSign } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Fleet', href: '/fleet', icon: <Car className="w-5 h-5" /> },
    { name: 'Bookings', href: '/bookings', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Customers', href: '/customers', icon: <Users className="w-5 h-5" /> },
    { name: 'Payments', href: '/payments', icon: <DollarSign className="w-5 h-5" /> },
  ];

  return (
    <aside className="fixed h-full w-60 bg-slate-900 border-r border-white/10 px-6 py-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold">DriveEase Rentals</h1>
        <p className="text-slate-400">Car Rental CRM</p>
      </div>
      <nav>
        <ul className="space-y-4">
          {navItems.map(item => (
            <li key={item.name}>
              <a 
                href={item.href}
                className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors hover:bg-slate-700 ${pathname === item.href ? 'bg-slate-700 text-primary' : ''}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;