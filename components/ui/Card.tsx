import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingMap = { sm: 'p-5', md: 'p-6 md:p-8', lg: 'p-8 md:p-10' };

export default function Card({ children, className = '', padding = 'md' }: CardProps) {
  return (
    <div className={`rounded-2xl shadow-sm bg-white ${paddingMap[padding]} ${className}`}>
      {children}
    </div>
  );
}
