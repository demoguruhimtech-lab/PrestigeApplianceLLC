import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { business } from '@/data/business';

interface CallButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export function CallButton({
  variant = 'primary',
  size = 'md',
  className = '',
  label,
}: CallButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const variants = {
    primary:
      'bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30',
    secondary: 'bg-navy-900 hover:bg-navy-800 text-white',
    outline:
      'border-2 border-navy-200 hover:border-teal-400 text-navy-900 hover:text-teal-600',
    white:
      'bg-white hover:bg-gray-50 text-navy-900 shadow-lg hover:shadow-xl',
  };

  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      aria-label={label || `Call ${business.name} at ${business.phoneDisplay}`}
    >
      <Phone className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />
      <span>{label || business.phoneDisplay}</span>
    </a>
  );
}
