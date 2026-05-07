import { FC, ReactNode } from 'react';

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: number;
};

const StatCard: FC<StatCardProps> = ({ icon, label, value, trend }) => {
  return (
    <div className="bg-slate-900 border border-white/10 p-6 rounded-xl flex items-center gap-4">
      <div className="text-primary">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{value}</h3>
        <p className="text-slate-400">{label}</p>
        {trend !== undefined && (
          <p className={`text-sm ${trend >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {trend >= 0 ? '> ' : '< '}{trend}%
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;