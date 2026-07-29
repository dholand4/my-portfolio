import { IContainerGlobalProps } from './types';
import { Box } from './style';

export function ContainerGlobal({ children, className }: IContainerGlobalProps) {
  return <Box className={className}>{children}</Box>;
}
