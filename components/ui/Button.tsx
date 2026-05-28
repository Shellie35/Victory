'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  as?: 'button';
  href?: never;
}

interface ButtonAsLink extends BaseProps {
  as: 'link';
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-church-navy text-white hover:bg-church-navyLight focus-visible:ring-church-gold',
  secondary: 'border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white',
  outline:   'border-2 border-church-navy text-church-navy hover:bg-church-navy hover:text-white focus-visible:ring-church-gold',
  gold:      'bg-church-gold text-white hover:bg-church-goldLight focus-visible:ring-church-navy',
  ghost:     'text-church-navy hover:text-church-navyLight focus-visible:ring-church-gold',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-4 text-base',
  lg: 'px-10 py-5 text-lg',
};

export default function Button({ variant = 'primary', size = 'md', children, className = '', fullWidth, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 min-h-[48px] cursor-pointer';
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if ('as' in props && props.as === 'link') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _stripped, href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...(linkProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as: _stripped, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
