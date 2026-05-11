export type IconName = 'github' | 'linkedin' | 'email' | 'external';

export interface IIconProps {
  name: IconName;
  size?: number;
  'aria-hidden'?: boolean;
}
