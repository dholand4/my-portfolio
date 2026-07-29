import { ReactNode } from 'react';

export interface IModalGlobalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** id do elemento que rotula o modal (para aria-labelledby). */
  labelledBy?: string;
}
