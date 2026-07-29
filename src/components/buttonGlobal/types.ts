import { AnchorHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'ghost';

export interface IButtonGlobalProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
  children: ReactNode;
}
