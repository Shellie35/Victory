import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  color?: 'gold' | 'olive' | 'navy';
  className?: string;
}

const colorMap = {
  gold:  'bg-church-gold/10 text-church-gold',
  olive: 'bg-church-olive/10 text-church-olive',
  navy:  'bg-church-navy/10 text-church-navy',
};

export default function Tag({ children, color = 'gold', className = '' }: TagProps) {
  return (
    <span className={`inline-block font-sans text-xs uppercase tracking-widest px-3 py-1 rounded-full ${colorMap[color]} ${className}`}>
      {children}
    </span>
  );
}
