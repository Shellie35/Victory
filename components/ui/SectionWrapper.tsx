import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'cream' | 'white' | 'navy';
  as?: 'section' | 'div';
}

const bgMap = {
  cream: 'bg-church-cream',
  white: 'bg-white',
  navy:  'bg-church-navy',
};

export default function SectionWrapper({ children, className = '', id, bg = 'cream', as: Tag = 'section' }: SectionWrapperProps) {
  return (
    <Tag id={id} className={`section-padding ${bgMap[bg]} ${className}`}>
      <div className="container-base">
        {children}
      </div>
    </Tag>
  );
}
