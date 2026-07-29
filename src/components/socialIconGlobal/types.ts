import { IconName } from '@/components/iconGlobal/types';

export interface ISocialIconGlobalProps {
  href: string;
  label: string;
  icon: IconName;
  external?: boolean;
}
