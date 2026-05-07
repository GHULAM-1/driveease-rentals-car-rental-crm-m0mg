import { FC } from 'react';

interface BadgeProps {
  variant: 'success' | 'warning' | 'danger' | 'info' | 'default';
  children: React.ReactNode;
}

const Badge: FC<BadgeProps> = ({ variant, children }) => {
  const variantClasses = {
    success: 'bg-emerald-500 text-white',
    warning: 'bg-yellow-500 text-white',
    danger: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    default: 'bg-slate-500 text-white',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;