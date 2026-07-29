import { ITagGlobalProps } from './types';
import { Pill } from './style';

export function TagGlobal({ variant = 'outline', children }: ITagGlobalProps) {
  return <Pill $variant={variant}>{children}</Pill>;
}
