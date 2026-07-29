import { ReactNode } from 'react';

export type TagVariant = 'outline' | 'accent';

export interface ITagGlobalProps {
  variant?: TagVariant;
  children: ReactNode;
}
