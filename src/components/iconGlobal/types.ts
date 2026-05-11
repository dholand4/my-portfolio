export type IconName =
  | 'github'
  | 'linkedin'
  | 'email'
  | 'external'
  | 'menu'
  | 'close';

export interface IIconProps {
  name: IconName;
  size?: number;
  'aria-hidden'?: boolean;
}
