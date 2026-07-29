import { ReactNode } from 'react';

export interface IRevealGlobalProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  stretch?: boolean;
}
